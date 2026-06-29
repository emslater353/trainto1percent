/**
 * Expand one forecast into many distinct second-order ripples.
 * Used by app.html (browser) and scripts/pulse-lib.js (Node).
 */

const THREAT_MODE_RIPPLES = {
    ideas: [
        (f) => `Taste and judgment become scarcer as "${shortTitle(f)}" commoditizes raw knowledge work.`,
        (f) => `Credentialing lags the shift — self-taught and portfolio paths open before institutions adapt.`,
        (f) => `Content volume explodes; curation, framing, and original synthesis carry premium pricing.`,
    ],
    execution: [
        (f) => `Teams restructure around reviewers and agent supervisors — fewer doers, tighter loops.`,
        (f) => `Tooling budgets shift from headcount to orchestration as "${shortTitle(f)}" compresses ROI math.`,
        (f) => `SOPs and playbooks get rewritten — tacit workflow knowledge becomes the bottleneck.`,
    ],
    personality: [
        (f) => `Trust and human presence become premium — automation raises the bar for authentic connection.`,
        (f) => `Brand differentiation moves from output volume to who's visibly accountable behind the work.`,
        (f) => `Communities and parasocial trust beat anonymous scale when "${shortTitle(f)}" lands.`,
    ],
};

const CATEGORY_RIPPLES = {
    ai: [
        (f) => `Model access commoditizes — winners own workflow glue, evals, and distribution.`,
        (f) => `Incumbents bundle AI features; standalone tools must wedge on a painful multi-step job.`,
        (f) => `Audit trails, guardrails, and human-in-the-loop UX become mandatory product surfaces.`,
        (f) => `Inference cost drops — margin moves to data, routing, and domain-specific context.`,
    ],
    fashion: [
        (f) => `Cycle time compresses — curation and taste beat studio access when visuals are cheap.`,
        (f) => `DTC brands test drops digitally before samples; fit/returns data becomes a moat.`,
        (f) => `Wholesale and retail buyers expect AI-assisted range planning — lagging suppliers lose shelf space.`,
    ],
    media: [
        (f) => `Generic publishing dies — investigation, POV, and on-the-ground reporting become the premium tier.`,
        (f) => `Distribution platforms capture more margin; creators need owned audiences and direct revenue.`,
        (f) => `Format arbitrage windows shrink — speed of iteration beats production polish.`,
    ],
    work: [
        (f) => `Job descriptions split: agent operators vs. judgment-heavy roles — hybrid titles confuse hiring.`,
        (f) => `Middle management thins; team leads who can direct automation gain leverage.`,
        (f) => `Freelance markets bifurcate — commodity tasks race to zero, specialist review rates hold.`,
    ],
    health: [
        (f) => `Clinical workflows gain AI copilots — liability and consent models lag product launches.`,
        (f) => `Patient data portability fights platform lock-in — whoever owns the longitudinal record wins.`,
        (f) => `Reimbursement and FDA pathways become gating factors, not model quality alone.`,
    ],
    finance: [
        (f) => `Spreads compress on automatable analysis — edge moves to proprietary data and execution speed.`,
        (f) => `Compliance and explainability requirements create a parallel product category.`,
        (f) => `Retail and institutional clients demand auditability — black-box vendors get swapped out.`,
    ],
    crypto: [
        (f) => `Infrastructure and compliance layers capture value as raw speculation matures.`,
        (f) => `On-chain automation shifts risk to smart-contract design and oracle reliability.`,
    ],
    education: [
        (f) => `Credential value erodes for rote skills — portfolios and demonstrated output replace certificates.`,
        (f) => `Tutoring and coaching premiumize; mass lecture content becomes free background noise.`,
    ],
    marketing: [
        (f) => `Creative production costs collapse — media buying and audience insight become the scarce skills.`,
        (f) => `Brand safety and authenticity audits rise as synthetic content floods channels.`,
    ],
};

function shortTitle(f) {
    const t = (f?.title || 'this shift').trim();
    return t.length > 48 ? t.slice(0, 45) + '…' : t;
}

function normalizeImpactKey(text) {
    return (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);
}

function splitRipplePhrases(text) {
    if (!text) return [];
    return text
        .split(/\s*[.!?]+\s+|\s*[—–;]\s+|\s*,\s+(?=(?:those|anyone|people|workers|businesses|teams|companies|brands|creators|developers|agencies|retailers|marketers|founders|operators|consumers|users|patients|students|teachers|lawyers|designers|engineers|managers|consultants|freelancers|knowledge workers)\b)/i)
        .map((s) => s.replace(/\s+/g, ' ').trim())
        .filter((s) => s.length >= 12);
}

