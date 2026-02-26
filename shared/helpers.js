function weakest() { const {ideas:i,personality:p,execution:e}=S.scores; if(i<=p&&i<=e)return'ideas'; if(p<=i&&p<=e)return'personality'; return'execution'; }
function strongest() { const {ideas:i,personality:p,execution:e}=S.scores; if(i>=p&&i>=e)return'ideas'; if(p>=i&&p>=e)return'personality'; return'execution'; }

// Skew the weakest score down to create urgency, keep others real
function skewScores(raw) {
    const modes = ['ideas', 'personality', 'execution'];
    const weakestMode = modes.reduce((a, b) => raw[a] < raw[b] ? a : b);
    const skewAmount = Math.floor(Math.random() * 6) + 10; // 10-15 points
    
    return {
        ideas: raw.ideas,
        personality: raw.personality,
        execution: raw.execution,
        [weakestMode]: Math.max(20, raw[weakestMode] - skewAmount)
    };
}

// Calculate percentile for display (makes scores feel more meaningful)
function getPercentile(score) {
    // Rough mapping: 20=5th, 50=50th, 80=95th
    if (score <= 30) return Math.round(score * 0.5);
    if (score <= 50) return Math.round(15 + (score - 30) * 1.25);
    if (score <= 70) return Math.round(40 + (score - 50) * 2);
    return Math.round(80 + (score - 70) * 0.67);
}

// Get suggested forecasts based on user interests and assessment
function getSuggestedForecasts() {
    const interests = S.onboardData?.forecastInterests || [];
    const weak = weakest();
    
    // Map interests to forecast categories
    const categoryMap = {
        'ai': ['ai', 'tech'],
        'work': ['work'],
        'finance': ['finance', 'crypto'],
        'creative': ['media'],
        'health': ['work'], // health interests map to work/longevity forecasts
        'business': ['tech', 'finance']
    };
    
    // Get relevant categories
    let relevantCategories = [];
    interests.forEach(interest => {
        if(categoryMap[interest]) {
            relevantCategories = [...relevantCategories, ...categoryMap[interest]];
        }
    });
    relevantCategories = [...new Set(relevantCategories)];
    if(relevantCategories.length === 0) relevantCategories = ['ai', 'tech', 'work']; // defaults
    
    // Filter and sort forecasts
    let forecasts = FORECAST_DATABASE.filter(f => relevantCategories.includes(f.category));
    
    // Prioritize forecasts that match user's weak mode
    forecasts.sort((a, b) => {
        const aMatchesWeak = a.threatMode === weak ? 1 : 0;
        const bMatchesWeak = b.threatMode === weak ? 1 : 0;
        if(bMatchesWeak !== aMatchesWeak) return bMatchesWeak - aMatchesWeak;
        return b.probability - a.probability; // Higher probability first
    });
    
    return forecasts.slice(0, 10); // Return top 10
}

// Get teaser quests from selected forecasts
function getTeaserQuests(selectedForecastIds) {
    const forecasts = selectedForecastIds.length > 0 
        ? FORECAST_DATABASE.filter(f => selectedForecastIds.includes(f.id))
        : getSuggestedForecasts().slice(0, 3);
    
    let quests = [];
    forecasts.forEach(f => {
        if(f.opportunities && f.opportunities[0] && f.opportunities[0].quests) {
            const opp = f.opportunities[0];
            opp.quests.slice(0, 2).forEach((q, idx) => {
                quests.push({
                    mode: q.mode,
                    task: q.task,
                    xp: q.xp,
                    forecastTitle: f.title,
                    forecastId: f.id
                });
            });
        }
    });
    
    return quests.slice(0, 6); // Max 6 teaser quests
}

function dayNum() { if(!S.user?.start_date)return 1; return Math.floor((Date.now()-new Date(S.user.start_date).getTime())/86400000)+1; }
function totalXP() { return S.receipts.reduce((s,r)=>s+(r.xp||0),0); }

