// Netlify serverless function for sending emails via Resend
// Environment variable needed: RESEND_API_KEY

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPPORT_EMAIL = 'erica.m.slater@gmail.com';
const FROM_EMAIL = 'Top 1% OS <noreply@trainto1percent.com>';

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
                // Welcome email to new user
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Welcome to Top 1% OS — Your Training Begins 🎯',
                    html: generateWelcomeEmail(data.name)
                };
                break;

            case 'password-reset':
                // Password reset email
                const resetToken = generateToken();
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Reset Your Top 1% OS Password',
                    html: generatePasswordResetEmail(data.name, resetToken)
                };
                // Return the token so we can store it
                break;

            case 'weekly-tasks':
                // Weekly task reminder
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: `Week ${data.weekNum}: Your Top 1% Training Awaits 💪`,
                    html: generateWeeklyEmail(data.name, data.weekNum, data.tasks, data.stats)
                };
                break;

            case 'support':
                // Support/feedback form - send to admin
                emailPayload = {
                    from: FROM_EMAIL,
                    to: SUPPORT_EMAIL,
                    subject: `[Top 1% OS Support] ${data.subject}`,
                    html: generateSupportEmail(data),
                    reply_to: data.email
                };
                // Also send confirmation to user
                await sendEmail({
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'We received your message — Top 1% OS',
                    html: generateSupportConfirmation(data.name)
                });
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

function generateWelcomeEmail(name) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f5f5; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">TOP <span style="color: #c9ff2f;">1%</span> OS</h1>
        </div>
        
        <div style="background: #111; border: 1px solid #222; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 20px 0; font-weight: normal;">Welcome, ${name} 👋</h2>
            
            <p style="color: #888; line-height: 1.7; margin: 0 0 20px 0;">
                You've taken the first step toward joining the Top 1%. Most people never do.
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 20px 0;">
                Here's how Top 1% OS works:
            </p>
            
            <div style="background: #0a0a0a; border-left: 3px solid #c9ff2f; padding: 15px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #6b8afd;">IDEAS</strong> — Strategic thinking, frameworks, taste</p>
                <p style="margin: 0 0 10px 0;"><strong style="color: #fd6b8a;">PERSONALITY</strong> — Communication, influence, presence</p>
                <p style="margin: 0;"><strong style="color: #8afd6b;">EXECUTION</strong> — Action, shipping, follow-through</p>
            </div>
            
            <p style="color: #888; line-height: 1.7; margin: 0 0 20px 0;">
                Each day, you'll get IRL quests targeting your weakest mode. Complete them, earn XP, build your streak.
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 30px 0;">
                <strong>Your first task:</strong> Complete today's quests before midnight.
            </p>
            
            <a href="https://trainto1percent.com/app.html#dashboard" 
               style="display: inline-block; background: #c9ff2f; color: #0a0a0a; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 1px;">
                START TRAINING →
            </a>
        </div>
        
        <p style="color: #555; font-size: 12px; text-align: center; margin-top: 30px;">
            Questions? Reply to this email or use the Support form in the app.
        </p>
    </div>
</body>
</html>
    `;
}

function generatePasswordResetEmail(name, token) {
    const resetLink = `https://trainto1percent.com/app.html?token=${token}#reset`;
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f5f5; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">TOP <span style="color: #c9ff2f;">1%</span> OS</h1>
        </div>
        
        <div style="background: #111; border: 1px solid #222; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 20px 0; font-weight: normal;">Reset Your Password</h2>
            
            <p style="color: #888; line-height: 1.7; margin: 0 0 20px 0;">
                Hi ${name || 'there'},
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 20px 0;">
                We received a request to reset your password. Click the button below to create a new one:
            </p>
            
            <a href="${resetLink}" 
               style="display: inline-block; background: #c9ff2f; color: #0a0a0a; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 1px; margin: 20px 0;">
                RESET PASSWORD →
            </a>
            
            <p style="color: #555; font-size: 12px; line-height: 1.7; margin: 20px 0 0 0;">
                This link expires in 1 hour. If you didn't request this, you can safely ignore this email.
            </p>
        </div>
        
        <p style="color: #555; font-size: 12px; text-align: center; margin-top: 30px;">
            Can't click the button? Copy this link: ${resetLink}
        </p>
    </div>
