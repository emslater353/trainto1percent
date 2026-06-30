// Background ingest — up to 15 min (hourly cron triggers this via refresh-pulse)
// Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY

const { runPulseRefresh } = require('../../scripts/pulse-lib');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  let maxItems = 10;
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    maxItems = Math.min(parseInt(body.limit || '10', 10), 12);
  } catch (_) { /* default */ }

  try {
    const result = await runPulseRefresh({
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      openaiKey: process.env.OPENAI_API_KEY,
      maxItems,
    });

    console.log('Pulse background refresh OK:', result);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.error('Pulse background refresh error:', e);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: e.message, ok: false }),
    };
  }
};