function stripEmojiTitle(title) {
    return (title || '').replace(/^[\p{Extended_Pictographic}\s]+/gu, '').trim();
}

function deriveOpportunityRipples(opp) {
    const ripples = [];
    const label = stripEmojiTitle(opp.title);
    if (opp.description && opp.description.length >= 20) {
        ripples.push({ text: opp.description, tag: label || 'Opens up' });
    } else if (label) {
        ripples.push({ text: `${label} becomes a buildable wedge — specialists beat generalists early.`, tag: 'Opens up' });
    }
    if (opp.difficulty === 'hard') {
        ripples.push({ text: `High barrier to entry in "${label || 'this path'}" — first credible movers lock in design partners.`, tag: 'Moat' });
    } else if (opp.difficulty === 'medium') {
        ripples.push({ text: `"${label || 'This lane'}" is approachable now — crowded fast once the forecast is obvious.`, tag: 'Window' });
    }
    if (opp.timeframe) {
        ripples.push({ text: `Typical positioning window for ${label || 'this path'}: ${opp.timeframe}.`, tag: 'Timing' });
    }
    if (label) {
        ripples.push({ text: `Services and tooling around "${label}" appear before platform winners consolidate.`, tag: 'Downstream' });
    }
    return ripples;
}

function deriveStoryRipples(headline, takeaway, linked) {
    const h = (headline || '').toLowerCase();
    const out = [];
    const seen = new Set();
    const add = (text, why) => {
        const t = (text || '').replace(/\s+/g, ' ').trim();
        if (t.length < 12) return;
        const key = t.toLowerCase().slice(0, 50);
        if (seen.has(key)) return;
        seen.add(key);
        out.push({ text: t, why: why || `Tied to this headline — not a generic AI trend.` });
    };

    const subject = (headline || '').split(/[-–—|]/)[0].trim().slice(0, 60);

    if (/vision pro|spatial|wearable|glasses|headset|mixed reality|hardware team|hardware bench/.test(h)) {
        add(
            'OpenAI is building a hardware team — wearables and spatial devices, not just APIs.',
            'A Vision Pro executive joining OpenAI is about device strategy and talent wars — not mobile coding apps.',
        );
        add(
            'Apple loses senior spatial leadership — rivals can accelerate their wearable timelines.',
            'When VP-level hardware talent exits for a competitor, roadmap and partner confidence shift.',
        );
        add(
            'Meta, Apple, and OpenAI now compete on form factor — model access alone isn\'t the moat.',
            'Hardware hires signal where each lab thinks the next interface lives.',
        );
    } else if (/\bcursor\b|coding agent|agent.*(code|dev)|dev.*agent/.test(h)) {
        add(
            'Async dev workflows become normal — kick off agent runs between meetings.',
            'This applies to coding-agent products (Cursor, Copilot-style tools), not AR headsets.',
        );
        add(
            'Review and judgment become the bottleneck — not typing speed.',
            'When agents write code, human value shifts to direction and quality control.',
        );
    } else if (/\bmobile app\b|\bphone app\b|\bios app\b|\bandroid app\b/.test(h)) {
        add(
            'Mobile control turns async workflows into the default — desk-bound tools lose daily active use.',
            'Only when the headline is about a mobile app launch — not hardware executive moves.',
        );
    } else if (/leaderboard|benchmark|eval|arena/.test(h)) {
        add(
            'Trust and measurement layers capture margin as models commoditize.',
            'When everyone has models, ranking and eval infrastructure becomes the business.',
        );
    } else if (/government|regulat|policy|\.deal\b|state-level/.test(h)) {
        add(
            'Procurement and compliance rails matter as much as model quality.',
            'Public-sector deals set privacy, pricing, and vendor trust expectations.',
        );
    }

    const extraSentences = (takeaway || '')
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 24);
    extraSentences.slice(1, 3).forEach((s) => {
        add(s, `Pulled from our read on "${subject}" — specific to this story.`);
    });

    if (linked && out.length < 4) {
        add(
            `Early signal for our ${linked.probability}% prediction: "${linked.title}".`,
            `This news feeds that forecast — it doesn't confirm it yet. Watch for follow-on product moves.`,
        );
    }

    return out.slice(0, 4);
}

