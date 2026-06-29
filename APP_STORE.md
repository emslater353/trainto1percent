# AI Proof Club — App Store Launch Guide

Written for a non-technical founder. Follow these steps in order.

---

## What’s ready

| Item | Status |
|------|--------|
| Native iPhone app (Expo) | ✅ in `aiproof-mobile/` |
| Free on mobile (no in-app payments) | ✅ App Store friendly |
| Privacy policy | ✅ https://aiproof.club/privacy.html |
| Delete account in Settings | ✅ Required by Apple |
| App Store icon (1024×1024) | ✅ `icons/icon-1024.png` |
| Backend delete API | ✅ Netlify function (needs one env var) |

The native app is **separate from the website** but uses the **same backend** (Supabase + Netlify on aiproof.club).

---

## Step 1 — Deploy the website (5 minutes)

Push this repo to GitHub. Netlify will deploy automatically.

This publishes:
- Privacy policy at `/privacy`
- Delete-account API at `/.netlify/functions/delete-account`
- Mobile/PWA improvements on the web app

---

## Step 2 — Add one secret in Netlify (required for delete account)

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project → **Settings** → **API**
2. Copy the **service_role** key (keep it secret — never put it in the app)
3. Open [Netlify](https://app.netlify.com) → your site → **Site configuration** → **Environment variables**
4. Add: **`SUPABASE_SERVICE_ROLE_KEY`** = *(paste the service role key)*
5. Click **Deploys** → **Trigger deploy** → **Deploy site**

---

## Step 3 — Enroll in Apple Developer Program

1. Go to [developer.apple.com/programs](https://developer.apple.com/programs/)
2. Enroll ($99/year)
3. Wait for approval (usually 24–48 hours)

---

## Step 4 — Build the iPhone app with Expo (EAS)

You’ll use **EAS Build** — Expo’s cloud service that builds the app without needing Xcode expertise.

### One-time setup on your Mac

Open **Terminal** and run:

```bash
cd aiproof-mobile
npm install
npm install -g eas-cli
eas login
```

Create a free Expo account when prompted (expo.dev).

Link the project:

```bash
eas init
```

When asked, create a new EAS project.

### Build for TestFlight

```bash
eas build --platform ios --profile production
```

- EAS will ask for your Apple Developer credentials the first time — follow the prompts
- The build runs in the cloud (~15–20 minutes)
- When done, you’ll get a link to download or submit the build

### Submit to TestFlight

```bash
eas submit --platform ios --profile production
```

Or upload manually in [App Store Connect](https://appstoreconnect.apple.com).

---

## Step 5 — Create the App Store listing

In [App Store Connect](https://appstoreconnect.apple.com):

1. **My Apps** → **+** → **New App**
2. Fill in:
   - **Name:** AI Proof Club
   - **Bundle ID:** club.aiproof.app
   - **SKU:** aiproof-club
   - **Primary language:** English (U.S.)

### Listing copy

| Field | Text |
|-------|------|
| **Subtitle** | Build skills AI can't replace |
| **Category** | Productivity |
| **Price** | Free |
| **Privacy Policy URL** | https://aiproof.club/privacy.html |
| **Support URL** | https://aiproof.club |
| **Description** | Build the skills AI can't replace. Get weekly quests, AI coaches for Ideas, Personality, and Execution, forecast tracking, and progress receipts. Free on mobile. |

### Screenshots

Take at least 3 screenshots on an iPhone (or Simulator):
- Dashboard
- Quests
- AI Coach

In Terminal (after `npm install` in `aiproof-mobile`):

```bash
npx expo start
```

Press `i` to open the iOS Simulator, navigate to each screen, then **Cmd+S** to save screenshots.

### App Privacy (nutrition labels)

Declare:
- **Email address** — account creation
- **User content** — coach messages, profile info
- **Product interaction** — quests and scores

Linked to user: **Yes** · Used for tracking: **No**

### Age rating

Complete the questionnaire — likely **4+**.

---

## Step 6 — Submit for review

1. App Store Connect → your app → **App Store** tab
2. Create version **1.0.0**
3. Select the build from EAS
4. Export compliance: **No** (standard HTTPS only — already set in app config)
5. **Submit for Review**

Review usually takes **1–3 business days**.

---

## Test on your phone before submitting

```bash
cd aiproof-mobile
npm install
npx expo start
```

- Install **Expo Go** on your iPhone from the App Store
- Scan the QR code in Terminal

For a real native build on your device (not Expo Go):

```bash
eas build --platform ios --profile preview
```

---

## Important rules (don’t break these)

1. **No Stripe checkout inside the iOS app** — the app is free; web subscriptions stay on aiproof.club only
2. **Keep Delete Account in Settings** — Apple requires it
3. **Keep the privacy policy URL live**
4. **Don’t remove support email** — support@aiproof.club

---

## When you need a new App Store build

Only rebuild and resubmit when you change:
- App icon or splash screen
- Native permissions (push notifications, etc.)
- Bundle ID or app name

Most feature changes are in the app code in `aiproof-mobile/src/` — after changes, run `eas build` again.

---

## If something goes wrong

| Problem | Fix |
|---------|-----|
| Delete account fails | Confirm `SUPABASE_SERVICE_ROLE_KEY` is in Netlify and redeploy |
| EAS build fails | Run `eas build` again; check Apple credentials in `eas credentials` |
| Apple rejects for payments | Confirm no subscription buttons in the app (Settings should say “Free on mobile”) |
| Apple rejects for privacy | Confirm https://aiproof.club/privacy.html loads |

---

## Quick reference

```bash
cd aiproof-mobile
npm install              # install dependencies
npx expo start           # test in Expo Go
eas build -p ios         # cloud build for App Store
eas submit -p ios        # upload to App Store Connect
```

You’ve got this. Work through one step at a time.
