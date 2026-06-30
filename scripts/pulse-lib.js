/**
 * Pulse refresh: aggregate RSS news → match forecasts → AI insight + tools/startups → Supabase
 * Used by scripts/refresh-pulse.js and netlify/functions/refresh-pulse.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const FORECASTS_SOURCE = path.join(ROOT, 'shared/forecasts-data.js');
const {
  pickIndieStartups,
  pickIndieTools,
  formatIndieStartupHint,
  resolvePulseStartupHint,
  resolvePulseToolsBlock,
  buildPulseToolsBlock,
  formatToolsSummary,
  formatIndiePicksForPrompt,
  classifyStoryArchetype,
  isProfileRelevantToArchetype,
} = require('../shared/pulse-indie-picks.js');
const { gatherLaunches } = require('../shared/launch-feeds.js');
const { buildWorryFrame } = require('../shared/pulse-worry-frames.js');
const { isWearablesHeadline, isLowQualityHeadline, classifyPulseWave } = require('../shared/pulse-waves.js');
const { expandForecastImpactRipples, expandHeadlineRipples, deriveStoryRipples } = require('../shared/forecast-impact-ripples.js');

const RSS_FEEDS = [
  { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', topics: ['ai', 'tech'] },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', topics: ['tech', 'ai'] },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', topics: ['tech', 'ai'] },
  { name: 'The Verge AI', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', topics: ['ai', 'tech'] },
];

const TOPIC_KEYWORDS = {
  ai: ['ai', 'artificial intelligence', 'openai', 'anthropic', 'llm', 'gpt', 'claude', 'gemini', 'agent', 'copilot'],
  tech: ['startup', 'software', 'platform', 'saas', 'api', 'chip', 'nvidia'],
  fashion: ['fashion', 'retail', 'apparel', 'luxury', 'beauty', 'lookbook', 'zara', 'shein', 'lvmh'],
  movies: ['film', 'movie', 'hollywood', 'streaming', 'netflix', 'cinema', 'runway', 'video'],
  media: ['creator', 'youtube', 'tiktok', 'podcast', 'newsletter', 'content'],
  finance: ['market', 'invest', 'fed', 'stock', 'ipo', 'venture'],
  crypto: ['bitcoin', 'crypto', 'ethereum', 'blockchain', 'defi'],
  work: ['job', 'hiring', 'remote', 'workforce', 'layoff', 'career'],
  health: ['cancer', 'oncology', 'patient', 'medical', 'healthcare', 'hospital', 'clinical', 'diagnosis', 'disease', 'therapy', 'doctor', 'physician', 'biotech'],
};

function defaultPrep(topics, headline, secondOrder) {
  return buildPulseToolsBlock(topics, headline, headline || 'pulse', { secondOrder });
}

/** High-signal stories to merge into daily refresh when RSS misses them (maxAgeDays = freshness window). */
const CURATED_STORIES = [
  {
    headline: 'Cursor now has a mobile app for guiding your coding agent on the go',
    source: 'TechCrunch',
    url: 'https://techcrunch.com/category/artificial-intelligence/',
    pubDate: '2026-06-29T14:00:00Z',
    topics: ['ai', 'tech'],
    maxAgeDays: 3,
  },
];

const STATIC_SEED = [
  {
    id: 'pulse-ai-video-seed',
    headline: 'AI video tools (Runway, Pika, Veo) hit near-production quality for short clips',
    source: 'Platform shift',
    url: '',
    topics: ['movies', 'media', 'film', 'ai'],
    forecast_id: 'youtube-shorts-dominance',
    meaning: 'Short-form already owns attention. AI video means you can storyboard, test, and publish visual ideas at the speed of a tweet — without a crew or budget.',
    meaning_personal: 'For someone in {role} tracking {topics}, this compresses the gap between "idea" and "published."',
    startup_hint: 'Watch Haiper or Higgsfield — fast AI video for short clips. Try: generate a 4-sec storyboard frame from this trend.',
  },
  {
    id: 'pulse-ai-agents-seed',
    headline: 'AI agents chain research, email, and code in multi-step workflows',
    source: 'Product launches',
    url: '',
    topics: ['ai', 'tech'],
    forecast_id: 'ai-agents-autonomous',
    meaning: 'Busywork is getting automated end-to-end. Value shifts to directing agents and reviewing output.',
    meaning_personal: 'In {role}, list tasks that are "brief → wait → review" — those are agent-shaped.',
    startup_hint: 'Watch Howie AI or Bardeen — text an errand or automate one brief → review loop from your week.',
  },
  {
    id: 'pulse-fashion-ai-seed',
    headline: 'Major brands ship AI lookbooks and virtual try-on ahead of fall seasons',
    source: 'Retail / fashion',
    url: '',
    topics: ['fashion', 'retail', 'beauty'],
    forecast_id: null,
    meaning: 'Fashion cycles are speeding up. AI visuals let teams test drops before samples exist — curation beats production access.',
    meaning_personal: 'If you track {topics}, one strong mood board beats ten generic AI fills.',
    startup_hint: 'Watch Fashn.ai or Botika — virtual try-on for indie brands. Try: mock a 4-look drop and note what still needs human curation.',
  },
];

