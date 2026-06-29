#!/usr/bin/env node
/**
 * Refresh forecast database: dedupe, update Polymarket odds, sync all copies.
 * Run: node scripts/refresh-forecasts.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'shared/forecasts-data.js');
const MOBILE = path.join(ROOT, 'aiproof-mobile/src/logic/forecast-database.js');
const APP_HTML = path.join(ROOT, 'app.html');
const COMPREHENSIVE = path.join(ROOT, 'forecasts-comprehensive.js');

/** Polymarket / market odds refreshed June 2026 */
const PROBABILITY_UPDATES = {
  'google-ai-dominance': 8,
  'agi-before-2027': 12,
  'gpt-6-release': 72,
  'claude-5-release': 92,
  'openai-hardware': 55,
  'ai-bubble-burst': 18,
  'ai-coding-dominance': 68,
  'ai-tutors-mainstream': 75,
  'full-length-ai-movies': 42,
  'ai-medical-diagnosis': 78,
  'ai-surveillance-expansion': 58,
  'ai-voice-cloning-ubiquitous': 92,
  'ai-realtime-translation': 88,
  'ai-music-indistinguishable': 82,
  'ai-legal-automation': 48,
  'jobs-80-transform': 52,
  'workweek-shrinks': 32,
  'first-trillionaire-ai': 55,
  'remote-work-default': 82,
  'gig-economy-dominant': 45,
  'resume-obsolete': 70,
  'ubi-experiments-expand': 58,
  'us-recession-2026': 15,
  'bitcoin-price-2026': 20,
  'fed-rate-decisions': 60,
  'nvidia-largest-company': 88,
  'ai-wealth-inequality': 68,
  'intelligence-value-zero': 35,
  'personalized-content-all': 72,
  'creator-middle-class-gone': 58,
  'ai-news-generation': 65,
  'influencer-trust-collapse': 68,
  'bitcoin-nation-reserve': 45,
  'defi-100m-users': 50,
  'satoshi-moves-bitcoin': 4,
  'life-extension-therapies': 38,
  'human-ai-merge-begins': 42,
  'tiktok-ban-upheld': 72,
  'spacex-ipo-trillion': 35,
  'anthropic-ipo': 55,
  'robotaxi-10-cities': 62,
};

const THREAT_UPDATES = {
  'google-ai-dominance':
    'Markets now price Anthropic and OpenAI ahead on model quality. Betting on a single vendor without a multi-model strategy is risky.',
};

const NEW_FORECASTS = [
  {
    id: 'anthropic-enterprise-leadership',
    title: 'Anthropic leads enterprise AI model adoption in 2026',
    source: 'Polymarket + Menlo Ventures enterprise data',
    probability: 78,
    timeframe: '2026',
    category: 'ai',
    threatMode: 'execution',
    threatReason:
      'Enterprise buyers are consolidating on coding-capable models. Teams that only know ChatGPT are falling behind Claude-native workflows.',
    atRisk: 'Developers and consultants who have not tested Anthropic tooling in production workflows',
    opportunities: [
      {
        title: '🏢 Enterprise Claude Implementation Partner',
        mode: 'execution',
        description:
          'Help companies migrate workflows to Claude — the model enterprises are actually standardizing on.',
        difficulty: 'medium',
        timeframe: '3-6 months',
        quests: [
          { mode: 'ideas', task: 'Compare Claude vs GPT-4o vs Gemini on 5 real business tasks. Document wins and losses.', xp: 40 },
          { mode: 'execution', task: 'Build a Claude-powered workflow for one business process (support, sales, ops).', xp: 45 },
          { mode: 'personality', task: 'Share a public case study of your Claude implementation.', xp: 40 },
          { mode: 'execution', task: 'Create a migration checklist: prompts, evals, security, cost controls.', xp: 45 },
          { mode: 'personality', task: 'Offer 3 free Claude audits to small teams.', xp: 50 },
          { mode: 'execution', task: 'Package a fixed-price Claude rollout offer.', xp: 50 },
          { mode: 'execution', task: 'Land your first paid Claude implementation client.', xp: 55 },
        ],
      },
    ],
  },
  {
    id: 'ai-agents-knowledge-work',
    title: 'AI agents handle end-to-end knowledge work tasks by default',
    source: 'Industry trend + Polymarket adjacent markets',
    probability: 55,
    timeframe: '2026-2027',
    category: 'work',
    threatMode: 'execution',
    threatReason:
      'Agents that research, draft, and execute multi-step tasks are moving from demo to default. Individual contributors who only do single-step work get compressed.',
    atRisk: 'Analysts, coordinators, and junior knowledge workers who do not supervise agent workflows',
    opportunities: [
      {
        title: '🤖 AI Agent Workflow Designer',
        mode: 'execution',
        description: 'Design and sell agent workflows that replace 5–10 hours of manual work per week.',
        difficulty: 'medium',
        timeframe: '3-6 months',
        quests: [
          { mode: 'ideas', task: 'Map one job (yours or a client role) into agent-delegatable vs human-only tasks.', xp: 35 },
          { mode: 'execution', task: 'Build one working agent workflow using Claude Code, Cursor, or similar.', xp: 45 },
          { mode: 'execution', task: 'Measure time saved vs manual process. Document ROI.', xp: 40 },
          { mode: 'personality', task: 'Publish your workflow publicly. Collect feedback.', xp: 40 },
          { mode: 'execution', task: 'Productize the workflow as a template or service.', xp: 50 },
          { mode: 'execution', task: 'Get paid to implement agent workflows for one client.', xp: 55 },
        ],
      },
    ],
  },
  {
    id: 'ai-compliance-officer-boom',
    title: 'Every mid-size company hires an AI governance role',
    source: 'Regulatory trend analysis',
    probability: 62,
    timeframe: '2026-2028',
    category: 'work',
    threatMode: 'personality',
    threatReason:
      'EU AI Act enforcement and enterprise liability fears create demand for people who can translate policy into practice.',
    atRisk: 'Teams deploying AI without documented governance; compliance-only lawyers without AI fluency',
    opportunities: [
      {
        title: '📋 AI Governance Consultant',
        mode: 'personality',
        description: 'Help companies write AI policies, run audits, and train staff — before regulators force their hand.',
        difficulty: 'medium',
        timeframe: '6-12 months',
        quests: [
          { mode: 'ideas', task: 'Read the EU AI Act summary and NIST AI RMF. List 10 actionable requirements for SMBs.', xp: 40 },
          { mode: 'execution', task: 'Create an AI use policy template any company can adopt.', xp: 45 },
          { mode: 'personality', task: 'Offer a free AI governance workshop to one company.', xp: 50 },
          { mode: 'execution', task: 'Build a 20-point AI audit checklist.', xp: 45 },
          { mode: 'execution', task: 'Land first paid governance engagement.', xp: 55 },
        ],
      },
    ],
  },
];

