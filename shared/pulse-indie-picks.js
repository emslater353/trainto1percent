/**
 * Curated indie / early-stage picks for Pulse cards.
 * Extend this file — no need to retrain models. Re-run refresh-pulse after edits.
 * `curated: true` = AI Proof Club favorites (slight ranking boost).
 */

function resolveMergeLaunchesIntoTools() {
  if (typeof window !== 'undefined' && typeof window.mergeLaunchesIntoTools === 'function') {
    return window.mergeLaunchesIntoTools;
  }
  try {
    return require('./launch-feeds.js').mergeLaunchesIntoTools;
  } catch (e) {
    return null;
  }
}

const TOOL_URLS = {
  pops: 'https://apps.apple.com/us/app/pops-ai-games-with-friends/id6755313727',
  'fshn ai': 'https://fashn.ai',
  reelful: 'https://www.reelful.app',
  memelord: 'https://www.memelord.com',
  cursor: 'https://cursor.com',
  'howie ai': 'https://howie.com',
  'wispr flow': 'https://wisprflow.ai',
  limitless: 'https://www.limitless.ai',
  'screen studio': 'https://screen.studio',
  raycast: 'https://raycast.com',
  granola: 'https://granola.ai',
  notebooklm: 'https://notebooklm.google.com',
  gamma: 'https://gamma.app',
  abridge: 'https://www.abridge.com',
  openevidence: 'https://www.openevidence.com',
  'brilliant labs': 'https://brilliant.xyz',
  'even realities': 'https://www.evenrealities.com',
  xreal: 'https://www.xreal.com',
  rokid: 'https://global.rokid.com',
  sightful: 'https://www.sightful.com',
  'fashn.ai': 'https://fashn.ai',
  botika: 'https://botika.io',
  lalaland: 'https://lalaland.ai',
  resleeve: 'https://resleeve.ai',
  haiper: 'https://haiper.ai',
  higgsfield: 'https://higgsfield.ai',
  'opus clip': 'https://www.opus.pro',
  hypernatural: 'https://hypernatural.ai',
  captions: 'https://www.captions.ai',
  krea: 'https://www.krea.ai',
  dust: 'https://dust.tt',
  'relevance ai': 'https://relevanceai.com',
  bardeen: 'https://www.bardeen.ai',
  wordware: 'https://wordware.ai',
  onlook: 'https://onlook.dev',
  lovable: 'https://lovable.dev',
  marblism: 'https://marblism.com',
  cline: 'https://cline.bot',
  argil: 'https://www.argil.ai',
  creatify: 'https://creatify.ai',
  submagic: 'https://www.submagic.co',
  klap: 'https://klap.app',
  exa: 'https://exa.ai',
  parallel: 'https://parallel.ai',
  tavus: 'https://www.tavus.io',
  suno: 'https://suno.com',
  udio: 'https://www.udio.com',
  polymarket: 'https://polymarket.com',
  kalshi: 'https://kalshi.com',
  bolt: 'https://bolt.new',
  windsurf: 'https://codeium.com/windsurf',
  factory: 'https://factory.ai',
  greptile: 'https://greptile.com',
  bloop: 'https://bloop.ai',
  elevenlabs: 'https://elevenlabs.io',
  descript: 'https://www.descript.com',
  heygen: 'https://www.heygen.com',
  runway: 'https://runwayml.com',
  luma: 'https://lumalabs.ai',
  pika: 'https://pika.art',
  composio: 'https://composio.dev',
  relay: 'https://www.relay.app',
  fyxer: 'https://www.fyxer.com',
  otter: 'https://otter.ai',
  fathom: 'https://fathom.video',
  fireflies: 'https://fireflies.ai',
  arcade: 'https://arcade.software',
  hebbia: 'https://www.hebbia.ai',
  consensus: 'https://consensus.app',
  phind: 'https://phind.com',
  'same.new': 'https://same.new',
  rork: 'https://rork.ai',
  continue: 'https://continue.dev',
  aider: 'https://aider.chat',
  mintlify: 'https://mintlify.com',
  tldraw: 'https://www.tldraw.com',
  'magic patterns': 'https://www.magicpatterns.com',
  shortwave: 'https://www.shortwave.com',
  motion: 'https://www.usemotion.com',
  reclaim: 'https://reclaim.ai',
  manus: 'https://manus.im',
  recraft: 'https://www.recraft.ai',
  ideogram: 'https://ideogram.ai',
  perplexity: 'https://www.perplexity.ai',
};

function resolveToolUrl(name, explicitUrl) {
  if (explicitUrl && !/producthunt\.com/i.test(explicitUrl)) return explicitUrl;
  const n = (name || '').trim().toLowerCase();
  return TOOL_URLS[n] || '';
}

