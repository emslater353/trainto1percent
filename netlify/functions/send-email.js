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
                // Welcome email to new user
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Welcome to AI Proof Club',
                    html: generateWelcomeEmail(data.name)
                };
                break;

            case 'password-reset':
                // Password reset email
                const resetToken = generateToken();
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'Reset Your AI Proof Club Password',
                    html: generatePasswordResetEmail(data.name, resetToken)
                };
                // Return the token so we can store it
                break;

            case 'weekly-tasks':
                // Weekly task reminder
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: `Week ${data.weekNum}: Your AI Proof Quests Are Ready`,
                    html: generateWeeklyEmail(data.name, data.weekNum, data.tasks, data.stats)
                };
                break;

            case 'support':
                // Support/feedback form - send to admin
                emailPayload = {
                    from: FROM_EMAIL,
                    to: SUPPORT_EMAIL,
                    subject: `[AI Proof Club] ${data.subject}`,
                    html: generateSupportEmail(data),
                    reply_to: data.email
                };
                // Also send confirmation to user
                await sendEmail({
                    from: FROM_EMAIL,
                    to: data.email,
                    subject: 'We received your message — AI Proof Club',
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
<body style="font-family: 'Courier New', monospace; background: #050508; color: #e8e8ec; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">AI PROOF <span style="color: #00f0ff;">CLUB</span></h1>
        </div>
        
        <div style="background: #0d0d12; border: 1px solid #1a1a24; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 25px 0; font-weight: normal;">Welcome to AI Proof Club.</h2>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 20px 0;">
                I'm Erica. I built AI Proof Club because I kept hearing fear when people talked about AI and I didn't think fear was the right response.
            </p>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 20px 0;">
                The people who stay ahead don't panic because they're the ones who stay ahead of the curve.
            </p>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 20px 0;">
                My background is in luxury fashion, where forecasting trends far in advance is built into day-to-day operations, and in an AI startup where I interact with how fast technology actually moves. When my worlds collided, I realized becoming AI proof is about anticipating better.
            </p>
            
            <div style="background: #050508; border-left: 3px solid #00f0ff; padding: 20px; margin: 25px 0;">
                <p style="margin: 0; color: #e8e8ec; line-height: 1.8;">
                    <strong style="color: #00f0ff;">Here is how it works:</strong> Each week, you'll get quests intentionally designed from projections around AI capabilities, focusing on skills AI can't easily replace: <strong style="color: #7b68ee;">ideas</strong>, <strong style="color: #ff6b9d;">personality</strong>, and <strong style="color: #00ff88;">execution</strong>.
                </p>
            </div>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 20px 0;">
                Your quests are shaped by your interests and what you choose to follow so that you're preparing deliberately.
            </p>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 20px 0;">
                You don't need to outrun AI. But you need to strengthen the parts of yourself that it can't copy and position those strengths where opportunity is likely to emerge. That way, when technology changes the game, whether it's generating full-length films from a single prompt or something we haven't named yet, you're not scrambling. You're already ahead of it.
            </p>
            
            <p style="color: #e8e8ec; line-height: 1.8; margin: 0 0 30px 0;">
                Let's stay AI-proof together.<br>
                <strong>— Erica</strong>
            </p>
            
            <a href="https://aiproof.club/app.html#dashboard" 
               style="display: inline-block; background: #00f0ff; color: #050508; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px;">
                START YOUR QUESTS →
            </a>
        </div>
        
        <p style="color: #6e7087; font-size: 12px; text-align: center; margin-top: 30px;">
            Questions? Reply to this email anytime.
        </p>
    </div>
</body>
</html>
    `;
}

function generatePasswordResetEmail(name, token) {
    const resetLink = `https://aiproof.club/app.html?token=${token}#reset`;
    
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
            <h2 style="font-size: 24px; margin: 0 0 20px 0; font-weight: normal;">Reset Your Password</h2>
            
            <p style="color: #6e7087; line-height: 1.7; margin: 0 0 20px 0;">
                Hi ${name || 'there'},
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 20px 0;">
                We received a request to reset your password. Click the button below to create a new one:
            </p>
            
            <a href="${resetLink}" 
               style="display: inline-block; background: #00f0ff; color: #050508; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; margin: 20px 0;">
                RESET PASSWORD →
            </a>
            
            <p style="color: #6e7087; font-size: 12px; line-height: 1.7; margin: 20px 0 0 0;">
                This link expires in 1 hour. If you didn't request this, you can safely ignore this email.
            </p>
        </div>
        
        <p style="color: #6e7087; font-size: 12px; text-align: center; margin-top: 30px;">
            Can't click the button? Copy this link: ${resetLink}
        </p>
    </div>
</body>
</html>
    `;
}

function generateWeeklyEmail(name, weekNum, tasks, stats) {
    const taskList = tasks.map(t => `
        <div style="background: #050508; padding: 15px; margin: 10px 0; border-left: 3px solid ${
            t.mode === 'ideas' ? '#7b68ee' : t.mode === 'personality' ? '#ff6b9d' : '#00ff88'
        };">
            <p style="margin: 0 0 5px 0; color: ${
                t.mode === 'ideas' ? '#7b68ee' : t.mode === 'personality' ? '#ff6b9d' : '#00ff88'
            }; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">${t.mode}</p>
            <p style="margin: 0;">${t.task}</p>
            <p style="margin: 5px 0 0 0; color: #00f0ff; font-size: 12px;">+${t.xp} XP</p>
        </div>
    `).join('');

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
            <p style="color: #6e7087; margin: 0 0 25px 0;">Hey ${name}, here's what's on deck:</p>
            
            ${stats ? `
            <div style="display: flex; gap: 20px; margin-bottom: 25px; text-align: center;">
                <div style="flex: 1; background: #050508; padding: 15px;">
                    <div style="font-size: 24px; color: #00f0ff; font-weight: bold;">${stats.streak}</div>
                    <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Day Streak</div>
                </div>
                <div style="flex: 1; background: #050508; padding: 15px;">
                    <div style="font-size: 24px; font-weight: bold;">${stats.totalXP}</div>
                    <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Total XP</div>
                </div>
                <div style="flex: 1; background: #050508; padding: 15px;">
                    <div style="font-size: 24px; font-weight: bold;">${stats.receipts}</div>
                    <div style="font-size: 10px; color: #6e7087; text-transform: uppercase; letter-spacing: 1px;">Receipts</div>
                </div>
            </div>
            ` : ''}
            
            <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #6e7087; margin: 0 0 15px 0;">This Week's Quests</h3>
            
            ${taskList}
            
            <a href="https://aiproof.club/app.html#quests" 
               style="display: inline-block; background: #00f0ff; color: #050508; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; margin-top: 25px;">
                VIEW ALL QUESTS →
            </a>
        </div>
        
        <p style="color: #6e7087; font-size: 12px; text-align: center; margin-top: 30px;">
            Stay AI-proof. Every quest counts.
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
<body style="font-family: 'Courier New', monospace; background: #050508; color: #e8e8ec; padding: 40px 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 18px; letter-spacing: 3px; margin: 0;">AI PROOF <span style="color: #00f0ff;">CLUB</span></h1>
        </div>
        
        <div style="background: #0d0d12; border: 1px solid #1a1a24; padding: 30px;">
            <h2 style="font-size: 24px; margin: 0 0 20px 0; font-weight: normal;">Got it! ✓</h2>
            
            <p style="color: #6e7087; line-height: 1.7; margin: 0 0 20px 0;">
                Hi ${name || 'there'},
            </p>
            
            <p style="line-height: 1.7; margin: 0 0 20px 0;">
                We've received your message and will get back to you within 24-48 hours.
            </p>
            
            <p style="color: #6e7087; line-height: 1.7; margin: 0;">
                In the meantime, stay AI-proof. 🛡️
            </p>
        </div>
    </div>
</body>
</html>
    `;
}
