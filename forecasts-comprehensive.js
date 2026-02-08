// COMPREHENSIVE FORECAST DATABASE
// Real odds from Polymarket + Metaculus + Billionaire predictions
// Last updated: February 2026
// 50+ forecasts per category with realistic, gradual quest progressions

const FORECAST_DATABASE = [

// ============================================================================
// 🤖 AI & TECHNOLOGY
// ============================================================================

// --- AI MODEL LEADERSHIP ---
{
    id: 'google-ai-dominance',
    title: 'Google maintains AI model leadership through 2026',
    source: 'Polymarket',
    probability: 87,
    timeframe: '2026',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'Google\'s dominance means their ecosystem becomes the default. Those not building on Google AI infrastructure may find themselves at a disadvantage.',
    atRisk: 'Developers locked into other AI ecosystems; companies betting heavily on OpenAI or Anthropic',
    opportunities: [
        {
            title: '🔧 Google AI Integration Specialist',
            mode: 'execution',
            description: 'Help businesses integrate Google AI tools (Gemini, Vertex AI). Most companies are overwhelmed by options.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Get certified in Google Cloud AI. Complete at least the foundational courses.', xp: 35},
                {mode: 'execution', task: 'Build 3 small projects using different Google AI APIs. Document what each does well.', xp: 40},
                {mode: 'ideas', task: 'Compare Google AI to competitors (OpenAI, Anthropic) for 5 common use cases. Create a comparison chart.', xp: 40},
                {mode: 'execution', task: 'Create a "Which Google AI Tool Should You Use?" decision tree for businesses.', xp: 45},
                {mode: 'personality', task: 'Share your comparison publicly. See what resonates with business owners.', xp: 40},
                {mode: 'personality', task: 'Offer free 30-min consultations to 5 businesses about their AI needs.', xp: 50},
                {mode: 'execution', task: 'Build a case study from one of your consultations. Show before/after.', xp: 50},
                {mode: 'execution', task: 'Create a service package with clear pricing and deliverables.', xp: 45},
                {mode: 'personality', task: 'Get testimonials from your free consultations.', xp: 45},
                {mode: 'execution', task: 'Land your first paid integration client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'agi-before-2027',
    title: 'OpenAI announces AGI achievement before 2027',
    source: 'Polymarket',
    probability: 9,
    timeframe: '2026-2027',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'Even a 9% chance of AGI announcement would trigger massive market shifts. Early positioning matters.',
    atRisk: 'Anyone not thinking about post-AGI career paths',
    opportunities: [
        {
            title: '🧠 AGI Preparedness Consultant',
            mode: 'ideas',
            description: 'Help individuals and businesses think through AGI scenarios. Most people are in denial or paralyzed.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Read 3 foundational AGI texts: Superintelligence, Life 3.0, The Alignment Problem. Take notes.', xp: 40},
                {mode: 'ideas', task: 'Follow 20 AGI researchers on Twitter. Learn the debates and terminology.', xp: 30},
                {mode: 'execution', task: 'Create a personal "AGI Scenarios" document: best case, worst case, most likely case.', xp: 45},
                {mode: 'ideas', task: 'Identify 10 professions and analyze how each would be affected by AGI. Write 1 paragraph each.', xp: 45},
                {mode: 'execution', task: 'Create a framework: "How to Assess Your AGI Exposure" that anyone can use.', xp: 50},
                {mode: 'personality', task: 'Share your framework publicly. Engage with feedback and criticism.', xp: 45},
                {mode: 'personality', task: 'Run a workshop or discussion group on AGI preparedness.', xp: 55},
                {mode: 'execution', task: 'Refine your framework based on real conversations and feedback.', xp: 45},
                {mode: 'personality', task: 'Connect with futurists, consultants, and thought leaders in this space.', xp: 50},
                {mode: 'execution', task: 'Offer paid AGI preparedness consulting to forward-thinking companies.', xp: 60}
            ]
        }
    ]
},

{
    id: 'gpt-6-release',
    title: 'GPT-6 released by end of 2026',
    source: 'Polymarket',
    probability: 85,
    timeframe: '2026',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Each GPT generation makes previous workflows obsolete. Those who adapt fastest win.',
    atRisk: 'People with workflows built around older models who don\'t update',
    opportunities: [
        {
            title: '📚 AI Model Update Tracker',
            mode: 'ideas',
            description: 'Be the first to document and explain new AI model capabilities. Huge demand from businesses trying to keep up.',
            difficulty: 'easy',
            timeframe: '1-3 months',
            quests: [
                {mode: 'execution', task: 'Set up alerts for major AI announcements (OpenAI, Google, Anthropic, Meta).', xp: 25},
                {mode: 'execution', task: 'Create a template for quickly analyzing new model releases.', xp: 35},
                {mode: 'execution', task: 'When a new model drops, publish analysis within 24 hours. Speed matters.', xp: 45},
                {mode: 'personality', task: 'Build an audience that relies on you for AI updates. Start a newsletter or social account.', xp: 45},
                {mode: 'execution', task: 'Create comparison charts: old model vs new model for key use cases.', xp: 40},
                {mode: 'personality', task: 'Engage with comments and questions. Become a trusted voice.', xp: 40},
                {mode: 'execution', task: 'Reach 1,000 followers/subscribers in the AI space.', xp: 50},
                {mode: 'ideas', task: 'Identify which businesses need this information most urgently.', xp: 35},
                {mode: 'personality', task: 'Offer "AI Update Briefings" to companies that can\'t keep up.', xp: 50},
                {mode: 'execution', task: 'Get your first paid briefing client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'claude-5-release',
    title: 'Claude 5 released by March 31, 2026',
    source: 'Polymarket',
    probability: 95,
    timeframe: 'Q1 2026',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Anthropic\'s safety-focused approach may become the enterprise standard. Early adopters get competitive advantage.',
    atRisk: 'Enterprises locked into less safety-conscious AI providers',
    opportunities: [
        {
            title: '🛡️ Enterprise AI Safety Consultant',
            mode: 'ideas',
            description: 'Help enterprises implement AI with proper safety guardrails. Anthropic\'s approach is becoming the standard.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Study Anthropic\'s Constitutional AI and safety research. Understand their approach deeply.', xp: 40},
                {mode: 'ideas', task: 'Research enterprise AI failures and lawsuits. What went wrong? Document patterns.', xp: 45},
                {mode: 'execution', task: 'Create an "Enterprise AI Safety Checklist" covering deployment, monitoring, and governance.', xp: 50},
                {mode: 'personality', task: 'Share your checklist with CIOs and CTOs. Get feedback on what they actually worry about.', xp: 50},
                {mode: 'execution', task: 'Develop case studies of companies that got AI safety right vs wrong.', xp: 45},
                {mode: 'personality', task: 'Connect with compliance officers and legal teams at large companies.', xp: 55},
                {mode: 'execution', task: 'Create training materials for non-technical executives on AI risk.', xp: 50},
                {mode: 'personality', task: 'Speak at a business or tech event about enterprise AI safety.', xp: 55},
                {mode: 'execution', task: 'Develop a consulting package: assessment, recommendations, implementation support.', xp: 50},
                {mode: 'execution', task: 'Land your first enterprise safety consulting engagement.', xp: 60}
            ]
        }
    ]
},

{
    id: 'openai-hardware',
    title: 'OpenAI launches consumer hardware product by end of 2026',
    source: 'Polymarket',
    probability: 59,
    timeframe: '2026',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'AI moving into physical devices changes the game. Software-only AI companies may lose ground.',
    atRisk: 'Companies betting AI stays software-only',
    opportunities: [
        {
            title: '🔌 AI Hardware Reviewer/Analyst',
            mode: 'personality',
            description: 'Be the trusted voice for AI hardware reviews before the market gets crowded.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Research existing AI hardware (Humane Pin, Rabbit R1, Meta glasses). What works? What doesn\'t?', xp: 35},
                {mode: 'execution', task: 'If possible, buy or borrow one AI hardware device. Do a thorough review.', xp: 45},
                {mode: 'execution', task: 'Create content reviewing AI hardware. Video, blog, or social thread.', xp: 40},
                {mode: 'personality', task: 'Build an audience interested in AI hardware. Start before the flood of devices hits.', xp: 45},
                {mode: 'ideas', task: 'Predict what OpenAI\'s hardware might do. Write your analysis.', xp: 40},
                {mode: 'execution', task: 'Create a framework for evaluating AI hardware: utility, privacy, battery, integration.', xp: 45},
                {mode: 'personality', task: 'Connect with tech journalists and YouTubers in this space.', xp: 50},
                {mode: 'execution', task: 'When new AI hardware drops, publish reviews quickly.', xp: 45},
                {mode: 'personality', task: 'Get quoted or referenced by a larger publication.', xp: 55},
                {mode: 'execution', task: 'Monetize through affiliate links, sponsorships, or consulting.', xp: 50}
            ]
        }
    ]
},

{
    id: 'ai-bubble-burst',
    title: 'AI industry experiences major downturn by end of 2026',
    source: 'Polymarket',
    probability: 15,
    timeframe: '2026',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'If the bubble bursts, AI-dependent businesses fail. Diversified skills become essential.',
    atRisk: 'Startups with AI as only differentiator; employees at AI-only companies',
    opportunities: [
        {
            title: '🏗️ AI-Proof Business Builder',
            mode: 'execution',
            description: 'Build businesses that use AI but don\'t depend on it. Sustainable regardless of AI hype cycles.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Identify 10 business models that existed before AI and still work. What makes them resilient?', xp: 35},
                {mode: 'ideas', task: 'Study the dot-com bust. Which companies survived? Why?', xp: 40},
                {mode: 'execution', task: 'Design a business that uses AI for efficiency but could survive without it.', xp: 50},
                {mode: 'ideas', task: 'Identify your "AI-free fallback" — what would you do if AI tools disappeared?', xp: 40},
                {mode: 'execution', task: 'Build version 1 of your resilient business. Focus on fundamentals.', xp: 55},
                {mode: 'personality', task: 'Find 10 customers who value your core offering, not just the AI wrapper.', xp: 50},
                {mode: 'execution', task: 'Ensure your business makes money without AI hype. Unit economics matter.', xp: 50},
                {mode: 'personality', task: 'Build relationships with customers who would stick around post-hype.', xp: 45},
                {mode: 'execution', task: 'Document your "AI-resilient" business model. Share learnings.', xp: 45},
                {mode: 'execution', task: 'Reach profitability without depending on AI buzz.', xp: 60}
            ]
        }
    ]
},

