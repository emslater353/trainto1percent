/**
 * Send password reset emails to all migrated users
 * 
 * BEFORE RUNNING:
 * 1. Go to Supabase Dashboard → Authentication → URL Configuration
 * 2. Make sure "Site URL" is set to your production URL (e.g., https://aiproofclub.com or your Netlify URL)
 * 3. Make sure "Redirect URLs" includes your production URL
 * 4. Go to Authentication → Email Templates → "Reset Password"
 *    Customize the email if you want (subject line, body text, etc.)
 *    The default template works fine — it sends a link with the recovery token
 * 
 * IMPORTANT: Supabase has rate limits on auth emails:
 * - Default: 4 emails per hour per email address
 * - Bulk: ~30 emails per hour on free plan, more on paid
 * - This script adds delays between sends to avoid rate limits
 * 
 * RUN: node send-reset-emails.js
 */

const SUPABASE_URL = 'https://snbchuvvnbwvghmbxehv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYmNodXZ2bmJ3dmdobWJ4ZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MDg5NzMsImV4cCI6MjA4NTQ4NDk3M30.cKPieraN3FRT_5ilAQL0X2b9kIpklzE49xGzVJwYxZo';

// OPTION 1: Manually list your user emails
// const USER_EMAILS = [
//     'user1@email.com',
//     'user2@email.com',
// ];

// OPTION 2: Fetch from your public users table first
async function getUserEmails() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/users?select=email`, {
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
        }
    });
    const users = await res.json();
    return users.map(u => u.email).filter(Boolean);
}

async function sendResetEmail(email) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/recover`, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    });
    
    const data = await res.json();
    
    if (!res.ok) {
        return { email, success: false, error: data.msg || data.error || JSON.stringify(data) };
    }
    return { email, success: true };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log('Fetching user emails from database...\n');
    
    const emails = await getUserEmails();
    // const emails = USER_EMAILS; // Uncomment to use manual list instead
    
    console.log(`Found ${emails.length} users to send reset emails to:\n`);
    emails.forEach(e => console.log(`  - ${e}`));
    console.log('');
    
    const results = { sent: 0, failed: 0, errors: [] };
    
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        console.log(`[${i + 1}/${emails.length}] Sending reset email to ${email}...`);
        
        const result = await sendResetEmail(email);
        
        if (result.success) {
            results.sent++;
            console.log(`  ✓ Sent`);
        } else {
            results.failed++;
            results.errors.push(result);
            console.log(`  ✗ Failed: ${result.error}`);
        }
        
        // Wait 2 seconds between sends to avoid rate limits
        if (i < emails.length - 1) {
            await sleep(2000);
        }
    }
    
    console.log('\n========================================');
    console.log(`DONE: ${results.sent} sent, ${results.failed} failed`);
    if (results.errors.length > 0) {
        console.log('\nFailed emails:');
        results.errors.forEach(e => console.log(`  ${e.email}: ${e.error}`));
    }
    console.log('========================================\n');
    console.log('Users will receive an email with a link like:');
    console.log('https://yoursite.com#access_token=...&type=recovery');
    console.log('When they click it, the app will show the password reset modal.');
}

main().catch(console.error);
