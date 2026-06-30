/**
 * Tool discovery — match Pulse ripples to tools people may not know yet.
 * Curated catalog + indie picks; no "existing stack" required.
 */

const TOOL_DISCOVERY_CATALOG = [
  { name: 'Cursor', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'developer', 'agent', 'copilot', 'prototype', 'software', 'build', 'ship', 'iteration', 'engineering', 'ide', 'vibe'], hook: 'vibe-code apps in your IDE' },
  { name: 'Cline', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'developer', 'agent', 'open source', 'ide', 'review', 'diff'], hook: 'open-source coding agent in your IDE' },
  { name: 'Lovable', category: 'Build', tags: ['tech', 'ai'], signals: ['ship', 'landing', 'prototype', 'non-engineer', 'app gen', 'full-stack', 'demo'], hook: 'full-stack app gen for non-engineers' },
  { name: 'Onlook', category: 'Build', tags: ['tech', 'ai'], signals: ['design', 'react', 'ui', 'prototype', 'ship'], hook: 'visual editor for React — ship UI without handoff' },
  { name: 'Marblism', category: 'Build', tags: ['tech', 'ai'], signals: ['saas', 'startup', 'prototype', 'ship'], hook: 'AI-generated SaaS starter from a prompt' },
  { name: 'Notion', category: 'Ops', tags: ['work', 'tech'], signals: ['workflow', 'documentation', 'knowledge', 'team', 'sop', 'playbook', 'organiz', 'wiki', 'collabor'], hook: 'docs + wikis + lightweight ops' },
  { name: 'Linear', category: 'Ops', tags: ['tech', 'work'], signals: ['project', 'issue', 'engineering', 'roadmap', 'sprint', 'team', 'ship'], hook: 'issue tracking built for product teams' },
  { name: 'Granola', category: 'Notes', tags: ['work', 'ai'], signals: ['meeting', 'notes', 'call', 'clinical', 'patient', 'coordination', 'capture'], hook: 'AI meeting notes without losing context' },
  { name: 'Howie AI', category: 'Assistant', tags: ['work', 'ai'], signals: ['schedule', 'calendar', 'assistant', 'executive', 'errand', 'texting', 'delegate'], hook: 'texting executive assistant', curated: true },
  { name: 'Wispr Flow', category: 'Productivity', tags: ['work', 'ai', 'creator'], signals: ['voice', 'dictation', 'speech', 'writing', 'speed'], hook: 'voice dictation that works everywhere you type', curated: true },
  { name: 'Screen Studio', category: 'Video', tags: ['creator', 'media', 'tech'], signals: ['demo', 'record', 'screen', 'launch', 'video'], hook: 'beautiful screen recordings in one take', curated: true },
  { name: 'Limitless', category: 'Hardware', tags: ['tech', 'ai', 'work'], signals: ['wearable', 'memory', 'recall', 'meeting', 'capture'], hook: 'personal AI pendant — capture & recall' },
  { name: 'Raycast', category: 'Productivity', tags: ['tech', 'ai', 'work'], signals: ['productivity', 'launcher', 'shortcut', 'command'], hook: 'launcher + AI commands for power users' },
  { name: 'Bardeen', category: 'Agents', tags: ['work', 'ai', 'tech'], signals: ['automate', 'workflow', 'browser', 'glue', 'saas', 'integrat'], hook: 'browser automations that glue SaaS tools' },
  { name: 'Dust', category: 'Agents', tags: ['work', 'ai', 'tech'], signals: ['assistant', 'team', 'knowledge', 'workflow', 'agent'], hook: 'custom AI assistants wired to team data' },
  { name: 'Reelful', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['video', 'clip', 'reels', 'tiktok', 'youtube', 'short', 'snip', 'distribution'], hook: 'long clips → short hooks fast', curated: true },
  { name: 'Opus Clip', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['video', 'clip', 'viral', 'short', 'youtube', 'reels'], hook: 'long video → viral shorts automatically' },
  { name: 'Captions', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['video', 'talking head', 'edit', 'caption', 'creator'], hook: 'AI editing + eye contact for talking-head video' },
  { name: 'Haiper', category: 'Video', tags: ['media', 'movies', 'ai', 'creator'], signals: ['video', 'film', 'clip', 'generate', 'storyboard'], hook: 'fast AI video for short clips' },
  { name: 'Gamma', category: 'Decks', tags: ['work', 'creator', 'ai'], signals: ['deck', 'slides', 'pitch', 'presentation', 'story', 'fundraise'], hook: 'AI decks from a prompt', curated: true },
  { name: 'NotebookLM', category: 'Research', tags: ['media', 'ai', 'work'], signals: ['research', 'sources', 'podcast', 'audio', 'learn', 'synthes', 'medical', 'clinical'], hook: 'sources → audio briefs', curated: true },
  { name: 'Exa', category: 'Research', tags: ['tech', 'ai'], signals: ['research', 'search', 'source', 'primary', 'due diligence', 'signal'], hook: 'neural search for primary sources', curated: true },
  { name: 'Parallel', category: 'Research', tags: ['tech', 'ai', 'work'], signals: ['research', 'agent', 'extract', 'web', 'structured'], hook: 'web agents that extract structured research' },
  { name: 'FSHN AI', category: 'Fashion', tags: ['fashion', 'retail', 'ai'], signals: ['try-on', 'fashion', 'lookbook', 'apparel', 'retail', 'visual', 'drop'], hook: 'virtual try-on for fashion brands' },
  { name: 'Botika', category: 'Fashion', tags: ['fashion', 'retail', 'ai'], signals: ['fashion', 'model', 'shoot', 'e-commerce', 'lookbook'], hook: 'AI models for fashion shoots without a studio' },
  { name: 'Memelord', category: 'Social', tags: ['creator', 'media', 'ai'], signals: ['meme', 'social', 'viral', 'humor', 'marketing', 'engagement'], hook: 'meme-native social marketing', curated: true },
  { name: 'Pops', category: 'Social', tags: ['creator', 'media', 'ai'], signals: ['game', 'playful', 'engagement', 'social'], hook: 'playful game formats that drive engagement', curated: true },
  { name: 'Abridge', category: 'Health', tags: ['health', 'ai'], signals: ['clinical', 'patient', 'doctor', 'visit', 'medical', 'healthcare'], hook: 'ambient AI for patient–clinician conversations' },
  { name: 'OpenEvidence', category: 'Health', tags: ['health', 'ai'], signals: ['clinical', 'medical', 'diagnosis', 'evidence', 'research', 'physician'], hook: 'medical-grade answers for clinicians' },
  { name: 'Brilliant Labs', category: 'Hardware', tags: ['spatial', 'wearables', 'tech'], signals: ['glasses', 'wearable', 'spatial', 'ar', 'hardware', 'ambient'], hook: 'Frame — AI glasses for builders' },
  { name: 'Polymarket', category: 'Markets', tags: ['finance', 'ai'], signals: ['prediction', 'market', 'odds', 'bet', 'forecast', 'macro'], hook: 'prediction markets — price the second-order effect' },
  { name: 'Wordware', category: 'Agents', tags: ['tech', 'ai'], signals: ['agent', 'workflow', 'production', 'program'], hook: 'English-as-code for production AI flows' },
  { name: 'Krea', category: 'Design', tags: ['art', 'media', 'ai', 'fashion'], signals: ['visual', 'design', 'generative', 'creative'], hook: 'real-time generative visuals for designers' },
  { name: 'Argil', category: 'Video', tags: ['creator', 'media', 'ai'], signals: ['ugc', 'ad', 'avatar', 'creator', 'video'], hook: 'AI avatars for UGC-style ads' },
  { name: 'Submagic', category: 'Video', tags: ['creator', 'media', 'ai'], signals: ['caption', 'b-roll', 'short video', 'tiktok'], hook: 'auto captions + B-roll for short video' },
];