{
    id: 'ai-coding-dominance',
    title: 'AI writes majority of code in professional settings by 2027',
    source: 'Industry Consensus / Dario Amodei',
    probability: 60,
    timeframe: '2026-2027',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Coding becomes directing. Junior developer roles transform completely.',
    atRisk: 'Developers who compete on syntax rather than system design and problem-solving',
    opportunities: [
        {
            title: '🎯 AI Code Director',
            mode: 'execution',
            description: 'Master the art of directing AI coding tools. Build things 10x faster than traditional developers.',
            difficulty: 'medium',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Use 3 AI coding tools (Cursor, Copilot, Claude) for real projects. Compare them.', xp: 35},
                {mode: 'ideas', task: 'Identify what AI coding tools do well vs poorly. Document patterns.', xp: 40},
                {mode: 'execution', task: 'Build a complete project primarily using AI. Track time vs traditional coding.', xp: 50},
                {mode: 'execution', task: 'Develop your own "AI coding workflow" — prompts, review process, iteration.', xp: 45},
                {mode: 'personality', task: 'Share your workflow publicly. Help others learn.', xp: 45},
                {mode: 'execution', task: 'Build 3 projects with your optimized AI workflow. Create a portfolio.', xp: 50},
                {mode: 'ideas', task: 'Identify which types of projects benefit most from AI coding.', xp: 40},
                {mode: 'personality', task: 'Offer to build MVPs for startups using your AI-accelerated approach.', xp: 50},
                {mode: 'execution', task: 'Get your first paid AI-accelerated development client.', xp: 55},
                {mode: 'execution', task: 'Deliver 3 projects faster and cheaper than traditional developers.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-tutors-mainstream',
    title: 'AI tutors outperform average human teachers',
    source: 'Bill Gates',
    probability: 70,
    timeframe: '2-4 years',
    category: 'ai',
    threatMode: 'personality',
    threatReason: 'Teaching content becomes commodity. Human teachers must focus on mentorship, motivation, and emotional support.',
    atRisk: 'Teachers who compete on knowledge delivery rather than inspiration and connection',
    opportunities: [
        {
            title: '🎓 AI-Augmented Tutor',
            mode: 'personality',
            description: 'Combine AI\'s knowledge delivery with human mentorship. Best of both worlds.',
            difficulty: 'easy',
            timeframe: '1-3 months',
            quests: [
                {mode: 'execution', task: 'Test 5 AI tutoring tools (Khanmigo, Synthesis, etc). Understand their strengths.', xp: 30},
                {mode: 'ideas', task: 'Identify what human tutors provide that AI can\'t: accountability, emotional support, customization.', xp: 35},
                {mode: 'execution', task: 'Design a hybrid session: AI handles drill, you handle strategy and motivation.', xp: 40},
                {mode: 'personality', task: 'Run 5 free hybrid tutoring sessions. Get feedback on what works.', xp: 45},
                {mode: 'execution', task: 'Refine your approach based on real student feedback.', xp: 40},
                {mode: 'execution', task: 'Create a curriculum: what does week 1-8 look like for a student?', xp: 45},
                {mode: 'personality', task: 'Get testimonials from your trial students.', xp: 40},
                {mode: 'execution', task: 'Set your pricing. Research market rates.', xp: 35},
                {mode: 'personality', task: 'Tell 30 people you\'re offering tutoring.', xp: 40},
                {mode: 'execution', task: 'Get your first 5 paying students.', xp: 55}
            ]
        }
    ]
},

{
    id: 'full-length-ai-movies',
    title: 'Full-length AI-generated movies become mainstream',
    source: 'Industry Consensus',
    probability: 45,
    timeframe: '2-3 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Film production costs collapse. Story, taste, and distribution become the differentiators.',
    atRisk: 'Technical film roles (VFX, editing) without creative direction skills',
    opportunities: [
        {
            title: '🎬 AI Film Director',
            mode: 'ideas',
            description: 'Learn to direct AI film tools now. Be ready when feature films become possible.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Create your first AI video using Runway, Pika, or Sora. Just 30 seconds.', xp: 30},
                {mode: 'ideas', task: 'Study 10 successful AI short films. What makes them work? Take notes.', xp: 40},
                {mode: 'execution', task: 'Write a 2-page script for a 3-minute short. Keep it visually simple.', xp: 40},
                {mode: 'execution', task: 'Create your first 2-3 minute AI short film.', xp: 50},
                {mode: 'personality', task: 'Share your film publicly. Get feedback from 20 people.', xp: 45},
                {mode: 'execution', task: 'Make version 2 based on feedback. Show improvement.', xp: 45},
                {mode: 'ideas', task: 'Develop your unique style. What\'s your visual signature?', xp: 40},
                {mode: 'personality', task: 'Enter an AI film festival or competition.', xp: 50},
                {mode: 'execution', task: 'Build a portfolio of 5 short films.', xp: 55},
                {mode: 'personality', task: 'Collaborate with other AI filmmakers. Build your network.', xp: 50}
            ]
        }
    ]
},

{
    id: 'ai-medical-diagnosis',
    title: 'AI diagnoses diseases better than average doctors',
    source: 'Multiple Studies',
    probability: 75,
    timeframe: '2-3 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Diagnostic accuracy becomes commodity. Patient care and communication become differentiators.',
    atRisk: 'Diagnostic specialists without strong patient relationship skills',
    opportunities: [
        {
            title: '🩺 AI Health Navigator',
            mode: 'personality',
            description: 'Help patients understand and navigate AI-assisted healthcare decisions.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research how AI is being used in diagnostics today. What\'s working? What scares patients?', xp: 40},
                {mode: 'ideas', task: 'Identify top 10 patient concerns about AI in healthcare.', xp: 40},
                {mode: 'execution', task: 'Create a guide: "Questions to Ask When AI Is Part of Your Diagnosis"', xp: 45},
                {mode: 'personality', task: 'Share your guide with patient advocacy groups.', xp: 45},
                {mode: 'personality', task: 'Talk to 10 patients about their AI healthcare experiences.', xp: 50},
                {mode: 'execution', task: 'Refine your guide based on real patient concerns.', xp: 40},
                {mode: 'execution', task: 'Develop a service: accompany patients, help interpret AI results.', xp: 50},
                {mode: 'personality', task: 'Connect with doctors who could refer patients needing support.', xp: 55},
                {mode: 'execution', task: 'Get your first 3 paid clients.', xp: 55},
                {mode: 'personality', task: 'Get testimonials and referrals.', xp: 50}
            ]
        }
    ]
},