const INDIE_STARTUP_PICKS = [
  // AI Proof Club favorites — quirky indie tools, not the usual stack
  { name: 'Howie AI', hook: 'texting executive assistant — scheduling + errands', why: 'If your calendar owns you — text-native EA beats another dashboard.', tags: ['work', 'ai', 'tech'], keywords: ['schedule', 'assistant', 'executive', 'calendar', 'texting', 'errand', 'delegate'], curated: true },
  { name: 'Pops', hook: 'game app — playful formats that drive engagement', why: 'If you care about engagement beyond the feed — playful formats are compounding.', tags: ['creator', 'media', 'ai', 'tech'], curated: true },
  { name: 'Cursor', hook: 'vibe-code apps and prototypes in your IDE', why: 'If you ship product — idea-to-demo time is the edge.', tags: ['tech', 'ai'], keywords: ['code', 'build', 'prototype', 'developer', 'software'], curated: true },
  { name: 'Reelful', hook: 'video snipping — long clips → short hooks fast', why: 'If you publish video — clipping speed is distribution now.', tags: ['media', 'creator', 'movies', 'ai'], keywords: ['video', 'clip', 'snip', 'reels', 'tiktok', 'youtube'], curated: true },
  { name: 'Memelord', hook: 'meme-native AI for humor-led social marketing', why: 'If you grow via social — humor-native beats polished corporate posts.', tags: ['creator', 'media', 'retail', 'ai'], keywords: ['meme', 'viral', 'social', 'humor', 'marketing'], curated: true },
  { name: 'Wispr Flow', hook: 'voice dictation that works everywhere you type', why: 'If you think faster than you type — voice-native beats another chat UI.', tags: ['work', 'ai', 'tech', 'creator'], keywords: ['voice', 'dictation', 'speech', 'writing', 'speed'], curated: true },
  { name: 'Exa', hook: 'neural search for primary sources, not SEO slop', why: 'If you need primary sources on a fast-moving story — not blog recap chains.', tags: ['tech', 'ai', 'finance', 'health'], keywords: ['research', 'medical', 'patient', 'cancer', 'clinical'], curated: true },
  { name: 'Granola', hook: 'AI note-taking that captures meetings without losing context', why: 'If you live in calls — structured notes beat scattered search results.', tags: ['work', 'ai', 'tech', 'health'], curated: true },
  { name: 'NotebookLM', hook: 'aggregate sources → podcasts and structured learnings', why: 'If you need to synthesize research fast — source → brief beats tab overload.', tags: ['media', 'ai', 'work', 'tech', 'health'], keywords: ['podcast', 'audio', 'sources', 'research', 'learn', 'cancer', 'medical', 'patient'], curated: true },
  { name: 'Gamma', hook: 'AI decks — slides from a prompt, not a blank deck', why: 'If you pitch often — decks from prompts beat rebuilding slides.', tags: ['work', 'creator', 'ai', 'tech'], keywords: ['deck', 'slides', 'presentation', 'pitch'], curated: true },
  { name: 'Screen Studio', hook: 'beautiful screen recordings in one take', why: 'If you ship demos — polished screen capture is distribution.', tags: ['creator', 'media', 'tech', 'ai'], keywords: ['demo', 'record', 'video', 'screen', 'launch'], curated: true },
  { name: 'Limitless', hook: 'personal AI pendant — capture & recall what matters', why: 'If ambient AI is your bet — wearable memory is a weird wedge worth watching.', tags: ['tech', 'ai', 'work'], keywords: ['wearable', 'memory', 'recall', 'meeting', 'capture'] },
  { name: 'Raycast', hook: 'launcher + AI commands for power users', why: 'If you live in shortcuts — AI at the command bar beats another tab.', tags: ['tech', 'ai', 'work'], keywords: ['productivity', 'launcher', 'shortcut', 'command'] },
  { name: 'Abridge', hook: 'ambient AI for patient–clinician conversations', why: 'If you\'re building in health — see how visit capture is being productized.', tags: ['health', 'ai', 'work'], keywords: ['patient', 'clinical', 'doctor', 'hospital', 'medical', 'cancer', 'diagnosis'] },
  { name: 'OpenEvidence', hook: 'medical-grade answers for clinicians and researchers', why: 'If health is your lane — see how evidence-backed AI differs from generic chat.', tags: ['health', 'ai', 'tech'], keywords: ['medical', 'clinical', 'doctor', 'diagnosis', 'cancer', 'patient', 'research'] },
  { name: 'FSHN AI', hook: 'virtual try-on app for fashion brands', why: 'If you sell fashion — try-on is table stakes, not a future bet.', tags: ['fashion', 'retail', 'ai', 'beauty'] },
  { name: 'Brilliant Labs', hook: 'Frame — open AI glasses for builders', tags: ['spatial', 'wearables', 'ai', 'creator', 'tech'], action: 'Watch a Frame demo and sketch one AR workflow for your audience' },
  { name: 'Even Realities', hook: 'G1 — lightweight AI glasses with a real display', tags: ['spatial', 'wearables', 'ai', 'tech'], action: 'Compare their UX to phone-first AI — note one gap you could fill' },
  { name: 'Xreal', hook: 'consumer AR glasses + spatial apps', tags: ['spatial', 'wearables', 'media', 'tech'], action: 'Find one spatial app on Xreal and rewrite the pitch for your niche' },
  { name: 'Rokid', hook: 'AR glasses + dev SDK for spatial UI', tags: ['spatial', 'wearables', 'tech'], action: 'List 3 micro-apps that only make sense on glasses, not phones' },
  { name: 'Sightful', hook: 'Spacetop — laptop with AR screen', tags: ['spatial', 'work', 'tech'], action: 'Storyboard a remote-work use case their form factor unlocks' },
  { name: 'Fashn.ai', hook: 'virtual try-on for indie brands', tags: ['fashion', 'retail', 'ai', 'beauty'], action: 'Run one SKU through try-on and note where curation still matters' },
  { name: 'Botika', hook: 'AI models for fashion shoots without a studio', tags: ['fashion', 'retail', 'ai', 'beauty'], action: 'Mock a 4-look drop using AI models — what would you refuse to automate?' },
  { name: 'Lalaland', hook: 'diverse AI models for e-commerce', tags: ['fashion', 'retail', 'ai'], action: 'Pick one brand voice and test how AI models change conversion story' },
  { name: 'Resleeve', hook: 'AI design sketches → production-ready fashion', tags: ['fashion', 'retail', 'ai'], action: 'Generate 3 silhouettes from a trend headline and pick one to sample' },
  { name: 'Haiper', hook: 'fast AI video for short clips', tags: ['media', 'movies', 'ai', 'creator'], action: 'Generate a 4-sec clip reacting to the headline — use it as a storyboard frame' },
  { name: 'Higgsfield', hook: 'AI video + camera motion for creators', tags: ['media', 'movies', 'ai', 'creator'], action: 'Recreate one camera move from a film trailer using AI video' },
  { name: 'Opus Clip', hook: 'long video → viral shorts automatically', tags: ['media', 'creator', 'ai'], action: 'Feed a 5-min talk and ship the best 30-sec cut with your caption' },
  { name: 'Hypernatural', hook: 'text → styled video scenes for storytellers', tags: ['media', 'movies', 'creator', 'ai'], action: 'Turn the headline into a 20-sec scene with a consistent character' },
  { name: 'Captions', hook: 'AI editing + eye contact for talking-head video', tags: ['media', 'creator', 'ai'], action: 'Record a 45-sec take on the news and auto-cut the best version' },
  { name: 'Krea', hook: 'real-time generative visuals for designers', tags: ['art', 'media', 'ai', 'fashion'], action: 'Live-prompt 6 frames that visualize the second-order effect' },
  { name: 'Dust', hook: 'custom AI assistants wired to team data', tags: ['ai', 'tech', 'work'], action: 'Build one assistant that only answers questions about your niche stack' },
  { name: 'Relevance AI', hook: 'agent workforce templates for GTM teams', tags: ['ai', 'tech', 'work'], action: 'Clone one sales/research agent and run it on a real lead list' },
  { name: 'Bardeen', hook: 'browser automations that glue SaaS tools', tags: ['ai', 'tech', 'work'], action: 'Wire a 3-step workflow the headline makes urgent — run once' },
  { name: 'Wordware', hook: 'English-as-code for production AI flows', tags: ['ai', 'tech'], action: 'Write a one-page "program" that turns headlines into briefs for your team' },
  { name: 'Onlook', hook: 'visual editor for React — ship UI without handoff', tags: ['tech', 'ai'], action: 'Rebuild one screen from a product you admire in 15 min' },
  { name: 'Lovable', hook: 'full-stack app gen for non-engineers', tags: ['tech', 'ai'], action: 'Ship a landing page for a wedge idea inspired by the headline' },
  { name: 'Marblism', hook: 'AI-generated SaaS starter from a prompt', tags: ['tech', 'ai'], action: 'Generate a micro-SaaS concept and list what you\'d validate first' },
  { name: 'Cline', hook: 'open-source coding agent in your IDE', tags: ['tech', 'ai'], action: 'Give it one scoped task from the headline and review the diff' },
  { name: 'Argil', hook: 'AI avatars for UGC-style ads', tags: ['creator', 'media', 'ai', 'retail'], action: 'Script a 15-sec UGC ad reacting to the news — export rough cut' },
  { name: 'Creatify', hook: 'product URL → video ad in minutes', tags: ['creator', 'retail', 'ai'], action: 'Pick a niche product and generate 2 ad variants — A/B the hook' },
  { name: 'Submagic', hook: 'auto captions + B-roll for short video', tags: ['creator', 'media', 'ai'], action: 'Post one vertical take with captions that match your brand tone' },
  { name: 'Klap', hook: 'YouTube → TikTok clips with AI reframing', tags: ['creator', 'media', 'ai'], action: 'Clip one long interview into 3 hooks about the headline topic' },
  { name: 'Exa', hook: 'neural search for primary sources, not SEO slop', why: 'If you need primary sources on a fast-moving story — not blog recap chains.', tags: ['tech', 'ai', 'finance', 'health'], keywords: ['research', 'medical', 'patient', 'cancer', 'clinical'], action: 'Find 3 non-obvious sources on the story — summarize second-order effects' },
  { name: 'Parallel', hook: 'web agents that extract structured research', tags: ['ai', 'tech', 'work'], action: 'Run one research task the headline implies and save the structured output' },
  { name: 'Tavus', hook: 'personalized video at scale for sales/creator', tags: ['creator', 'work', 'ai', 'media'], action: 'Draft a personalized 30-sec video script for one real recipient' },
  { name: 'Suno', hook: 'AI music for short-form and brand moments', tags: ['music', 'creator', 'media', 'ai'], action: 'Generate a 30-sec sonic logo for a world where the headline is true' },
  { name: 'Udio', hook: 'AI music with clearer stems for editors', tags: ['music', 'creator', 'media', 'ai'], action: 'Make a 20-sec track that sounds like the headline\'s vibe' },
  { name: 'Polymarket', hook: 'prediction markets — price the second-order effect', tags: ['finance', 'ai', 'tech'], action: 'Find a market related to the story and write a one-paragraph thesis' },
  { name: 'Kalshi', hook: 'regulated event contracts for macro bets', tags: ['finance', 'tech'], action: 'Paper-trade one contract tied to the headline — note invalidation' },
  { name: 'Bolt', hook: 'prompt → full-stack app in the browser', why: 'If you vibe-code — ship a working demo before the meeting ends.', tags: ['tech', 'ai'], keywords: ['build', 'prototype', 'ship', 'full-stack', 'demo'], curated: true },
  { name: 'Windsurf', hook: 'agentic IDE — multi-step coding flows', why: 'If Cursor is your lane — compare agent flows side by side.', tags: ['tech', 'ai'], keywords: ['code', 'agent', 'ide', 'developer', 'build'] },
  { name: 'Factory', hook: 'AI software agents for engineering teams', why: 'If agents are eating eng — see how teams delegate whole tasks.', tags: ['tech', 'ai', 'work'], keywords: ['agent', 'engineering', 'software', 'automation', 'dev'] },
  { name: 'Greptile', hook: 'AI code review on every PR', why: 'If you ship fast — automated review catches what tired eyes miss.', tags: ['tech', 'ai'], keywords: ['code', 'review', 'pr', 'developer', 'quality'] },
  { name: 'Bloop', hook: 'ask your codebase questions in plain English', why: 'If onboarding to a repo — semantic search beats grep rabbit holes.', tags: ['tech', 'ai'], keywords: ['code', 'search', 'codebase', 'developer', 'repo'] },
  { name: 'Continue', hook: 'open-source AI pair programmer — your models, your rules', why: 'If you want control — bring your own model to the editor.', tags: ['tech', 'ai'], keywords: ['code', 'open source', 'ide', 'developer', 'copilot'] },
  { name: 'Aider', hook: 'terminal pair programming with git-aware diffs', why: 'If you live in the shell — pair program without leaving it.', tags: ['tech', 'ai'], keywords: ['code', 'terminal', 'git', 'developer', 'diff'] },
  { name: 'Rork', hook: 'text → mobile app — ship to TestFlight fast', why: 'If mobile is the wedge — prototype native apps from a prompt.', tags: ['tech', 'ai'], keywords: ['mobile', 'app', 'ios', 'prototype', 'ship'] },
  { name: 'Same.new', hook: 'clone and remix any site in minutes', why: 'If you need a reference UI fast — remix, don\'t wireframe from scratch.', tags: ['tech', 'ai'], keywords: ['clone', 'design', 'prototype', 'landing', 'ui'] },
  { name: 'Magic Patterns', hook: 'UI components from prompts — export to React', why: 'If design handoff slows you — generate components you can actually ship.', tags: ['tech', 'ai', 'creator'], keywords: ['ui', 'design', 'react', 'component', 'prototype'] },
  { name: 'Composio', hook: 'wire agents to 100+ tools — Slack, GitHub, CRM', why: 'If your agent needs hands — pre-built integrations beat custom glue.', tags: ['tech', 'ai', 'work'], keywords: ['agent', 'integration', 'workflow', 'automation', 'api'] },
  { name: 'Manus', hook: 'general AI agent that runs multi-step tasks autonomously', why: 'If you want a doer not a chatbot — delegate a full brief and review output.', tags: ['tech', 'ai', 'work'], keywords: ['agent', 'autonomous', 'task', 'workflow', 'delegate'], curated: true },
  { name: 'Descript', hook: 'edit video and audio like a doc — overdub included', why: 'If you publish audio/video — text-based editing is a unfair speed edge.', tags: ['media', 'creator', 'ai'], keywords: ['podcast', 'video', 'audio', 'edit', 'voice'] },
  { name: 'ElevenLabs', hook: 'voice cloning + TTS that sounds human', why: 'If voice is your format — prototype narration without a studio.', tags: ['media', 'creator', 'ai'], keywords: ['voice', 'audio', 'tts', 'podcast', 'narration'] },
  { name: 'HeyGen', hook: 'AI avatars for explainer and sales video', why: 'If you need a presenter without booking talent — test hooks fast.', tags: ['media', 'creator', 'ai'], keywords: ['avatar', 'video', 'ugc', 'presenter', 'explainer'] },
  { name: 'Runway', hook: 'Gen-3 video — near-cinematic short clips from text', why: 'If visual storytelling matters — storyboard ideas before you shoot.', tags: ['media', 'movies', 'ai', 'creator'], keywords: ['video', 'generate', 'film', 'creative', 'storyboard'] },
  { name: 'Luma', hook: 'Dream Machine — fast 3D-aware video generation', why: 'If you test visual concepts — generate motion before committing budget.', tags: ['media', 'movies', 'ai', 'creator'], keywords: ['video', '3d', 'generate', 'creative', 'clip'] },
  { name: 'Pika', hook: 'playful AI video — quick motion from a still or prompt', why: 'If short-form is distribution — rough motion beats static posts.', tags: ['media', 'creator', 'ai'], keywords: ['video', 'short', 'reels', 'motion', 'generate'] },
  { name: 'Recraft', hook: 'vector + raster AI art with brand-consistent styles', why: 'If brand visuals matter — lock a style and iterate fast.', tags: ['art', 'creator', 'ai', 'retail'], keywords: ['design', 'visual', 'brand', 'illustration', 'creative'] },
  { name: 'Ideogram', hook: 'AI images with readable text in the frame', why: 'If you make thumbnails or ads — legible text in-gen saves hours.', tags: ['creator', 'media', 'ai'], keywords: ['image', 'design', 'thumbnail', 'ad', 'visual'] },
  { name: 'Relay.app', hook: 'human-in-the-loop automations across your stack', why: 'If agents need guardrails — approve steps before they run wild.', tags: ['work', 'ai', 'tech'], keywords: ['automate', 'workflow', 'integration', 'agent', 'ops'] },
  { name: 'Fyxer', hook: 'AI email assistant — drafts replies in your voice', why: 'If inbox is the bottleneck — draft-native beats another dashboard.', tags: ['work', 'ai'], keywords: ['email', 'assistant', 'inbox', 'reply', 'productivity'] },
  { name: 'Shortwave', hook: 'AI-native email client — summarize threads instantly', why: 'If email volume is insane — thread intelligence beats folder archaeology.', tags: ['work', 'ai', 'tech'], keywords: ['email', 'inbox', 'summary', 'productivity', 'thread'] },
  { name: 'Otter', hook: 'live meeting transcription + searchable notes', why: 'If you miss details in calls — searchable transcripts beat memory.', tags: ['work', 'ai'], keywords: ['meeting', 'transcript', 'notes', 'call', 'capture'] },
  { name: 'Fathom', hook: 'free AI meeting notes — highlights and action items', why: 'If Granola isn\'t your vibe — zero-cost meeting capture worth a spin.', tags: ['work', 'ai'], keywords: ['meeting', 'notes', 'call', 'summary', 'action items'] },
  { name: 'Fireflies', hook: 'meeting bot + CRM sync for sales teams', why: 'If sales calls are data — auto-logging beats manual CRM hygiene.', tags: ['work', 'ai', 'tech'], keywords: ['meeting', 'sales', 'crm', 'call', 'transcript'] },
  { name: 'Motion', hook: 'AI calendar that schedules tasks around your life', why: 'If time-blocking fails you — let AI rearrange when priorities shift.', tags: ['work', 'ai'], keywords: ['calendar', 'schedule', 'task', 'productivity', 'planning'] },
  { name: 'Reclaim', hook: 'defends focus time + auto-schedules habits', why: 'If meetings eat your week — automated focus blocks are underrated.', tags: ['work', 'ai'], keywords: ['calendar', 'focus', 'schedule', 'habit', 'productivity'] },
  { name: 'Consensus', hook: 'research paper search with cited answers', why: 'If you need evidence not vibes — scientific consensus beats blog takes.', tags: ['health', 'ai', 'tech'], keywords: ['research', 'paper', 'science', 'evidence', 'clinical'] },
  { name: 'Hebbia', hook: 'matrix for finance — AI over docs, filings, and decks', why: 'If you diligence deals — structured doc intelligence beats ctrl+F.', tags: ['finance', 'ai', 'work'], keywords: ['research', 'finance', 'due diligence', 'document', 'analysis'] },
  { name: 'Phind', hook: 'dev-focused search with code-aware answers', why: 'If Stack Overflow is stale — dev-native search for implementation questions.', tags: ['tech', 'ai'], keywords: ['code', 'search', 'developer', 'debug', 'implementation'] },
  { name: 'Perplexity', hook: 'answer engine with sources — fast research loops', why: 'If you need quick synthesis with citations — one tab beats ten.', tags: ['tech', 'ai', 'work'], keywords: ['research', 'search', 'source', 'answer', 'learn'] },
  { name: 'Arcade', hook: 'interactive product demos — no code, shareable links', why: 'If you ship product — clickable demos beat static screenshots.', tags: ['tech', 'creator', 'work'], keywords: ['demo', 'product', 'interactive', 'onboarding', 'sales'] },
  { name: 'Mintlify', hook: 'AI documentation — beautiful docs from your codebase', why: 'If docs lag code — auto-generated reference beats stale wikis.', tags: ['tech', 'ai'], keywords: ['docs', 'documentation', 'developer', 'api', 'reference'] },
  { name: 'tldraw', hook: 'infinite canvas + Make Real — sketch → working UI', why: 'If you think visually — whiteboard to prototype in one flow.', tags: ['tech', 'creator', 'ai'], keywords: ['design', 'sketch', 'prototype', 'ui', 'whiteboard'] },
];