const DISCOVERY_PROFILE_BOOST = {
  founder: ['tech', 'ai', 'work'],
  creator: ['media', 'creator', 'movies'],
  fashion: ['fashion', 'retail', 'beauty'],
  operator: ['work', 'tech', 'finance'],
};

const DISCOVERY_LABELS = {
  try_now: { label: 'Try this', emoji: '→' },
  worth_knowing: { label: 'Worth knowing', emoji: '✦' },
  new_lane: { label: 'New to you?', emoji: '◎' },
};

function normalizeToolKey(text) {
  return (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function categoryFromTags(tags) {
  const t = new Set(tags || []);
  if (t.has('fashion') || t.has('retail') || t.has('beauty')) return 'Fashion';
  if (t.has('health')) return 'Health';
  if (t.has('media') || t.has('creator') || t.has('movies')) return 'Video';
  if (t.has('spatial') || t.has('wearables')) return 'Hardware';
  if (t.has('finance')) return 'Markets';
  if (t.has('work') && t.has('ai')) return 'Agents';
  if (t.has('tech')) return 'Build';
  return 'Tools';
}

function mergeDiscoveryCatalog(indiePicks) {
  const byName = new Map();
  TOOL_DISCOVERY_CATALOG.forEach((t) => byName.set(normalizeToolKey(t.name), { ...t }));

  (indiePicks || []).forEach((p) => {
    const key = normalizeToolKey(p.name);
    if (!key) return;
    const existing = byName.get(key) || {};
    byName.set(key, {
      ...existing,
      name: p.name,
      category: existing.category || categoryFromTags(p.tags),
      tags: [...new Set([...(existing.tags || []), ...(p.tags || [])])],
      signals: [...new Set([...(existing.signals || []), ...(p.keywords || []), ...(p.tags || [])])],
      hook: p.hook || existing.hook || '',
      why: p.why || existing.why || p.action || existing.why || '',
      curated: !!(p.curated || existing.curated),
      url: p.url || existing.url || '',
    });
  });

  return [...byName.values()].sort((a, b) => {
    if (a.curated !== b.curated) return a.curated ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function scoreRippleAgainstTool(rippleText, tool, headline) {
  const h = normalizeToolKey(rippleText);
  if (!h || !tool) return 0;
  let score = 0;

  for (const sig of tool.signals || []) {
    if (sig.length >= 4 && h.includes(sig)) score += 4;
    else if (sig.length >= 3 && h.includes(sig)) score += 2;
  }
  for (const tag of tool.tags || []) {
    if (h.includes(tag)) score += 2;
  }
  const nameKey = normalizeToolKey(tool.name);
  if (nameKey && h.includes(nameKey)) score += 12;

  const head = normalizeToolKey(headline || '');
  if (head && (tool.signals || []).some((s) => s.length >= 4 && head.includes(s))) score += 3;
  const tagOverlap = (tool.tags || []).filter((t) => h.includes(t)).length;
  if (tool.curated) score += tagOverlap > 0 ? 3 : 1;
  if (normalizeToolKey(tool.name) === 'howie ai' && /schedule|calendar|assistant|errand|text/.test(`${h} ${head}`)) score += 4;

  return score;
}

function classifyDiscoveryMatch(score) {
  if (score >= 10) return 'try_now';
  if (score >= 6) return 'worth_knowing';
  if (score >= 3) return 'new_lane';
  return null;
}

function discoverBlurb(tool, rippleText) {
  const hook = (tool.hook || tool.why || 'Worth a quick demo.').replace(/\s+/g, ' ').trim();
  const ripple = (rippleText || '').replace(/\s+/g, ' ').trim();
  const shortRipple = ripple.length > 80 ? `${ripple.slice(0, 77)}…` : ripple;
  if (shortRipple && hook) return `${shortRipple} → ${hook.charAt(0).toLowerCase()}${hook.slice(1)}`;
  return hook;
}

function collectStoryRippleTexts(item, insight, linked) {
  const texts = [];
  const seen = new Set();
  const add = (text) => {
    const t = (text || '').replace(/\s+/g, ' ').trim();
    if (t.length < 12) return;
    const key = normalizeToolKey(t).slice(0, 72);
    if (seen.has(key)) return;
    seen.add(key);
    texts.push(t);
  };

  add(insight?.second_order || item?.meaning);
  (insight?.second_order_impacts || []).forEach(add);
  if (typeof expandHeadlineRipples === 'function') {
    expandHeadlineRipples(insight?.second_order || item?.meaning || '', item?.headline || '').forEach((r) => add(r.text));
  }
  if (typeof deriveStoryRipples === 'function') {
    deriveStoryRipples(item?.headline || '', insight?.second_order || item?.meaning || '', linked).forEach((r) => add(r.text));
  }
  (item?.topics || []).forEach((topic) => add(`${topic} workflows shift as this lands.`));
  return texts;
}

function matchRipplesToDiscoveryTools(item, catalog, opts = {}) {
  if (!item || !catalog?.length) return [];
  const insight = item.insight || opts.insight || {};
  const linked = opts.linked ?? null;
  const ripples = collectStoryRippleTexts(item, insight, linked);
  const headline = item.headline || '';
  const profile = opts.profile || 'founder';
  const profileTags = DISCOVERY_PROFILE_BOOST[profile] || DISCOVERY_PROFILE_BOOST.founder;
  const exclude = new Set((opts.excludeNames || []).map(normalizeToolKey));
  const matches = [];

  for (const tool of catalog) {
    const key = normalizeToolKey(tool.name);
    if (exclude.has(key)) continue;

    let best = null;
    for (const ripple of ripples) {
      let score = scoreRippleAgainstTool(ripple, tool, headline);
      const tagOverlap = (tool.tags || []).filter((t) => profileTags.includes(t)).length;
      score += tagOverlap * 2;
      const impactType = classifyDiscoveryMatch(score);
      if (!impactType) continue;
      if (!best || score > best.score) {
        best = {
          tool,
          ripple,
          score,
          impactType,
          blurb: discoverBlurb(tool, ripple),
        };
      }
    }
    if (best) matches.push(best);
  }

  const order = { try_now: 0, worth_knowing: 1, new_lane: 2 };
  return matches
    .sort((a, b) => (order[a.impactType] - order[b.impactType]) || (b.score - a.score) || (b.tool.curated ? 1 : 0))
    .slice(0, opts.limit ?? 4);
}

function groupCatalogByCategory(catalog) {
  const groups = {};
  (catalog || []).forEach((t) => {
    const cat = t.category || 'Tools';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(t);
  });
  return groups;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TOOL_DISCOVERY_CATALOG,
    DISCOVERY_LABELS,
    DISCOVERY_PROFILE_BOOST,
    mergeDiscoveryCatalog,
    matchRipplesToDiscoveryTools,
    collectStoryRippleTexts,
    groupCatalogByCategory,
    discoverBlurb,
  };
}

if (typeof window !== 'undefined') {
  window.TOOL_DISCOVERY_CATALOG = TOOL_DISCOVERY_CATALOG;
  window.DISCOVERY_LABELS = DISCOVERY_LABELS;
  window.mergeDiscoveryCatalog = mergeDiscoveryCatalog;
  window.matchRipplesToDiscoveryTools = matchRipplesToDiscoveryTools;
  window.groupCatalogByCategory = groupCatalogByCategory;
}
