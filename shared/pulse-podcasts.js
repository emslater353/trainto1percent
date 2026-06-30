/**
 * Podcast ingest for Pulse — RSS episodes + chapter splits with editorial filters.
 * Keeps structural signals (regulation, platforms, AI policy); drops horse-race politics.
 */

const PODCAST_FEEDS = [
  {
    name: 'All-In Podcast',
    shortName: 'All-In',
    url: 'https://allinchamathjason.libsyn.com/rss',
    topics: ['ai', 'tech', 'finance', 'work'],
    maxAgeDays: 10,
    maxEpisodes: 2,
    splitChapters: true,
  },
  {
    name: 'Dwarkesh Podcast',
    shortName: 'Dwarkesh',
    url: 'https://api.substack.com/feed/podcast/69345.rss',
    topics: ['ai', 'tech'],
    maxAgeDays: 14,
    maxEpisodes: 2,
    alwaysApplicable: true,
  },
  {
    name: "Lenny's Podcast",
    shortName: "Lenny's",
    url: 'https://api.substack.com/feed/podcast/10845.rss',
    topics: ['ai', 'tech', 'work'],
    maxAgeDays: 14,
    maxEpisodes: 2,
    alwaysApplicable: true,
  },
];

const HORSE_RACE_RE = new RegExp(
  [
    'gaining steam',
    'surging in polls',
    'neck and neck',
    'campaign trail',
    'primary race',
    'pulling ahead',
    'fading in polls',
    'might win it all',
    'polls show',
    'trailing in',
    'leading in',
    'fundraising quarter',
    'debate performance',
    'attack ad',
    'momentum in (the|a) race',
    'who will win',
    'election odds',
    'betting odds',
    'take the house',
    'take the senate',
    'midterm predictions',
    'house takeover',
    'senate toss-up',
    'newsom is fading',
    'three-way civil war',
    'winning \\d{4} playbook',
    'resistance lib',
  ].join('|'),
  'i',
);

const APPLICABLE_SIGNAL_RE = new RegExp(
  [
    'regulat',
    'ruling',
    'supreme court',
    'antitrust',
    'legislat',
    'executive order',
    '\\bban\\b',
    'tariff',
    'palantir',
    'defense contract',
    'government contract',
    'ai safety',
    'ai bill',
    'openai',
    'anthropic',
    'nvidia',
    'chip act',
    'data center',
    'inflation',
    '\\bfed\\b',
    'death of',
    'dies at',
    'passed away',
    'obituary',
    'sanctions',
    'geopolit',
    'privacy',
    'surveillance',
    'merger',
    'acquisition',
    'layoff',
    'automation',
    'codex',
    'claude',
    '\\bgpt\\b',
    'algorithmic',
    'filter bubble',
    'platform',
    'startup',
    'agent',
    'model release',
    'product work',
    'software',
    'crypto',
    'bitcoin',
    'healthcare',
    'biotech',
    'war\\b',
    'iran',
    'gas price',
    'interest rate',
    'venture',
    'ipo',
    'launch',
  ].join('|'),
  'i',
);

function decodeEntities(str) {
  return (str || '')
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? decodeEntities(m[1]) : '';
}

function extractAtomLink(block) {
  const alt = block.match(/<link[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i)
    || block.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']alternate["']/i);
  if (alt) return alt[1];
  const any = block.match(/<link[^>]*href=["']([^"']+)["']/i);
  return any ? any[1] : '';
}

function parseFeedBlocks(xml) {
  const rss = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  if (rss.length) return { blocks: rss, kind: 'rss' };
  const atom = xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  return { blocks: atom, kind: 'atom' };
}

const ELECTION_DOMINANT_RE = /house takeover|senate toss|midterm prediction|democrats take|democrat|republican|newsom|aoc\b|primary\b|ballot|campaign|polls?\b|civil war|resistance lib|winning \d{4}|socialists sweep|sweep nyc/i;

function isHorseRacePolitics(text) {
  return HORSE_RACE_RE.test(text || '');
}

function isApplicablePodcastSignal(text, feed = {}) {
  const h = text || '';
  if (ELECTION_DOMINANT_RE.test(h) && isHorseRacePolitics(h)) return false;
  if (feed.alwaysApplicable) {
    return !isHorseRacePolitics(h) || APPLICABLE_SIGNAL_RE.test(h);
  }
  if (isHorseRacePolitics(h) && !APPLICABLE_SIGNAL_RE.test(h)) return false;
  return APPLICABLE_SIGNAL_RE.test(h);
}