const STORY_ARCHETYPES = [
  { id: 'health', label: 'Healthcare × AI', test: /cancer|oncolog|diagnos|patient|medical|healthcare|hospital|clinical|treatment|disease|therapy|physician|doctor|biotech|pharma|fight back/, toolTags: ['health'], profiles: ['founder', 'operator'] },
  { id: 'spatial', label: 'Spatial hardware', test: /smart glasses|ai glasses|vision pro|spatial computing|mixed reality|ar glasses|meta glass|ray-ban|oakley spectacles|snap spec/, toolTags: ['spatial', 'wearables'], profiles: ['founder', 'creator', 'fashion'] },
  { id: 'video', label: 'Video × Creator', test: /video|reels|tiktok|youtube|clip|snip|streaming|capcut/, toolTags: ['media', 'creator', 'movies'], profiles: ['creator', 'founder'] },
  { id: 'fashion', label: 'Fashion × Retail', test: /fashion|lookbook|apparel|luxury|retail|try-on|beauty brand|zara|lvmh/, toolTags: ['fashion', 'retail', 'beauty'], profiles: ['fashion', 'founder'] },
  { id: 'agents', label: 'Agents × Workflow', test: /\bagent|\bworkflow|autonomous|operator/, toolTags: ['work', 'tech'], profiles: ['founder', 'operator'] },
  { id: 'finance', label: 'Markets × Finance', test: /polymarket|kalshi|\bipo\b|venture capital|stock market|\bfed\b/, toolTags: ['finance'], profiles: ['founder', 'operator'] },
];

