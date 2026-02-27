// netlify/functions/subscribe-beehiiv.js
// Subscribes a user to the AI Proof Club beehiiv newsletter
// Called from the frontend on: quiz completion, signup, and paid conversion
//
// Add these to Netlify environment variables (Site → Environment variables):
//   BEEHIIV_API_KEY     = wn6Xi6ynw4wD0KFYCsYNB9rytEXMwIqsK1FPWIWcJbx1d4198PC55g97D0rd6RlQ
//   BEEHIIV_PUBLICATION_ID = 53cd0afc-7724-42e5-b171-65c2f2b5f22f

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

exports.handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
    }

    const { email, user_type, industry, name } = body;

    if (!email) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Email required' }) };
    }

    // Build custom fields for segmentation in beehiiv
    const customFields = [];
    if (industry) customFields.push({ name: 'industry', value: industry });
    if (name)     customFields.push({ name: 'name',     value: name });
    // user_type will be 'lead' or 'member' — visible in beehiiv subscriber view
    if (user_type) customFields.push({ name: 'user_type', value: user_type });

    try {
        const response = await fetch(
            `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
                },
                body: JSON.stringify({
                    email,
                    reactivate_existing: true,   // Re-subscribe if they previously unsubscribed
                    send_welcome_email: false,    // We handle welcome emails via Resend already
                    utm_source: user_type === 'lead' ? 'quiz' : 'signup',
                    utm_medium: 'organic',
                    custom_fields: customFields,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('beehiiv API error:', data);
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: data }),
            };
        }

        console.log(`Subscribed ${email} as ${user_type} — beehiiv id: ${data?.data?.id}`);

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                success: true,
                subscriber_id: data?.data?.id,
                status: data?.data?.status,
            }),
        };

    } catch (err) {
        console.error('subscribe-beehiiv error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};
