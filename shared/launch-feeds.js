/**
 * Launch feeds — Product Hunt (RSS/optional GraphQL) + matching to Pulse stories.
 * RSS works with zero API keys. Optional PRODUCTHUNT_TOKEN for richer GraphQL data.
 */

const LAUNCH_FEEDS = [
  { name: 'Product Hunt', url: 'https://www.producthunt.com/feed', topics: ['tech', 'ai'] },
  { name: 'Product Hunt AI', url: 'https://www.producthunt.com/feed?category=ai', topics: ['ai', 'tech'] },
];

function decodeEntities(str) {
  return (str || '')
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function stripHtml(html) {
  return decodeEntities((html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? decodeEntities(m[1]) : '';
}

function parseFeedEntries(xml, feed, limit = 30) {
  const items = [];
  const isAtom = /<feed[\s>]/i.test(xml);
  const blocks = isAtom
    ? xml.match(/<entry[\s\S]*?<\/entry>/gi) || []
    : xml.match(/<item[\s\S]*?<\/item>/gi) || [];

  for (const block of blocks.slice(0, limit)) {
    const title = extractTag(block, 'title');
    const link =
      extractTag(block, 'link') ||
      (block.match(/<link[^>]+href="([^"]+)"/i) || [])[1] ||
      '';
    const pubDate =
      extractTag(block, 'pubDate') ||
      extractTag(block, 'published') ||
      extractTag(block, 'updated') ||
      new Date().toISOString();
    const content = extractTag(block, 'content') || extractTag(block, 'description');
    const tagline = stripHtml(content).split('Discussion')[0].trim().slice(0, 160);
    if (!title || title.length < 2) continue;

    items.push({
      name: title,
      tagline: tagline || title,
      url: link,
      publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      source: feed.name,
      sourceType: 'product_hunt',
    });
  }
  return items;
}

async function fetchLaunchFeed(feed, limit = 25) {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'AIProofClub-Pulse/1.0 (+https://aiproof.club)' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    return parseFeedEntries(xml, feed, limit);
  } catch (e) {
    console.warn(`Launch feed failed for ${feed.name}:`, e.message);
    return [];
  }
}

async function fetchProductHuntGraphQL(token, daysBack = 3, limit = 40) {
  if (!token) return [];
  const query = `
    query($postedAfter: DateTime!) {
      posts(first: ${Math.min(limit, 50)}, order: VOTES, postedAfter: $postedAfter) {
        edges {
          node {
            name
            tagline
            url
            createdAt
            topics { edges { node { name } } }
          }
        }
      }
    }`;
  const postedAfter = new Date(Date.now() - daysBack * 86400000).toISOString();
  try {
    const res = await fetch('https://api.producthunt.com/v2/api/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { postedAfter } }),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`GraphQL ${res.status}`);
    const data = await res.json();
    const edges = data?.data?.posts?.edges || [];
    return edges.map(({ node }) => ({
      name: node.name,
      tagline: node.tagline || '',
      url: node.url,
      publishedAt: node.createdAt,
      source: 'Product Hunt',
      sourceType: 'product_hunt',
      topics: (node.topics?.edges || []).map((e) => e.node.name.toLowerCase()),
    }));
  } catch (e) {
    console.warn('Product Hunt GraphQL failed:', e.message);
    return [];
  }
}

async function gatherLaunches(options = {}) {
  const { productHuntToken, maxPerFeed = 25, cacheMs = 3600000 } = options;
  if (gatherLaunches._cache && Date.now() - gatherLaunches._cacheAt < cacheMs) {
    return gatherLaunches._cache;
  }

  let launches = [];
  if (productHuntToken) {
    launches = await fetchProductHuntGraphQL(productHuntToken, 5, maxPerFeed);
  }
  if (!launches.length) {
    for (const feed of LAUNCH_FEEDS) {
      launches.push(...(await fetchLaunchFeed(feed, maxPerFeed)));
    }
  }

  const seen = new Set();
  const deduped = [];
  for (const l of launches.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))) {
    const key = l.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(l);
  }

  gatherLaunches._cache = deduped.slice(0, 60);
  gatherLaunches._cacheAt = Date.now();
  return gatherLaunches._cache;
}

function scoreLaunchForStory(launch, headline, archetype) {
  const h = (headline || '').toLowerCase();
  const hay = `${launch.name} ${launch.tagline} ${(launch.topics || []).join(' ')}`.toLowerCase();
  let score = 0;
  const words = h.split(/\W+/).filter((w) => w.length > 4);
  for (const w of words) {
    if (hay.includes(w)) score += 2;
  }
  if (archetype?.toolTags) {
    for (const tag of archetype.toolTags) {
      if (hay.includes(tag)) score += 3;
      if (tag === 'ai' && /ai|gpt|llm|agent|claude|copilot/.test(hay)) score += 2;
    }
  }
  if (/ai|agent|video|design|code|health|fashion|creator/.test(hay)) score += 1;
  const ageDays = (Date.now() - new Date(launch.publishedAt).getTime()) / 86400000;
  if (ageDays <= 3) score += 4;
  else if (ageDays <= 7) score += 2;
  return score;
}

function matchLaunchesToStory(headline, archetype, launches, limit = 2) {
  if (!launches?.length) return [];
  return launches
    .map((l) => ({ l, score: scoreLaunchForStory(l, headline, archetype) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.l.publishedAt) - new Date(a.l.publishedAt))
    .slice(0, limit)
    .map((x) => x.l);
}

function launchToTool(launch, headline) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(launch.publishedAt).getTime()) / 86400000));
  const fresh = days === 0 ? 'launched today' : days === 1 ? 'launched yesterday' : `launched ${days}d ago`;
  return {
    name: launch.name,
    hook: launch.tagline,
    why: `New on ${launch.source} (${fresh}) — relevant to this signal.`,
    url: launch.url,
    badge: launch.source,
    sourceType: launch.sourceType || 'launch',
  };
}

function mergeLaunchesIntoTools(tools, launches, headline, archetype, maxLaunches = 1) {
  const matched = matchLaunchesToStory(headline, archetype, launches, maxLaunches);
  if (!matched.length) return tools || [];
  const launchTools = matched.map((l) => launchToTool(l, headline));
  const names = new Set(launchTools.map((t) => t.name.toLowerCase()));
  const curated = (tools || []).filter((t) => !names.has(t.name.toLowerCase()));
  return [...launchTools, ...curated].slice(0, 3);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LAUNCH_FEEDS,
    gatherLaunches,
    matchLaunchesToStory,
    launchToTool,
    mergeLaunchesIntoTools,
    fetchLaunchFeed,
  };
}
if (typeof window !== 'undefined') {
  window.mergeLaunchesIntoTools = mergeLaunchesIntoTools;
  window.matchLaunchesToStory = matchLaunchesToStory;
  window.launchToTool = launchToTool;
}