const INDIE_PREP_PLAYS = [
  { name: 'Reelful Snip', tool: 'Reelful or Opus Clip', emoji: '🎬', play: 'Import or record a 60-sec take on [topic]. Snip the best 20-sec hook — export even if rough.', minutes: 12, xp: 45, tags: ['media', 'creator', 'movies'], keywords: ['video', 'clip', 'snip', 'reels', 'tiktok', 'youtube'], curated: true },
  { name: 'Meme Take', tool: 'Memelord', emoji: '😂', play: 'Turn [topic] into 3 meme-native post ideas. Pick one and draft copy you\'d actually publish.', minutes: 10, xp: 40, tags: ['creator', 'media', 'retail'], keywords: ['meme', 'viral', 'social', 'humor', 'marketing'], curated: true },
  { name: 'Try-On Sprint', tool: 'FSHN AI or Fashn.ai', emoji: '👗', play: 'Run one look through virtual try-on reacting to [topic]. One caption — what would you refuse to automate?', minutes: 12, xp: 45, tags: ['fashion', 'retail', 'beauty'], keywords: ['fashion', 'try-on', 'lookbook', 'retail', 'apparel'] },
  { name: 'Audio Brief', tool: 'NotebookLM', emoji: '🎙️', play: 'Upload 3 sources on [topic]. Generate a 5-min audio brief — note one insight you\'d share with your team.', minutes: 15, xp: 50, tags: ['media', 'ai', 'work', 'tech'], keywords: ['podcast', 'audio', 'sources', 'research', 'learn'], curated: true },
  { name: 'Deck in 12', tool: 'Gamma', emoji: '📊', play: 'Build a 6-slide deck: headline, second-order effect, who wins, one bet. Real copy, not bullet spam.', minutes: 12, xp: 45, tags: ['work', 'creator', 'ai', 'tech'], keywords: ['deck', 'slides', 'presentation', 'pitch'], curated: true },
  { name: 'Vibe Ship', tool: 'Cursor', emoji: '⚡', play: 'Vibe-code one tiny feature or landing section inspired by [topic]. Prompt → diff → 30-sec demo.', minutes: 15, xp: 50, tags: ['tech', 'ai'], keywords: ['code', 'build', 'prototype', 'developer', 'software'], curated: true },
  { name: 'EA Test', tool: 'Howie AI', emoji: '📱', play: 'Text-delegate one real scheduling or errand task [topic] makes urgent. Log what the assistant got wrong.', minutes: 10, xp: 35, tags: ['work', 'ai', 'tech'], keywords: ['schedule', 'assistant', 'executive', 'calendar', 'texting'], curated: true },
  { name: 'Game Hook', tool: 'Pops', emoji: '🎮', play: 'Play one round, then sketch how [topic] becomes a game mechanic or challenge for your audience.', minutes: 12, xp: 40, tags: ['creator', 'media', 'ai', 'tech'], curated: true },
  { name: 'Spatial Wedge', tool: 'Brilliant Labs or Xreal dev docs', emoji: '🥽', play: 'Storyboard a 10-sec AR moment a tiny team could ship this month because of [topic]. One screen, one interaction.', minutes: 12, xp: 45, tags: ['spatial', 'wearables', 'ai', 'tech'] },
  { name: 'Indie Demo GIF', tool: 'Screen Studio + one indie tool from Pulse pick', emoji: '⚡', play: 'Sign up for a startup mentioned in your Pulse card. Record a 30-sec demo reacting to [topic] — narrate the wedge.', minutes: 12, xp: 45, tags: ['tech', 'ai'] },
  { name: 'Lookbook Sprint', tool: 'Fashn.ai or Botika', emoji: '👗', play: 'Generate a 4-image mini lookbook reacting to [topic]. One caption per look — what would you refuse to automate?', minutes: 12, xp: 45, tags: ['fashion', 'retail', 'beauty'] },
  { name: 'Clip Lab', tool: 'Opus Clip or Captions', emoji: '🎬', play: 'Record or import a 60-sec take on [topic]. Auto-cut the best 20-sec hook. Export even if rough.', minutes: 15, xp: 50, tags: ['media', 'creator', 'movies'] },
  { name: 'Agent Loop', tool: 'Howie AI or Bardeen', emoji: '🤖', play: 'Text-delegate or automate one real "brief → wait → review" task [topic] makes urgent. Run it once and screenshot output.', minutes: 15, xp: 50, tags: ['ai', 'tech', 'work'] },
  { name: 'Research Sprint', tool: 'Exa or Parallel', emoji: '🔬', play: 'Find 3 primary sources on [topic] (not blog spam). One paragraph: second-order effect + who wins.', minutes: 12, xp: 40, tags: ['tech', 'ai', 'finance'] },
  { name: 'Ship a Landing', tool: 'Lovable or Marblism', emoji: '🚀', play: 'Ship a one-screen landing for a wedge idea inspired by [topic]. Real copy, one CTA.', minutes: 15, xp: 50, tags: ['tech', 'ai'] },
  { name: 'UGC Ad Take', tool: 'Argil or Creatify', emoji: '📱', play: 'Write a 15-sec UGC script about [topic]. Generate or film one take — authentic, not corporate.', minutes: 12, xp: 45, tags: ['creator', 'retail', 'media'] },
  { name: 'Odds + Thesis', tool: 'Polymarket or Kalshi', emoji: '📈', play: 'Find a market tied to [topic]. Paper bet: size, thesis, invalidation — one paragraph.', minutes: 10, xp: 35, tags: ['finance', 'ai', 'tech'] },
  { name: 'Sonic Mood', tool: 'Suno or Udio', emoji: '🎵', play: 'Generate a 30-sec track that sounds like [topic] arriving. Title it — would you release this?', minutes: 10, xp: 40, tags: ['music', 'creator', 'media'] },
  { name: 'Visual Series', tool: 'Krea or Haiper', emoji: '🎨', play: 'Create 3 visuals in a consistent style reacting to [topic]. Name the series.', minutes: 15, xp: 50, tags: ['art', 'media', 'ai', 'fashion'] },
  { name: 'Competitive Map', tool: 'FigJam + Exa search', emoji: '🗺️', play: 'Sketch a 2×2 of indie players in [topic]. Drop 6 real companies under ~50 people. Circle white space.', minutes: 12, xp: 40, tags: ['tech', 'ai'] },
  { name: 'Bolt Ship', tool: 'Bolt or Rork', emoji: '🚀', play: 'Prompt one tiny app inspired by [topic]. Deploy or screen-record — 60 sec demo max.', minutes: 15, xp: 50, tags: ['tech', 'ai'], keywords: ['build', 'prototype', 'mobile', 'ship'], curated: true },
  { name: 'Code Review Bot', tool: 'Greptile or Bloop', emoji: '🔍', play: 'Point it at a repo tied to [topic]. Ask one question the headline raises — save the answer.', minutes: 10, xp: 35, tags: ['tech', 'ai'], keywords: ['code', 'review', 'codebase', 'developer'] },
  { name: 'Voice Take', tool: 'ElevenLabs or Descript', emoji: '🎙️', play: 'Record a 45-sec hot take on [topic]. Overdub or polish — would you publish it?', minutes: 12, xp: 40, tags: ['media', 'creator', 'ai'], keywords: ['voice', 'audio', 'podcast', 'video'] },
  { name: 'Agent Wire-up', tool: 'Composio or Relay.app', emoji: '🔌', play: 'Connect one agent to a real tool you use (Slack, GitHub, email). Run one task [topic] implies.', minutes: 15, xp: 45, tags: ['tech', 'ai', 'work'], keywords: ['agent', 'integration', 'workflow', 'automate'] },
  { name: 'Evidence Check', tool: 'Consensus or Hebbia', emoji: '📚', play: 'Find 2 cited sources on [topic]. One sentence: what changes if this is true?', minutes: 12, xp: 40, tags: ['health', 'finance', 'ai'], keywords: ['research', 'evidence', 'paper', 'analysis'] },
  { name: 'Interactive Demo', tool: 'Arcade or Screen Studio', emoji: '🖱️', play: 'Record a clickable 30-sec demo reacting to [topic]. One CTA — who is it for?', minutes: 12, xp: 45, tags: ['tech', 'creator', 'work'], keywords: ['demo', 'product', 'screen', 'interactive'] },
];