// Theme management
function setTheme(theme) {
    if(theme === 'light') {
        document.documentElement.classList.add('light-mode');
    } else {
        document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('apc_theme', theme);
    render();
}

function initTheme() {
    const saved = localStorage.getItem('apc_theme');
    if(saved === 'light') {
        document.documentElement.classList.add('light-mode');
    }
}

// Get date string in YYYY-MM-DD format (timezone safe)
function getDateStr(date = new Date()) {
    const d = new Date(date);
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

// Calculate streak from receipts
function streak() {
    if(!S.receipts || !S.receipts.length) return 0;
    
    // Get unique dates from receipts (in YYYY-MM-DD format for consistent comparison)
    const receiptDates = new Set(S.receipts.map(r => {
        if(!r.ts) return null;
        return getDateStr(new Date(r.ts));
    }).filter(d => d));
    
    if(receiptDates.size === 0) return 0;
    
    const today = getDateStr();
    const yesterday = getDateStr(new Date(Date.now() - 86400000));
    
    // Determine starting point: today if active, yesterday if yesterday was active
    let checkDate;
    if(receiptDates.has(today)) {
        checkDate = new Date();
    } else if(receiptDates.has(yesterday)) {
        checkDate = new Date(Date.now() - 86400000);
    } else {
        return 0;
    }
    
    // Count consecutive days going backwards
    let streakCount = 0;
    for(let i = 0; i < 365; i++) {
        const dateStr = getDateStr(checkDate);
        if(receiptDates.has(dateStr)) {
            streakCount++;
            checkDate = new Date(checkDate.getTime() - 86400000);
        } else {
            break;
        }
    }
    
    return streakCount;
}

// Update streak when user completes a quest (also tracks in localStorage for persistence)
function updateStreakData() {
    const today = getDateStr();
    const streakData = JSON.parse(localStorage.getItem('apc_streak') || '{}');
    
    // Record today's activity
    if(!streakData.activeDates) streakData.activeDates = [];
    if(!streakData.activeDates.includes(today)) {
        streakData.activeDates.push(today);
        // Keep only last 365 days
        streakData.activeDates = streakData.activeDates.slice(-365);
    }
    streakData.lastActive = today;
    
    localStorage.setItem('apc_streak', JSON.stringify(streakData));
}

// Progressive Quest Curriculum - Gets harder each week
const CURRICULUM = {
    ideas: [
        // Week 1-2: Awareness
        [{t:"Write down one decision you've been avoiding.",xp:20,tip:"Awareness first."},{t:"Notice when you're overthinking today. Just notice.",xp:15,tip:"Pattern recognition."}],
        [{t:"Ask one clarifying question in a meeting.",xp:25,tip:"Questions > assumptions."},{t:"Identify one assumption you're making about a project.",xp:20,tip:"Name it to tame it."}],
        // Week 3-4: Action
        [{t:"Make a small decision in under 2 minutes. No research.",xp:35,tip:"Speed builds muscle."},{t:"Share one idea with someone who can act on it.",xp:40,tip:"Ideas need oxygen."}],
        [{t:"Make a decision you've postponed 3+ days. Tell someone.",xp:50,tip:"Deciding is a muscle."},{t:"Take your best idea, write 3 next steps. Share it.",xp:45,tip:"Ideas without steps are dreams."}],
        // Week 5-6: Challenge
        [{t:"Challenge one belief you hold about your work. Write the counter-argument.",xp:55,tip:"Strong opinions, loosely held."},{t:"Propose a new approach to a stuck problem. In writing.",xp:60,tip:"Written = committed."}],
        [{t:"Make a reversible decision in 2 minutes. No research. Act on it.",xp:70,tip:"Speed > perfection."},{t:"Kill one project or idea you've been holding onto.",xp:65,tip:"Pruning creates growth."}],
        // Week 7+: Mastery
        [{t:"Pitch an idea to someone who can say yes. Get a real response.",xp:90,tip:"Ideas need champions."},{t:"Make a decision that affects others. Own it publicly.",xp:85,tip:"Leaders decide."}]
    ],
    personality: [
        // Week 1-2: Awareness
        [{t:"Notice one social dynamic in a meeting today.",xp:15,tip:"Observation first."},{t:"Pay attention to how someone responds to you. What worked?",xp:20,tip:"Calibration starts with noticing."}],
        [{t:"Give someone a specific, genuine compliment.",xp:25,tip:"'I noticed you...' works."},{t:"Start a conversation with someone you don't usually talk to.",xp:25,tip:"New connections = leverage."}],
        // Week 3-4: Action
        [{t:"Add levity to a slightly tense moment. Notice reactions.",xp:40,tip:"Humor defuses."},{t:"Ask someone 'What's been on your mind?' and actually listen.",xp:35,tip:"Curiosity > agenda."}],
        [{t:"Disagree respectfully in a group setting. Stay calm.",xp:50,tip:"Calibrated disagreement builds respect."},{t:"Give feedback to someone. Specific and constructive.",xp:55,tip:"Feedback is a gift."}],
        // Week 5-6: Challenge
        [{t:"Recover gracefully from an awkward moment. Document what worked.",xp:60,tip:"Recovery > prevention."},{t:"Have a mildly uncomfortable conversation. Stay in it.",xp:65,tip:"Comfort zone expands."}],
        [{t:"Post a genuine opinion online. Your take, your name.",xp:75,tip:"If it feels risky, it's right."},{t:"Ask for feedback from someone whose opinion intimidates you.",xp:70,tip:"Intimidation = respect."}],
        // Week 7+: Mastery
        [{t:"Have a difficult conversation you've been avoiding. Be direct.",xp:90,tip:"The conversation you fear is the one you need."},{t:"Influence a group decision without dominating.",xp:85,tip:"Soft power > hard power."}]
    ],
    execution: [
        // Week 1-2: Awareness
        [{t:"Track how long tasks actually take today vs your estimate.",xp:15,tip:"Awareness of time."},{t:"Notice one thing you're procrastinating on. Just notice.",xp:20,tip:"Name the avoidance."}],
        [{t:"Send one email you've been putting off.",xp:25,tip:"Done > perfect."},{t:"Complete one small task on your list for 3+ days.",xp:25,tip:"Clear the queue."}],
        // Week 3-4: Action
        [{t:"Rewrite your last email 40% shorter. Send it.",xp:40,tip:"Brevity = respect."},{t:"Set a 25-min timer and work on ONE thing. No switching.",xp:35,tip:"Focus is a skill."}],
        [{t:"Decline a meeting that doesn't serve your goals. No apology.",xp:50,tip:"'I can't make this' is complete."},{t:"Ship something at 80%. Stop polishing.",xp:55,tip:"Shipped > perfect."}],
        // Week 5-6: Challenge
        [{t:"Follow up on a commitment someone made. Hold them accountable.",xp:60,tip:"Accountability goes both ways."},{t:"Set a deadline and hit it. No extensions.",xp:65,tip:"Deadlines reveal priorities."}],
        [{t:"Ask for something you want. Directly. No hints.",xp:75,tip:"Clear asks get clear answers."},{t:"Delegate something you usually do yourself.",xp:70,tip:"Leverage > labor."}],
        // Week 7+: Mastery
        [{t:"Ship a complete project this week. Announce it.",xp:90,tip:"Shipping is the skill."},{t:"Say no to something good to protect something great.",xp:85,tip:"No is a complete sentence."}]
    ],
    boss: [
        // Progressive boss quests
        [{t:"Send a message to someone you admire. Genuine, not needy.",xp:100,m:"personality"},{t:"Publish something with your name on it. Anywhere.",xp:100,m:"execution"}],
        [{t:"Ask for a small raise or new responsibility.",xp:150,m:"execution"},{t:"Share a contrarian opinion in a professional setting.",xp:140,m:"personality"}],
        [{t:"Pitch yourself for an opportunity you're not sure you're ready for.",xp:180,m:"ideas"},{t:"Have THE conversation you've avoided for weeks.",xp:180,m:"personality"}],
        [{t:"Ask for a significant raise or promotion. Make the case.",xp:200,m:"execution"},{t:"Ship a side project and announce it publicly.",xp:200,m:"execution"}]
    ]
};

function getWeekNumber() {
    const start = S.user?.start_date ? new Date(S.user.start_date) : new Date();
    const now = new Date();
    const diff = now - start;
    return Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function getCurriculumWeek() {
    const week = getWeekNumber();
    // Map week to curriculum index (0-6, then stays at 6 for mastery)
    if (week <= 2) return 0;
    if (week <= 4) return 1;
    if (week <= 6) return 2;
    if (week <= 8) return 3;
    if (week <= 10) return 4;
    if (week <= 12) return 5;
    return 6; // Mastery level
}

function genQuests() {
    const w = weakest();
    const d = S.diff || 'standard';
    const qs = [];
    
    // Get recently completed quest texts to avoid repeats (last 20 receipts)
    const recentlyDone = new Set();
    if (S.receipts && S.receipts.length > 0) {
        S.receipts.slice(-20).forEach(r => {
            if (r.title) recentlyDone.add(r.title.toLowerCase().trim());
        });
    }
    
    // Auto-progress difficulty based on receipts count
    let effectiveDiff = d;
    const totalCompleted = S.receipts ? S.receipts.length : 0;
    if (d === 'standard' && totalCompleted >= 30) {
        effectiveDiff = 'hard';
    }
    
    // Helper to get quests excluding recently done
    const getAvailableQuests = (mode, difficulty) => {
        if (!QB[mode] || !QB[mode][difficulty]) return [];
        return QB[mode][difficulty].filter(q => q.t && !recentlyDone.has(q.t.toLowerCase().trim()));
    };
    
    // Get quests from QB based on difficulty
    let modeQuests = getAvailableQuests(w, effectiveDiff);
    
    // Fallback if too few available
    if (modeQuests.length < 2 && QB[w] && QB[w][effectiveDiff]) {
        modeQuests = QB[w][effectiveDiff];
    }
    if (!modeQuests || modeQuests.length === 0) {
        modeQuests = QB[w]?.standard || [];
    }
    
    // 2 quests from weakest mode
    const shuffled = [...modeQuests].sort(() => Math.random() - 0.5);
    shuffled.slice(0, 2).forEach(q => {
        if (q && q.t) {
            qs.push({...q, mode: w, diff: effectiveDiff, id: Date.now() + Math.random(), done: false});
        }
    });
    
    // 1 quest from each other mode
    ['ideas', 'personality', 'execution'].filter(m => m !== w).forEach(m => {
        let otherQuests = getAvailableQuests(m, effectiveDiff);
        if (otherQuests.length === 0 && QB[m]) {
            otherQuests = QB[m][effectiveDiff] || QB[m].standard || [];
        }
        if (otherQuests && otherQuests.length > 0) {
            const q = otherQuests[Math.floor(Math.random() * otherQuests.length)];
            if (q && q.t) {
                qs.push({...q, mode: m, diff: effectiveDiff, id: Date.now() + Math.random(), done: false});
            }
        }
    });
    
    // Anonymous option for personality if struggling
    if (w === 'personality' && S.scores.personality < 40 && d === 'easy' && QB.personality?.anon) {
        const anonQuests = QB.personality.anon;
        const available = anonQuests.filter(q => q.t && !recentlyDone.has(q.t.toLowerCase().trim()));
        const pool = available.length > 0 ? available : anonQuests;
        if (pool.length > 0) {
            const q = pool[Math.floor(Math.random() * pool.length)];
            qs.push({...q, mode: 'personality', diff: 'anon', id: Date.now() + Math.random(), done: false});
        }
    }
    
    // Boss quest after 20+ completions
    if (totalCompleted >= 20 && QB.boss && QB.boss.length > 0) {
        const available = QB.boss.filter(q => q.t && !recentlyDone.has(q.t.toLowerCase().trim()));
        const pool = available.length > 0 ? available : QB.boss;
        const boss = pool[Math.floor(Math.random() * pool.length)];
        if (boss) {
            qs.push({t: boss.t, xp: boss.xp, mode: boss.m, diff: 'boss', tip: boss.tip, id: Date.now() + Math.random(), done: false, boss: true});
        }
    }
    
    return qs;
}

function getDiffLabel(diff) {
    const labels = {easy: 'Easy', standard: 'Standard', hard: 'Hard', anon: 'Anon OK', boss: 'Boss'};
    return labels[diff] || diff;
}

function shouldRefreshQuests() {
    if (!S.user?.lastQuestWeek) return false; // Don't refresh if never set - user might be mid-week
    return getWeekNumber() > S.user.lastQuestWeek;
}

function checkWeeklyProgress() {
    // Only refresh if it's actually a new week
    if (shouldRefreshQuests()) {
        // Generate new quests for the new week
        const newQuests = genQuests();
        S.quests = newQuests;
        S.user.lastQuestWeek = getWeekNumber();
        save();
    }
    // Set lastQuestWeek if not set (first time)
    if (!S.user.lastQuestWeek && S.quests && S.quests.length > 0) {
        S.user.lastQuestWeek = getWeekNumber();
        save();
    }
}

function capsules(){
    const start=S.user?.start_date?new Date(S.user.start_date):new Date(), d=dayNum();
    return [
        {day:1,label:'Day 1',unlocked:true,scores:S.user?.baseline_scores||S.scores},
        {day:30,label:'Day 30',unlocked:d>=30,scores:d>=30?S.scores:null},
        {day:60,label:'Day 60',unlocked:d>=60,scores:d>=60?S.scores:null},
        {day:90,label:'Day 90',unlocked:d>=90,scores:d>=90?S.scores:null}
    ];
}

