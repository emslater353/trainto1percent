// Scheduled + manual: refresh Pulse feed (RSS + AI → Supabase)
// Cron has a 30s limit — scheduled runs queue refresh-pulse-background.
// Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY, URL

const { runPulseRefresh } = require('../../scripts/pulse-lib');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
};

function isScheduledInvocation(event) {
  if (event?.source === 'netlify-scheduled') return true;
  const netlifyEvent = event?.headers?.['x-netlify-event'] || event?.headers?.['X-Netlify-Event'];
  if (String(netlifyEvent || '').toLowerCase() === 'scheduled') return true;
  if (!event?.httpMethod) {
    try {
      const body = typeof event?.body === 'string' ? JSON.parse(event.body || '{}') : event?.body;
      if (body?.next_run) return true;
    } catch (_) { /* ignore */ }
  }
  return false;
}

function siteBaseUrl() {
  return (process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://aiproof.club').replace(/\/$/, '');
}

async function queueBackgroundRefresh(limit = 10) {
  const res = await fetch(`${siteBaseUrl()}/.netlify/functions/refresh-pulse-background`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ limit, source: 'cron' }),
  });
  return res.status;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (isScheduledInvocation(event)) {
    try {
      const backgroundStatus = await queueBackgroundRefresh(10);
      console.log('Pulse cron queued background refresh:', backgroundStatus);
      return {
        statusCode: 202,
        headers,
        body: JSON.stringify({ ok: true, queued: true, backgroundStatus }),
      };
    } catch (e) {
      console.error('Pulse cron queue failed:', e);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: e.message, ok: false }),
      };
    }
  }

  if (event.httpMethod && event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'GET only' }) };
  }

  const maxItems = Math.min(parseInt(event.queryStringParameters?.limit || '10', 10), 12);

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