const GENERIC_STARTUP_PATTERNS = [
  /chatgpt|openai['']s chat|brainstorm|content generation|enhanced ai/i,
  /google gemini|microsoft copilot|notion ai|generic chat/i,
  /figma.*compar|comparison chart|compare.*model|model compar/i,
  /side-by-side.*claude|claude \+ chatgpt/i,
  /^try (openai|google|microsoft|meta|apple|amazon)\b/i,
];

const GENERIC_PREP_PATTERNS = [
  /comparison chart|compare.*model|model compar|side-by-side/i,
  /chatgpt|brainstorm|generic chat|figma.*compar/i,
  /features and performance metrics/i,
];

function hashPick(arr, seed) {
  if (!arr?.length) return null;
  let h = 0;
  String(seed).split('').forEach((c) => { h = ((h << 5) - h) + c.charCodeAt(0); h |= 0; });
  return arr[Math.abs(h) % arr.length];
}

function classifyStoryArchetype(headline, topics) {
  const h = (headline || '').toLowerCase();
  for (const a of STORY_ARCHETYPES) {
    if (a.test.test(h)) return { ...a };
  }
  return { id: 'general', label: 'AI × Tech', toolTags: ['tech', 'ai'], profiles: ['founder', 'operator', 'creator', 'fashion'] };
}