function expandHeadlineRipples(text, headline) {
    const derived = deriveStoryRipples(headline, text, null);
    return derived.map((r, i) => ({ text: r.text, tag: i === 0 ? 'This headline' : 'Ripple' }));
}

const GENERIC_FORECAST_RIPPLES = [
    (f) => `Budget and headcount plans shift toward "${shortTitle(f)}" before official strategy decks catch up.`,
    (f) => `Vendor RFPs start requiring capabilities that only matter if "${shortTitle(f)}" holds.`,
    (f) => `Training and onboarding content gets rewritten — yesterday's best practices become liability.`,
    (f) => `Partnership talks re-open as incumbents hedge against "${shortTitle(f)}" scenarios.`,
    (f) => `Insurance, compliance, and audit scopes expand to cover new failure modes from this shift.`,
    (f) => `Talent markets bifurcate — generalists commoditize while specialists in this lane command premiums.`,
    (f) => `Customer expectations reset — what felt premium last year becomes table stakes.`,
    (f) => `Supply chains and vendor stacks get re-evaluated for dependency risk tied to "${shortTitle(f)}".`,
    (f) => `Media narrative shifts from "if" to "when" — laggards lose narrative control with customers.`,
    (f) => `Capital allocation follows talent — teams that ship in this direction attract budget without asking.`,
];

function expandForecastImpactRipples(f, max = 14, min = 8) {
    if (!f) return [];
    const out = [];
    const seen = new Set();
    const add = (text, tag) => {
        const t = (text || '').replace(/\s+/g, ' ').trim();
        if (!t || t.length < 10) return;
        const key = normalizeImpactKey(t);
        if (seen.has(key)) return;
        seen.add(key);
        out.push({ text: t, tag: tag || 'Ripple' });
    };

    (f.impactRipples || []).forEach((entry) => {
        if (typeof entry === 'string') add(entry, 'Ripple');
        else if (entry?.text) add(entry.text, entry.tag || 'Ripple');
    });

    splitRipplePhrases(f.secondOrder || f.second_order).forEach((part, i) => add(part, i === 0 ? 'Core shift' : 'Ripple'));
    splitRipplePhrases(f.threatReason).forEach((part, i) => add(part, i === 0 ? 'Core shift' : 'Ripple'));
    splitRipplePhrases(f.atRisk).forEach((part, i) => add(part, i === 0 ? 'Who loses' : 'At risk'));

    (f.opportunities || []).forEach((opp) => {
        deriveOpportunityRipples(opp).forEach((r) => add(r.text, r.tag));
    });

    if (f.probability) {
        add(`${f.probability}% odds mean capital, hiring, and vendor choices move before consensus — early positioning beats perfect information.`, 'Market signal');
    }
    if (f.timeframe) {
        add(`Horizon ${f.timeframe}: first movers capture design partners; late entrants fight compressed margins.`, 'Timing');
    }

    const mode = f.threatMode || 'execution';
    (THREAT_MODE_RIPPLES[mode] || THREAT_MODE_RIPPLES.execution).forEach((fn) => add(fn(f), 'Structural'));
    Object.values(THREAT_MODE_RIPPLES).flat().forEach((fn) => add(fn(f), 'Structural'));

    const cat = f.category || 'ai';
    (CATEGORY_RIPPLES[cat] || CATEGORY_RIPPLES.ai).forEach((fn) => add(fn(f), 'Sector'));
    Object.entries(CATEGORY_RIPPLES).forEach(([key, fns]) => {
        if (key !== cat) fns.forEach((fn) => add(fn(f), 'Cross-sector'));
    });

    const fillers = [
        ...GENERIC_FORECAST_RIPPLES,
        ...(THREAT_MODE_RIPPLES[mode] || THREAT_MODE_RIPPLES.execution),
        ...(CATEGORY_RIPPLES[cat] || CATEGORY_RIPPLES.ai),
    ];
    let pass = 0;
    while (out.length < min && pass < fillers.length * 3) {
        const fn = fillers[pass % fillers.length];
        add(typeof fn === 'function' ? fn(f) : fn, 'Downstream');
        pass += 1;
    }

    return out.slice(0, Math.max(max, min));
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        expandForecastImpactRipples,
        expandHeadlineRipples,
        deriveStoryRipples,
        normalizeImpactKey,
    };
}

if (typeof window !== 'undefined') {
    window.expandForecastImpactRipples = expandForecastImpactRipples;
    window.expandHeadlineRipples = expandHeadlineRipples;
    window.deriveStoryRipples = deriveStoryRipples;
}
