// GET latest pulse items for the web app (public read)
// Optional fallback if Supabase RLS blocks direct client reads

function normalizeSupabaseUrl(url) {
  const fallback = 'https://snbchuvvnbwvghmbxehv.supabase.co';
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.includes('.supabase.co')) return `https://${trimmed}`;
  return `https://${trimmed}.supabase.co`;
}

const SUPABASE_URL = normalizeSupabaseUrl(process.env.SUPABASE_URL);
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
  'Cache-Control': 'public, max-age=300',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const limit = Math.min(parseInt(event.queryStringParameters?.limit || '12', 10), 20);

  try {
    const url = `${SUPABASE_URL}/rest/v1/pulse_items?active=eq.true&order=published_at.desc&limit=${limit}`;
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!res.ok) {
      const err = await res.text();
      return { statusCode: res.status, headers, body: JSON.stringify({ error: err, items: [] }) };
    }

    const items = await res.json();
    return { statusCode: 200, headers, body: JSON.stringify({ items }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message, items: [] }) };
  }
};
