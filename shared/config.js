const OPENAI_API = '/.netlify/functions/openai';
const APP_VERSION = 'v2025.02.25.D'; // Version tracker

const SUPABASE_URL = 'https://snbchuvvnbwvghmbxehv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYmNodXZ2bmJ3dmdobWJ4ZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MDg5NzMsImV4cCI6MjA4NTQ4NDk3M30.cKPieraN3FRT_5ilAQL0X2b9kIpklzE49xGzVJwYxZo';
const STRIPE_LINK = 'https://buy.stripe.com/8x2eVdbgP4yL6VK32q9ws01';
const STRIPE_ANNUAL = 'https://buy.stripe.com/dRm5kDbgP5CPdk89qO9ws02';
const STRATEGY_CALL_URL='https://calendly.com/erica-m-slater/aiproofclub';
const COMPANY_REPORT_PRICE=29;
const COMPANY_REPORT_STRIPE='https://buy.stripe.com/14A3cv4Sr1mzdk8gTg9ws03';

// Supabase Auth helper functions
async function supabaseAuth(action, data) {
    const url = `${SUPABASE_URL}/auth/v1/${action}`;
    const headers = {
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json'
    };
    
    // Add auth token for actions that need it
    if (data.access_token) {
        headers['Authorization'] = `Bearer ${data.access_token}`;
    }
    
    try {
        const r = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
        const result = await r.json();
        if (!r.ok) {
            console.error('Auth error:', result);
            return { error: result };
        }
        return result;
    } catch (e) {
        console.error('Auth exception:', e);
        return { error: { message: e.message } };
    }
}

async function authSignUp(email, password, metadata) {
    var payload = { email, password };
    if(metadata) payload.data = metadata;
    return supabaseAuth('signup', payload);
}

async function authSignIn(email, password) {
    return supabaseAuth('token?grant_type=password', { email, password });
}

async function authResetPassword(email) {
    return supabaseAuth('recover', { email });
}

async function authUpdatePassword(accessToken, newPassword) {
    const url = `${SUPABASE_URL}/auth/v1/user`;
    try {
        const r = await fetch(url, {
            method: 'PUT',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: newPassword })
        });
        const result = await r.json();
        if (!r.ok) return { error: result };
        return result;
    } catch (e) {
        return { error: { message: e.message } };
    }
}

const S = {
    screen: 'login', user: null, scores: {ideas:50,personality:50,execution:50},
    quests: [], receipts: [], chat: [], loading: false, modal: null, selectedQuest: null,
    quizStep: 0, quizAnswers: [], uploadedFile: null, diff: 'standard', gptAnalysis: null, weeklyReview: null,
    coachMode: 'ideas', // which coach is active
    showMoreMenu: false, // mobile more menu state
    // Quest customization
    hiddenQuests: [], // quest IDs user has hidden
    customQuests: [], // user-created quests
    followedForecasts: [], // forecast IDs user is tracking
    forecastProgress: {}, // {forecastId: {oppId: questIndex}} tracks which quest they're on
    getQuestsExpandedOpp: null, // {forecastId, oppIndex} for Get Quests modal
    // Onboarding data
    onboardStep: 1, // 1=account, 2=occupation, 3=goals, 4=interests, 5=assessment, 6=results+forecasts, 7=email+paywall
    onboardData: {
        occupation: '',
        industry: '',
        experience: '',
        goals: [],
        forecastInterests: []
    },
    onboardSelectedForecasts: [], // forecasts selected during onboarding step 6
    weeklyEmailOptIn: null, // {email, optedIn} for weekly quest emails
    freeQuizMode: false, // true if taking quiz from landing page (not logged in)
    freeQuizScores: null, // store scores from free quiz
    diagnosticStep: 0, // 0=email/industry, 1-4=questions, 5=results (gated)
    diagnosticEmail: '',
    diagnosticIndustry: '',
    diagnosticAnswers: [],
    // Forecasts
    forecasts: [],
    forecastFilter: 'all', // all, ai, tech, crypto, politics, science
    forecastPerson: 'all',
    selectedForecast: null,
    expandedOpp: null, // which opportunity is expanded in modal
    opportunities: {},
    companyStep:0,companyUrl:'',companyEmail:'',companyIndustry:'',companyDesc:'',companyResult:null,companyLoadingStep:0,companyUnlocked:false,
    reportSlide:0, // 0=status, 1..N=opps, N+1=risks, N+2=bottom line/actions
    planGenerating:null, // index of opp currently generating plan
    plans:{}, // {oppIndex: {steps:[],generating:false}}
    threatProvider:null,threatStep:0,threatUrl:'',threatEmail:'',threatIndustry:'',threatDesc:'',threatResult:null,threatLoadingStep:0,threatUnlocked:false,
    threatSlide:0,threatPlans:{}
};