</body>
</html>
    `;
}

function generateWeeklyEmail(name, weekNum, tasks, stats) {
    const taskList = tasks.map(t => `
        <div style="background: #0a0a0a; padding: 15px; margin: 10px 0; border-left: 3px solid ${
            t.mode === 'ideas' ? '#6b8afd' : t.mode === 'personality' ? '#fd6b8a' : '#8afd6b'
        };">
            <p style="margin: 0 0 5px 0; color: ${
                t.mode === 'ideas' ? '#6b8afd' : t.mode === 'personality' ? '#fd6b8a' : '#8afd6b'
            }; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">${t.mode}</p>
            <p style="margin: 0;">${t.task}</p>
            <p style="margin: 5px 0 0 0; color: #c9ff2f; font-size: 12px;">+${t.xp} XP</p>
        </div>
    `).join('');

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f5f5; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">TOP <span style="color: #c9ff2f;">1%</span> OS</h1>
        </div>
        
        <div style="background: #111; border: 1px solid #222; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 10px 0; font-weight: normal;">Week ${weekNum} Training</h2>
            <p style="color: #888; margin: 0 0 25px 0;">Hey ${name}, here's what's on deck:</p>
            
            ${stats ? `
            <div style="display: flex; gap: 20px; margin-bottom: 25px; text-align: center;">
                <div style="flex: 1; background: #0a0a0a; padding: 15px;">
                    <div style="font-size: 24px; color: #c9ff2f; font-weight: bold;">${stats.streak}</div>
                    <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Day Streak</div>
                </div>
                <div style="flex: 1; background: #0a0a0a; padding: 15px;">
                    <div style="font-size: 24px; font-weight: bold;">${stats.totalXP}</div>
                    <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Total XP</div>
                </div>
                <div style="flex: 1; background: #0a0a0a; padding: 15px;">
                    <div style="font-size: 24px; font-weight: bold;">${stats.receipts}</div>
                    <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Receipts</div>
                </div>
            </div>
            ` : ''}
            
            <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888; margin: 0 0 15px 0;">This Week's Quests</h3>
            
            ${taskList}
            
            <a href="https://trainto1percent.com/app.html#quests" 
               style="display: inline-block; background: #c9ff2f; color: #0a0a0a; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 1px; margin-top: 25px;">
                VIEW ALL QUESTS →
            </a>
        </div>
        
        <p style="color: #555; font-size: 12px; text-align: center; margin-top: 30px;">
            Keep the streak alive. Every day counts.
        </p>
    </div>
</body>
</html>
    `;
}

function generateSupportEmail(data) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: 'Courier New', monospace; padding: 20px;">
    <h2>New Support Request</h2>
    
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    <p><strong>Type:</strong> ${data.subject}</p>
    <p><strong>User ID:</strong> ${data.userId || 'N/A'}</p>
    
    <hr style="border: 1px solid #ddd; margin: 20px 0;">
    
    <h3>Message:</h3>
    <div style="background: #f5f5f5; padding: 15px; white-space: pre-wrap;">${data.message}</div>
    
    <hr style="border: 1px solid #ddd; margin: 20px 0;">
    
    <p style="color: #888; font-size: 12px;">
        Reply directly to this email to respond to the user.
    </p>
</body>
</html>
    `;
}

function generateSupportConfirmation(name) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #f5f5f5; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">TOP <span style="color: #c9ff2f;">1%</span> OS</h1>
        </div>
        
        <div style="background: #111; border: 1px solid #222; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 20px 0; font-weight: normal;">Got it! ✓</h2>
            
            <p style="color: #888; line-height: 1.7; margin: 0 0 20px 0;">
                Hi ${name || 'there'},
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 20px 0;">
                We've received your message and will get back to you within 24-48 hours.
            </p>
            
            <p style="color: #888; line-height: 1.7; margin: 0;">
                In the meantime, keep training. 💪
            </p>
        </div>
    </div>
</body>
</html>
    `;
}
