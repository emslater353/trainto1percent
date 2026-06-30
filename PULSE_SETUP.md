# Pulse Setup

Pulse is the catch-up feed for founders who are behind on AI news. It pulls top tech headlines daily, links them to your forecast library, adds second-order takes, and suggests tools/actions — so you can scroll one feed instead of the timeline.

**Web only** (`app.html`). Mobile app not wired yet.

---

## What you need to provide (checklist)

Do these once, then Pulse runs on autopilot:

| # | You provide | Where |
|---|-------------|--------|
| 1 | **Supabase table** — run the SQL below once | Supabase → SQL Editor |
| 2 | **`SUPABASE_URL`** | Netlify → Environment variables |
| 3 | **`SUPABASE_SERVICE_ROLE_KEY`** (not the anon key) | Netlify → Environment variables |
| 4 | **`OPENAI_API_KEY`** | Netlify → Environment variables |
| 5 | **Deploy** latest code to Netlify (includes `shared/`, `scripts/`, `netlify/functions/`) | Push to GitHub / Netlify deploy |
| 6 | **First refresh** — click **Refresh feed** in the app, or run `curl https://aiproof.club/.netlify/functions/refresh-pulse` | After deploy |

**Optional:** `PRODUCTHUNT_TOKEN` for richer launch matching · `SUPABASE_ANON_KEY` for pulse API fallback.

**You do not need to:** manually add news stories, train a model, or curate hundreds of tool names (edit `shared/pulse-indie-picks.js` when you want to add favorites).

---

## Hourly refresh (automatic)

Configured in `netlify.toml`:

```toml
[functions."refresh-pulse"]
  schedule = "0 * * * *"   # top of every hour UTC
```

Each run:

1. **Cron** (`refresh-pulse`) fires hourly and immediately queues **`refresh-pulse-background`** (Netlify scheduled functions cap at **30 seconds**; full RSS + OpenAI ingest needs longer).
2. Background job fetches RSS, ranks, matches forecasts, enriches with OpenAI, upserts ~10 items into Supabase.
3. Deactivates items older than 14 days.

Manual **↻ Refresh feed** or `curl` hits `refresh-pulse` directly (60s sync limit). The app also **re-fetches the feed every hour** while you're on Pulse (no extra OpenAI cost).

---

## Step 1: Create Supabase table

Run in **Supabase → SQL Editor**:

```sql
create table if not exists pulse_items (
  id text primary key,
  published_at timestamptz default now(),
  headline text not null,
  source text,
  url text,
  topics text[] default '{}',
  forecast_id text,
  meaning text,
  meaning_personal text,
  startup_hint text,
  prep jsonb,
  active boolean default true,
  created_at timestamptz default now()
);

alter table pulse_items add column if not exists insight jsonb;

create index if not exists pulse_items_active_published on pulse_items (active, published_at desc);

alter table pulse_items enable row level security;

create policy "Public read active pulse"
  on pulse_items for select
  using (active = true);
```

---

## Step 2: Netlify environment variables

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | e.g. `https://snbchuvvnbwvghmbxehv.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | **Required for cron writes** (Settings → API → service_role) |
| `OPENAI_API_KEY` | Powers second-order takes + tool suggestions |
| `SUPABASE_ANON_KEY` | Optional — pulse API fallback |
| `PRODUCTHUNT_TOKEN` | Optional — richer Product Hunt data |

Redeploy after adding variables.

---

## Step 3: Verify it works

```bash
# Manual ingest (production)
curl https://aiproof.club/.netlify/functions/refresh-pulse

# Local preview
export SUPABASE_URL="https://snbchuvvnbwvghmbxehv.supabase.co"
export SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"
export OPENAI_API_KEY="sk-..."
node scripts/refresh-pulse.js --dry-run   # preview
node scripts/refresh-pulse.js             # write to Supabase
```

In the app you should see:

- **How it connects** — related stories woven into one thread (e.g. wearables cluster)
- **Today's highlights** — scrollable cards with **So what** · **What's coming** · **Do this**
- Dates like **Today** / **Yesterday**, not stale timestamps

---

## What each card shows

| Section | What it is |
|---|---|
| Headline | The news |
| **So what** | Second-order impact — not the obvious take |
| **What's coming** | Linked forecast + prediction |
| **Do this** | Indie tools to try (linked) |
| **How it connects** | When multiple stories are the same platform shift |

---

## Adding news sources

Edit `RSS_FEEDS` in `scripts/pulse-lib.js`, redeploy, refresh.

---

## Story clusters ("How it connects")

Edit `shared/pulse-waves.js` to define when separate headlines should weave together (e.g. Meta glasses + Snap Specs + OpenAI hardware = wearables thread).

---

## Indie tool picks

Edit `shared/pulse-indie-picks.js` — add `{ name, hook, tags, curated: true }`, then re-run refresh.

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Stale dates / old news | Deploy latest code · click **Refresh feed** · verify Netlify env vars |
| "Offline preview" | Table empty — run refresh script or wait for 9am ET cron |
| Cron writes fail | Use `SUPABASE_SERVICE_ROLE_KEY`, not anon key |
| Generic AI output | Check `OPENAI_API_KEY` on Netlify |

---

## Files

| File | Role |
|---|---|
| `scripts/pulse-lib.js` | RSS ingest, hype ranking, clusters, AI, Supabase |
| `shared/pulse-waves.js` | "How it connects" story threading |
| `shared/pulse-indie-picks.js` | Curated tools |
| `shared/forecasts-data.js` | Prediction library |
| `netlify/functions/refresh-pulse.js` | Daily cron + manual refresh API |
| `netlify/functions/pulse.js` | Public GET API |
| `app.html` | Pulse UI |
