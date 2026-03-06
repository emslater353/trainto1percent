// Netlify Scheduled Function — runs daily at 10am EST
// Sends a trial reminder email to users whose trial ends tomorrow (day 2 of 3)
//
// Required Netlify environment variables:
//   RESEND_API_KEY
//   SUPABASE_URL      (or falls back to hardcoded)
//   SUPABASE_ANON_KEY (or falls back to hardcoded)

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://snbchuvvnbwvghmbxehv.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYmNodXZ2bmJ3dmdobWJ4ZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MDg5NzMsImV4cCI6MjA4NTQ4NDk3M30.cKPieraN3FRT_5ilAQL0X2b9kIpklzE49xGzVJwYxZo';
const FROM_EMAIL = 'AI Proof Club <noreply@aiproof.club>';

export const config = {
    schedule: "0 15 * * *"
};

export default async (req) => {
    console.log('Trial reminder function started:', new Date().toISOString());

    try {
        // Find users whose start_date was exactly 2 days ago
        // These are users on day 2 of their 3-day trial — charge hits tomorrow
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        const dateFrom = new Date(twoDaysAgo);
        dateFrom.setHours(0, 0, 0, 0);
        const dateTo = new Date(twoDaysAgo);
        dateTo.setHours(23, 59, 59, 999);

        const query = `?start_date=gte.${dateFrom.toISOString()}&start_date=lte.${dateTo.toISOString()}&plan=eq.paid&onboarded=eq.true&select=email,name,start_date,receipts,quests`;

        const response = await fetch(`${SUPABASE_URL}/rest/v1/users${query}`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });

        const users = await response.json();

        if (!users || !users.length) {
            console.log('No trial users to remind today');
            return new Response('No users to remind', { status: 200 });
        }

        console.log(`Found ${users.length} trial user(s) to remind`);

        let sent = 0;
        let failed = 0;

        for (const user of users) {
            try {
                const receipts = user.receipts || [];
                const quests = user.quests || [];

                const stats = {
                    streak: calculateStreak(receipts),
                    totalXP: receipts.reduce((sum, r) => sum + (r.xp || 0), 0),
                    questsCompleted: receipts.length
                };

                await sendReminderEmail({
                    to: user.email,
                    name: user.name || 'there',
                    ...stats
                });

                sent++;
                console.log(`Reminder sent to ${user.email}`);
            } catch (e) {
                console.error(`Failed to send reminder to ${user.email}:`, e);
                failed++;
            }
        }

        console.log(`Trial reminders: ${sent} sent, ${failed} failed`);
        return new Response(`Sent ${sent}, failed ${failed}`, { status: 200 });

    } catch (error) {
        console.error('Trial reminder function error:', error);
        return new Response('Error: ' + error.message, { status: 500 });
    }
};

async function sendReminderEmail({ to, name, streak, totalXP, questsCompleted }) {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: FROM_EMAIL,
            to,
            subject: `Your AI Proof Club trial ends tomorrow — here's what you've built`,
            html: generateTrialReminderEmail({ name, streak, totalXP, questsCompleted })
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Resend error: ${error}`);
    }

    return response.json();
}

function calculateStreak(receipts) {
    if (!receipts || !receipts.length) return 0;

    const getDateStr = (date) => {
        const d = new Date(date);
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    };

    const receiptDates = [...new Set(receipts.map(r => r.ts ? getDateStr(new Date(r.ts)) : null).filter(Boolean))].sort().reverse();
    if (!receiptDates.length) return 0;

    const today = getDateStr(new Date());
    const yesterday = getDateStr(new Date(Date.now() - 86400000));
    if (receiptDates[0] !== today && receiptDates[0] !== yesterday) return 0;

    let streakCount = 0;
    let checkDate = new Date();
    for (let i = 0; i < 365; i++) {
        const dateStr = getDateStr(checkDate);
        if (receiptDates.includes(dateStr)) {
            streakCount++;
            checkDate = new Date(checkDate.getTime() - 86400000);
        } else if (i === 0 && receiptDates[0] === yesterday) {
            checkDate = new Date(checkDate.getTime() - 86400000);
        } else {
            break;
        }
    }
    return streakCount;
}

function generateTrialReminderEmail({ name, streak, totalXP, questsCompleted }) {
    const displayName = name || 'there';
    const displayStreak = streak || 0;
    const displayXP = totalXP || 0;
    const displayQuests = questsCompleted || 0;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #050508; color: #e8e8ec; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">

        <div style="text-align: center; background: #0a0a14; padding: 14px; letter-spacing: 3px; font-size: 13px; font-weight: 700; color: #00e5ff;">
            AIPROOF.CLUB
        </div>

        <div style="background: #0d0d12; border: 1px solid #1a1a24; padding: 30px;">
            <h2 style="font-size: 22px; font-weight: normal; margin: 0 0 6px 0; color: #e8e8ec;">Your trial ends tomorrow.</h2>
            <p style="color: #6e7087; font-size: 13px; margin: 0 0 24px 0;">Hi ${displayName} — your 3-day free trial wraps up soon.</p>

            <div style="background: #050508; border-left: 3px solid #00e5ff; padding: 16px 20px; margin-bottom: 24px;">
                <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #6e7087; margin-bottom: 14px;">What you've built in 3 days</div>
                <table style="width: 100%; text-align: center; border-spacing: 0; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px;">
                            <div style="font-size: 28px; font-weight: 700; color: #00e5ff;">${displayStreak}</div>
                            <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;">Day Streak</div>
                        </td>
                        <td style="padding: 10px; border-left: 1px solid #1a1a24; border-right: 1px solid #1a1a24;">
                            <div style="font-size: 28px; font-weight: 700; color: #e8e8ec;">${displayXP}</div>
                            <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;">XP Earned</div>
                        </td>
                        <td style="padding: 10px;">
                            <div style="font-size: 28px; font-weight: 700; color: #e8e8ec;">${displayQuests}</div>
                            <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;">Quests Done</div>
                        </td>
                    </tr>
                </table>
            </div>

            <p style="font-size: 14px; line-height: 1.8; color: #e8e8ec; margin: 0 0 16px 0;">
                Tomorrow you'll be charged <strong>$9.99</strong> and your membership continues automatically. If you want to cancel before then, you can do it in your account settings — no questions asked.
            </p>

            <p style="font-size: 14px; line-height: 1.8; color: #9090a0; margin: 0 0 28px 0;">
                But if you've been showing up, the quests are working. That's the whole point — small reps now, so when AI reshapes your industry you're already ahead of it.
            </p>

            <div style="display: flex; gap: 12px;">
                <a href="https://aiproof.club/app.html#dashboard"
                   style="display: inline-block; background: #00e5ff; color: #050508; padding: 13px 24px; text-decoration: none; font-weight: bold; font-size: 11px; letter-spacing: 2px;">
                    KEEP GOING →
                </a>
                <a href="https://aiproof.club/app.html#settings"
                   style="display: inline-block; background: transparent; color: #6e7087; padding: 13px 24px; text-decoration: none; font-size: 11px; letter-spacing: 1px; border: 1px solid #1a1a24;">
                    Cancel anytime
                </a>
            </div>
        </div>

        <p style="color: #3a3a4a; font-size: 11px; text-align: center; margin-top: 20px;">
            AI Proof Club &middot; aiproof.club &middot; Questions? erica@aiproof.club
        </p>
    </div>
</body>
</html>
    `;
}
