# Email System Setup Guide for Top 1% OS

## Overview

The email system includes:
1. **Welcome emails** - Sent when user completes signup
2. **Password reset emails** - Sent when user requests password reset  
3. **Support form** - Sends to erica.m.slater@gmail.com (hidden from user)
4. **Weekly task emails** - Sent every Sunday (requires cron setup)

---

## Step 1: Set Up Resend

1. Go to https://resend.com and create an account
2. **Verify your domain** (trainto1percent.com):
   - Go to Domains → Add Domain
   - Add DNS records to your domain registrar
   - Wait for verification (usually 5-30 minutes)

3. **Create API Key**:
   - Go to API Keys → Create API Key
   - Copy the key (starts with `re_`)

---

## Step 2: Configure Netlify

1. In your Netlify dashboard, go to **Site settings → Environment variables**

2. Add these environment variables:
   ```
   RESEND_API_KEY = re_your_api_key_here
   ```

3. **Redeploy** your site for changes to take effect

---

## Step 3: Update Supabase Schema

Add these columns to your `users` table for password reset and onboarding data:

```sql
-- Password reset columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_expiry TIMESTAMP;

-- Onboarding data columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS occupation TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS industry TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS experience TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS goals JSONB DEFAULT '[]';
ALTER TABLE users ADD COLUMN IF NOT EXISTS forecast_interests JSONB DEFAULT '[]';
```

---

## Step 4: Set Up Weekly Emails (Optional)

For weekly emails, you have two options:

### Option A: Use an external cron service (Easiest)

Use a service like **cron-job.org** or **EasyCron**:

1. Create a Netlify function endpoint for weekly emails (see `/netlify/functions/weekly-emails.js`)
2. Set up a cron job to hit that endpoint every Sunday at 9 AM:
   ```
   URL: https://trainto1percent.com/.netlify/functions/weekly-emails
   Schedule: 0 9 * * 0 (Sundays at 9 AM)
   ```

### Option B: Supabase Scheduled Functions

1. Create a Supabase Edge Function
2. Use pg_cron extension to schedule it

---

## How It Works

### Welcome Email
- Triggered in `startApp()` after user is saved to database
- Calls `sendWelcomeEmail(name, email)`
- Fire-and-forget (doesn't block user)

### Password Reset
1. User enters email on forgot password screen
2. System generates token, stores in database with 1-hour expiry
3. Sends email with link: `https://trainto1percent.com/app.html?token=xxx#reset`
4. User clicks link → modal appears → enters new password
5. System verifies token, updates password, clears token

### Support Form
- Located in Settings page
- Sends to erica.m.slater@gmail.com
- User doesn't see your email - they just see "Message sent!"
- Includes user info: name, email, scores, stats
- User gets confirmation email

---

## Testing

1. **Test Welcome Email**: Create a new account
2. **Test Password Reset**: Use "Forgot password" on login screen
3. **Test Support**: Go to Settings → Support & Feedback
4. **Check Resend Dashboard**: See all sent emails at https://resend.com/emails

---

## Email Templates

All templates are in `/netlify/functions/send-email.js`:
- `generateWelcomeEmail(name)`
- `generatePasswordResetEmail(name, token)`
- `generateWeeklyEmail(name, weekNum, tasks, stats)`
- `generateSupportEmail(data)`
- `generateSupportConfirmation(name)`

---

## Troubleshooting

### Emails not sending?
1. Check Resend dashboard for errors
2. Verify domain is properly set up
3. Check Netlify function logs
4. Make sure RESEND_API_KEY is set in Netlify env vars

### Password reset not working?
1. Check that reset_token and reset_expiry columns exist in Supabase
2. Check browser console for errors
3. Verify the token in the URL matches what's in the database

### Support form not working?
1. Check network tab for 500 errors
2. Check Netlify function logs
3. Test the endpoint directly with curl
