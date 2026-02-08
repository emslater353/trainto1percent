// Netlify Scheduled Function - runs every Monday at 6am EST
// https://docs.netlify.com/functions/scheduled-functions/

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gkesirspzpbreqsvrcuh.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZXNpcnNwenBicmVxc3ZyY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNzI2MDEsImV4cCI6MjA2Mzk0ODYwMX0.dlayW_tHhpFzIDBwmhHFr1R2Ks0GDjGCbmz6j-6s46g';

const FROM_EMAIL = 'AI Proof Club <noreply@aiproof.club>';

// Schedule: Every Monday at 6am EST (11:00 UTC)
export const config = {
    schedule: "0 11 * * 1"
};

export default async (req) => {
    try {
        // Get all users who have onboarded
        const usersResponse = await fetch(`${SUPABASE_URL}/rest/v1/users?onboarded=eq.true`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        const users = await usersResponse.json();
        
        if (!users || !users.length) {
            console.log('No users to email');
            return;
        }

        let sent = 0;
        let failed = 0;

        for (const user of users) {
            try {
                // Calculate week number
                const startDate = new Date(user.start_date);
                const weekNum = Math.floor((Date.now() - startDate.getTime()) / (7 * 86400000)) + 1;
                
                // Get their active quests
                const tasks = (user.quests || [])
                    .filter(q => !q.done)
                    .slice(0, 5)
                    .map(q => ({
                        task: q.t,
                        mode: q.mode,
                        xp: q.xp
                    }));

                // Calculate stats
                const receipts = user.receipts || [];
                const stats = {
                    streak: calculateStreak(receipts),
                    totalXP: receipts.reduce((sum, r) => sum + (r.xp || 0), 0),
                    receipts: receipts.length
                };

                // Send the email
                await sendEmail({
                    from: FROM_EMAIL,
                    to: user.email,
                    subject: `Week ${weekNum}: Your AI Proof Quests Are Ready`,
                    html: generateWeeklyEmail(user.name, weekNum, tasks, stats)
                });

                sent++;
            } catch (e) {
                console.error(`Failed to send to ${user.email}:`, e);
                failed++;
            }
        }

        console.log(`Weekly emails sent: ${sent} success, ${failed} failed, ${users.length} total`);

    } catch (error) {
        console.error('Weekly email error:', error);
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

function calculateStreak(receipts) {
    if (!receipts || !receipts.length) return 0;
    
    const getDateStr = (date) => {
        const d = new Date(date);
        return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    };
    
    const receiptDates = [...new Set(receipts.map(r => r.ts ? getDateStr(new Date(r.ts)) : null).filter(d => d))].sort().reverse();
    
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

function generateWeeklyEmail(name, weekNum, tasks, stats) {
    const taskList = tasks.length ? tasks.map(t => `
        <div style="background: #050508; padding: 15px; margin: 10px 0; border-left: 3px solid ${
            t.mode === 'ideas' ? '#7b68ee' : t.mode === 'personality' ? '#ff6b9d' : '#00ff88'
        };">
            <p style="margin: 0 0 5px 0; color: ${
                t.mode === 'ideas' ? '#7b68ee' : t.mode === 'personality' ? '#ff6b9d' : '#00ff88'
            }; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">${t.mode}</p>
            <p style="margin: 0;">${t.task}</p>
            <p style="margin: 5px 0 0 0; color: #00f0ff; font-size: 12px;">+${t.xp} XP</p>
        </div>
    `).join('') : '<p style="color: #6e7087;">All quests completed! Refresh your quest list in the app.</p>';

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #050508; color: #e8e8ec; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">AI PROOF <span style="color: #00f0ff;">CLUB</span></h1>
        </div>
        
        <div style="background: #0d0d12; border: 1px solid #1a1a24; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 10px 0; font-weight: normal;">Week ${weekNum} Quests</h2>
            <p style="color: #6e7087; margin: 0 0 25px 0;">Hey ${name}, here's what's on deck this week:</p>
            
            <table style="width: 100%; margin-bottom: 25px; text-align: center; border-spacing: 10px;">
                <tr>
                    <td style="background: #050508; padding: 15px;">
                        <div style="font-size: 24px; color: #00f0ff; font-weight: bold;">${stats.streak}</div>
                        <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Day Streak</div>
                    </td>
                    <td style="background: #050508; padding: 15px;">
                        <div style="font-size: 24px; font-weight: bold;">${stats.totalXP}</div>
                        <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Total XP</div>
                    </td>
                    <td style="background: #050508; padding: 15px;">
                        <div style="font-size: 24px; font-weight: bold;">${stats.receipts}</div>
                        <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Receipts</div>
                    </td>
                </tr>
            </table>
            
            <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #6e7087; margin: 0 0 15px 0;">This Week's Quests</h3>
            
            ${taskList}
            
            <a href="https://aiproof.club/app.html#quests" 
               style="display: inline-block; background: #00f0ff; color: #050508; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; margin-top: 25px;">
                VIEW ALL QUESTS →
            </a>
        </div>
        
        <p style="color: #6e7087; font-size: 12px; text-align: center; margin-top: 30px;">
            Stay AI-proof. Every quest satisfies the prepared mind.
        </p>
        
        <p style="color: #3d3d4a; font-size: 10px; text-align: center; margin-top: 20px;">
            <a href="https://aiproof.club/app.html#settings" style="color: #6e7087;">Manage email preferences</a>
        </p>
    </div>
</body>
</html>
    `;
}
