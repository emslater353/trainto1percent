// Deletes a user's account (Supabase Auth + users table).
// Required Netlify env: SUPABASE_SERVICE_ROLE_KEY

const SUPABASE_URL = 'https://snbchuvvnbwvghmbxehv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYmNodXZ2bmJ3dmdobWJ4ZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MDg5NzMsImV4cCI6MjA4NTQ4NDk3M30.cKPieraN3FRT_5ilAQL0X2b9kIpklzE49xGzVJwYxZo';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Account deletion is not configured yet. Contact support@aiproof.club.' })
        };
    }

    try {
        const { email, accessToken } = JSON.parse(event.body || '{}');
        if (!email || !accessToken) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Email and access token are required.' }) };
        }

        const userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${accessToken}`
            }
        });
        const userData = await userRes.json();
        if (!userRes.ok || !userData?.email) {
            return { statusCode: 401, headers, body: JSON.stringify({ error: 'Invalid session. Sign in again and retry.' }) };
        }

        if (userData.email.toLowerCase() !== String(email).toLowerCase()) {
            return { statusCode: 403, headers, body: JSON.stringify({ error: 'Account mismatch.' }) };
        }

        const adminHeaders = {
            apikey: serviceKey,
            Authorization: `Bearer ${serviceKey}`,
            'Content-Type': 'application/json'
        };

        await fetch(`${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(userData.email)}`, {
            method: 'DELETE',
            headers: { ...adminHeaders, Prefer: 'return=minimal' }
        });

        await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${encodeURIComponent(userData.email)}`, {
            method: 'DELETE',
            headers: { ...adminHeaders, Prefer: 'return=minimal' }
        }).catch(() => {});

        const deleteAuthRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${userData.id}`, {
            method: 'DELETE',
            headers: adminHeaders
        });

        if (!deleteAuthRes.ok) {
            const err = await deleteAuthRes.text();
            console.error('Auth delete failed:', err);
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not delete account. Contact support@aiproof.club.' }) };
        }

        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch (err) {
        console.error('delete-account error:', err);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Unexpected error. Contact support@aiproof.club.' }) };
    }
};