function isProfileRelevantToArchetype(profile, archetypeId) {
  if (!profile || profile === 'auto') return true;
  if (!archetypeId || archetypeId === 'general') return true;
  const archetype = STORY_ARCHETYPES.find((a) => a.id === archetypeId);
  return (archetype?.profiles || ['founder']).includes(profile);
}

function headlineTags(headline) {
  const h = (headline || '').toLowerCase();
  const tags = new Set();
  if (/cancer|oncolog|patient|medical|healthcare|hospital|clinical|diagnosis|disease|therapy|doctor|physician|biotech/.test(h)) tags.add('health');
  if (/wearable|glasses|vision pro|spatial|mixed reality|ar\b/.test(h)) ['spatial', 'wearables'].forEach((t) => tags.add(t));
  if (/openai|anthropic|llm|agent|copilot/.test(h) && !tags.has('health')) tags.add('ai');
  if (/video|reels|tiktok|youtube|film|movie|clip|snip/.test(h)) ['media', 'movies', 'creator'].forEach((t) => tags.add(t));
  if (/fashion|retail|lookbook|apparel|luxury|beauty|try-on|try on/.test(h)) ['fashion', 'retail', 'beauty'].forEach((t) => tags.add(t));
  if (/meme|humor|viral|social media/.test(h)) ['creator', 'media', 'retail'].forEach((t) => tags.add(t));
  if (/schedule|assistant|executive|calendar/.test(h)) tags.add('work');
  if (/podcast|audio brief|notebook/.test(h)) ['media', 'work'].forEach((t) => tags.add(t));
  if (/deck|slides|presentation|pitch/.test(h)) ['work', 'creator'].forEach((t) => tags.add(t));
  if (/game|playful|engagement/.test(h)) ['creator', 'media'].forEach((t) => tags.add(t));
  if (/hire|layoff|workforce|remote/.test(h)) tags.add('work');
  if (/market|ipo|venture|stock|fed/.test(h)) tags.add('finance');
  if (/music|audio|podcast/.test(h)) tags.add('music');
  return [...tags];
}