function parseChapterSegments(html) {
  const text = decodeEntities(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const chapters = [];
  const re = /\((\d{1,2}:\d{2}(?::\d{2})?)\)\s*([^()]+?)(?=\(\d{1,2}:\d{2}|$)/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    const segment = m[2].trim();
    if (segment.length >= 20) chapters.push({ timestamp: m[1], text: segment });
  }
  return chapters;
}

function episodeAgeDays(pubDate) {
  if (!pubDate) return 999;
  return (Date.now() - new Date(pubDate).getTime()) / 86400000;
}

async function fetchPodcastEpisodes(feed, limit = 4) {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'AIProofClub-Pulse/1.0 (+https://aiproof.club)' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const { blocks, kind } = parseFeedBlocks(xml);
    const episodes = [];

    for (const block of blocks) {
      if (episodes.length >= limit) break;
      const title = extractTag(block, 'title');
      const link = kind === 'atom' ? extractAtomLink(block) : extractTag(block, 'link');
      const pubDateRaw = kind === 'atom'
        ? (extractTag(block, 'published') || extractTag(block, 'updated'))
        : extractTag(block, 'pubDate');
      const description = extractTag(block, 'content:encoded')
        || extractTag(block, 'description')
        || extractTag(block, 'itunes:summary');
      if (!title || title.length < 8) continue;

      const pubDate = pubDateRaw ? new Date(pubDateRaw).toISOString() : new Date().toISOString();
      if (episodeAgeDays(pubDate) > (feed.maxAgeDays || 14)) continue;

      episodes.push({ title, link, pubDate, description, source: feed.name });
    }
    return episodes;
  } catch (e) {
    console.warn(`Podcast feed failed for ${feed.name}:`, e.message);
    return [];
  }
}

function expandEpisodeToSignals(episode, feed) {
  const signals = [];
  const prefix = feed.shortName || feed.name;

  if (feed.splitChapters && episode.description) {
    for (const ch of parseChapterSegments(episode.description)) {
      if (!isApplicablePodcastSignal(ch.text, feed)) continue;
      signals.push({
        title: `${prefix}: ${ch.text}`,
        link: episode.link,
        pubDate: episode.pubDate,
        source: feed.name,
        feedTopics: feed.topics || ['tech', 'ai'],
        _podcast: true,
        _episodeTitle: episode.title,
        _podcastChapter: ch.timestamp,
      });
    }
  }

  const episodeHay = `${episode.title} ${episode.description || ''}`;
  const titleIsHorseRace = isHorseRacePolitics(episode.title);
  const titleApplicable = isApplicablePodcastSignal(episodeHay, feed);

  if (titleApplicable && (!titleIsHorseRace || feed.alwaysApplicable)) {
    const dup = signals.some((s) => s.title.toLowerCase().includes(episode.title.toLowerCase().slice(0, 30)));
    if (!dup) {
      signals.push({
        title: `${prefix}: ${episode.title}`,
        link: episode.link,
        pubDate: episode.pubDate,
        source: feed.name,
        feedTopics: feed.topics || ['tech', 'ai'],
        _podcast: true,
        _episodeTitle: episode.title,
      });
    }
  }

  return signals;
}

async function gatherPodcastArticles(options = {}) {
  const maxSignalsPerFeed = options.maxSignalsPerFeed || 3;
  const seen = new Set();
  const articles = [];

  for (const feed of PODCAST_FEEDS) {
    const episodes = await fetchPodcastEpisodes(feed, feed.maxEpisodes || 2);
    const feedSignals = [];

    for (const episode of episodes) {
      for (const signal of expandEpisodeToSignals(episode, feed)) {
        const key = signal.title.toLowerCase().slice(0, 90);
        if (seen.has(key)) continue;
        seen.add(key);
        feedSignals.push(signal);
      }
    }

    feedSignals.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    articles.push(...feedSignals.slice(0, maxSignalsPerFeed));
  }

  return articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PODCAST_FEEDS,
    gatherPodcastArticles,
    isHorseRacePolitics,
    isApplicablePodcastSignal,
    parseChapterSegments,
  };
}