async function db(table, method, data=null, query='') {
    const url = `${SUPABASE_URL}/rest/v1/${table}${query}`;
    const opt = { method, headers: {'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json','Prefer':method==='POST'?'return=representation':''} };
    if(data) opt.body = JSON.stringify(data);
    try { 
        const r = await fetch(url,opt); 
        if(!r.ok) {
            console.error('DB error:', r.status, r.statusText, await r.text());
            return null; 
        }
        const t = await r.text(); 
        return t ? JSON.parse(t) : true; 
    } catch(e) { 
        console.error('DB exception:', e);
        return null; 
    }
}

async function ai(msgs, tokens=500, type='general') {
    try {
        const r = await fetch(OPENAI_API, {
            method:'POST', headers:{'Content-Type':'application/json'},
            body: JSON.stringify({messages:msgs, type:type})
        });
        const d = await r.json(); if(d.error) throw new Error(d.error); return d.content;
    } catch(e) { console.error(e); return null; }
}

// Ranking/validation via OpenAI (routed through Netlify function - no exposed keys)
async function aiRank(prompt, tokens) {
    tokens = tokens || 1000;
    return await ai([{role:'user',content:prompt}], tokens, 'general');
}

const Qs = [
    // DECISION MAKING (Ideas)
    {t:"When facing a complex decision, you typically:",o:[
        {t:"Map out all possible scenarios and outcomes",m:"ideas",w:2},
        {t:"Talk through it with people you trust",m:"personality",w:2},
        {t:"Make a quick call and adjust as you go",m:"execution",w:2},
        {t:"Research until you feel completely confident",m:"ideas",w:1}
    ]},
    {t:"When someone presents a plan with flaws, you:",o:[
        {t:"Point out the logical gaps immediately",m:"ideas",w:2},
        {t:"Ask questions to help them see the issues",m:"personality",w:2},
        {t:"Focus on what's actionable and move forward",m:"execution",w:2},
        {t:"Stay quiet to avoid conflict",m:"personality",w:-1}
    ]},
    {t:"Your ideas usually:",o:[
        {t:"Stay in your head or a notes app",m:"ideas",w:-1},
        {t:"Get shared but rarely acted on",m:"ideas",w:1},
        {t:"Turn into conversations that energize others",m:"personality",w:2},
        {t:"Become projects you actually complete",m:"execution",w:2}
    ]},
    // SOCIAL DYNAMICS (Personality)
    {t:"At a networking event or party, you:",o:[
        {t:"Find one interesting person for deep conversation",m:"ideas",w:1},
        {t:"Work the room and meet lots of people",m:"personality",w:2},
        {t:"Look for people who can help your goals",m:"execution",w:1},
        {t:"Leave early—draining",m:"personality",w:-1}
    ]},
    {t:"When someone disagrees with you publicly:",o:[
        {t:"Defend your position with logic and evidence",m:"ideas",w:2},
        {t:"Find common ground to defuse tension",m:"personality",w:2},
        {t:"Stand firm—conflict doesn't bother you",m:"execution",w:1},
        {t:"Back down to keep the peace",m:"execution",w:-1}
    ]},
    {t:"People come to you when they need:",o:[
        {t:"A fresh perspective or creative solution",m:"ideas",w:2},
        {t:"Someone to listen and support them",m:"personality",w:2},
        {t:"Someone to help get things done",m:"execution",w:2},
        {t:"They don't usually come to me",m:"personality",w:-1}
    ]},
    {t:"Your humor style is:",o:[
        {t:"Witty, clever, observational",m:"ideas",w:1},
        {t:"Warm, self-deprecating, brings people together",m:"personality",w:2},
        {t:"Sarcastic, dry, quick",m:"execution",w:1},
        {t:"I'm not really the funny one",m:"personality",w:-1}
    ]},
    // EXECUTION & FOLLOW-THROUGH
    {t:"When you commit to something:",o:[
        {t:"You think it through carefully first",m:"ideas",w:1},
        {t:"You get others bought in",m:"personality",w:1},
        {t:"You do it—your word is your bond",m:"execution",w:2},
        {t:"Honestly, you often don't follow through",m:"execution",w:-2}
    ]},
    {t:"Your to-do list is:",o:[
        {t:"Full of ideas, loosely organized",m:"ideas",w:1},
        {t:"Shared with others for accountability",m:"personality",w:1},
        {t:"Short and gets done daily",m:"execution",w:2},
        {t:"Overwhelming and growing",m:"execution",w:-1}
    ]},
    {t:"When a project stalls, you typically:",o:[
        {t:"Rethink the strategy—maybe wrong approach",m:"ideas",w:1},
        {t:"Get others involved to push through",m:"personality",w:1},
        {t:"Force yourself to just do the next step",m:"execution",w:2},
        {t:"Let it sit—maybe it wasn't meant to be",m:"execution",w:-2}
    ]},
    // AMBITION & RISK
    {t:"When you want something from someone:",o:[
        {t:"Build a compelling logical case",m:"ideas",w:2},
        {t:"Build relationship first, ask later",m:"personality",w:2},
        {t:"Ask directly—worst they can say is no",m:"execution",w:2},
        {t:"Hint and hope they offer",m:"personality",w:-1}
    ]},
    {t:"Taking risks makes you feel:",o:[
        {t:"Excited if it's a calculated risk",m:"ideas",w:1},
        {t:"Better when others are taking them with you",m:"personality",w:1},
        {t:"Alive—you'd rather act than wait",m:"execution",w:2},
        {t:"Anxious—you prefer safety",m:"execution",w:-1}
    ]},
    // SELF-ASSESSMENT
    {t:"Your biggest professional weakness is:",o:[
        {t:"Overthinking and analysis paralysis",m:"ideas",w:-1},
        {t:"Caring too much what others think",m:"personality",w:-1},
        {t:"Taking on too much and burning out",m:"execution",w:1},
        {t:"Not finishing what you start",m:"execution",w:-2}
    ]},
    {t:"If you had to give a TEDx talk tomorrow:",o:[
        {t:"Exciting—you have lots of ideas to share",m:"ideas",w:2},
        {t:"Scary but you'd rise to the occasion",m:"personality",w:1},
        {t:"You'd focus on lessons from things you've built",m:"execution",w:2},
        {t:"Terrifying—public speaking is your nightmare",m:"personality",w:-1}
    ]},
    {t:"In five years, you want people to say you:",o:[
        {t:"See things others miss",m:"ideas",w:2},
        {t:"Are magnetic and well-connected",m:"personality",w:2},
        {t:"Ship like crazy and make things happen",m:"execution",w:2},
        {t:"Are reliable and steady",m:"execution",w:1}
    ]}
];