function loadForecasts() {
  const code = fs.readFileSync(FORECASTS_SOURCE, 'utf8');
  const sandbox = {};
  vm.runInNewContext(code + '\nthis.FORECAST_DATABASE = FORECAST_DATABASE;', sandbox);
  return sandbox.FORECAST_DATABASE || [];
}

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
    .replace(/<[^>]+>/g, '')
    .trim();
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? decodeEntities(m[1]) : '';
}

async function fetchRssItems(feed, limit = 12) {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'AIProofClub-Pulse/1.0 (+https://aiproof.club)' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const items = [];
    const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
    for (const block of blocks.slice(0, limit)) {
      const title = extractTag(block, 'title');
      const link = extractTag(block, 'link');
      const pubDate = extractTag(block, 'pubDate');
      if (!title || title.length < 12) continue;
      items.push({
        title,
        link,
        pubDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        source: feed.name,
        feedTopics: feed.topics || [],
      });
    }
    return items;
  } catch (e) {
    console.warn(`RSS failed for ${feed.name}:`, e.message);
    return [];
  }
}

function detectTopics(text) {
  const t = (text || '').toLowerCase();
  const topics = new Set();
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    if (keywords.some((k) => t.includes(k))) topics.add(topic);
  }
  return topics.size ? [...topics] : ['tech'];
}

const FORECAST_BLOCKLIST = {
  'google-ai-dominance': ['google', 'gemini', 'alphabet', 'bard', 'vertex'],
  'brain-ai-merger': ['brain interface', 'neural interface', 'brain-computer', 'bci', 'neuralink', 'brain implant', 'merging with ai', 'cognitive augment'],
};

/** Story-type rules beat fuzzy word overlap (avoids OpenAI hire → Google 8% forecast). */
const STORY_FORECAST_RULES = [
  {
    test: (h) => /cancer|oncolog|diagnos|patient|medical|healthcare|hospital|clinical|treatment|disease|therapy|physician|doctor|biotech|pharma|fight back/.test(h),
    primaryId: 'ai-medical-diagnosis',
    secondaryId: null,
    extraTopics: ['health', 'ai'],
    storyArchetype: 'health',
    defaultSecondOrder:
      'Personal health crises are becoming R&D labs — founders and patients use AI to navigate care, research, and treatment options faster than the system moves.',
    defaultStartupImpact:
      'Health navigation, second-opinion AI, and patient-advocate tooling are founder wedges — empathy and trust beat raw model scores.',
    defaultOperatorImpact:
      'Teams will field more AI-assisted health decisions — support and privacy policies need to catch up.',
    defaultPredictionTake:
      'Feeds our forecast that AI diagnosis outperforms average doctors — the wedge is navigation and advocacy, not replacing specialists overnight.',
  },
  {
    test: (h) =>
      /smart glasses|ai glasses|ar glasses|mixed reality|spatial computing|vision pro/.test(h) &&
      !/agent|llm|model release|chatgpt/.test(h),
    primaryId: 'meta-metaverse-pivot',
    secondaryId: null,
    extraTopics: ['ai', 'tech'],
    defaultSecondOrder:
      'Hardware is a distribution bet — the second-order play is who builds the apps and workflows on the new surface, not who wins the gadget headline.',
    defaultPredictionTake:
      'Feeds our forecast on Meta pivoting from metaverse hype to AI + long-game spatial — watch for platform SDKs, not launch-day specs.',
  },
  {
    test: (h) => /\bcursor\b/.test(h) && /mobile|app|phone|ios|android|on the go/.test(h),
    primaryId: 'ai-agents-autonomous',
    secondaryId: 'ai-writes-code',
    extraTopics: ['ai', 'tech'],
    storyArchetype: 'agents',
    defaultSecondOrder:
      'Coding agents are leaving the desk — mobile control means async dev workflows become normal, not edge cases.',
    defaultPredictionTake:
      'Feeds our forecast on autonomous AI agents taking over multi-step workflows — dev is an early adopter lane.',
  },
  {
    test: (h) => /agent|workflow|operator|autonomous/.test(h) && !/vision|wearable|spatial/.test(h),
    primaryId: 'ai-agents-autonomous',
    secondaryId: null,
    extraTopics: ['ai', 'tech'],
  },
  {
    test: (h) => /reels|tiktok|short-form|capcut|runway gen|ai video/.test(h),
    primaryId: 'youtube-shorts-dominance',
    secondaryId: null,
    extraTopics: ['media', 'movies'],
  },
  {
    test: (h) => /lookbook|apparel|luxury|zara|lvmh|runway week|virtual try/.test(h),
    primaryId: 'personalized-content-all',
    secondaryId: null,
    extraTopics: ['fashion', 'retail'],
    defaultFashionImpact:
      'Personalized, spatial, and AI-generated visuals keep compressing fashion cycles — brands that test drops digitally before samples win.',
  },
];

function isForecastAllowedForHeadline(forecastId, hay) {
  const required = FORECAST_BLOCKLIST[forecastId];
  if (!required) return true;
  return required.some((term) => hay.includes(term));
}

