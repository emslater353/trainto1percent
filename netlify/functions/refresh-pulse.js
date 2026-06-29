// Scheduled + manual: refresh Pulse feed (RSS + AI → Supabase)
// Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY

const { runPulseRefresh } = require('../../scripts/pulse-lib');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod && event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'GET only' }) };
  }

  const maxItems = Math.min(parseInt(event.queryStringParameters?.limit || '6', 10), 10);

  try {
    const result = await runPulseRefresh({
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      openaiKey: process.env.OPENAI_API_KEY,
      maxItems,
    });

    console.log('Pulse refresh OK:', result);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.error('Pulse refresh error:', e);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: e.message, ok: false }),
    };
  }
};