// Shortened 4-question diagnostic for landing page (email gate)
const DiagnosticQs = [
    {t:"When facing a complex decision, you typically:",o:[
        {t:"Map out all possible scenarios",m:"ideas",w:2},
        {t:"Talk through it with people you trust",m:"personality",w:2},
        {t:"Make a quick call and adjust as you go",m:"execution",w:2}
    ]},
    {t:"People come to you when they need:",o:[
        {t:"A fresh perspective or creative solution",m:"ideas",w:2},
        {t:"Someone to listen and support them",m:"personality",w:2},
        {t:"Someone to help get things done",m:"execution",w:2}
    ]},
    {t:"When you commit to something:",o:[
        {t:"You think it through carefully first",m:"ideas",w:2},
        {t:"You get others bought in",m:"personality",w:2},
        {t:"You do it—your word is your bond",m:"execution",w:2}
    ]},
    {t:"In five years, you want people to say you:",o:[
        {t:"See things others miss",m:"ideas",w:2},
        {t:"Are magnetic and well-connected",m:"personality",w:2},
        {t:"Ship and make things happen",m:"execution",w:2}
    ]}
];

// Occupation and industry options
const OCCUPATIONS = [
    "Software Engineer / Developer",
    "Product Manager",
    "Designer (UX/UI/Graphic)",
    "Data Scientist / Analyst",
    "Marketing / Growth",
    "Sales / Business Development", 
    "Founder / CEO",
    "Executive / C-Suite",
    "Consultant",
    "Finance / Accounting",
    "Operations / Project Manager",
    "Content Creator / Writer",
    "Student",
    "Unemployed / Between Jobs",
    "Other"
];