function loadForecasts(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  vm.runInNewContext(code + '\nthis.FORECAST_DATABASE = FORECAST_DATABASE;', sandbox);
  return sandbox.FORECAST_DATABASE;
}

function scoreEntry(f) {
  let score = 0;
  if (f.source === 'Polymarket') score += 100;
  if (f.source?.includes('Polymarket')) score += 80;
  if (f.sourceUrl) score += 10;
  if (f.opportunities?.length) score += f.opportunities.length;
  return score;
}

function dedupeForecasts(list) {
  const byId = new Map();
  for (const f of list) {
    const existing = byId.get(f.id);
    if (!existing || scoreEntry(f) > scoreEntry(existing)) {
      byId.set(f.id, f);
    }
  }
  return [...byId.values()];
}

function applyUpdates(forecasts) {
  const ids = new Set(forecasts.map((f) => f.id));

  for (const f of forecasts) {
    if (PROBABILITY_UPDATES[f.id] !== undefined) {
      f.probability = PROBABILITY_UPDATES[f.id];
    }
    if (THREAT_UPDATES[f.id]) f.threatReason = THREAT_UPDATES[f.id];
  }

  for (const nf of NEW_FORECASTS) {
    if (!ids.has(nf.id)) {
      forecasts.push(nf);
      ids.add(nf.id);
    }
  }

  return forecasts;
}

function toJsLiteral(forecasts) {
  return JSON.stringify(forecasts, null, 4).replace(/"([^"]+)":/g, '$1:');
}

function serializeDatabase(forecasts) {
  const header = `// FORECAST DATABASE
// Last updated: June 2026
// Odds refreshed from Polymarket, Metaculus, and prediction market data
// Run \`node scripts/refresh-forecasts.js\` to dedupe and sync copies

const FORECAST_DATABASE = `;
  return header + toJsLiteral(forecasts) + ';\n';
}

function syncAppHtml(forecasts) {
  let html = fs.readFileSync(APP_HTML, 'utf8');
  const startMarker = '// COMPREHENSIVE FORECAST DATABASE';
  const endMarker = 'function getUrgency(forecast)';

  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error('Could not locate FORECAST_DATABASE block in app.html');
  }

  const replacement = `// COMPREHENSIVE FORECAST DATABASE
// Last updated: June 2026
// Odds refreshed from Polymarket, Metaculus, and prediction market data

const FORECAST_DATABASE = ${toJsLiteral(forecasts)};

`;

  html = html.slice(0, startIdx) + replacement + html.slice(endIdx);
  fs.writeFileSync(APP_HTML, html);
}

function main() {
  console.log('Loading forecasts...');
  let forecasts = loadForecasts(SOURCE);
  const before = forecasts.length;

  forecasts = dedupeForecasts(forecasts);
  console.log(`Deduped: ${before} → ${forecasts.length} forecasts`);

  forecasts = applyUpdates(forecasts);
  console.log(`Applied probability updates + ${NEW_FORECASTS.length} new forecasts`);

  const output = serializeDatabase(forecasts);

  fs.writeFileSync(SOURCE, output);
  fs.writeFileSync(MOBILE, output);
  console.log(`Wrote ${SOURCE}`);
  console.log(`Wrote ${MOBILE}`);

  syncAppHtml(forecasts);
  console.log(`Patched ${APP_HTML}`);

  if (fs.existsSync(COMPREHENSIVE)) {
    let comp = fs.readFileSync(COMPREHENSIVE, 'utf8');
    comp = comp.replace(/Last updated: .+/, 'Last updated: June 2026');
    fs.writeFileSync(COMPREHENSIVE, comp);
  }

  console.log(`Done. ${forecasts.length} forecasts synced across web + mobile.`);
}

main();
