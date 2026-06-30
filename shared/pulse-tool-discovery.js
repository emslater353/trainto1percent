/**
 * Tool discovery — match Pulse ripples to tools people may not know yet.
 * Curated catalog + indie picks; no "existing stack" required.
 */

const TOOL_DISCOVERY_CATALOG = [
  { name: 'Cursor', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'developer', 'agent', 'copilot', 'prototype', 'software', 'build', 'ship', 'iteration', 'engineering', 'ide', 'vibe'], hook: 'vibe-code apps in your IDE' },
  { name: 'Cline', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'developer', 'agent', 'open source', 'ide', 'review', 'diff'], hook: 'open-source coding agent in your IDE' },
  { name: 'Lovable', category: 'Build', tags: ['tech', 'ai'], signals: ['ship', 'landing', 'prototype', 'non-engineer', 'app gen', 'full-stack', 'demo', 'build'], hook: 'full-stack app gen for non-engineers', curated: true },
  { name: 'Onlook', category: 'Build', tags: ['tech', 'ai'], signals: ['design', 'react', 'ui', 'prototype', 'ship'], hook: 'visual editor for React — ship UI without handoff' },
  { name: 'Marblism', category: 'Build', tags: ['tech', 'ai'], signals: ['saas', 'startup', 'prototype', 'ship'], hook: 'AI-generated SaaS starter from a prompt' },
  { name: 'Notion', category: 'Ops', tags: ['work', 'tech', 'ai'], signals: ['workflow', 'documentation', 'knowledge', 'team', 'sop', 'playbook', 'organiz', 'wiki', 'collabor', 'database', 'docs'], hook: 'docs + wikis + lightweight ops' },
  { name: 'Linear', category: 'Ops', tags: ['tech', 'work'], signals: ['project', 'issue', 'engineering', 'roadmap', 'sprint', 'team', 'ship'], hook: 'issue tracking built for product teams' },
  { name: 'Granola', category: 'Notes', tags: ['work', 'ai'], signals: ['meeting', 'notes', 'call', 'clinical', 'patient', 'coordination', 'capture'], hook: 'AI meeting notes without losing context' },
  { name: 'Howie AI', category: 'Assistant', tags: ['work', 'ai'], signals: ['schedule', 'calendar', 'assistant', 'executive', 'errand', 'texting', 'delegate'], hook: 'texting executive assistant', curated: true },
  { name: 'Wispr Flow', category: 'Productivity', tags: ['work', 'ai', 'creator', 'tech'], signals: ['voice', 'dictation', 'speech', 'writing', 'speed', 'typing', 'wispr'], hook: 'voice dictation that works everywhere you type', curated: true },
  { name: 'Screen Studio', category: 'Video', tags: ['creator', 'media', 'tech'], signals: ['demo', 'record', 'screen', 'launch', 'video'], hook: 'beautiful screen recordings in one take', curated: true },
  { name: 'Limitless', category: 'Hardware', tags: ['tech', 'ai', 'work'], signals: ['wearable', 'memory', 'recall', 'meeting', 'capture', 'pendant'], hook: 'personal AI pendant — capture & recall', curated: true },
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
  { name: 'Krea', category: 'Design', tags: ['art', 'media', 'ai', 'fashion'], signals: ['visual', 'design', 'generative', 'creative', 'image', 'real-time'], hook: 'real-time generative visuals for designers', curated: true },
  { name: 'Argil', category: 'Video', tags: ['creator', 'media', 'ai'], signals: ['ugc', 'ad', 'avatar', 'creator', 'video'], hook: 'AI avatars for UGC-style ads' },
  { name: 'Submagic', category: 'Video', tags: ['creator', 'media', 'ai'], signals: ['caption', 'b-roll', 'short video', 'tiktok'], hook: 'auto captions + B-roll for short video' },
  { name: 'Bolt', category: 'Build', tags: ['tech', 'ai'], signals: ['ship', 'prototype', 'full-stack', 'demo', 'vibe', 'build', 'app'], hook: 'prompt → full-stack app in the browser', curated: true },
  { name: 'Windsurf', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'agent', 'ide', 'developer', 'build', 'copilot'], hook: 'agentic IDE — multi-step coding flows' },
  { name: 'Factory', category: 'Build', tags: ['tech', 'ai', 'work'], signals: ['agent', 'engineering', 'software', 'automation', 'dev', 'ship'], hook: 'AI software agents for engineering teams' },
  { name: 'Greptile', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'review', 'pr', 'developer', 'quality', 'ship'], hook: 'AI code review on every PR' },
  { name: 'Bloop', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'codebase', 'search', 'developer', 'repo', 'onboard'], hook: 'ask your codebase questions in plain English' },
  { name: 'Continue', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'open source', 'ide', 'developer', 'copilot'], hook: 'open-source AI pair programmer' },
  { name: 'Aider', category: 'Build', tags: ['tech', 'ai'], signals: ['code', 'terminal', 'git', 'developer', 'diff'], hook: 'terminal pair programming with git-aware diffs' },
  { name: 'Rork', category: 'Build', tags: ['tech', 'ai'], signals: ['mobile', 'app', 'ios', 'prototype', 'ship'], hook: 'text → mobile app — TestFlight fast' },
  { name: 'Same.new', category: 'Build', tags: ['tech', 'ai'], signals: ['clone', 'design', 'prototype', 'landing', 'ui', 'remix'], hook: 'clone and remix any site in minutes' },
  { name: 'Magic Patterns', category: 'Build', tags: ['tech', 'ai', 'creator'], signals: ['ui', 'design', 'react', 'component', 'prototype'], hook: 'UI components from prompts — export to React' },
  { name: 'Manus', category: 'Agents', tags: ['tech', 'ai', 'work'], signals: ['agent', 'autonomous', 'task', 'workflow', 'delegate', 'multi-step'], hook: 'general AI agent for multi-step tasks', curated: true },
  { name: 'Composio', category: 'Agents', tags: ['tech', 'ai', 'work'], signals: ['agent', 'integration', 'workflow', 'automation', 'api', 'tool'], hook: 'wire agents to 100+ tools' },
  { name: 'Relay.app', category: 'Agents', tags: ['work', 'ai', 'tech'], signals: ['automate', 'workflow', 'integration', 'agent', 'ops', 'human', 'relay'], hook: 'human-in-the-loop automations', curated: true },
  { name: 'Descript', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['podcast', 'video', 'audio', 'edit', 'voice', 'overdub'], hook: 'edit video and audio like a doc' },
  { name: 'ElevenLabs', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['voice', 'audio', 'tts', 'podcast', 'narration'], hook: 'voice cloning + human-sounding TTS' },
  { name: 'HeyGen', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['avatar', 'video', 'ugc', 'presenter', 'explainer'], hook: 'AI avatars for explainer video' },
  { name: 'Runway', category: 'Video', tags: ['media', 'movies', 'ai', 'creator'], signals: ['video', 'generate', 'film', 'creative', 'storyboard'], hook: 'Gen-3 cinematic short clips from text' },
  { name: 'Luma', category: 'Video', tags: ['media', 'movies', 'ai', 'creator'], signals: ['video', '3d', 'generate', 'creative', 'motion'], hook: 'Dream Machine — 3D-aware video gen' },
  { name: 'Pika', category: 'Video', tags: ['media', 'creator', 'ai'], signals: ['video', 'short', 'reels', 'motion', 'generate'], hook: 'playful AI video from a still or prompt' },
  { name: 'Recraft', category: 'Design', tags: ['art', 'creator', 'ai', 'retail'], signals: ['design', 'visual', 'brand', 'illustration', 'creative'], hook: 'vector + raster AI with brand styles' },
  { name: 'Ideogram', category: 'Design', tags: ['creator', 'media', 'ai'], signals: ['image', 'design', 'thumbnail', 'ad', 'visual', 'text'], hook: 'AI images with readable text' },
  { name: 'Fyxer', category: 'Productivity', tags: ['work', 'ai'], signals: ['email', 'assistant', 'inbox', 'reply', 'productivity'], hook: 'AI email assistant in your voice' },
  { name: 'Shortwave', category: 'Productivity', tags: ['work', 'ai', 'tech'], signals: ['email', 'inbox', 'summary', 'productivity', 'thread'], hook: 'AI-native email with thread summaries' },
  { name: 'Otter', category: 'Notes', tags: ['work', 'ai'], signals: ['meeting', 'transcript', 'notes', 'call', 'capture'], hook: 'live meeting transcription + search' },
  { name: 'Fathom', category: 'Notes', tags: ['work', 'ai'], signals: ['meeting', 'notes', 'call', 'summary', 'action items'], hook: 'free AI meeting notes + highlights' },
  { name: 'Fireflies', category: 'Notes', tags: ['work', 'ai', 'tech'], signals: ['meeting', 'sales', 'crm', 'call', 'transcript'], hook: 'meeting bot + CRM sync' },
  { name: 'Motion', category: 'Productivity', tags: ['work', 'ai'], signals: ['calendar', 'schedule', 'task', 'productivity', 'planning'], hook: 'AI calendar that schedules around your life' },
  { name: 'Reclaim', category: 'Productivity', tags: ['work', 'ai'], signals: ['calendar', 'focus', 'schedule', 'habit', 'productivity'], hook: 'defends focus time + auto-schedules habits' },
  { name: 'Consensus', category: 'Research', tags: ['health', 'ai', 'tech'], signals: ['research', 'paper', 'science', 'evidence', 'clinical', 'source'], hook: 'research paper search with cited answers' },
  { name: 'Hebbia', category: 'Research', tags: ['finance', 'ai', 'work'], signals: ['research', 'finance', 'due diligence', 'document', 'analysis', 'filing'], hook: 'AI matrix over docs, filings, decks' },
  { name: 'Phind', category: 'Research', tags: ['tech', 'ai'], signals: ['code', 'search', 'developer', 'debug', 'implementation'], hook: 'dev-focused search with code answers' },
  { name: 'Perplexity', category: 'Research', tags: ['tech', 'ai', 'work'], signals: ['research', 'search', 'source', 'answer', 'learn', 'synthes'], hook: 'answer engine with citations' },
  { name: 'Arcade', category: 'Decks', tags: ['tech', 'creator', 'work'], signals: ['demo', 'product', 'interactive', 'onboarding', 'sales', 'launch'], hook: 'interactive product demos — shareable links' },
  { name: 'Mintlify', category: 'Build', tags: ['tech', 'ai'], signals: ['docs', 'documentation', 'developer', 'api', 'reference'], hook: 'AI documentation from your codebase' },
  { name: 'tldraw', category: 'Design', tags: ['tech', 'creator', 'ai'], signals: ['design', 'sketch', 'prototype', 'ui', 'whiteboard', 'canvas'], hook: 'infinite canvas + sketch → working UI' },
  { name: 'n8n', category: 'Agents', tags: ['tech', 'ai', 'work'], signals: ['automate', 'workflow', 'integration', 'agent', 'api', 'ops', 'self-host'], hook: 'open-source workflow automation', curated: true },
  { name: 'Gumloop', category: 'Agents', tags: ['tech', 'ai', 'work'], signals: ['automate', 'workflow', 'agent', 'llm', 'no-code', 'ops', 'browser'], hook: 'AI-native automation with LLM + browser agents', curated: true },
  { name: 'Lex', category: 'Productivity', tags: ['creator', 'media', 'ai', 'work'], signals: ['writing', 'essay', 'newsletter', 'edit', 'long-form', 'draft'], hook: 'long-form writing with AI editing' },
  { name: 'Fabric', category: 'Notes', tags: ['work', 'ai', 'tech'], signals: ['notes', 'knowledge', 'search', 'meeting', 'files', 'wiki', 'organiz', 'library'], hook: 'AI workspace for notes, files, and memory', curated: true },
  { name: 'MyMind', category: 'Notes', tags: ['creator', 'work', 'ai'], signals: ['bookmark', 'save', 'visual', 'inspiration', 'recall', 'research'], hook: 'private visual bookmarking — find by vibe' },
  { name: 'Reflect', category: 'Notes', tags: ['work', 'ai', 'tech'], signals: ['notes', 'journal', 'think', 'backlink', 'daily', 'writing'], hook: 'networked notes with AI backlinking' },
  { name: 'Tana', category: 'Notes', tags: ['work', 'ai', 'tech'], signals: ['notes', 'supertag', 'organiz', 'meeting', 'knowledge', 'structure'], hook: 'supertags + AI for flexible structured notes' },
  { name: 'Status AI', category: 'Social', tags: ['creator', 'media', 'ai', 'tech'], signals: ['social', 'game', 'character', 'roleplay', 'entertainment', 'creator'], hook: 'gamified social sim with AI characters' },
  { name: 'Hedra', category: 'Video', tags: ['media', 'creator', 'ai', 'movies'], signals: ['video', 'avatar', 'character', 'animate', 'audio', 'creative', 'talking head'], hook: 'creative agent for video, image, and audio' },
  { name: 'Phia', category: 'Fashion', tags: ['fashion', 'retail', 'ai', 'beauty'], signals: ['shopping', 'price', 'retail', 'resale', 'fashion', 'deal', 'e-commerce'], hook: 'AI shopping — best price retail + resale', curated: true },
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