function scoreByTags(item, topicList, headline, archetype) {
  const tags = new Set([...(topicList || []), ...headlineTags(headline)]);
  let score = 0;
  for (const tag of tags) {
    if ((item.tags || []).includes(tag)) score += 3;
  }
  if (headline) {
    const h = headline.toLowerCase();
    if (h.includes(item.name.toLowerCase())) score += 10;
    for (const tag of item.tags || []) {
      if (h.includes(tag)) score += 1;
    }
    for (const kw of item.keywords || []) {
      if (h.includes(kw)) score += 4;
    }
  }
  if (archetype && archetype.id !== 'general') {
    const archetypeTags = archetype.toolTags || [];
    const overlap = archetypeTags.filter((t) => (item.tags || []).includes(t)).length;
    if (overlap === 0) score -= 25;
    else score += overlap * 8;
    if (item.curated && overlap === 0) score -= 10;
  } else if (item.curated) {
    const tagOverlap = [...tags].filter((t) => (item.tags || []).includes(t)).length;
    score += tagOverlap > 0 ? 6 : 1;
  }
  return score;
}

function pickIndieStartups(topics, headline, seed, count = 2, archetype) {
  const arch = archetype || classifyStoryArchetype(headline, topics);
  const scored = INDIE_STARTUP_PICKS
    .map((s) => ({ s, score: scoreByTags(s, topics, headline, arch) }))
    .sort((a, b) => b.score - a.score || a.s.name.localeCompare(b.s.name));

  const positive = scored.filter((x) => x.score > 0).map((x) => x.s);
  if (positive.length >= count) return positive.slice(0, count);

  if (arch.id !== 'general') {
    const fallback = INDIE_STARTUP_PICKS.filter((s) => (arch.toolTags || []).some((t) => (s.tags || []).includes(t)));
    if (fallback.length >= count) return fallback.slice(0, count);
  }

  const picks = [];
  const used = new Set();
  let i = 0;
  while (picks.length < count && i < INDIE_STARTUP_PICKS.length * 2) {
    const pick = hashPick(INDIE_STARTUP_PICKS, `${seed}-${i}`);
    if (pick && !used.has(pick.name)) {
      picks.push(pick);
      used.add(pick.name);
    }
    i += 1;
  }
  return picks.length ? picks : INDIE_STARTUP_PICKS.slice(0, count);
}

function pickIndiePrep(topics, headline, seed) {
  const scored = INDIE_PREP_PLAYS
    .map((p) => ({ p, score: scoreByTags(p, topics, headline) }))
    .sort((a, b) => b.score - a.score || a.p.name.localeCompare(b.p.name));
  const positive = scored.filter((x) => x.score > 0).map((x) => x.p);
  const picked = positive[0] || hashPick(INDIE_PREP_PLAYS, seed) || INDIE_PREP_PLAYS[0];
  return {
    ...picked,
    play: (picked.play || '').replace(/\[topic\]/g, (headline || 'this trend').substring(0, 80)),
  };
}

function pickWhy(pick) {
  if (pick.why) return pick.why;
  if (pick.hook) return pick.hook.charAt(0).toUpperCase() + pick.hook.slice(1) + '.';
  return 'Early-stage — worth a demo if this lane is yours.';
}

function pickToTool(pick) {
  return {
    name: pick.name,
    hook: pick.hook,
    why: pickWhy(pick),
    url: pick.url || resolveToolUrl(pick.name),
    badge: pick.badge,
  };
}

function pickIndieTools(topics, headline, seed, count = 4, archetype) {
  return pickIndieStartups(topics, headline, seed, count, archetype).map(pickToTool);
}