function getForecastCandidates(headline, forecasts, limit = 15) {
  const hay = headline.toLowerCase();
  const words = hay.split(/\W+/).filter((w) => w.length > 4);
  const scored = [];

  for (const f of forecasts) {
    if (!isForecastAllowedForHeadline(f.id, hay)) continue;
    const fHay = [f.title, f.threatReason, f.category, f.atRisk].join(' ').toLowerCase();
    let score = 0;
    for (const w of words) {
      if (fHay.includes(w)) score += 1;
    }
    if (f.category && hay.includes(f.category)) score += 2;
    if (f.probability >= 50) score += 1;
    if (f.probability < 20) score -= 3;
    if (score > 0) scored.push({ f, score });
  }

  scored.sort((a, b) => b.score - a.score || b.f.probability - a.f.probability);
  const top = scored.slice(0, limit).map((x) => x.f);
  if (top.length) return top;
  return forecasts.filter((f) => f.probability >= 55).slice(0, limit);
}

async function rankForecastsWithAI(article, candidates, openaiKey) {
  if (!openaiKey || !candidates.length) return null;

  const hay = article.title.toLowerCase();
  const list = candidates
    .filter((f) => isForecastAllowedForHeadline(f.id, hay))
    .slice(0, 12)
    .map((f) => `id="${f.id}" | ${f.probability}% | ${f.timeframe} | ${f.title}`)
    .join('\n');

  const prompt = `Pick the best forecast match(es) for this news headline.

Headline: ${article.title}

ALLOWED FORECASTS (pick primary_id ONLY from this list):
${list}

RULES:
- primary_id MUST be from the list above.
- NEVER pick google-ai-dominance unless the headline is specifically about Google or Gemini.
- NEVER pick brain-ai-merger unless the headline is about brain interfaces, neural implants, or BCI — NOT general AI-in-healthcare stories.
- Cancer, diagnosis, patient, or treatment stories → ai-medical-diagnosis, NOT brain-ai-merger.
- Prefer forecasts whose TITLE matches the story's second-order effect (agents → autonomous agents, chips → compute, regulation → policy forecasts, etc.)
- Do NOT default to metaverse/wearables forecasts unless the headline is specifically about AR glasses or spatial hardware.
- secondary_id is optional (second best match), or null.

Return ONLY JSON:
{"primary_id":"...","secondary_id":null,"reason":"one sentence why this forecast fits"}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${openaiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You match news to prediction market forecasts. Never force unrelated low-probability forecasts.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 200,
      temperature: 0.2,
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[0]);
    const allowed = new Set(candidates.map((f) => f.id));
    if (!allowed.has(parsed.primary_id)) return null;
    if (parsed.primary_id === 'google-ai-dominance' && !hay.includes('google') && !hay.includes('gemini')) return null;
    if (parsed.primary_id === 'brain-ai-merger' && !/brain|neural|bci|implant|neuralink/.test(hay)) return null;
    if (parsed.secondary_id && !allowed.has(parsed.secondary_id)) parsed.secondary_id = null;
    return parsed;
  } catch (e) {
    return null;
  }
}

function matchForecastByRules(headline, forecasts) {
  const hay = headline.toLowerCase();
  for (const rule of STORY_FORECAST_RULES) {
    if (!rule.test(hay)) continue;
    const primary = forecasts.find((f) => f.id === rule.primaryId);
    const secondary = rule.secondaryId ? forecasts.find((f) => f.id === rule.secondaryId) : null;
    if (primary) return { primary, secondary, rule, method: 'rule' };
  }
  return null;
}

function matchForecastKeyword(headline, forecasts) {
  const hay = headline.toLowerCase();
  const words = hay.split(/\W+/).filter((w) => w.length > 4);
  let best = null;
  let bestScore = 0;

  for (const f of forecasts) {
    if (!isForecastAllowedForHeadline(f.id, hay)) continue;
    const fHay = [f.title, f.threatReason, f.category, f.atRisk].join(' ').toLowerCase();
    let score = 0;
    for (const w of words) {
      if (fHay.includes(w)) score += 1;
    }
    if (f.category && hay.includes(f.category)) score += 2;
    if (f.probability < 25) score -= 3;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }

  return bestScore >= 3
    ? { primary: best, secondary: null, rule: null, method: 'keyword' }
    : { primary: null, secondary: null, rule: null, method: 'none' };
}

async function resolveForecastMatch(article, forecasts, openaiKey, skipAi) {
  const ruleMatch = matchForecastByRules(article.title, forecasts);
  if (ruleMatch) return ruleMatch;

  const candidates = getForecastCandidates(article.title, forecasts, 15);
  if (!skipAi && openaiKey) {
    const ranked = await rankForecastsWithAI(article, candidates, openaiKey);
    if (ranked?.primary_id) {
      const primary = forecasts.find((f) => f.id === ranked.primary_id);
      const secondary = ranked.secondary_id ? forecasts.find((f) => f.id === ranked.secondary_id) : null;
      if (primary) return { primary, secondary, rule: null, method: 'ai', rankReason: ranked.reason };
    }
  }

  return matchForecastKeyword(article.title, forecasts);
}

/** @deprecated use resolveForecastMatch */
function matchForecast(headline, forecasts) {
  return matchForecastByRules(headline, forecasts) || matchForecastKeyword(headline, forecasts);
}

function sanitizeEnriched(enriched, article, matchResult) {
  if (!enriched) return enriched;
  const hay = (article.title || '').toLowerCase();
  const pt = (enriched.prediction_take || '').toLowerCase();
  if ((pt.includes('google') || pt.includes('gemini')) && !hay.includes('google') && !hay.includes('gemini')) {
    enriched.prediction_take =
      matchResult.rule?.defaultPredictionTake ||
      (matchResult.primary
        ? `Relates to our ${matchResult.primary.probability}% forecast "${matchResult.primary.title}" — ${matchResult.primary.threatReason}`
        : enriched.prediction_take);
  }
  return enriched;
}

function makePulseId(headline) {
  const slug = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  const hash = crypto.createHash('md5').update(headline).digest('hex').slice(0, 8);
  return `pulse-${slug}-${hash}`;
}

const HYPE_ENTITIES = [
  'openai', 'anthropic', 'google', 'gemini', 'meta', 'apple', 'nvidia', 'microsoft',
  'amazon', 'claude', 'gpt', 'cursor', 'agent', 'launch', 'billion', 'raise', 'ipo', 'chip',
];

const FUNDING_HEADLINE = /raises \$|series [a-d]\b|funding round|venture capital|takes ceo|palihapitiya|\$[\d.]+m for|\$[\d.]+b for/i;
const PRODUCT_HEADLINE = /launch|announc|unveil|release|ship|mobile app|now has|available now|rolls out/i;

const HYPE_STOPWORDS = new Set([
  'about', 'after', 'their', 'there', 'would', 'could', 'should', 'which', 'while',
  'where', 'being', 'first', 'still', 'says', 'said', 'into', 'over', 'under',
]);

function normalizeHeadlineKey(title) {
  const words = (title || '').toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 4 && !HYPE_STOPWORDS.has(w));
  return words.slice(0, 5).sort().join(' ');
}

function buildSourceOverlap(articles) {
  const keyToSources = {};
  for (const article of articles) {
    const key = normalizeHeadlineKey(article.title);
    if (!key) continue;
    if (!keyToSources[key]) keyToSources[key] = new Set();
    keyToSources[key].add(article.source || 'RSS');
  }
  const overlap = {};
  for (const [key, sources] of Object.entries(keyToSources)) {
    overlap[key] = sources.size;
  }
  return overlap;
}

function scoreArticleHype(article, ctx = {}) {
  const { sourceOverlap = 1, matchStrength = 'none', hasLaunch = false } = ctx;
  let score = 0;
  const h = (article.title || '').toLowerCase();
  const pub = article.pubDate ? new Date(article.pubDate) : new Date();
  const ageHours = Math.max(0, (Date.now() - pub.getTime()) / 3600000);

  score += Math.max(0, 55 - ageHours * 1.4);
  score += Math.max(0, sourceOverlap - 1) * 22;
  for (const entity of HYPE_ENTITIES) {
    if (h.includes(entity)) score += 7;
  }
  if (/launch|announc|unveil|release|ship|break|record|surge|boom/.test(h)) score += 8;
  if (matchStrength === 'strong') score += 18;
  else if (matchStrength === 'medium') score += 10;
  else if (matchStrength === 'weak') score += 4;
  if (hasLaunch) score += 12;
  if (isWearablesHeadline(article.title)) score -= 14;
  return Math.round(Math.min(score, 100));
}

function inferStoryType(title, storyType = '') {
  const h = (title || '').toLowerCase();
  if (FUNDING_HEADLINE.test(h)) return 'funding';
  if (/exec is|leaving for|joins openai|reportedly leaving|hires away|takes ceo/.test(h)) return 'personality';
  if (PRODUCT_HEADLINE.test(h)) return 'product_launch';
  return storyType || 'general';
}

function heuristicImportance(article, ctx = {}) {
  const {
    sourceOverlap = 1,
    matchStrength = 'none',
    hasLaunch = false,
    storyType = '',
    archetypeId = 'general',
  } = ctx;
  const h = (article.title || '').toLowerCase();
  const resolvedType = inferStoryType(article.title, storyType);
  let score = 48;

  if (PRODUCT_HEADLINE.test(h)) score += 20;
  if (/\bcursor\b|copilot|claude code|vibe cod|coding agent/.test(h) && !FUNDING_HEADLINE.test(h)) score += 14;
  if (archetypeId === 'agents') score += 12;
  if (archetypeId === 'health' || archetypeId === 'policy') score += 8;

  if (FUNDING_HEADLINE.test(h)) score -= 22;
  if (/exec is|leaving for|joins openai|reportedly leaving|hires away/.test(h)) score -= 10;
  if (/palihapitiya|chamath/.test(h) && FUNDING_HEADLINE.test(h)) score -= 8;

  if (matchStrength === 'strong') score += 14;
  else if (matchStrength === 'medium') score += 8;
  else if (matchStrength === 'weak') score += 3;
  if (hasLaunch) score += 10;
  score += Math.min(12, Math.max(0, sourceOverlap - 1) * 6);

  if (resolvedType === 'product_launch' || resolvedType === 'platform_shift') score += 12;
  else if (resolvedType === 'policy' || resolvedType === 'research') score += 6;
  else if (resolvedType === 'funding') score -= 18;
  else if (resolvedType === 'personality') score -= 14;

  return Math.round(Math.min(100, Math.max(0, score)));
}

function scoreArticleImportance(article, ctx = {}) {
  const {
    sourceOverlap = 1,
    matchStrength = 'none',
    hasLaunch = false,
    storyType = '',
    archetypeId = 'general',
    enrichedScore = null,
  } = ctx;
  const heuristic = heuristicImportance(article, {
    sourceOverlap,
    matchStrength,
    hasLaunch,
    storyType,
    archetypeId,
  });
  const h = (article.title || '').toLowerCase();

  if (typeof enrichedScore !== 'number' || enrichedScore < 0) {
    return heuristic;
  }

  // Headline beats AI when it mislabels funding rounds as product news.
  if (FUNDING_HEADLINE.test(h)) {
    return Math.min(heuristic, enrichedScore, 52);
  }

  let aiScore = enrichedScore;
  const resolvedType = inferStoryType(article.title, storyType);
  if (storyType === 'product_launch' && resolvedType === 'funding') aiScore -= 28;
  if (storyType === 'product_launch' && resolvedType === 'personality') aiScore -= 20;

  return Math.round(Math.min(100, Math.max(0, Math.max(heuristic, aiScore * 0.35 + heuristic * 0.65))));
}

function estimatePreImportance(article) {
  const title = article.title || '';
  const topics = article.feedTopics || detectTopics(title);
  let archetypeId = classifyStoryArchetype(title, topics).id;
  if (FUNDING_HEADLINE.test(title)) archetypeId = 'finance';

  const score = heuristicImportance(article, {
    archetypeId,
    storyType: inferStoryType(title),
    matchStrength: 'none',
    sourceOverlap: 1,
    hasLaunch: PRODUCT_HEADLINE.test(title.toLowerCase()),
  });
  return score + (article._mustInclude ? 100 : 0);
}

async function enrichWithOpenAI(article, matchResult, openaiKey) {
  if (!openaiKey) return null;

  const forecast = matchResult?.primary;
  const secondary = matchResult?.secondary;
  const rule = matchResult?.rule;
  const topicsPreview = [...new Set([...detectTopics(article.title), ...(rule?.extraTopics || [])])];
  const indieBlock = formatIndiePicksForPrompt(topicsPreview, article.title, 12);

  let forecastBlock = 'No strong forecast match — explain second-order impact without forcing a weak link.';
  if (forecast) {
    forecastBlock = `Primary forecast to reference:
Title: "${forecast.title}"
Probability: ${forecast.probability}% likely
Timeframe: ${forecast.timeframe}
Why we track it: ${forecast.threatReason}`;
    if (secondary) {
      forecastBlock += `

Secondary forecast (fashion/creator/retail angle):
Title: "${secondary.title}"
Probability: ${secondary.probability}% likely
Why: ${secondary.threatReason}`;
    }
    if (rule?.defaultFashionImpact) {
      forecastBlock += `

Fashion/retail lens:
${rule.defaultFashionImpact}`;
    }
  }

  const prompt = `You write short Pulse cards for AI Proof Club — a high-level tech snapshot for busy founders.

Headline: ${article.title}
Source: ${article.source}

${forecastBlock}

VOICE: Broad tech lens. Not gadget blogs. One screen, three beats: what happened → second-order effect → linked prediction → tools to try.

RULES:
1. "what_happened" = plain fact (max 1 short sentence).
2. "second_order" = primary non-obvious implication (1-2 sentences).
3. "second_order_impacts" = array of 6-8 DISTINCT ripples. Cover: workflow change, who wins/loses, cost/margin, distribution, timing, new intermediaries, sector spillover. Each one sentence. NOT the same text repeated. If a forecast is linked, include ripples that follow from that forecast's threat and opportunities.
4. "prediction_take" = tie to PRIMARY forecast titled "${forecast?.title || 'above'}" ONLY. Max 2 sentences. NEVER cite Google unless headline mentions Google.
5. "profile_lenses" = object with keys startup, fashion, creator, operator — each 1 sentence ONLY if directly relevant, else "".
6. "fashion_impact" = same as profile_lenses.fashion (legacy field).
7. "why_you" = {role} + {topics} with explicit chain (1 sentence).
8. "topics" = 2-4 tags from: ai, tech, media, fashion, finance, work, health, crypto.
9. "tools_to_try" = array of 2 indie tools from INDIE PICKS — each { "name", "hook", "why" }. "why" = one sentence on staying ahead in this lane.
10. "condensed" = one scannable sentence: second-order → tool(s) to try → what to ignore.
11. Do NOT output generic ChatGPT/Figma exercises. No "prep" field.
12. "importance_score" = 0-100 for founders/operators at AI Proof Club. HIGH: product ships, platform shifts, tools people can use today, model/API releases, policy. LOW: VC rounds, CEO moves, personality drama, hiring gossip, "raises $X" headlines.
13. "story_type" = exactly one of: product_launch, platform_shift, policy, research, funding, personality, general

INDIE PICKS (prefer these):
${indieBlock}

Return ONLY valid JSON:
{
  "what_happened": "...",
  "second_order": "...",
  "second_order_impacts": ["...", "...", "..."],
  "prediction_take": "...",
  "fashion_impact": "...",
  "profile_lenses": { "startup": "...", "fashion": "...", "creator": "...", "operator": "..." },
  "why_you": "...",
  "topics": ["ai","tech"],
  "tools_to_try": [{ "name": "Reelful", "hook": "...", "why": "..." }],
  "condensed": "...",
  "importance_score": 75,
  "story_type": "product_launch"
}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Pulse is a condensed tech briefing for founders. Write tight, high-level copy — news snapshot, second-order impact, prediction link, indie tools. Never default to wearables/glasses unless the headline is about them.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1200,
      temperature: 0.5,
    }),
  });

  if (!res.ok) {
    console.warn('OpenAI error:', await res.text());
    return null;
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch (e) {
    console.warn('OpenAI JSON parse failed');
    return null;
  }
}