const INDUSTRIES = [
    "Technology / Software",
    "Finance / Banking",
    "Healthcare",
    "E-commerce / Retail",
    "Media / Entertainment",
    "Consulting",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Government / Non-profit",
    "Crypto / Web3",
    "AI / Machine Learning",
    "Other"
];

const GOALS = [
    {id: "decisions", label: "Make better decisions faster", icon: "🎯"},
    {id: "relationships", label: "Build stronger professional relationships", icon: "🤝"},
    {id: "shipping", label: "Ship projects without procrastinating", icon: "🚀"},
    {id: "ai-prep", label: "Prepare for AI disruption", icon: "🤖"},
    {id: "business", label: "Build a business", icon: "💼"},
    {id: "career", label: "Get promoted / change careers", icon: "📈"},
    {id: "influence", label: "Become more influential", icon: "⚡"},
    {id: "confidence", label: "Build confidence", icon: "💪"}
];

const FORECAST_INTERESTS = [
    {id: "ai", label: "AI & Technology", icon: "🤖"},
    {id: "work", label: "Future of Work", icon: "💼"},
    {id: "finance", label: "Finance & Markets", icon: "📈"},
    {id: "crypto", label: "Crypto & Web3", icon: "₿"},
    {id: "media", label: "Media & Content", icon: "🎬"},
    {id: "tech", label: "Robotics & Hardware", icon: "🦾"}
];

const QB = {
    ideas: {
        easy: [{t:"Write down one decision you've been avoiding.",xp:20,tip:"Awareness first."},{t:"Ask one clarifying question today.",xp:25,tip:"Questions > assumptions."}],
        standard: [{t:"Make a decision you've postponed 3+ days. Tell someone.",xp:50,tip:"Deciding is a muscle."},{t:"Take your best idea, write 3 next steps. Share it.",xp:45,tip:"Ideas without steps are dreams."}],
        hard: [{t:"Make a reversible decision in 2 minutes. No research. Act.",xp:80,tip:"Speed > perfection."},{t:"Pitch an idea to someone who can say yes.",xp:90,tip:"Ideas need oxygen."}]
    },
    personality: {
        easy: [{t:"Give someone a specific, genuine compliment.",xp:20,tip:"'I noticed you...' works."},{t:"Start a conversation with someone you don't usually talk to.",xp:25,tip:"New connections = leverage."}],
        standard: [{t:"Add levity to a tense moment. Notice reactions.",xp:50,tip:"Humor defuses."},{t:"Disagree respectfully in a group setting.",xp:55,tip:"Calibrated disagreement builds respect."}],
        hard: [{t:"Post a genuine opinion on LinkedIn/Twitter. Your take.",xp:80,tip:"If it feels risky, it's right."},{t:"Have a difficult conversation you've been avoiding.",xp:90,tip:"The conversation you fear is the one you need."}],
        anon: [{t:"Create an anonymous account and post one opinion.",xp:40,tip:"Start protected."},{t:"Reply to someone influential with a thoughtful take (anon ok).",xp:45,tip:"Anonymous reps count."}]
    },
    execution: {
        easy: [{t:"Send one email you've been putting off.",xp:20,tip:"Done > perfect."},{t:"Complete one small task on your list for 3+ days.",xp:25,tip:"Clear the queue."}],
        standard: [{t:"Rewrite your last email 40% shorter. Send it.",xp:45,tip:"Brevity = respect."},{t:"Decline a meeting that doesn't serve your goals.",xp:55,tip:"'I can't make this work' is complete."}],
        hard: [{t:"Ask for something you want. Directly. No hints.",xp:80,tip:"Clear asks get clear answers."},{t:"Follow up on a commitment someone made. Hold them accountable.",xp:75,tip:"Accountability goes both ways."}]
    },
    boss: [
        {t:"Ask for a raise or promotion. Make the case.",xp:200,m:"execution",tip:"You don't get what you don't ask for."},
        {t:"Publish something with your name. Blog, tweet thread, article.",xp:180,m:"personality",tip:"Reputation is built in public."},
        {t:"Have THE conversation you've avoided for weeks.",xp:200,m:"personality",tip:"Avoidance compounds."},
        {t:"Ship a side project. Announce it publicly.",xp:190,m:"execution",tip:"Shipping is the skill."}
    ]
};