function buildCondensedTake(tools, secondOrder, headline, opts = {}) {
  const archetype = opts.archetype || classifyStoryArchetype(headline, opts.topics);
  const profile = opts.profile;
  const profileLabel = opts.profileLabel;
  const names = (tools || []).slice(0, 2).map((t) => t.name).filter(Boolean);
  if (profile && !isProfileRelevantToArchetype(profile, archetype.id)) {
    if (names.length) {
      return `Outside your ${profileLabel || profile} lane — skip unless adjacent. If you peek anyway: ${names.join(' or ')}.`;
    }
    return `${archetype.label} signal — outside your ${profileLabel || profile} lane. Skim the forecast or skip.`;
  }
  const core = (secondOrder || '').replace(/\s+/g, ' ').trim();
  if (!names.length) {
    return core ? `${core} — no tight tool match; treat as signal only.` : 'Signal only — no action needed unless this is your lane.';
  }
  if (!core) return `${archetype.label}: worth trying ${names.join(' or ')} if you build here.`;
  const snippet = core.length > 90 ? `${core.slice(0, 87)}…` : core;
  return `${snippet} → ${names.join(' or ')} if ${archetype.label} is your lane.`;
}

function buildPulseToolsBlock(topics, headline, seed, opts = {}) {
  const archetype = opts.archetype || classifyStoryArchetype(headline, topics);
  let tools = pickIndieTools(topics, headline, seed, opts.count || 4, archetype);
  const mergeLaunchesIntoTools = resolveMergeLaunchesIntoTools();
  if (opts.launches?.length && mergeLaunchesIntoTools) {
    tools = mergeLaunchesIntoTools(tools, opts.launches, headline, archetype, 1);
  }
  return {
    version: 2,
    archetype: archetype.id,
    tools,
    launches: (opts.launches || []).slice(0, 5).map((l) => ({ name: l.name, tagline: l.tagline, url: l.url, source: l.source })),
    condensed: opts.condensed || buildCondensedTake(tools, opts.secondOrder, headline, { ...opts, archetype, topics }),
  };
}

function isPulseToolsBlock(block) {
  return block && block.version === 2 && Array.isArray(block.tools) && block.tools.length;
}

function resolvePulseToolsBlock(block, topics, headline, seed, opts = {}) {
  const archetype = opts.archetype || classifyStoryArchetype(headline, topics);
  const profile = opts.profile;
  const profileLabel = opts.profileLabel;
  if (isPulseToolsBlock(block) && !isGenericToolsBlock(block)) {
    if (block.archetype && block.archetype !== archetype.id) {
      return buildPulseToolsBlock(topics, headline, seed, opts);
    }
    return {
      ...block,
      condensed: block.condensed || buildCondensedTake(block.tools, opts.secondOrder, headline, { ...opts, archetype, topics, profile, profileLabel }),
    };
  }
  if (block?.tools?.length && !isGenericToolsBlock(block)) {
    return {
      version: 2,
      archetype: archetype.id,
      tools: block.tools.slice(0, 4),
      condensed: block.condensed || buildCondensedTake(block.tools, opts.secondOrder, headline, { ...opts, archetype, topics, profile, profileLabel }),
    };
  }
  return buildPulseToolsBlock(topics, headline, seed, { ...opts, archetype, topics, profile, profileLabel });
}

function isGenericToolsBlock(block) {
  if (!block?.tools?.length) return true;
  return block.tools.every((t) => isGenericPulseStartupHint(`${t.name} ${t.hook} ${t.why || ''}`));
}

function formatToolsSummary(tools) {
  return (tools || []).slice(0, 3).map((t) => `${t.name} — ${t.hook}`).join(' · ');
}

function formatIndieStartupHint(picks) {
  const tools = (picks || []).slice(0, 2).map(pickToTool);
  return formatToolsSummary(tools);
}

function isGenericPulseStartupHint(text) {
  if (!text || text.length < 24) return true;
  return GENERIC_STARTUP_PATTERNS.some((re) => re.test(text));
}

function isGenericPulsePrep(prep) {
  if (!prep?.play && !prep?.tool) return true;
  const hay = `${prep.name || ''} ${prep.tool || ''} ${prep.play || ''}`;
  return GENERIC_PREP_PATTERNS.some((re) => re.test(hay));
}

function resolvePulseStartupHint(hint, topics, headline, seed) {
  if (!isGenericPulseStartupHint(hint)) return hint;
  const archetype = classifyStoryArchetype(headline, topics);
  return formatToolsSummary(pickIndieTools(topics, headline, seed, 2, archetype));
}

function resolvePulsePrep(prep, topics, headline, seed) {
  return resolvePulseToolsBlock(prep, topics, headline, seed);
}

function defaultPulseTools(topics, headline, seed, opts) {
  return buildPulseToolsBlock(topics, headline, seed, opts);
}

function formatIndiePicksForPrompt(topics, headline, limit = 10) {
  return pickIndieStartups(topics, headline, headline || 'pulse', limit)
    .map((p) => `- ${p.name}: ${p.hook} (tags: ${(p.tags || []).slice(0, 4).join(', ')})`)
    .join('\n');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    INDIE_STARTUP_PICKS,
    STORY_ARCHETYPES,
    INDIE_PREP_PLAYS,
    classifyStoryArchetype,
    isProfileRelevantToArchetype,
    pickIndieStartups,
    pickIndieTools,
    pickIndiePrep,
    pickToTool,
    buildCondensedTake,
    buildPulseToolsBlock,
    resolvePulseToolsBlock,
    isPulseToolsBlock,
    formatToolsSummary,
    formatIndieStartupHint,
    isGenericPulseStartupHint,
    isGenericPulsePrep,
    resolvePulseStartupHint,
    resolvePulsePrep,
    defaultPulseTools,
    formatIndiePicksForPrompt,
    hashPick,
    TOOL_URLS,
    resolveToolUrl,
  };
}
if (typeof window !== 'undefined') {
  window.classifyStoryArchetype = classifyStoryArchetype;
  window.isProfileRelevantToArchetype = isProfileRelevantToArchetype;
  window.buildPulseToolsBlock = buildPulseToolsBlock;
  window.buildCondensedTake = buildCondensedTake;
  window.resolvePulseToolsBlock = resolvePulseToolsBlock;
  window.pickIndieTools = pickIndieTools;
  window.resolveToolUrl = resolveToolUrl;
  window.TOOL_URLS = TOOL_URLS;
}