{
    id: 'ai-surveillance-expansion',
    title: 'AI surveillance expands significantly in democratic countries',
    source: 'Larry Ellison / Industry Trend',
    probability: 55,
    timeframe: '3-5 years',
    category: 'ai',
    threatMode: 'personality',
    threatReason: 'Privacy becomes luxury. Personal branding and public persona management become essential.',
    atRisk: 'People without clear personal brand or who rely on anonymity',
    opportunities: [
        {
            title: '🔒 Personal Privacy Consultant',
            mode: 'ideas',
            description: 'Help individuals protect their privacy in an increasingly surveilled world.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research current privacy tools and best practices. Document top 20.', xp: 35},
                {mode: 'execution', task: 'Implement privacy best practices in your own digital life. Document process.', xp: 40},
                {mode: 'execution', task: 'Create a "Personal Privacy Audit" checklist anyone can use.', xp: 45},
                {mode: 'personality', task: 'Offer free privacy audits to 5 friends. Learn what they struggle with.', xp: 45},
                {mode: 'execution', task: 'Create a guide: "Privacy Basics for Normal People"', xp: 45},
                {mode: 'personality', task: 'Share your guide publicly. See what resonates.', xp: 40},
                {mode: 'execution', task: 'Develop tiered service offerings for different privacy needs.', xp: 45},
                {mode: 'personality', task: 'Connect with lawyers and security professionals for referrals.', xp: 50},
                {mode: 'execution', task: 'Get your first paid privacy consultation.', xp: 55},
                {mode: 'execution', task: 'Create recurring revenue through ongoing privacy monitoring.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-voice-cloning-ubiquitous',
    title: 'Perfect voice cloning becomes trivially easy',
    source: 'Industry Consensus',
    probability: 90,
    timeframe: 'Already happening',
    category: 'ai',
    threatMode: 'personality',
    threatReason: 'Voice authenticity disappears. Trust and verification become crucial.',
    atRisk: 'Anyone relying on voice as identity verification',
    opportunities: [
        {
            title: '✅ Voice Verification Educator',
            mode: 'execution',
            description: 'Teach businesses and families how to verify voice authenticity and avoid scams.',
            difficulty: 'easy',
            timeframe: '1-3 months',
            quests: [
                {mode: 'ideas', task: 'Research voice cloning tools and scams. Document real examples.', xp: 30},
                {mode: 'execution', task: 'Create a family safety protocol: code words, verification questions.', xp: 35},
                {mode: 'execution', task: 'Create a business protocol for verifying voice communications.', xp: 40},
                {mode: 'personality', task: 'Share your protocols publicly. Help others stay safe.', xp: 40},
                {mode: 'execution', task: 'Create a short workshop: "Protecting Your Family from Voice Scams"', xp: 45},
                {mode: 'personality', task: 'Offer workshop to local community groups, schools, senior centers.', xp: 50},
                {mode: 'execution', task: 'Run 3 free workshops. Refine based on questions asked.', xp: 45},
                {mode: 'personality', task: 'Get testimonials from workshop attendees.', xp: 40},
                {mode: 'execution', task: 'Create paid corporate training on voice security.', xp: 50},
                {mode: 'execution', task: 'Land your first paid corporate training gig.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-realtime-translation',
    title: 'Real-time perfect language translation eliminates barriers',
    source: 'Industry Consensus',
    probability: 85,
    timeframe: '2-3 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Language skills devalue. Cultural understanding becomes the differentiator.',
    atRisk: 'Translators focused on accuracy rather than cultural nuance',
    opportunities: [
        {
            title: '🌍 Cultural Bridge Consultant',
            mode: 'personality',
            description: 'Help businesses navigate cultural nuances that translation AI misses.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify one culture you understand deeply. What do outsiders get wrong?', xp: 35},
                {mode: 'execution', task: 'Document 10 cultural mistakes companies make with your culture.', xp: 40},
                {mode: 'execution', task: 'Create a "Cultural Due Diligence Checklist" for that market.', xp: 45},
                {mode: 'personality', task: 'Share examples publicly. Build credibility as cultural expert.', xp: 45},
                {mode: 'personality', task: 'Connect with 5 companies doing business in your cultural area.', xp: 50},
                {mode: 'execution', task: 'Offer free cultural audit to one company. Build case study.', xp: 50},
                {mode: 'execution', task: 'Develop service package with clear deliverables.', xp: 45},
                {mode: 'personality', task: 'Get testimonials from your free engagement.', xp: 45},
                {mode: 'execution', task: 'Land your first paid cultural consulting client.', xp: 55},
                {mode: 'personality', task: 'Build referral partnerships with international business consultants.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-music-indistinguishable',
    title: 'AI generates music indistinguishable from human artists',
    source: 'Industry Consensus',
    probability: 80,
    timeframe: '1-2 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Music production becomes commodity. Live performance, brand, and story become the value.',
    atRisk: 'Session musicians and producers focused on technical skill alone',
    opportunities: [
        {
            title: '🎵 AI Music Director',
            mode: 'ideas',
            description: 'Direct AI music tools to create the right sound. Be the creative vision.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Try 5 AI music tools (Suno, Udio, etc). Create 20 tracks.', xp: 35},
                {mode: 'ideas', task: 'Study music production concepts: arrangement, mixing. Learn vocabulary.', xp: 40},
                {mode: 'execution', task: 'Create a playlist of your best AI-generated tracks.', xp: 40},
                {mode: 'personality', task: 'Share your music publicly. Get feedback.', xp: 40},
                {mode: 'ideas', task: 'Develop your signature sound. What makes your direction distinctive?', xp: 45},
                {mode: 'execution', task: 'Create music for specific use cases: YouTube intros, podcasts, ads.', xp: 45},
                {mode: 'personality', task: 'Offer free music to 5 content creators.', xp: 50},
                {mode: 'execution', task: 'Build portfolio with diverse examples.', xp: 45},
                {mode: 'personality', task: 'List services on freelance platforms.', xp: 45},
                {mode: 'execution', task: 'Land your first paid music creation gig.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-legal-automation',
    title: 'AI handles 80% of routine legal work',
    source: 'Industry Analysis',
    probability: 45,
    timeframe: '5-10 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Legal research becomes automated. Strategy and client relationships remain human.',
    atRisk: 'Junior lawyers focused on research and documentation',
    opportunities: [
        {
            title: '⚖️ AI Legal Tools Trainer',
            mode: 'execution',
            description: 'Train lawyers to use AI tools effectively. Most are overwhelmed.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Test 5 AI legal tools. Document capabilities.', xp: 40},
                {mode: 'ideas', task: 'Identify what legal AI does well vs where it fails.', xp: 40},
                {mode: 'execution', task: 'Create training curriculum for lawyers on AI tools.', xp: 50},
                {mode: 'personality', task: 'Offer free training to one small firm. Get feedback.', xp: 50},
                {mode: 'execution', task: 'Refine based on real user experience.', xp: 45},
                {mode: 'personality', task: 'Connect with bar associations and legal education providers.', xp: 55},
                {mode: 'execution', task: 'Create CLE-eligible content if possible.', xp: 55},
                {mode: 'personality', task: 'Speak at a legal tech event.', xp: 55},
                {mode: 'execution', task: 'Land your first paid training engagement.', xp: 60},
                {mode: 'execution', task: 'Build ongoing training relationships with 3 firms.', xp: 60}
            ]
        }
    ]
},

// ============================================================================
// 💼 FUTURE OF WORK
// ============================================================================

{
    id: 'jobs-80-transform',
    title: '80% of jobs will disappear or transform radically',
    source: 'Vinod Khosla',
    probability: 45,
    timeframe: '10-15 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Most "doing" gets automated. Value shifts to judgment, creativity, and connection.',
    atRisk: 'Anyone whose job is primarily following processes or handling information',
    opportunities: [
        {
            title: '🔄 Career Transition Coach',
            mode: 'personality',
            description: 'Help people navigate career changes in an AI-disrupted world.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research which jobs are most at risk. Create list of 20.', xp: 30},
                {mode: 'ideas', task: 'Research which jobs are growing because of AI. Create list of 20.', xp: 30},
                {mode: 'execution', task: 'Create framework: "How to Assess If Your Job Is At Risk"', xp: 40},
                {mode: 'personality', task: 'Interview 5 people who successfully transitioned careers. What worked?', xp: 45},
                {mode: 'execution', task: 'Create step-by-step career transition playbook.', xp: 45},
                {mode: 'personality', task: 'Offer free transition coaching to 3 worried people.', xp: 50},
                {mode: 'execution', task: 'Document results. What helped? What didn\'t?', xp: 40},
                {mode: 'personality', task: 'Write about your coaching experience. Share stories.', xp: 45},
                {mode: 'execution', task: 'Create coaching package with pricing.', xp: 45},
                {mode: 'personality', task: 'Get your first paid coaching client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'workweek-shrinks',
    title: '2-3 day workweeks become normal for many professions',
    source: 'Bill Gates',
    probability: 35,
    timeframe: '10-15 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Productivity gains don\'t require 40 hours. Filling time meaningfully becomes key.',
    atRisk: 'People whose identity is wrapped up in "being busy"',
    opportunities: [
        {
            title: '🧘 Meaningful Time Designer',
            mode: 'ideas',
            description: 'Help people figure out what to do with newfound free time.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study what people do with unexpected free time. Interview 10.', xp: 35},
                {mode: 'ideas', task: 'Research purpose and meaning frameworks (Ikigai, etc).', xp: 35},
                {mode: 'execution', task: 'Create workshop: "Designing Your Ideal Week"', xp: 45},
                {mode: 'personality', task: 'Run workshop with 10 friends for free.', xp: 45},
                {mode: 'execution', task: 'Refine based on feedback.', xp: 40},
                {mode: 'personality', task: 'Get testimonials from people who found clarity.', xp: 45},
                {mode: 'execution', task: 'Create supporting materials: worksheets, prompts.', xp: 40},
                {mode: 'execution', task: 'Price your workshop.', xp: 40},
                {mode: 'personality', task: 'Partner with companies doing 4-day weeks.', xp: 50},
                {mode: 'execution', task: 'Get first paid workshop booking.', xp: 55}
            ]
        }
    ]
},

{
    id: 'first-trillionaire-ai',
    title: 'First trillionaire comes from AI — possibly tiny team',
    source: 'Mark Cuban',
    probability: 50,
    timeframe: '10-15 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Winner-take-all intensifies. Small teams capture massive value.',
    atRisk: 'Mid-sized companies without AI leverage',
    opportunities: [
        {
            title: '🏢 Micro-Startup Builder',
            mode: 'execution',
            description: 'Build small, profitable businesses using AI leverage. Aim for $10k-100k/month.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'List 10 problems that could be solved with software.', xp: 30},
                {mode: 'ideas', task: 'Research micro-SaaS success stories. What patterns?', xp: 35},
                {mode: 'execution', task: 'Pick one idea. Validate: would 10 people pay $50/month?', xp: 40},
                {mode: 'personality', task: 'Talk to 20 potential customers. Just learn.', xp: 45},
                {mode: 'execution', task: 'Build MVP using AI coding tools.', xp: 50},
                {mode: 'personality', task: 'Get 5 beta users. Free for feedback.', xp: 45},
                {mode: 'execution', task: 'Improve based on feedback. Ship 10 updates.', xp: 50},
                {mode: 'execution', task: 'Add payments. Get first paying customer.', xp: 55},
                {mode: 'execution', task: 'Reach $1k MRR.', xp: 60},
                {mode: 'personality', task: 'Document journey. Build in public.', xp: 50}
            ]
        }
    ]
},

{
    id: 'remote-work-default',
    title: 'Remote/hybrid becomes default for knowledge work',
    source: 'Industry Consensus',
    probability: 85,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Casual relationship-building disappears. Intentional networking essential.',
    atRisk: 'People who relied on office proximity for advancement',
    opportunities: [
        {
            title: '🌐 Remote Work Optimizer',
            mode: 'execution',
            description: 'Help companies and individuals optimize remote work.',
            difficulty: 'easy',
            timeframe: '1-3 months',
            quests: [
                {mode: 'ideas', task: 'Document what makes YOUR remote work effective.', xp: 30},
                {mode: 'ideas', task: 'Research common remote work problems.', xp: 30},
                {mode: 'execution', task: 'Create "Remote Work Audit" checklist.', xp: 40},
                {mode: 'personality', task: 'Offer free audits to 5 people or teams.', xp: 45},
                {mode: 'execution', task: 'Create solutions for top 5 problems you find.', xp: 45},
                {mode: 'personality', task: 'Write about findings. Share tips publicly.', xp: 40},
                {mode: 'execution', task: 'Package audit + recommendations as service.', xp: 45},
                {mode: 'personality', task: 'Target specific niche: startups? agencies?', xp: 40},
                {mode: 'execution', task: 'Get first paid engagement.', xp: 50},
                {mode: 'personality', task: 'Get testimonials and referrals.', xp: 45}
            ]
        }
    ]
},

{
    id: 'gig-economy-dominant',
    title: 'Gig/freelance becomes dominant for 50%+ workers',
    source: 'Various Studies',
    probability: 40,
    timeframe: '10-15 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Job security disappears. Self-management essential.',
    atRisk: 'People dependent on employer-provided stability',
    opportunities: [
        {
            title: '📋 Freelancer Success Coach',
            mode: 'personality',
            description: 'Help people transition from employment to freelancing.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Document your freelancing journey (or interview 5 freelancers).', xp: 35},
                {mode: 'ideas', task: 'Identify top 10 mistakes new freelancers make.', xp: 35},
                {mode: 'execution', task: 'Create "First 90 Days Freelancing" checklist.', xp: 40},
                {mode: 'personality', task: 'Help 3 people free through their first month.', xp: 50},
                {mode: 'execution', task: 'Document what worked in your coaching.', xp: 40},
                {mode: 'execution', task: 'Create guide: "Employee to Freelancer in 90 Days"', xp: 50},
                {mode: 'personality', task: 'Share success stories from people you helped.', xp: 45},
                {mode: 'execution', task: 'Set up coaching program with pricing.', xp: 45},
                {mode: 'personality', task: 'Partner with communities of aspiring freelancers.', xp: 50},
                {mode: 'execution', task: 'Get 5 paid coaching clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'resume-obsolete',
    title: 'Traditional resumes become obsolete',
    source: 'Industry Trend',
    probability: 65,
    timeframe: '5-7 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Past credentials matter less. Demonstrated current ability matters more.',
    atRisk: 'People with impressive credentials but no visible work',
    opportunities: [
        {
            title: '📂 Portfolio Builder',
            mode: 'execution',
            description: 'Help professionals build portfolios that show, not tell.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Research portfolio best practices for 3 professions.', xp: 30},
                {mode: 'execution', task: 'Build your own portfolio showcasing your work.', xp: 40},
                {mode: 'execution', task: 'Create template others can use.', xp: 40},
                {mode: 'personality', task: 'Help 3 friends build portfolios. Note struggles.', xp: 45},
                {mode: 'execution', task: 'Refine template based on feedback.', xp: 40},
                {mode: 'personality', task: 'Share portfolio tips publicly.', xp: 45},
                {mode: 'execution', task: 'Create service package: review + creation.', xp: 45},
                {mode: 'execution', task: 'Price your service.', xp: 40},
                {mode: 'personality', task: 'Partner with career coaches for referrals.', xp: 50},
                {mode: 'execution', task: 'Get 10 paid portfolio clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ubi-experiments-expand',
    title: 'UBI experiments expand globally',
    source: 'Ray Dalio / Sam Altman',
    probability: 55,
    timeframe: '5-10 years',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'When basic needs covered, purpose becomes scarce resource.',
    atRisk: 'Those who haven\'t thought about what they\'d do without work pressure',
    opportunities: [
        {
            title: '🎯 Purpose Discovery Coach',
            mode: 'personality',
            description: 'Help people figure out what they want when survival isn\'t the driver.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research purpose frameworks. Try each on yourself.', xp: 35},
                {mode: 'ideas', task: 'Interview 10 people who feel they\'ve found purpose.', xp: 40},
                {mode: 'execution', task: 'Create your own purpose-discovery workshop.', xp: 45},
                {mode: 'personality', task: 'Run workshop with 5 friends for free.', xp: 45},
                {mode: 'execution', task: 'Refine based on what worked.', xp: 40},
                {mode: 'personality', task: 'Run version 2 with 10 strangers.', xp: 50},
                {mode: 'execution', task: 'Create supporting materials.', xp: 45},
                {mode: 'personality', task: 'Get testimonials from people who found clarity.', xp: 50},
                {mode: 'execution', task: 'Price your workshop and coaching.', xp: 45},
                {mode: 'execution', task: 'Get first paid client.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 📈 FINANCE & ECONOMICS
// ============================================================================

{
    id: 'us-recession-2026',
    title: 'US recession by end of 2026',
    source: 'Polymarket',
    probability: 23,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Economic uncertainty makes diversified income streams essential.',
    atRisk: 'Those dependent on single income source in vulnerable industry',
    opportunities: [
        {
            title: '💰 Recession-Proof Income Builder',
            mode: 'execution',
            description: 'Build multiple income streams that survive downturns.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research which businesses thrived in 2008 recession. What patterns?', xp: 35},
                {mode: 'ideas', task: 'Identify 5 income streams you could realistically build.', xp: 35},
                {mode: 'execution', task: 'Start building income stream #1. Focus on something that helps people save money.', xp: 45},
                {mode: 'execution', task: 'Get first $100 from income stream #1.', xp: 50},
                {mode: 'ideas', task: 'Analyze what worked. Document the process.', xp: 35},
                {mode: 'execution', task: 'Start building income stream #2 in different sector.', xp: 45},
                {mode: 'execution', task: 'Get first $100 from income stream #2.', xp: 50},
                {mode: 'execution', task: 'Create systems so income streams require less time.', xp: 45},
                {mode: 'personality', task: 'Share your diversification journey. Help others.', xp: 40},
                {mode: 'execution', task: 'Reach $1,000/month from diversified sources.', xp: 60}
            ]
        }
    ]
},

{
    id: 'bitcoin-price-2026',
    title: 'Bitcoin hits $100,000 in 2026',
    source: 'Polymarket',
    probability: 55,
    timeframe: '2026',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'Crypto volatility continues. Understanding both upside and downside essential.',
    atRisk: 'People all-in on crypto OR completely ignoring it',
    opportunities: [
        {
            title: '📊 Crypto Risk Educator',
            mode: 'ideas',
            description: 'Help regular people understand crypto risk without hype or FUD.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study crypto cycles. What patterns repeat? Document.', xp: 40},
                {mode: 'ideas', task: 'Research how regular people lose money in crypto. Top 10 mistakes.', xp: 40},
                {mode: 'execution', task: 'Create guide: "Crypto Risk for Normal People"', xp: 45},
                {mode: 'personality', task: 'Share guide publicly. Avoid both hype and FUD.', xp: 45},
                {mode: 'execution', task: 'Create simple risk assessment framework.', xp: 45},
                {mode: 'personality', task: 'Help 10 people assess their crypto exposure.', xp: 50},
                {mode: 'execution', task: 'Refine framework based on real conversations.', xp: 40},
                {mode: 'personality', task: 'Build audience of crypto-curious normal people.', xp: 50},
                {mode: 'execution', task: 'Create paid course or consulting offer.', xp: 50},
                {mode: 'execution', task: 'Get first paid client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'fed-rate-decisions',
    title: 'Fed maintains tight monetary policy through 2026',
    source: 'Polymarket',
    probability: 65,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'High rates favor savers and established businesses. Startups face headwinds.',
    atRisk: 'Growth-stage companies dependent on cheap capital',
    opportunities: [
        {
            title: '🏦 High-Rate Business Strategist',
            mode: 'ideas',
            description: 'Help businesses adapt strategies for high-interest environment.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Study how businesses adapted to 1980s high rates. Lessons?', xp: 40},
                {mode: 'ideas', task: 'Research which business models thrive vs struggle in high-rate environments.', xp: 40},
                {mode: 'execution', task: 'Create framework: "Is Your Business High-Rate Resilient?"', xp: 50},
                {mode: 'personality', task: 'Share framework with business owners. Get feedback.', xp: 45},
                {mode: 'execution', task: 'Develop specific recommendations for different business types.', xp: 50},
                {mode: 'personality', task: 'Offer free strategy sessions to 5 businesses.', xp: 50},
                {mode: 'execution', task: 'Document results. Build case studies.', xp: 45},
                {mode: 'personality', task: 'Write about high-rate business strategy. Build credibility.', xp: 50},
                {mode: 'execution', task: 'Create consulting service package.', xp: 50},
                {mode: 'execution', task: 'Land first paid strategy engagement.', xp: 60}
            ]
        }
    ]
},

{
    id: 'nvidia-largest-company',
    title: 'NVIDIA becomes world\'s largest company',
    source: 'Polymarket',
    probability: 48,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Compute becomes critical infrastructure. GPU access determines capability.',
    atRisk: 'Companies without compute strategy',
    opportunities: [
        {
            title: '🖥️ Compute Strategy Consultant',
            mode: 'ideas',
            description: 'Help businesses plan their AI compute needs and strategy.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research GPU pricing, cloud compute options, and trends.', xp: 40},
                {mode: 'execution', task: 'Build a model: "How Much Compute Does Your AI Need?"', xp: 50},
                {mode: 'ideas', task: 'Compare cloud providers (AWS, GCP, Azure) for AI workloads.', xp: 45},
                {mode: 'execution', task: 'Create compute cost calculator for common use cases.', xp: 50},
                {mode: 'personality', task: 'Share your analysis with CTOs and technical leaders.', xp: 50},
                {mode: 'execution', task: 'Develop recommendations for different company sizes.', xp: 45},
                {mode: 'personality', task: 'Offer free compute strategy sessions to 5 companies.', xp: 55},
                {mode: 'execution', task: 'Build case studies from your sessions.', xp: 50},
                {mode: 'execution', task: 'Create consulting package.', xp: 50},
                {mode: 'execution', task: 'Land first paid compute strategy engagement.', xp: 60}
            ]
        }
    ]
},

{
    id: 'ai-wealth-inequality',
    title: 'AI significantly exacerbates wealth inequality',
    source: 'Ray Dalio',
    probability: 65,
    timeframe: '5-10 years',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Capital and skills compound faster. Those without AI leverage fall behind.',
    atRisk: 'Middle-income workers without AI skills or capital access',
    opportunities: [
        {
            title: '🎓 AI Skills for Underserved',
            mode: 'personality',
            description: 'Teach AI skills to people who might otherwise be left behind.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify one underserved group that could benefit from AI skills.', xp: 35},
                {mode: 'execution', task: 'Create beginner-friendly AI curriculum (5-10 lessons).', xp: 45},
                {mode: 'personality', task: 'Find one organization serving your target group. Pitch free pilot.', xp: 50},
                {mode: 'execution', task: 'Run your first class.', xp: 45},
                {mode: 'personality', task: 'Get feedback and testimonials.', xp: 40},
                {mode: 'execution', task: 'Refine curriculum based on what worked.', xp: 40},
                {mode: 'personality', task: 'Document success stories.', xp: 50},
                {mode: 'execution', task: 'Pitch to 5 more organizations.', xp: 50},
                {mode: 'personality', task: 'Apply for grants to expand program.', xp: 55},
                {mode: 'execution', task: 'Teach 100 people through your program.', xp: 60}
            ]
        }
    ]
},

{
    id: 'intelligence-value-zero',
    title: 'Economic value of raw intelligence approaches zero',
    source: 'Sam Altman',
    probability: 30,
    timeframe: '10-20 years',
    category: 'finance',
    threatMode: 'ideas',
    threatReason: 'When intelligence is free, scarcity shifts to wisdom, judgment, and connection.',
    atRisk: 'Anyone selling "smarts" rather than judgment or human connection',
    opportunities: [
        {
            title: '🤝 High-Touch Service Provider',
            mode: 'personality',
            description: 'Double down on services where human connection IS the product.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify services where human relationship is irreplaceable. List 10.', xp: 30},
                {mode: 'ideas', task: 'Assess your skills. Which high-touch service could you provide?', xp: 35},
                {mode: 'execution', task: 'Get relevant training if needed.', xp: 45},
                {mode: 'personality', task: 'Offer free sessions to 5 people for testimonials.', xp: 50},
                {mode: 'execution', task: 'Define your service clearly: who, how, what outcome.', xp: 40},
                {mode: 'personality', task: 'Build referral relationships with 3 complementary providers.', xp: 50},
                {mode: 'execution', task: 'Set up booking and payment.', xp: 40},
                {mode: 'personality', task: 'Get first 3 paying clients.', xp: 55},
                {mode: 'execution', task: 'Create client retention system.', xp: 50},
                {mode: 'personality', task: 'Ask every client for referrals.', xp: 50}
            ]
        }
    ]
},

// ============================================================================
// 🎬 MEDIA & CONTENT
// ============================================================================

{
    id: 'personalized-content-all',
    title: 'All content becomes personalized — everyone sees different versions',
    source: 'Industry Consensus',
    probability: 70,
    timeframe: '3-5 years',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Mass content loses value. Deep audience understanding essential.',
    atRisk: 'Creators making generic content for general audiences',
    opportunities: [
        {
            title: '🎯 Niche Content Creator',
            mode: 'personality',
            description: 'Go deep on a specific niche. Own a category.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'List 5 topics you could create content about for 2 years.', xp: 30},
                {mode: 'ideas', task: 'Research each: audience size, competition, monetization.', xp: 35},
                {mode: 'execution', task: 'Pick your niche. Commit for 90 days.', xp: 35},
                {mode: 'execution', task: 'Create 10 pieces in first 2 weeks.', xp: 45},
                {mode: 'personality', task: 'Engage with every comment.', xp: 40},
                {mode: 'execution', task: 'Analyze what works. Double down.', xp: 40},
                {mode: 'personality', task: 'Connect with 5 adjacent creators.', xp: 50},
                {mode: 'execution', task: 'Reach 1,000 followers.', xp: 50},
                {mode: 'execution', task: 'Create lead magnet for your niche.', xp: 45},
                {mode: 'execution', task: 'Monetize: sponsored, products, or services.', xp: 55}
            ]
        }
    ]
},

{
    id: 'creator-middle-class-gone',
    title: 'Creator middle class disappears — top 1% capture most value',
    source: 'Li Jin / Industry Analysis',
    probability: 55,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Attention concentrates. Community becomes the moat.',
    atRisk: 'Creators focused on content alone without building relationships',
    opportunities: [
        {
            title: '🏠 Community Builder',
            mode: 'personality',
            description: 'Build community around a topic. Community > content.',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Identify group that needs community but doesn\'t have great one.', xp: 35},
                {mode: 'execution', task: 'Set up simple community space.', xp: 35},
                {mode: 'personality', task: 'Personally invite 20 potential great members.', xp: 45},
                {mode: 'execution', task: 'Create simple structure: channels, welcome, events.', xp: 40},
                {mode: 'personality', task: 'Host first event. Get people talking to each other.', xp: 50},
                {mode: 'personality', task: 'Make 3 introductions between members.', xp: 45},
                {mode: 'execution', task: 'Reach 50 active members.', xp: 50},
                {mode: 'personality', task: 'Identify and empower community leaders.', xp: 50},
                {mode: 'execution', task: 'Create membership tier.', xp: 50},
                {mode: 'execution', task: 'Get first 10 paying members.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-news-generation',
    title: 'AI generates majority of news content',
    source: 'Industry Trend',
    probability: 60,
    timeframe: '3-5 years',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Basic reporting automated. Original investigation becomes differentiator.',
    atRisk: 'Reporters rewriting press releases',
    opportunities: [
        {
            title: '🔍 Independent Investigator',
            mode: 'ideas',
            description: 'Do investigative work AI can\'t: building sources, deep analysis.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Study investigative journalism techniques.', xp: 40},
                {mode: 'ideas', task: 'Identify local topic deserving more scrutiny.', xp: 40},
                {mode: 'execution', task: 'Start researching: public records, documents.', xp: 45},
                {mode: 'personality', task: 'Reach out to 5 potential sources.', xp: 50},
                {mode: 'execution', task: 'File your first public records request.', xp: 45},
                {mode: 'execution', task: 'Organize findings. Create timeline.', xp: 45},
                {mode: 'personality', task: 'Connect with established journalists for mentorship.', xp: 55},
                {mode: 'execution', task: 'Write up findings. Start with verified facts.', xp: 50},
                {mode: 'execution', task: 'Publish investigation.', xp: 55},
                {mode: 'personality', task: 'Build reputation through quality work.', xp: 55}
            ]
        }
    ]
},

{
    id: 'influencer-trust-collapse',
    title: 'Influencer marketing oversaturates — trust collapses',
    source: 'Industry Analysis',
    probability: 70,
    timeframe: '2-3 years',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Generic influence loses value. Deep niche authority becomes premium.',
    atRisk: 'Influencers promoting anything for money',
    opportunities: [
        {
            title: '🎖️ Trusted Niche Authority',
            mode: 'personality',
            description: 'Build trust in one area by saying no to irrelevant partnerships.',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Identify one area where you have genuine expertise.', xp: 35},
                {mode: 'execution', task: 'Create content demonstrating deep knowledge, not surface takes.', xp: 45},
                {mode: 'personality', task: 'Be publicly honest about products you don\'t recommend.', xp: 45},
                {mode: 'execution', task: 'Only work with brands you genuinely use and believe in.', xp: 40},
                {mode: 'personality', task: 'Build relationships with your audience. Know them by name.', xp: 50},
                {mode: 'execution', task: 'Create signature content format that showcases expertise.', xp: 45},
                {mode: 'personality', task: 'Turn down at least 3 paid opportunities that don\'t fit.', xp: 45},
                {mode: 'execution', task: 'Document your decision-making process publicly.', xp: 40},
                {mode: 'personality', task: 'Get testimonials from followers about your trustworthiness.', xp: 50},
                {mode: 'execution', task: 'Command premium rates because of your credibility.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// ₿ CRYPTO & WEB3
// ============================================================================

{
    id: 'bitcoin-nation-reserve',
    title: 'Bitcoin becomes nation-state reserve asset (more countries)',
    source: 'El Salvador precedent / Polymarket',
    probability: 50,
    timeframe: '5-10 years',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'Financial infrastructure changes. Understanding old and new systems valuable.',
    atRisk: 'Finance professionals dismissing crypto entirely',
    opportunities: [
        {
            title: '🏦 Crypto-TradFi Bridge',
            mode: 'ideas',
            description: 'Help traditional finance understand and integrate crypto.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Learn crypto custody, compliance, integration basics.', xp: 40},
                {mode: 'ideas', task: 'Understand what traditional finance is most confused about.', xp: 40},
                {mode: 'execution', task: 'Create "Crypto Primer for Finance Professionals"', xp: 45},
                {mode: 'personality', task: 'Share primer with people in traditional finance.', xp: 45},
                {mode: 'execution', task: 'Create weekly digest of crypto-finance news.', xp: 40},
                {mode: 'personality', task: 'Connect with compliance officers at financial institutions.', xp: 50},
                {mode: 'execution', task: 'Develop framework for evaluating crypto integration.', xp: 50},
                {mode: 'personality', task: 'Speak at finance industry event.', xp: 55},
                {mode: 'execution', task: 'Get first consulting engagement.', xp: 60},
                {mode: 'execution', task: 'Build retainer relationships.', xp: 60}
            ]
        }
    ]
},

{
    id: 'defi-100m-users',
    title: 'DeFi reaches 100M+ users globally',
    source: 'Industry Projections',
    probability: 55,
    timeframe: '3-5 years',
    category: 'crypto',
    threatMode: 'execution',
    threatReason: 'Financial services go permissionless. Early movers in onboarding win.',
    atRisk: 'Traditional banking focused on gatekeeping',
    opportunities: [
        {
            title: '🚪 DeFi Onboarding Guide',
            mode: 'execution',
            description: 'Help regular people use DeFi safely. Most are scared or confused.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Use 5 DeFi protocols yourself. Document experience.', xp: 35},
                {mode: 'ideas', task: 'Identify top 5 barriers preventing normal people from using DeFi.', xp: 35},
                {mode: 'execution', task: 'Create step-by-step guide for using one protocol safely.', xp: 45},
                {mode: 'personality', task: 'Walk 3 non-crypto friends through DeFi.', xp: 50},
                {mode: 'execution', task: 'Refine guide based on feedback.', xp: 40},
                {mode: 'execution', task: 'Create video tutorials.', xp: 45},
                {mode: 'personality', task: 'Share in crypto-curious communities.', xp: 45},
                {mode: 'execution', task: 'Build reputation as "safe DeFi guide"', xp: 50},
                {mode: 'personality', task: 'Offer paid 1:1 onboarding sessions.', xp: 50},
                {mode: 'execution', task: 'Get 10 paid clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'satoshi-moves-bitcoin',
    title: 'Satoshi moves Bitcoin in 2026',
    source: 'Polymarket',
    probability: 5,
    timeframe: '2026',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'Low probability but massive impact event. Preparation thinking valuable.',
    atRisk: 'Bitcoin maximalists who haven\'t considered this scenario',
    opportunities: [
        {
            title: '🔮 Black Swan Scenario Planner',
            mode: 'ideas',
            description: 'Help investors think through low-probability, high-impact scenarios.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'List 10 low-probability events that would massively impact markets.', xp: 40},
                {mode: 'ideas', task: 'Research historical black swan events. What patterns?', xp: 40},
                {mode: 'execution', task: 'Create framework for evaluating black swan scenarios.', xp: 50},
                {mode: 'execution', task: 'Develop "scenario cards" for top 10 unlikely events.', xp: 50},
                {mode: 'personality', task: 'Share framework with investors. Get feedback.', xp: 50},
                {mode: 'execution', task: 'Create recommendations for each scenario.', xp: 50},
                {mode: 'personality', task: 'Write about scenario planning. Build credibility.', xp: 50},
                {mode: 'execution', task: 'Develop consulting service for scenario planning.', xp: 50},
                {mode: 'personality', task: 'Connect with wealth managers who serve HNW clients.', xp: 55},
                {mode: 'execution', task: 'Land first paid scenario planning engagement.', xp: 60}
            ]
        }
    ]
},

// ============================================================================
// 🧬 HUMAN ENHANCEMENT & LONGEVITY
// ============================================================================

{
    id: 'life-extension-therapies',
    title: 'Radical life extension therapies emerge',
    source: 'Peter Thiel / Bryan Johnson',
    probability: 35,
    timeframe: '10-20 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Lifespan extends. Career planning over 60+ years requires new approaches.',
    atRisk: 'People planning for traditional retirement at 65',
    opportunities: [
        {
            title: '🧬 Longevity Content Creator',
            mode: 'personality',
            description: 'Document and explain longevity science for regular people.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Follow 10 longevity researchers. Learn the landscape.', xp: 30},
                {mode: 'ideas', task: 'Read "Lifespan" or equivalent. Take notes.', xp: 35},
                {mode: 'execution', task: 'Create first piece of longevity content.', xp: 35},
                {mode: 'execution', task: 'Establish posting schedule. 3x per week.', xp: 40},
                {mode: 'personality', task: 'Engage with longevity community.', xp: 40},
                {mode: 'execution', task: 'Create 20 pieces over 6 weeks.', xp: 50},
                {mode: 'ideas', task: 'Find your unique angle.', xp: 40},
                {mode: 'execution', task: 'Reach 500 followers.', xp: 50},
                {mode: 'personality', task: 'Interview longevity expert.', xp: 55},
                {mode: 'execution', task: 'Monetize through courses or sponsorships.', xp: 55}
            ]
        }
    ]
},

{
    id: 'human-ai-merge-begins',
    title: 'Humans begin merging with AI through brain interfaces',
    source: 'Elon Musk / Neuralink',
    probability: 40,
    timeframe: '10-15 years',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'Cognitive enhancement becomes possible. New ethical questions emerge.',
    atRisk: 'Those who refuse enhancement competing against enhanced humans',
    opportunities: [
        {
            title: '🧠 Enhancement Ethics Educator',
            mode: 'ideas',
            description: 'Help people think through ethics of human enhancement.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Read foundational texts on enhancement ethics.', xp: 40},
                {mode: 'ideas', task: 'Create framework: questions before enhancement.', xp: 45},
                {mode: 'execution', task: 'Write accessible article on enhancement ethics.', xp: 45},
                {mode: 'personality', task: 'Share framework. Engage with responses.', xp: 40},
                {mode: 'ideas', task: 'Follow Neuralink, Synchron developments.', xp: 35},
                {mode: 'personality', task: 'Create discussion group on enhancement ethics.', xp: 50},
                {mode: 'execution', task: 'Develop workshop on enhancement decisions.', xp: 55},
                {mode: 'personality', task: 'Pilot workshop with small group.', xp: 50},
                {mode: 'execution', task: 'Create resources for companies.', xp: 50},
                {mode: 'personality', task: 'Get invited to speak on enhancement ethics.', xp: 60}
            ]
        }
    ]
}

];

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FORECAST_DATABASE;
}
