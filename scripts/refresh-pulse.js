#!/usr/bin/env node
/**
 * Refresh Pulse feed: RSS → forecast match → AI insight → Supabase
 *
 * Usage:
 *   node scripts/refresh-pulse.js              # full refresh (needs env vars)
 *   node scripts/refresh-pulse.js --dry-run    # preview without writing
 *   node scripts/refresh-pulse.js --no-ai      # skip OpenAI (faster/cheaper)
 *
 * Env (local: export or .env via Netlify dev):
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY  (required for writes)
 *   OPENAI_API_KEY             (optional but recommended)
 */
const { runPulseRefresh } = require('./pulse-lib');

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const skipAi = process.argv.includes('--no-ai');

  const supabaseUrl = process.env.SUPABASE_URL || 'https://snbchuvvnbwvghmbxehv.supabase.co';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!dryRun && !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn('Warning: SUPABASE_SERVICE_ROLE_KEY not set — writes may fail. Use service role for cron.');
  }

  console.log(`Pulse refresh starting${dryRun ? ' (dry run)' : ''}${skipAi ? ' (no AI)' : ''}…`);

  try {
    const result = await runPulseRefresh({
      supabaseUrl,
      supabaseKey,
      openaiKey: skipAi ? null : process.env.OPENAI_API_KEY,
      maxItems: 6,
      dryRun,
      skipAi,
    });

    if (result.dryRun) {
      console.log(`\nDry run — ${result.count} items would be upserted:\n`);
      result.rows.forEach((r, i) => console.log(`${i + 1}. [${r.topics?.join(', ')}] ${r.headline}`));
    } else {
      console.log(`\nDone — upserted ${result.count} pulse items.`);
      result.rows.forEach((r, i) => console.log(`${i + 1}. ${r.headline}`));
    }
  } catch (e) {
    console.error('Pulse refresh failed:', e.message);
    process.exit(1);
  }
}

main();
