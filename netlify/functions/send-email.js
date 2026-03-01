// Netlify serverless function for sending emails via Resend
// Environment variable needed: RESEND_API_KEY

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPPORT_EMAIL = 'erica.m.slater@gmail.com';
const FROM_EMAIL = 'AI Proof Club <noreply@aiproof.club>';

exports.handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    try {
        const { type, data } = JSON.parse(event.body);

        let emailPayload;

        switch (type) {
            case 'welcome':
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Welcome to AI Proof Club',
                    html: generateWelcomeEmail(data.name)
                };
                break;

            case 'password-reset':
                const resetToken = generateToken();
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Reset Your AI Proof Club Password',
                    html: generatePasswordResetEmail(data.name, resetToken)
                };
                break;

            case 'weekly-tasks':
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: `Week ${data.weekNum}: Your AI Proof Quests Are Ready`,
                    html: generateWeeklyEmail(data.name, data.weekNum, data.tasks, data.stats)
                };
                break;

            case 'support':
                emailPayload = {
                    from: FROM_EMAIL,
                    to: SUPPORT_EMAIL,
                    subject: `[AI Proof Club] ${data.subject}`,
                    html: generateSupportEmail(data),
                    reply_to: data.email
                };
                await sendEmail({
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'We received your message — AI Proof Club',
                    html: generateSupportConfirmation(data.name)
                });
                break;

            case 'report':
                // Resend accepts `to` as array for multiple recipients
                const allRecipients = [data.teamEmail, ...(data.teamEmailCc || [])].filter(Boolean);
                console.log('Report email data:', JSON.stringify({ 
                    to: allRecipients, 
                    senderName: data.senderName, 
                    senderNote: data.senderNote,
                    domain: data.domain
                }));
                emailPayload = {
                    from: FROM_EMAIL,
                    to: allRecipients.length > 1 ? allRecipients : allRecipients[0],
                    reply_to: data.senderEmail || FROM_EMAIL,
                    subject: data.subject || `AI Opportunity Report — ${data.domain}`,
                    html: generateReportEmail(data)
                };
                break;

            default:
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Invalid email type' })
                };
        }

        const result = await sendEmail(emailPayload);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, ...result })
        };

    } catch (error) {
        console.error('Email error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};

async function sendEmail(payload) {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Resend API error: ${error}`);
    }

    return response.json();
}

function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// ==================== EMAIL TEMPLATES ====================

function generateReportEmail(data) {
    const { domain, reportType, result, providerName, providerColor, senderName, senderNote } = data;
    const accentColor = providerColor || '#00e5c7';
    const opps = (result && result.opportunities) || [];
    const risks = (result && result.threats) || [];
    const title = reportType === 'threat'
        ? `${providerName || 'AI'} Threat Assessment: ${domain}`
        : `AI Opportunity Report: ${domain}`;
    const displayName = (senderName && senderName.trim() && senderName !== 'Someone') ? senderName.trim() : 'Someone';
    const displayNote = senderNote && senderNote.trim() ? senderNote.trim() : '';

    const oppRows = opps.map((o, i) => `
        <div style="border-left: 3px solid ${accentColor}; padding: 12px 16px; margin-bottom: 12px; background: #0d0d12;">
            ${o.prediction ? `<div style="font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: ${accentColor}; margin-bottom: 4px;">${o.prediction}</div>` : ''}
            <div style="font-size: 15px; font-weight: 700; margin-bottom: 4px; color: #e8e8ec;">${i + 1}. ${o.title}</div>
            <div style="font-size: 13px; color: #9090a0;">${o.description}</div>
        </div>
    `).join('');

    const riskRows = risks.map(t => `