function buildProfileLenses(enriched, rule) {
  const lenses = enriched?.profile_lenses || {};
  return {
    startup: lenses.startup || rule?.defaultStartupImpact || enriched?.startup_impact || '',
    fashion: lenses.fashion || enriched?.fashion_impact || rule?.defaultFashionImpact || '',
    creator: lenses.creator || rule?.defaultCreatorImpact || '',
    operator: lenses.operator || rule?.defaultOperatorImpact || '',
  };
}

function getMatchStrength(matchResult) {
  if (!matchResult?.primary) return 'none';
  if (matchResult.rule) return 'strong';
  if (matchResult.method === 'ai') return 'strong';
  if (matchResult.method === 'keyword' && matchResult.primary) return 'medium';
  return 'weak';
}

function mergeRippleTexts(existing, more) {
  const out = [...existing];
  const seen = new Set(existing.map((t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').slice(0, 72)));
  for (const text of more) {
    const t = (text || '').replace(/\s+/g, ' ').trim();
    if (t.length < 12) continue;
    const key = t.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').slice(0, 72);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
  }
  return out.slice(0, 8);
}

function buildSecondOrderImpacts(enriched, forecast, secondOrderText, headline) {
  let impacts = Array.isArray(enriched?.second_order_impacts)
    ? enriched.second_order_impacts.filter(Boolean)
    : [];
  if (impacts.length < 5) {
    impacts = mergeRippleTexts(
      impacts,
      deriveStoryRipples(headline, secondOrderText, forecast).map((r) => r.text),
    );
  }
  if (forecast && impacts.length < 6) {
    impacts = mergeRippleTexts(
      impacts,
      expandForecastImpactRipples(forecast, 10).map((r) => r.text),
    );
  }
  return impacts.slice(0, 8);
}

function buildPulseRow(article, matchResult, enriched, extraTopics = [], hypeScore = 0, scoreCtx = {}) {
  const forecast = matchResult?.primary;
  const secondary = matchResult?.secondary;
  const rule = matchResult?.rule;
  enriched = sanitizeEnriched(enriched, article, matchResult);
  const topics = [...new Set([...(enriched?.topics || []), ...detectTopics(article.title), ...(rule?.extraTopics || []), ...extraTopics])];
  const seed = article.title || 'pulse';
  const archetype = classifyStoryArchetype(article.title, topics);
  if (rule?.storyArchetype) archetype.id = rule.storyArchetype;
  const matchStrength = getMatchStrength(matchResult);
  const wave = classifyPulseWave(article.title);
  const secondOrder = enriched?.second_order || rule?.defaultSecondOrder || '';
  let toolsBlock = resolvePulseToolsBlock(
    enriched?.tools_to_try
      ? { version: 2, tools: enriched.tools_to_try, condensed: enriched.condensed }
      : enriched?.prep,
    topics,
    article.title,
    seed,
    { secondOrder, archetype, launches: article._launches || [] },
  );
  if (!toolsBlock?.tools?.length) {
    toolsBlock = buildPulseToolsBlock(topics, article.title, seed, {
      secondOrder,
      archetype,
      launches: article._launches || [],
    });
  }
  const startup_hint = formatToolsSummary(toolsBlock.tools) || resolvePulseStartupHint(
    enriched?.startup_hint,
    topics,
    article.title,
    seed,
  );
  const profile_lenses = buildProfileLenses(enriched, rule);
  const secondOrderText = enriched?.second_order || rule?.defaultSecondOrder || (forecast
    ? `Signal for "${forecast.title}" — ask what product this enables next.`
    : 'Ask what capability this news enables — not just who changed jobs.');
  const secondOrderImpacts = buildSecondOrderImpacts(
    enriched,
    forecast,
    secondOrderText,
    article.title,
  );
  const importanceScore = scoreArticleImportance(article, {
    ...scoreCtx,
    matchStrength,
    storyType: enriched?.story_type || '',
    archetypeId: archetype.id,
    enrichedScore: enriched?.importance_score,
  });
  const insight = {
    what_happened: enriched?.what_happened || article.title,
    second_order: secondOrderText,
    second_order_impacts: secondOrderImpacts,
    prediction_take: enriched?.prediction_take || rule?.defaultPredictionTake || (forecast
      ? `Relates to our ${forecast.probability}% forecast "${forecast.title}" (${forecast.timeframe}). ${forecast.threatReason}`
      : 'Emerging signal — watch for product launches, not just hiring news.'),
    fashion_impact: profile_lenses.fashion,
    profile_lenses,
    forecast_match_method: matchResult?.method || 'unknown',
    match_strength: matchStrength,
    story_archetype: archetype.id,
    story_label: archetype.label,
    story_type: inferStoryType(article.title, enriched?.story_type),
    hype_score: hypeScore,
    importance_score: importanceScore,
    cluster_id: wave?.id || null,
    cluster_label: wave?.label || null,
    secondary_forecast_id: secondary?.id || null,
    why_you: enriched?.why_you || 'If you work in {role} and track {topics}: follow the second-order effect above.',
    condensed: toolsBlock.condensed,
    worry_frames: enriched?.worry_frames || {
      startup: buildWorryFrame('startup', { headline: article.title, secondOrder: secondOrderText, linked: forecast, tools: toolsBlock.tools, archetypeLabel: archetype.label }),
      career: buildWorryFrame('career', { headline: article.title, secondOrder: secondOrderText, linked: forecast, tools: toolsBlock.tools, archetypeLabel: archetype.label }),
      overload: buildWorryFrame('overload', { headline: article.title, secondOrder: secondOrderText, linked: forecast, tools: toolsBlock.tools, archetypeLabel: archetype.label }),
    },
  };

  return {
    id: makePulseId(article.title),
    published_at: article.pubDate || new Date().toISOString(),
    headline: article.title,
    source: article.source,
    url: article.link || null,
    topics,
    forecast_id: forecast?.id || null,
    meaning: insight.second_order,
    meaning_personal: insight.why_you,
    startup_hint: startup_hint || formatToolsSummary(pickIndieTools(topics, article.title, seed, 2)),
    insight,
    prep: toolsBlock,
    active: true,
  };
}

async function supabaseRequest(url, key, method, path, body, prefer) {
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  };
  if (prefer) headers.Prefer = prefer;

  const res = await fetch(`${url}/rest/v1/${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  if (!res.ok) throw new Error(`Supabase ${method} ${path}: ${res.status} ${text}`);
  return text ? JSON.parse(text) : true;
}

async function upsertPulseItems(url, key, rows) {
  if (!rows.length) return 0;
  await supabaseRequest(url, key, 'POST', 'pulse_items?on_conflict=id', rows, 'resolution=merge-duplicates');
  return rows.length;
}

async function deactivateStalePulse(url, key, keepDays = 14) {
  const cutoff = new Date(Date.now() - keepDays * 86400000).toISOString();
  await supabaseRequest(
    url,
    key,
    'PATCH',
    `pulse_items?published_at=lt.${encodeURIComponent(cutoff)}&active=eq.true`,
    { active: false },
  );
}

async function gatherArticles(maxPerFeed = 12) {
  const seen = new Set();
  const articles = [];

  for (const feed of RSS_FEEDS) {
    const items = await fetchRssItems(feed, maxPerFeed);
    for (const item of items) {
      const key = item.title.toLowerCase().slice(0, 80);
      if (seen.has(key)) continue;
      if (isLowQualityHeadline(item.title)) continue;
      seen.add(key);
      articles.push(item);
    }
  }

  return articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

function injectCuratedStories(articles) {
  const now = Date.now();
  const out = [...articles];

  for (const curated of CURATED_STORIES) {
    const ageDays = (now - new Date(curated.pubDate).getTime()) / 86400000;
    if (ageDays > (curated.maxAgeDays || 2)) continue;

    const hay = curated.headline.toLowerCase();
    const dup = articles.some((a) => {
      const t = (a.title || '').toLowerCase();
      if (t === hay) return true;
      if (hay.includes('cursor') && t.includes('cursor') && /mobile|app/.test(t)) return true;
      return normalizeHeadlineKey(a.title) === normalizeHeadlineKey(curated.headline);
    });
    if (dup) continue;

    out.unshift({
      title: curated.headline,
      link: curated.url || '',
      pubDate: curated.pubDate,
      source: curated.source,
      feedTopics: curated.topics || ['ai', 'tech'],
      _curated: true,
      _mustInclude: true,
    });
  }

  return out.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}


const WEARABLES_CAP = 1;
const TOP_ENTITIES = ['openai', 'anthropic', 'google', 'nvidia', 'microsoft', 'amazon', 'apple', 'meta', 'startup', 'agent', 'chip'];

function entityBucket(title) {
  const h = (title || '').toLowerCase();
  for (const e of TOP_ENTITIES) {
    if (h.includes(e)) return e;
  }
  return 'other';
}

/** Diverse tech snapshot — importance-first, with pinned curated stories. */
function selectDiverseCandidates(articles, maxItems = 6) {
  const pool = articles.filter((a) => !isLowQualityHeadline(a.title));
  const picked = [];
  let wearablesCount = 0;
  const usedArchetypes = new Set();
  const usedEntities = new Set();

  const mustInclude = [];
  const mustKeys = new Set();
  for (const article of pool) {
    if (!article._mustInclude) continue;
    const key = (article.title || '').toLowerCase().slice(0, 80);
    if (mustKeys.has(key)) continue;
    mustKeys.add(key);
    mustInclude.push(article);
  }

  const rest = pool
    .filter((a) => !mustKeys.has((a.title || '').toLowerCase().slice(0, 80)))
    .sort((a, b) => estimatePreImportance(b) - estimatePreImportance(a) || new Date(b.pubDate) - new Date(a.pubDate));

  const ordered = [...mustInclude, ...rest];

  const tryPick = (article, force = false) => {
    if (picked.includes(article)) return false;
    const wear = isWearablesHeadline(article.title);
    if (!force && wear && wearablesCount >= WEARABLES_CAP) return false;

    const title = article.title || '';
    let arch = classifyStoryArchetype(title, article.feedTopics || []).id;
    if (FUNDING_HEADLINE.test(title)) arch = 'finance';
    const entity = entityBucket(title);

    if (!force && arch !== 'general' && usedArchetypes.has(arch)) return false;
    if (!force && entity !== 'other' && usedEntities.has(entity) && arch === 'general') return false;

    picked.push(article);
    if (wear) wearablesCount += 1;
    if (arch !== 'general') usedArchetypes.add(arch);
    if (entity !== 'other') usedEntities.add(entity);
    return true;
  };

  for (const article of ordered) {
    if (picked.length >= maxItems) break;
    if (article._mustInclude) tryPick(article, true);
    else tryPick(article, false);
  }

  if (picked.length < maxItems) {
    for (const article of ordered) {
      if (picked.length >= maxItems) break;
      if (picked.includes(article)) continue;
      if (isWearablesHeadline(article.title) && wearablesCount >= WEARABLES_CAP) continue;
      picked.push(article);
      if (isWearablesHeadline(article.title)) wearablesCount += 1;
    }
  }

  return picked.length ? picked : pool.slice(0, maxItems);
}

function normalizeSupabaseUrl(url) {
  const fallback = 'https://snbchuvvnbwvghmbxehv.supabase.co';
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.includes('.supabase.co')) return `https://${trimmed}`;
  return `https://${trimmed}.supabase.co`;
}

async function runPulseRefresh(options = {}) {
  const {
    supabaseUrl: supabaseUrlIn = process.env.SUPABASE_URL,
    supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY,
    openaiKey = process.env.OPENAI_API_KEY,
    maxItems = 6,
    dryRun = false,
    skipAi = false,
  } = options;
  const supabaseUrl = normalizeSupabaseUrl(supabaseUrlIn);

  if (!dryRun && (!supabaseUrl || !supabaseKey)) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  const forecasts = loadForecasts();
  const launches = await gatherLaunches({
    productHuntToken: process.env.PRODUCTHUNT_TOKEN || process.env.PRODUCTHUNT_DEVELOPER_TOKEN,
  });
  let articles = await gatherArticles(12);
  articles = injectCuratedStories(articles);

  if (!articles.length) {
    console.warn('No RSS articles — seeding static pulse items');
    articles = STATIC_SEED.map((s) => ({
      title: s.headline,
      link: s.url,
      pubDate: new Date().toISOString(),
      source: s.source,
      feedTopics: s.topics,
      _seed: s,
    }));
  }

  const rows = [];
  const candidates = selectDiverseCandidates(articles, maxItems);
  const sourceOverlap = buildSourceOverlap(articles);

  for (const article of candidates) {
    if (rows.length >= maxItems) break;

    if (article._seed) {
      const s = article._seed;
        rows.push({
        id: s.id,
        published_at: new Date().toISOString(),
        headline: s.headline,
        source: s.source,
        url: s.url || null,
        topics: s.topics,
        forecast_id: s.forecast_id,
        meaning: s.meaning,
        meaning_personal: s.meaning_personal,
        startup_hint: s.startup_hint,
        insight: s.insight || {
          what_happened: s.headline,
          second_order: s.meaning,
          prediction_take: s.forecast_id ? `Linked forecast in library.` : '',
          why_you: s.meaning_personal,
          hype_score: 40,
        },
        prep: defaultPrep(s.topics, s.headline),
        active: true,
      });
      continue;
    }

    const matchResult = await resolveForecastMatch(article, forecasts, openaiKey, skipAi);
    let enriched = null;
    if (!skipAi && openaiKey) {
      enriched = await enrichWithOpenAI(article, matchResult, openaiKey);
    }
    const overlapKey = normalizeHeadlineKey(article.title);
    const scoreCtx = {
      sourceOverlap: sourceOverlap[overlapKey] || 1,
      matchStrength: getMatchStrength(matchResult),
      hasLaunch: (launches || []).some((l) => {
        const hay = `${article.title} ${(article.feedTopics || []).join(' ')}`.toLowerCase();
        return hay.includes((l.name || '').toLowerCase().slice(0, 8));
      }),
    };
    const hypeScore = scoreArticleHype(article, scoreCtx);
    rows.push(buildPulseRow({ ...article, _launches: launches }, matchResult, enriched, article.feedTopics || [], hypeScore, scoreCtx));
  }

  rows.sort((a, b) => {
    const imp = (b.insight?.importance_score || 0) - (a.insight?.importance_score || 0);
    if (imp !== 0) return imp;
    const hype = (b.insight?.hype_score || 0) - (a.insight?.hype_score || 0);
    if (hype !== 0) return hype;
    return new Date(b.published_at) - new Date(a.published_at);
  });

  if (dryRun) {
    return { ok: true, dryRun: true, count: rows.length, rows };
  }

  const count = await upsertPulseItems(supabaseUrl, supabaseKey, rows);
  await deactivateStalePulse(supabaseUrl, supabaseKey, 14);

  return { ok: true, count, rows: rows.map((r) => ({ id: r.id, headline: r.headline })) };
}

module.exports = {
  runPulseRefresh,
  loadForecasts,
  gatherArticles,
  matchForecast,
  resolveForecastMatch,
  rankForecastsWithAI,
  scoreArticleHype,
  scoreArticleImportance,
  heuristicImportance,
  estimatePreImportance,
  buildSourceOverlap,
  injectCuratedStories,
  selectDiverseCandidates,
  CURATED_STORIES,
  STATIC_SEED,
};
