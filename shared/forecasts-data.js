const FORECAST_DATABASE = [

// ============================================================================
// 🧠 BRAIN-AI INTERFACES - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'brain-ai-merger',
    title: 'Humans begin merging with AI through brain interfaces',
    source: 'Metaculus forecasting community',
    sourceUrl: 'https://www.metaculus.com/questions/5121/when-will-the-first-general-ai-system-be-devised-tested-and-publicly-announced/',
    probability: 65,
    timeframe: '2028-2035',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'When humans can download skills and amplify cognition, your natural thinking speed and knowledge depth become commoditized. The differentiator shifts to what you choose NOT to augment.',
    atRisk: 'Knowledge workers, educators, therapists, coaches, consultants — anyone whose value is "what they know" rather than "who they are"',
    opportunities: [
        // OPPORTUNITY 1: NEURAL OPERATING SYSTEMS
        {
            title: '🧠 Neural Operating Systems (Mental OS)',
            mode: 'ideas',
            description: 'Someone will build the iOS/Android of the mind — the interface layer between human cognition and AI augmentation. This is a platform-scale opportunity.',
            difficulty: 'hard',
            timeframe: '12-24 months to position',
            quests: [
                {mode: 'ideas', task: 'Map Current BCI Landscape: Research Neuralink, Synchron, Kernel, Paradromics, Meta neural wristband. What does each do? What\'s the input/output bandwidth? Create a comparison matrix.', xp: 45},
                {mode: 'ideas', task: 'Study Mobile OS History: How did iOS and Android win? What made them platforms vs products? Write 5 lessons that apply to neural interfaces.', xp: 40},
                {mode: 'ideas', task: 'Define "Mental OS" Requirements: What would a neural operating system need to manage? List: attention, memory access, AI queries, sensory filters, emotional regulation, app permissions.', xp: 50},
                {mode: 'execution', task: 'Design Mental OS Architecture: Sketch the layers — hardware abstraction, cognitive kernel, app layer, permission system. Don\'t code it. Just architect it.', xp: 55},
                {mode: 'ideas', task: 'Identify the "Apps" Layer: What would mental apps look like? Focus mode, memory search, skill streaming, emotional regulation, dream recording. List 20 possibilities.', xp: 45},
                {mode: 'execution', task: 'Prototype a "Mental App" Concept: Pick one app (e.g., "Focus Mode"). Design the UX — how is it activated, what does it feel like, how does it end? Create a detailed spec.', xp: 55},
                {mode: 'personality', task: 'Interview 5 Neuroscientists or BCI Researchers: Ask what\'s technically possible in 5 years. What\'s the bottleneck — hardware, software, or biology?', xp: 60},
                {mode: 'execution', task: 'Write the Mental OS Manifesto: A 2,000-word vision document for what human-AI cognitive integration should look like. Share publicly.', xp: 50},
                {mode: 'personality', task: 'Build the Community: Start a newsletter, Discord, or podcast about cognitive augmentation futures. Attract the first 100 people thinking about this.', xp: 55},
                {mode: 'execution', task: 'Create a Mental OS Simulation: Build a clickable prototype or video demo showing how a Mental OS would work in daily life. No real BCI needed.', xp: 60},
                {mode: 'personality', task: 'Pitch to BCI Companies: Share your architecture with Neuralink, Kernel, or Synchron. Position yourself as a platform thinker, not just a hardware follower.', xp: 65},
                {mode: 'ideas', task: 'Predict the First Mental OS War: Write a 2032 headline about the battle between competing neural platforms. Who wins? Why? What was the wedge?', xp: 50}
            ]
        },
        // OPPORTUNITY 2: NEUROSECURITY
        {
            title: '🛡️ Neurosecurity (Thought-Level Cybersecurity)',
            mode: 'execution',
            description: 'When brains connect to networks, they become attack surfaces. Neurosecurity will be a trillion-dollar industry. Someone needs to build the Norton Antivirus of the mind.',
            difficulty: 'hard',
            timeframe: '6-18 months to position',
            quests: [
                {mode: 'ideas', task: 'Map the Neural Attack Surface: List every way a brain-computer interface could be compromised: data theft, injection attacks, sensory manipulation, memory tampering, attention hijacking.', xp: 50},
                {mode: 'ideas', task: 'Study Cybersecurity History: How did digital security evolve? Firewalls, antivirus, encryption, zero-trust. What patterns repeat for neural security?', xp: 45},
                {mode: 'execution', task: 'Create a Neural Threat Model: Design a framework for categorizing neural threats by severity, likelihood, and detectability. Make it visual.', xp: 55},
                {mode: 'ideas', task: 'Define "Thought Encryption": What would it mean to encrypt thoughts? Is it even possible? Research homomorphic encryption and cognitive privacy tech.', xp: 50},
                {mode: 'execution', task: 'Design a Neural Firewall Concept: What gets blocked? What gets through? How do you set permissions for your own mind? Create detailed specs.', xp: 55},
                {mode: 'ideas', task: 'Research Cognitive Forensics: After a neural breach, how would you investigate? What are the "logs" of the mind? Write a framework.', xp: 50},
                {mode: 'personality', task: 'Interview Cybersecurity Experts: Ask 5 security professionals how they\'d approach brain security. What transfers from digital security? What\'s completely new?', xp: 55},
                {mode: 'execution', task: 'Build a Neurosecurity Audit Checklist: A 50-point assessment for evaluating BCI security. Make it actionable for companies entering the space.', xp: 55},
                {mode: 'personality', task: 'Publish "The Neurosecurity Manifesto": A public document outlining the principles that should govern brain-level security. Become a thought leader.', xp: 50},
                {mode: 'execution', task: 'Create a Neurosecurity Startup Pitch: Deck, business model, go-to-market for a company that secures neural interfaces. Even if you don\'t build it, think it through.', xp: 60},
                {mode: 'personality', task: 'Advise a BCI Company on Security: Offer free consulting to a neural interface startup. Get in the room where these decisions are being made.', xp: 60},
                {mode: 'ideas', task: 'Predict the First Neural Breach: Write a 2030 headline about the first major brain-hacking incident. What was compromised? Who was responsible? What changed after?', xp: 50}
            ]
        },
        // OPPORTUNITY 3: SKILL STREAMING
        {
            title: '🎓 Skill Streaming & Instant Acquisition',
            mode: 'execution',
            description: 'When skills can be downloaded, the entire education industry inverts. Degrees become irrelevant. The new question: what skills are worth streaming vs. learning the hard way?',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Skills by "Streamability": Which skills could be downloaded (motor skills, languages, facts) vs which require lived experience (judgment, taste, relationships)? Create a framework.', xp: 45},
                {mode: 'ideas', task: 'Study Learning Science: How do humans actually acquire skills? What\'s the role of struggle, repetition, emotion? What would be lost if skills were instant?', xp: 45},
                {mode: 'ideas', task: 'Research Current Skill Transfer Tech: Look at transcranial stimulation, neurofeedback, memory research. What\'s possible now? What\'s 10 years away?', xp: 50},
                {mode: 'execution', task: 'Design a Skill Marketplace: If skills were downloadable, how would the marketplace work? Pricing, licensing, verification, refunds. Create the business model.', xp: 55},
                {mode: 'ideas', task: 'Define "Cognitive Capability Verification": How do you prove someone has a skill if degrees are meaningless? Design a certification system for augmented abilities.', xp: 50},
                {mode: 'execution', task: 'Create a "Skill Stack" for a Profession: Pick one job (surgeon, lawyer, pilot). What skills would be streamed vs learned? Design the curriculum of the future.', xp: 55},
                {mode: 'personality', task: 'Interview 5 Educators: Ask how they\'d adapt if skills became downloadable. What would they still teach? What becomes more valuable?', xp: 50},
                {mode: 'execution', task: 'Write "The Post-Education Manifesto": A vision for learning when knowledge is free and instant. What does human development become?', xp: 50},
                {mode: 'ideas', task: 'Identify the "Un-Streamable" Skills: What will remain valuable because it CAN\'T be downloaded? Wisdom, creativity, moral judgment? Create the list.', xp: 50},
                {mode: 'execution', task: 'Design an "Un-Streamable Skills Academy": A school that teaches only the things AI can\'t download into your brain. Curriculum, positioning, pricing.', xp: 55},
                {mode: 'personality', task: 'Pitch to a University or Bootcamp: Present your vision for post-streaming education. Offer to help them adapt.', xp: 55},
                {mode: 'ideas', task: 'Predict the Last Degree: Write a 2035 headline about the final university closing. What replaced it? Who saw it coming?', xp: 45}
            ]
        },
        // OPPORTUNITY 4: COGNITIVE PERFORMANCE & BURNOUT
        {
            title: '🔥 Augmented Worker Burnout Prevention',
            mode: 'personality',
            description: 'Augmented humans will be able to work 10x faster — and burn out 10x harder. Someone needs to build the cognitive load management and recovery systems.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Current Burnout Science: What causes burnout neurologically? Stress hormones, attention depletion, emotional exhaustion. Create a model.', xp: 40},
                {mode: 'ideas', task: 'Map Augmentation Risks: How would cognitive augmentation make burnout worse? Faster processing, constant availability, blurred work-life boundaries.', xp: 45},
                {mode: 'execution', task: 'Design "Cognitive Load Metrics": What would you measure to track an augmented worker\'s mental health? Processing time, recovery periods, emotional variance.', xp: 50},
                {mode: 'execution', task: 'Create a Burnout Prevention Protocol: For augmented workers, what are the rules? Maximum augmentation hours, mandatory rest modes, cognitive cool-down.', xp: 50},
                {mode: 'ideas', task: 'Study Athlete Recovery Science: How do elite athletes manage physical load? What translates to cognitive load management?', xp: 45},
                {mode: 'execution', task: 'Design a "Cognitive Recovery Program": A 7-day protocol for recovering from augmentation overuse. Activities, restrictions, metrics.', xp: 50},
                {mode: 'personality', task: 'Interview 5 High-Performers About Burnout: Ask executives, founders, surgeons about their worst burnout. What would augmentation have done to them?', xp: 50},
                {mode: 'execution', task: 'Build a Burnout Risk Assessment Tool: A questionnaire that predicts augmented worker burnout before it happens. Make it shareable.', xp: 55},
                {mode: 'personality', task: 'Write "The Augmented Worker\'s Bill of Rights": A manifesto for cognitive labor rights in an augmented world. Publish and advocate.', xp: 50},
                {mode: 'execution', task: 'Create an Enterprise Cognitive Wellness Program: Pitch deck and curriculum for companies managing augmented workforces.', xp: 55},
                {mode: 'personality', task: 'Pitch to HR Leaders: Present your cognitive wellness program to companies already thinking about augmentation.', xp: 55},
                {mode: 'ideas', task: 'Predict the First Augmentation Lawsuit: Write a 2031 headline about a worker suing for cognitive injury. What happened? What changed after?', xp: 45}
            ]
        },
        // OPPORTUNITY 5: COGNITIVE IDENTITY & PERSONALITY TUNING
        {
            title: '🧑‍🎨 Personality Tuning & Cognitive Aesthetics',
            mode: 'personality',
            description: 'When you can adjust your own personality — more confident, more creative, more calm — identity becomes a design choice. Luxury shifts from what you own to how you think.',
            difficulty: 'hard',
            timeframe: '12-24 months',
            quests: [
                {mode: 'ideas', task: 'Define "Personality Parameters": If personality were adjustable, what are the sliders? Openness, confidence, empathy, risk tolerance. Create a model with 15+ dimensions.', xp: 50},
                {mode: 'ideas', task: 'Study Personality Science: Research Big Five, Myers-Briggs critiques, trait vs state psychology. What\'s stable vs malleable about personality?', xp: 45},
                {mode: 'ideas', task: 'Map the Ethics of Personality Tuning: When is it enhancement vs inauthenticity? Create a framework for ethical personality modification.', xp: 50},
                {mode: 'execution', task: 'Design a "Cognitive Aesthetics" Service: Like a personal stylist, but for your mind. What would the service include? Assessment, design, implementation, refinement.', xp: 55},
                {mode: 'ideas', task: 'Research Historical Personality Tech: Therapy, meditation, drugs, coaching — all modify personality. What worked? What lessons transfer?', xp: 45},
                {mode: 'execution', task: 'Create "Mental Modes" Catalog: Design 10 purchasable mental states — "Deep Focus", "Creative Flow", "Social Warmth", "Calm Authority". Describe each precisely.', xp: 55},
                {mode: 'personality', task: 'Interview 5 People About Their "Ideal Self": What would they change about their personality if they could? Patterns reveal market demand.', xp: 50},
                {mode: 'execution', task: 'Design a "Luxury Mental Mode" Brand: Position premium mental states like luxury goods. Name, pricing, exclusivity, status signaling.', xp: 55},
                {mode: 'ideas', task: 'Define "Cognitive Status Symbols": In a world where wealth is common, what signals status? Mental capabilities, emotional range, experiential depth.', xp: 50},
                {mode: 'execution', task: 'Create an "Identity Design" Methodology: A framework for helping clients design who they want to become. The service model for cognitive aesthetics.', xp: 55},
                {mode: 'personality', task: 'Beta Test with 3 Clients: Offer free "identity design" sessions using current tools (coaching, habit design, environmental change). Prove the model.', xp: 60},
                {mode: 'ideas', task: 'Predict Post-Wealth Status: Write a 2035 article about how the ultra-rich signal status when everyone has money. What replaces yachts and jets?', xp: 50}
            ]
        },
        // OPPORTUNITY 6: COGNITIVE RIGHTS & GOVERNANCE
        {
            title: '⚖️ Cognitive Rights Law & Governance',
            mode: 'ideas',
            description: 'New rights will need to be invented: thought ownership, mental privacy, cognitive autonomy. The lawyers and policy makers who define these frameworks will shape civilization.',
            difficulty: 'hard',
            timeframe: '6-18 months',
            quests: [
                {mode: 'ideas', task: 'Map Existing Cognitive Rights: What protections exist for the mind today? Mental health privacy, interrogation limits, religious freedom. Create an inventory.', xp: 45},
                {mode: 'ideas', task: 'Study Rights Evolution: How did digital privacy rights develop? GDPR, CCPA, etc. What patterns apply to cognitive rights?', xp: 45},
                {mode: 'ideas', task: 'Define New Rights Categories: List rights that don\'t exist yet but should: thought ownership, mental privacy, cognitive autonomy, augmentation access.', xp: 50},
                {mode: 'execution', task: 'Draft a "Cognitive Bill of Rights": A formal document articulating fundamental cognitive rights for the augmented age. Make it comprehensive.', xp: 55},
                {mode: 'ideas', task: 'Research "Thought Ownership" Implications: If you think of an idea while augmented, who owns it? You, the AI, the platform? Map the IP challenges.', xp: 50},
                {mode: 'execution', task: 'Design a Consent Framework for Neural Interfaces: What does informed consent look like for brain-computer interfaces? Create a model consent process.', xp: 55},
                {mode: 'personality', task: 'Interview 5 Legal Scholars or Ethicists: Ask how they\'d approach cognitive rights. What frameworks are they developing?', xp: 55},
                {mode: 'execution', task: 'Create a "Mental Harm" Legal Framework: How do you define and prove mental harm from neural interfaces? What are the damages? Create the legal theory.', xp: 55},
                {mode: 'ideas', task: 'Map Augmentation Inequality: What happens when cognitive augmentation is expensive? Two classes of minds? Design policy interventions.', xp: 50},
                {mode: 'execution', task: 'Write "The Cognitive Constitution": A comprehensive governance framework for the augmented age. Rights, responsibilities, enforcement.', xp: 60},
                {mode: 'personality', task: 'Present to Policymakers or Think Tanks: Share your cognitive rights framework with people who influence policy. Get feedback, build credibility.', xp: 60},
                {mode: 'ideas', task: 'Predict the First Cognitive Rights Court Case: Write a 2032 headline about a landmark case. What was the violation? What precedent was set?', xp: 50}
            ]
        },
        // OPPORTUNITY 7: DIRECT-TO-BRAIN ENTERTAINMENT
        {
            title: '🎮 Direct-to-Brain Entertainment',
            mode: 'personality',
            description: 'When entertainment bypasses screens and goes straight to the brain, the entire media industry transforms. Immersive experiences, memory tourism, dream design.',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map the Entertainment Evolution: From campfire stories to VR — how has entertainment gotten more immersive? What\'s the trajectory to direct neural?', xp: 40},
                {mode: 'ideas', task: 'Research Current Immersive Tech: VR, AR, haptics, spatial audio. What are the limitations? What would neural bypass solve?', xp: 45},
                {mode: 'execution', task: 'Design a "Neural Entertainment Format": What would a movie, game, or album be like when delivered directly to the brain? Create a format spec.', xp: 55},
                {mode: 'ideas', task: 'Define "Memory Tourism": Could you experience someone else\'s vacation, concert, or life moment? What are the implications? Design the product.', xp: 50},
                {mode: 'execution', task: 'Create a "Dream Design" Concept: If you could design your dreams, what would the UX be? Categories, customization, safety limits.', xp: 55},
                {mode: 'ideas', task: 'Study Emotion-Driven Storytelling: How do movies and music manipulate emotion? What changes when you can directly trigger emotions?', xp: 45},
                {mode: 'execution', task: 'Design an "Experience Marketplace": Where people buy/sell experiential memories. Rights, pricing, verification, safety.', xp: 55},
                {mode: 'personality', task: 'Interview 5 Entertainment Creators: Ask filmmakers, musicians, game designers how they\'d approach neural entertainment. What excites them? What scares them?', xp: 50},
                {mode: 'execution', task: 'Script a "Neural Entertainment Demo": Write a 3-minute direct-to-brain experience. Describe what the user sees, feels, thinks, remembers.', xp: 55},
                {mode: 'ideas', task: 'Map the Casualties: What entertainment formats die? Movie theaters, headphones, game controllers? Who loses? Who adapts?', xp: 45},
                {mode: 'personality', task: 'Pitch to a Media Company: Present your vision for neural entertainment to a studio, label, or game company. Position yourself as the future.', xp: 60},
                {mode: 'ideas', task: 'Predict the First Neural Hit: Write a 2033 headline about the first billion-dollar direct-to-brain experience. What was it? Why did it resonate?', xp: 50}
            ]
        },
        // OPPORTUNITY 8: WHAT MUST REMAIN HUMAN
        {
            title: '🧭 Defining What Must Remain Human',
            mode: 'ideas',
            description: 'The most important opportunity: helping people and institutions decide what should NOT be augmented. Designing constraints, not just capabilities.',
            difficulty: 'hard',
            timeframe: '3-12 months',
            quests: [
                {mode: 'ideas', task: 'Define "Irreducibly Human" Qualities: What makes humans valuable that can\'t be replicated or augmented? Compile a list with philosophical grounding.', xp: 50},
                {mode: 'ideas', task: 'Study Resistance to Past Technologies: How did societies resist printing, electricity, internet? What were they protecting? What lessons apply?', xp: 45},
                {mode: 'ideas', task: 'Map the "Authenticity Premium": Where do people already pay more for human, unaugmented, or natural? Artisan goods, live music, therapy.', xp: 45},
                {mode: 'execution', task: 'Create an "Augmentation Ethics Framework": A decision tree for whether to augment something. When to say no.', xp: 55},
                {mode: 'ideas', task: 'Research Identity Philosophy: What makes you "you" if your memories, skills, and personality are all augmented? Define identity for the neural age.', xp: 50},
                {mode: 'execution', task: 'Design "Human-Only Zones": Like phone-free restaurants but for augmentation. Where would these exist? How would they be enforced?', xp: 50},
                {mode: 'personality', task: 'Interview 5 Philosophers or Theologians: How do they think about human essence in an age of augmentation? What must be protected?', xp: 55},
                {mode: 'execution', task: 'Create a "Constraint Design" Methodology: A framework for helping organizations decide what not to augment. The opposite of capability consulting.', xp: 55},
                {mode: 'personality', task: 'Write "The Human Manifesto": A public document advocating for what must remain human. Gain signatories and attention.', xp: 50},
                {mode: 'execution', task: 'Design "Authenticity Certification": A label for experiences, products, or services that are verifiably unaugmented. Brand, standards, enforcement.', xp: 55},
                {mode: 'personality', task: 'Become the "Stay Human" Advocate: Position yourself as the voice for intentional limits. Speak, write, consult on constraints.', xp: 55},
                {mode: 'ideas', task: 'Predict the Unaugmented Movement: Write a 2034 headline about a cultural backlash against augmentation. What triggered it? What changed?', xp: 50}
            ]
        }
    ]
},

// ============================================================================
// 💰 DEFI MASS ADOPTION - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'defi-100m-users',
    title: 'DeFi reaches 100M+ users globally',
    source: 'DeFiLlama growth trajectory, Ethereum roadmap, stablecoin adoption curves',
    probability: 68,
    timeframe: '2027-2030',
    category: 'crypto',
    threatMode: 'execution',
    threatReason: 'Traditional finance jobs get automated by smart contracts. The winners build the bridges that make DeFi feel like normal banking — without the jargon, gas fees, or seed phrases.',
    atRisk: 'Bank tellers, loan officers, compliance staff at traditional institutions, payment processors, remittance companies, anyone whose job is being a trusted middleman',
    opportunities: [
        // OPPORTUNITY 1: INVISIBLE DEFI
        {
            title: '🧭 "Invisible DeFi" Consumer Apps',
            mode: 'execution',
            description: 'The winning DeFi apps won\'t mention crypto, blockchain, or wallets. They\'ll just work — like Venmo, but on-chain. No jargon, no gas fees, no seed phrases.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Audit Current DeFi UX: Use 5 DeFi apps (Uniswap, Aave, Compound, etc.) as a complete beginner. Document every moment of confusion, every piece of jargon, every friction point.', xp: 45},
                {mode: 'ideas', task: 'Study "Invisible Tech" Precedents: How did email, GPS, and databases become invisible to users? What patterns made complex tech feel simple?', xp: 40},
                {mode: 'ideas', task: 'Define the "Zero Crypto" Interface: Design a financial app where the user never sees: wallet addresses, gas fees, blockchain names, seed phrases. What\'s left? What\'s hidden?', xp: 50},
                {mode: 'execution', task: 'Map the Abstraction Stack: What needs to happen behind the scenes to hide complexity? Account abstraction, gas sponsorship, chain abstraction. Create the technical roadmap.', xp: 55},
                {mode: 'execution', task: 'Design an "Invisible DeFi" Savings App: A user deposits dollars, earns yield, withdraws dollars. They never know it\'s DeFi. Create the full UX flow.', xp: 55},
                {mode: 'ideas', task: 'Identify the Trust Gap: Why do normal people distrust DeFi? List 10 trust barriers and design solutions for each that don\'t require understanding crypto.', xp: 50},
                {mode: 'personality', task: 'Test with 5 Non-Crypto Users: Show them your "invisible DeFi" design. Where do they still get confused? What language still feels foreign?', xp: 55},
                {mode: 'execution', task: 'Create an Onboarding Flow That Builds Trust: Design a 5-minute onboarding that makes someone comfortable depositing $100 without understanding blockchain.', xp: 55},
                {mode: 'execution', task: 'Prototype the MVP: Build a clickable prototype or simple app that demonstrates invisible DeFi principles. Focus on one use case.', xp: 60},
                {mode: 'personality', task: 'Share Your Vision Publicly: Write "The Death of Crypto UX" — a manifesto for invisible DeFi. Attract believers and collaborators.', xp: 50},
                {mode: 'execution', task: 'Pitch to a DeFi Protocol: Present your UX vision to a protocol that needs consumer adoption. Offer to redesign their frontend.', xp: 60},
                {mode: 'ideas', task: 'Predict the First Invisible DeFi Unicorn: Write a 2029 headline about a $10B company where users don\'t know they\'re using crypto. What did they build?', xp: 50}
            ]
        },
        // OPPORTUNITY 2: SELF-CUSTODY UX
        {
            title: '🔐 Self-Custody UX (Seedless, Recovery-First)',
            mode: 'execution',
            description: 'Self-custody is DeFi\'s superpower and its biggest adoption blocker. The company that makes self-custody as easy as "Forgot Password?" wins the next billion users.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Self-Custody Failure Modes: How do people lose access to wallets? Seed phrase loss, phishing, death, device failure. Quantify each risk.', xp: 45},
                {mode: 'ideas', task: 'Research Current Recovery Solutions: MPC wallets, social recovery, hardware modules, smart contract wallets. What exists? What are the tradeoffs?', xp: 50},
                {mode: 'ideas', task: 'Study Password Recovery UX: How do banks, email, and social media handle recovery? What can be adapted for crypto without centralization?', xp: 45},
                {mode: 'execution', task: 'Design a "Seedless" Wallet Architecture: No 24 words. No single point of failure. How does it work technically? Create the spec.', xp: 55},
                {mode: 'execution', task: 'Create a Social Recovery Flow: Design UX for setting up guardians, initiating recovery, and preventing fraud. Make it grandma-friendly.', xp: 55},
                {mode: 'ideas', task: 'Solve the Inheritance Problem: When someone dies, how do heirs access crypto? Design a solution that\'s secure but not stuck forever.', xp: 50},
                {mode: 'personality', task: 'Interview 5 People Who Lost Crypto: What happened? How did it feel? What would have saved them? Extract design requirements.', xp: 55},
                {mode: 'execution', task: 'Design Recovery UX for Different Threats: Lost device, phishing attack, death, coercion. Create flows for each scenario.', xp: 55},
                {mode: 'execution', task: 'Prototype a Recovery Experience: Build a demo showing the full recovery flow — from "I lost access" to "I\'m back in" in under 10 minutes.', xp: 60},
                {mode: 'personality', task: 'Test with Non-Technical Users: Can your parents set up and recover a wallet? Iterate until the answer is yes.', xp: 55},
                {mode: 'execution', task: 'Create a "Self-Custody Readiness" Assessment: A tool that scores how well someone is protected and guides them to improve.', xp: 50},
                {mode: 'ideas', task: 'Predict the "Forgot Password" Moment: Write a 2028 headline about self-custody becoming as easy as centralized accounts. What breakthrough enabled it?', xp: 50}
            ]
        },
        // OPPORTUNITY 3: DEFI FINANCIAL EDUCATION
        {
            title: '🎓 DeFi Education for Non-Technical Users',
            mode: 'personality',
            description: 'Financial literacy is broken. DeFi literacy doesn\'t exist. The platform that teaches 100M people to manage on-chain money safely will be worth billions.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Audit Current Crypto Education: Review 10 crypto education platforms. What do they assume you already know? Where do beginners actually get lost?', xp: 40},
                {mode: 'ideas', task: 'Map the Knowledge Gap: What does someone need to understand to safely use DeFi? Create the minimum viable curriculum.', xp: 45},
                {mode: 'ideas', task: 'Study Successful Financial Education: How do Khan Academy, Duolingo, and Dave Ramsey teach finance? What makes it stick?', xp: 45},
                {mode: 'execution', task: 'Create a "Risk-First" Curriculum: Start with what can go wrong, not what you can earn. Design education that leads with safety.', xp: 50},
                {mode: 'execution', task: 'Design a DeFi Simulator: A safe environment to practice swaps, lending, and yield farming with fake money. Learn by doing without risk.', xp: 55},
                {mode: 'ideas', task: 'Identify Cultural Translation Needs: How do different cultures think about savings, debt, and risk? Design education that adapts.', xp: 50},
                {mode: 'personality', task: 'Teach 5 Complete Beginners: Walk them through DeFi basics. Document every question, every confusion. Use this to improve your curriculum.', xp: 55},
                {mode: 'execution', task: 'Create a "DeFi Driving Test": A certification that proves someone understands the risks and basics before they invest real money.', xp: 50},
                {mode: 'execution', task: 'Build an AI Financial Coach for DeFi: Design a chatbot that answers questions, warns about risks, and guides safe behavior.', xp: 55},
                {mode: 'personality', task: 'Partner with a Community: Find a non-crypto community (church group, trade union, local club) and offer free DeFi education. Learn from their questions.', xp: 55},
                {mode: 'execution', task: 'Create a "First $100 in DeFi" Course: A complete guide to getting started safely with a small amount. From fiat to earning yield.', xp: 55},
                {mode: 'ideas', task: 'Predict the Financial Literacy Mandate: Write a 2030 headline about governments requiring DeFi literacy before participation. Why did this happen?', xp: 45}
            ]
        },
        // OPPORTUNITY 4: STABLECOIN-NATIVE BANKING
        {
            title: '💵 Stablecoin-Native Banking Alternatives',
            mode: 'execution',
            description: 'Stablecoins are the bridge. A "bank account" that\'s actually USDC on-chain — with direct deposit, bill pay, and a debit card — replaces traditional banking.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Traditional Banking Functions: Checking, savings, direct deposit, bill pay, debit card, wire transfers. Which can move on-chain today?', xp: 45},
                {mode: 'ideas', task: 'Research Stablecoin Infrastructure: USDC, USDT, DAI, PYUSD. What\'s the on/off-ramp situation? What are the regulatory constraints?', xp: 50},
                {mode: 'execution', task: 'Design "Stablecoin Checking": A product spec for a checking account replacement. Direct deposit, bill pay, debit card, all on stablecoins.', xp: 55},
                {mode: 'ideas', task: 'Analyze the Yield Opportunity: Traditional checking pays 0%. Stablecoin yield is 3-8%. Calculate the value proposition for different customer segments.', xp: 45},
                {mode: 'execution', task: 'Map the Regulatory Path: What licenses are needed? What\'s the compliance strategy? Create a go-to-market regulatory plan.', xp: 55},
                {mode: 'ideas', task: 'Identify the First Customers: Who\'s underserved by traditional banking AND comfortable with digital? Gig workers, remote workers, immigrants?', xp: 50},
                {mode: 'execution', task: 'Design the Debit Card Experience: A card that spends stablecoins but feels like dollars. Auto-conversion, rewards, merchant experience.', xp: 55},
                {mode: 'personality', task: 'Interview 10 People Frustrated with Banks: What do they hate? Fees, delays, holds, rejections. Design stablecoin solutions for each pain point.', xp: 50},
                {mode: 'execution', task: 'Create a Fiat On-Ramp Flow: From paycheck direct deposit to stablecoin balance in the smoothest possible experience. Design it.', xp: 55},
                {mode: 'execution', task: 'Build a Bill Pay Integration: Design how users pay rent, utilities, and subscriptions from stablecoin balances.', xp: 55},
                {mode: 'personality', task: 'Pitch to a Fintech or Crypto Company: Present your stablecoin banking vision. Offer to help them build it.', xp: 60},
                {mode: 'ideas', task: 'Predict Bank Displacement: Write a 2031 headline about the first major bank losing 10% of deposits to stablecoin alternatives. What triggered the shift?', xp: 50}
            ]
        },
        // OPPORTUNITY 5: SMART CONTRACT INSURANCE
        {
            title: '🛡️ Smart Contract Insurance & Risk Products',
            mode: 'ideas',
            description: 'DeFi has billions locked in code that could be exploited. Insurance against hacks, exploits, and failures is the unlock for institutional and mainstream adoption.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map DeFi Risk Categories: Smart contract bugs, oracle failures, governance attacks, economic exploits, rug pulls. Create a comprehensive taxonomy.', xp: 50},
                {mode: 'ideas', task: 'Research Existing DeFi Insurance: Nexus Mutual, InsurAce, Risk Harbor. How do they work? What do they cover? What are the gaps?', xp: 50},
                {mode: 'execution', task: 'Design a Consumer-Friendly Insurance Product: "Protect Your Deposit" — one click, clear coverage, simple claims. Create the UX.', xp: 55},
                {mode: 'ideas', task: 'Study Traditional Insurance Economics: How do insurers price risk, manage reserves, handle claims? What translates to DeFi?', xp: 45},
                {mode: 'execution', task: 'Create a Risk Rating System: A "credit score" for DeFi protocols. What factors determine safety? How do you communicate risk to consumers?', xp: 55},
                {mode: 'ideas', task: 'Design Automated Claims: When a hack happens, how do you verify loss and pay out without manual review? Create the smart contract logic.', xp: 55},
                {mode: 'execution', task: 'Build a Protocol Audit Checklist: What should users check before depositing? Turn expert knowledge into a consumer tool.', xp: 50},
                {mode: 'personality', task: 'Interview 5 DeFi Users About Insurance: Do they have it? Why not? What would make them buy? Extract product requirements.', xp: 50},
                {mode: 'execution', task: 'Design a "DeFi Safety Score" Dashboard: Shows users their total exposure, insurance coverage, and risk-adjusted position.', xp: 55},
                {mode: 'ideas', task: 'Solve the Correlated Risk Problem: One big hack affects many protocols. How do you insure against systemic risk? Design the model.', xp: 55},
                {mode: 'execution', task: 'Create an Insurance Sales Flow: Integrated into DeFi deposits — "Protect this position?" at the moment of risk. Design the UX.', xp: 50},
                {mode: 'ideas', task: 'Predict the First Major DeFi Insurance Payout: Write a 2028 headline about a $500M claim. What happened? How did it change the industry?', xp: 50}
            ]
        },
        // OPPORTUNITY 6: GLOBAL REMITTANCES
        {
            title: '🌍 Cross-Border Remittances at Scale',
            mode: 'execution',
            description: 'Remittances are a $700B market with 6% average fees. Stablecoins make it near-free. The company that makes "send money home" as easy as texting wins.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map Remittance Corridors: US→Mexico, UAE→India, UK→Nigeria. What are the volumes, fees, and pain points for the top 10 corridors?', xp: 45},
                {mode: 'ideas', task: 'Research Current Solutions: Western Union, Wise, Remitly, crypto options. What are the fees, speeds, and UX? Where does DeFi win?', xp: 45},
                {mode: 'execution', task: 'Calculate the DeFi Advantage: For a $500 remittance, compare traditional fees vs stablecoin transfer costs. Make the value proposition undeniable.', xp: 45},
                {mode: 'ideas', task: 'Identify the Last-Mile Problem: Getting stablecoins is easy. Getting cash in a rural village is hard. Map the off-ramp infrastructure gap.', xp: 50},
                {mode: 'execution', task: 'Design a WhatsApp-Based Remittance: Send money by text. No app download. Design how it works technically and experientially.', xp: 55},
                {mode: 'ideas', task: 'Study Trust in Remittances: Families trust specific agents and methods. How do you build trust in a new system? Research the psychology.', xp: 50},
                {mode: 'execution', task: 'Create an Agent Network Model: Local shops that cash out stablecoins. Design the economics, onboarding, and trust system.', xp: 55},
                {mode: 'personality', task: 'Interview 5 Remittance Senders: Why do they use their current method? What would make them switch? Document their concerns.', xp: 55},
                {mode: 'execution', task: 'Design the Recipient Experience: Grandmother in a village gets a notification. Then what? Cash pickup, mobile money, or local store credit?', xp: 55},
                {mode: 'execution', task: 'Build a Corridor-Specific Prototype: Pick one remittance corridor and design the complete end-to-end experience.', xp: 60},
                {mode: 'personality', task: 'Partner with a Diaspora Community: Find a community organization and offer to help them reduce remittance costs. Learn from real users.', xp: 55},
                {mode: 'ideas', task: 'Predict Western Union\'s Decline: Write a 2030 headline about traditional remittance companies losing market share. What was the tipping point?', xp: 45}
            ]
        },
        // OPPORTUNITY 7: ON-CHAIN CREDIT & REPUTATION
        {
            title: '📊 On-Chain Credit Scoring & Reputation',
            mode: 'ideas',
            description: 'Credit scores are broken and exclusionary. On-chain behavior creates a new, global, transparent reputation system. Your wallet history becomes your financial identity.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Audit Traditional Credit Scoring: How do FICO scores work? What do they miss? Why do they exclude billions of people?', xp: 45},
                {mode: 'ideas', task: 'Map On-Chain Reputation Signals: Transaction history, protocol usage, repayment behavior, governance participation. What indicates creditworthiness?', xp: 50},
                {mode: 'execution', task: 'Design an On-Chain Credit Score: What factors? How weighted? How do you prevent gaming? Create the algorithm framework.', xp: 55},
                {mode: 'ideas', task: 'Solve the Cold Start Problem: New wallets have no history. How do you bootstrap reputation? Bridge off-chain data? Design solutions.', xp: 50},
                {mode: 'execution', task: 'Create a "DeFi Credit Report": A dashboard showing your on-chain reputation, history, and creditworthiness. Design the UX.', xp: 55},
                {mode: 'ideas', task: 'Research Privacy-Preserving Reputation: How do you prove creditworthiness without revealing your whole history? ZK proofs, selective disclosure.', xp: 55},
                {mode: 'execution', task: 'Design Reputation-Based Lending: A lending product where your rate depends on on-chain reputation, not traditional credit. Create the model.', xp: 55},
                {mode: 'personality', task: 'Interview 5 People Excluded from Traditional Credit: What\'s their on-chain activity? Could it demonstrate creditworthiness? Document the opportunity.', xp: 50},
                {mode: 'execution', task: 'Build a "Prove Your Reputation" Tool: Let users generate a verifiable credential of their on-chain history to share with lenders.', xp: 55},
                {mode: 'ideas', task: 'Map the Global Credit Gap: 3B people lack credit scores. Which countries/segments could on-chain reputation serve first?', xp: 50},
                {mode: 'execution', task: 'Design a Credit Builder Product: Help users deliberately build on-chain reputation through small, positive actions.', xp: 50},
                {mode: 'ideas', task: 'Predict the Death of FICO: Write a 2032 headline about on-chain reputation replacing traditional credit scores. What enabled the shift?', xp: 50}
            ]
        },
        // OPPORTUNITY 8: DESIGNING TRUST WITHOUT INTERMEDIARIES
        {
            title: '🤝 Designing Trust Without Intermediaries',
            mode: 'ideas',
            description: 'The meta-opportunity: DeFi replaces trusted institutions with transparent systems. Someone needs to codify how to design trust at scale without middlemen.',
            difficulty: 'hard',
            timeframe: '6-18 months',
            quests: [
                {mode: 'ideas', task: 'Map How Trust Works Today: Banks, lawyers, notaries, escrow agents — what do they actually do? What\'s the trust service they provide?', xp: 45},
                {mode: 'ideas', task: 'Study Trust in DeFi Protocols: How do Uniswap, Aave, and Compound create trust? Code audits, TVL, governance. What are the mechanisms?', xp: 50},
                {mode: 'ideas', task: 'Identify Trust Gaps in DeFi: Where do people still not trust the system? What\'s missing? Regulation, insurance, reputation, recourse?', xp: 50},
                {mode: 'execution', task: 'Create a "Trust Design Framework": A methodology for building trustworthy systems without central authorities. Principles, patterns, anti-patterns.', xp: 55},
                {mode: 'ideas', task: 'Research Mechanism Design: How do economists design incentive systems? What translates to DeFi trust design?', xp: 50},
                {mode: 'execution', task: 'Design Trust Signals for Protocols: What indicators should users check? Audit status, TVL history, governance health, team doxxing. Create the checklist.', xp: 50},
                {mode: 'execution', task: 'Create a "Trust Score" for DeFi: A composite rating that combines all trust signals into one number. Design the methodology.', xp: 55},
                {mode: 'personality', task: 'Interview 10 DeFi Users About Trust: What makes them trust a protocol? What would make them trust more? Extract the psychology.', xp: 55},
                {mode: 'execution', task: 'Design Dispute Resolution for DeFi: When things go wrong, how are disputes resolved without lawyers? Create an on-chain arbitration system.', xp: 55},
                {mode: 'ideas', task: 'Study Failed Trust Systems: Protocols that lost trust after hacks or rug pulls. What could have prevented it? What did we learn?', xp: 45},
                {mode: 'personality', task: 'Write "The Trust Design Manifesto": Principles for building trusted systems without intermediaries. Publish and advocate.', xp: 50},
                {mode: 'ideas', task: 'Predict the Trust Standard: Write a 2030 headline about an industry-wide trust certification for DeFi. Who created it? What does it require?', xp: 50}
            ]
        }
    ]
},

// ============================================================================
// 🎓 AI TUTORS OUTPERFORM TEACHERS - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'ai-tutors-outperform',
    title: 'AI tutors outperform average human teachers',
    source: 'Khan Academy + GPT-4 studies, Bloom 2-sigma research, EdTech trajectories',
    probability: 75,
    timeframe: '2027-2029',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'When AI can teach facts and skills better than humans, the value of teachers shifts entirely to motivation, identity formation, and human connection. Knowledge transfer becomes free.',
    atRisk: 'Traditional teachers focused on content delivery, test prep companies, tutoring centers, educational publishers, anyone selling "what to learn" instead of "who to become"',
    opportunities: [
        {
            title: '🧭 Mentorship-First Education',
            mode: 'personality',
            description: 'AI handles knowledge transfer. Humans handle motivation, identity, and meaning. The mentor who helps students figure out WHO they want to become — not WHAT they need to know — wins.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Separate Teaching from Mentoring: List everything teachers do. Categorize each as "AI can do this" vs "requires human connection." What\'s left for humans?', xp: 45},
                {mode: 'ideas', task: 'Study the Bloom 2-Sigma Problem: Research why 1-on-1 tutoring is so effective. What does AI replicate? What requires a human relationship?', xp: 45},
                {mode: 'ideas', task: 'Define the Mentor\'s Job Description: If AI handles content, what does the human mentor do? Motivation, accountability, identity, emotional support. Write the new role.', xp: 50},
                {mode: 'execution', task: 'Design a Mentorship Framework: A structured approach to student development that assumes AI handles all knowledge transfer. What are the sessions about?', xp: 55},
                {mode: 'personality', task: 'Mentor 3 Students for Free: Practice the mentorship-first model. No teaching content — only motivation, goal-setting, and identity work. Document what works.', xp: 55},
                {mode: 'execution', task: 'Create a "Who Do You Want to Become?" Curriculum: A series of exercises that help students discover purpose, not just learn skills.', xp: 50},
                {mode: 'ideas', task: 'Research Identity Formation in Adolescents: What do teenagers actually need from adults? How does identity form? Apply to mentorship design.', xp: 50},
                {mode: 'execution', task: 'Build a Mentor Training Program: How do you train adults to be great mentors (not teachers)? Create the certification curriculum.', xp: 55},
                {mode: 'personality', task: 'Partner with a School or Learning Pod: Offer to provide mentorship alongside their AI tutoring. Prove the model works.', xp: 60},
                {mode: 'execution', task: 'Design Pricing for Mentorship: What\'s the business model? Per session, monthly retainer, cohort-based? Make it sustainable.', xp: 50},
                {mode: 'personality', task: 'Write "The Post-Teacher Manifesto": What education becomes when AI handles knowledge. Publish and attract believers.', xp: 50},
                {mode: 'ideas', task: 'Predict the Last Lecture: Write a 2032 headline about traditional teaching becoming obsolete. What replaced it? Who resisted longest?', xp: 45}
            ]
        },
        {
            title: '👨‍👩‍👧 Parent-as-Operator Toolkits',
            mode: 'execution',
            description: 'Homeschooling explodes when AI tutors are better than school. Parents need operating systems to manage their kids\' AI-powered education. Not curriculum — coordination.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map the Homeschool Parent\'s Job: If AI teaches, what does the parent do? Scheduling, socialization, motivation, assessment, compliance. List all functions.', xp: 45},
                {mode: 'ideas', task: 'Research Homeschool Pain Points: Interview 5 homeschool parents. What\'s hard? What tools do they wish existed?', xp: 50},
                {mode: 'execution', task: 'Design a "Home Learning OS": Dashboard that tracks AI tutor progress, schedules activities, manages social events, handles compliance. Create the product spec.', xp: 55},
                {mode: 'ideas', task: 'Study Learning Pod Models: How do groups of families share homeschooling? What coordination tools do they need?', xp: 45},
                {mode: 'execution', task: 'Create a Weekly Planning Template: A simple system parents can use to balance AI learning, social activities, and real-world projects.', xp: 45},
                {mode: 'execution', task: 'Design a Socialization Scheduler: Matches homeschool kids for activities, playdates, group projects. Solve the isolation problem.', xp: 50},
                {mode: 'personality', task: 'Run a Parent Workshop: Teach 10 parents how to manage AI-powered home education. Learn from their questions.', xp: 55},
                {mode: 'execution', task: 'Build Progress Reporting for Parents: How do parents know if AI tutoring is working? Design the analytics dashboard.', xp: 50},
                {mode: 'execution', task: 'Create State Compliance Templates: Each state has homeschool requirements. Build templates that make compliance effortless.', xp: 50},
                {mode: 'personality', task: 'Partner with a Homeschool Co-op: Offer your tools to an existing community. Iterate based on real usage.', xp: 55},
                {mode: 'execution', task: 'Design a "Learning Pod in a Box": Everything a group of families needs to start AI-powered collective homeschooling.', xp: 55},
                {mode: 'ideas', task: 'Predict the School Exodus: Write a 2030 headline about mass departure from traditional schools. What triggered it? What replaced them?', xp: 45}
            ]
        },
        {
            title: '🏆 Proof-of-Skill Credentialing Systems',
            mode: 'execution',
            description: 'Degrees prove you sat in chairs. Projects prove you can do things. When AI tutors anyone for free, credentials shift from time-spent to skills-demonstrated.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Audit What Degrees Actually Signal: Why do employers want degrees? Sorting, socialization, persistence, knowledge? Rank by importance.', xp: 45},
                {mode: 'ideas', task: 'Research Alternative Credentials: Lambda School ISAs, Google certificates, portfolio hiring. What works? What doesn\'t? Why?', xp: 50},
                {mode: 'execution', task: 'Design a "Skill Proof" Format: What does a verifiable, portable proof of skill look like? Create the specification.', xp: 55},
                {mode: 'ideas', task: 'Study How Hiring Actually Works: Interview 5 hiring managers. Do they care about degrees? What do they actually evaluate?', xp: 50},
                {mode: 'execution', task: 'Create a Project-Based Assessment: Design a challenge that proves someone has a skill. Objective, verifiable, hard to fake.', xp: 55},
                {mode: 'execution', task: 'Build a Skill Verification Protocol: How do you confirm a project was done by the person claiming it? Anti-cheating, authentication.', xp: 55},
                {mode: 'personality', task: 'Convince 3 Employers to Try Project Hiring: Offer to help them hire based on skill proofs instead of resumes. Document results.', xp: 60},
                {mode: 'execution', task: 'Design a "Portfolio Transcript": A document that replaces traditional transcripts with demonstrated capabilities.', xp: 50},
                {mode: 'ideas', task: 'Map Skills That Matter: For a given career, what skills actually predict success? Create assessment frameworks for 5 careers.', xp: 50},
                {mode: 'execution', task: 'Build a Credential Marketplace: Where people earn and display skill proofs, and employers search for verified capabilities.', xp: 60},
                {mode: 'personality', task: 'Write "Degrees Are Dead": A manifesto for skill-based credentialing. Make the case. Attract employers and learners.', xp: 50},
                {mode: 'ideas', task: 'Predict the Last Diploma: Write a 2035 headline about universities abandoning degrees. What replaced them?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 💻 AI WRITES MAJORITY OF CODE - COMPREHENSIVE FORECAST  
// ============================================================================

{
    id: 'ai-writes-code',
    title: 'AI writes majority of code in professional settings',
    source: 'Polymarket AI coding predictions, GitHub Copilot data',
    sourceUrl: 'https://polymarket.com/event/which-company-will-have-the-best-ai-model-for-coding-at-the-end-of-2025',
    probability: 82,
    timeframe: '2026-2027',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Coding as a skill becomes commoditized. The value shifts from "can you write code" to "can you architect systems, review AI output, and translate business problems into technical specs."',
    atRisk: 'Junior developers, coding bootcamp grads, offshore development shops, anyone whose value is "lines of code" rather than "problems solved"',
    opportunities: [
        {
            title: '🏗️ Code Direction & Architecture Training',
            mode: 'ideas',
            description: 'When AI writes code, humans direct it. The skill becomes specifying WHAT to build, not HOW. System design, requirements, and architecture become the premium skills.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map the New Developer Skillset: If AI writes code, what do humans do? Specs, architecture, review, debugging, system design. Rank by value.', xp: 45},
                {mode: 'ideas', task: 'Study How Architects Think: Interview 3 senior architects. How do they approach system design? What do they consider that juniors miss?', xp: 50},
                {mode: 'execution', task: 'Create a "Spec-Writing" Course: Teach developers to write specifications that AI can execute perfectly. The skill is precision communication.', xp: 55},
                {mode: 'ideas', task: 'Research Prompt Engineering for Code: What makes an effective code prompt? Study patterns that produce good AI output.', xp: 45},
                {mode: 'execution', task: 'Design Architecture Training for AI-Era: Curriculum that assumes AI handles implementation. Focus on systems thinking, tradeoffs, patterns.', xp: 55},
                {mode: 'execution', task: 'Build a "Requirements to Code" Simulation: Practice environment where learners write specs and AI executes. Grade the specs, not the code.', xp: 55},
                {mode: 'personality', task: 'Train 5 Developers in AI Direction: Teach the new skillset. Document what\'s hard to learn, what clicks quickly.', xp: 55},
                {mode: 'execution', task: 'Create an Architecture Decision Framework: Templates for making and documenting technical decisions that AI implements.', xp: 50},
                {mode: 'ideas', task: 'Define "AI Fluency" for Developers: What does it mean to be great at working with AI? Create the competency model.', xp: 50},
                {mode: 'execution', task: 'Design a Certification for AI-Era Development: Prove someone can architect, spec, and direct AI effectively.', xp: 55},
                {mode: 'personality', task: 'Partner with a Bootcamp: Help them redesign curriculum for AI-era development. Pilot the new approach.', xp: 60},
                {mode: 'ideas', task: 'Predict the Last "Learn to Code" Campaign: Write a 2029 headline about traditional coding education becoming obsolete. What replaced it?', xp: 45}
            ]
        },
        {
            title: '🔍 AI Code QA & Security Auditing',
            mode: 'execution',
            description: 'AI-generated code has bugs, vulnerabilities, and hallucinations. Someone needs to verify it works, is secure, and doesn\'t have subtle errors. QA becomes critical.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Catalog AI Code Failure Modes: What kinds of bugs does AI-generated code have? Subtle logic errors, security holes, performance issues. Create a taxonomy.', xp: 50},
                {mode: 'ideas', task: 'Research AI Code Security: What security vulnerabilities are common in AI-generated code? Study the patterns.', xp: 50},
                {mode: 'execution', task: 'Design an AI Code Review Checklist: What should humans check in AI-generated code? Create a comprehensive review protocol.', xp: 55},
                {mode: 'execution', task: 'Build a "Spot the AI Bug" Training: Exercises that teach developers to find common AI code errors. Sharpen the review skill.', xp: 50},
                {mode: 'ideas', task: 'Study How QA Evolves: Traditional QA tests human code. How does QA change when AI writes most code? Interview QA professionals.', xp: 50},
                {mode: 'execution', task: 'Create an AI Code Security Scanner: Tool or checklist that catches common AI-generated vulnerabilities.', xp: 55},
                {mode: 'execution', task: 'Design an AI Code Audit Service: Scope, pricing, deliverables for auditing AI-generated codebases. Create the service offering.', xp: 55},
                {mode: 'personality', task: 'Audit 3 AI-Generated Projects: Offer free audits to teams using AI coding tools. Document what you find.', xp: 55},
                {mode: 'execution', task: 'Build a Regression Testing Framework: Specifically designed to catch AI code that "looks right but isn\'t."', xp: 55},
                {mode: 'ideas', task: 'Define "AI Code Liability": When AI-generated code fails, who\'s responsible? The developer? The AI company? Map the legal landscape.', xp: 50},
                {mode: 'personality', task: 'Write "The AI Code Quality Manifesto": Standards for responsible AI-assisted development. Advocate for the practices.', xp: 50},
                {mode: 'ideas', task: 'Predict the First AI Code Disaster: Write a 2028 headline about a major failure caused by AI-generated code. What happened? What changed?', xp: 50}
            ]
        },
        {
            title: '🏭 Legacy Modernization Factories',
            mode: 'execution',
            description: 'Millions of lines of COBOL, ancient Java, and technical debt. AI can finally refactor at scale. The opportunity: modernize legacy systems that companies have been afraid to touch.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map the Legacy Code Landscape: What old technologies are still running critical systems? COBOL, Fortran, old Java. Where\'s the biggest pain?', xp: 45},
                {mode: 'ideas', task: 'Research AI-Assisted Refactoring: What tools exist? What can they do? Where do they fail? Create a capability assessment.', xp: 50},
                {mode: 'execution', task: 'Design a Legacy Assessment Framework: How do you evaluate a legacy codebase for AI-assisted modernization? Complexity, risk, value.', xp: 55},
                {mode: 'ideas', task: 'Study Failed Modernization Projects: Why do legacy rewrites fail? What goes wrong? Learn from history.', xp: 50},
                {mode: 'execution', task: 'Create a Modernization Playbook: Step-by-step process for AI-assisted legacy transformation. From assessment to deployment.', xp: 55},
                {mode: 'execution', task: 'Build a "Strangler Fig" Toolkit: Tools and templates for gradually replacing legacy systems without big-bang rewrites.', xp: 55},
                {mode: 'personality', task: 'Assess 3 Legacy Systems: Offer free assessments to companies stuck on old technology. Build case studies.', xp: 55},
                {mode: 'execution', task: 'Design Pricing for Modernization: Fixed price? Per-line? Risk-sharing? Create sustainable economics.', xp: 50},
                {mode: 'execution', task: 'Create a Legacy-to-Modern Test Suite: Ensure the new system behaves exactly like the old one. Verification methodology.', xp: 55},
                {mode: 'personality', task: 'Partner with a Systems Integrator: They have legacy clients. You have AI expertise. Build the relationship.', xp: 60},
                {mode: 'execution', task: 'Document a Successful Modernization: Complete case study with metrics, challenges, and outcomes.', xp: 55},
                {mode: 'ideas', task: 'Predict the COBOL Sunset: Write a 2030 headline about the last COBOL system being modernized. What finally made it possible?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 💼 80% OF JOBS TRANSFORM - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'jobs-transform-80',
    title: '80% of jobs disappear or transform radically',
    source: 'Metaculus forecasts, McKinsey, WEF Future of Jobs',
    sourceUrl: 'https://www.metaculus.com/questions/21427/employment-in-ai-automatable-jobs/',
    probability: 70,
    timeframe: '2030-2040',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'The nature of work changes faster than humans can retrain. Those who build transferable meta-skills and multiple income streams survive. Those who optimize for one job don\'t.',
    atRisk: 'Single-skill workers, mid-career professionals in automatable roles, anyone who hasn\'t updated skills in 5+ years, employees whose value is "reliable execution" vs "creative problem-solving"',
    opportunities: [
        {
            title: '🔄 Reskilling-as-a-Service Platforms',
            mode: 'execution',
            description: 'Continuous reskilling becomes mandatory, not optional. Platforms that provide ongoing skill loops — assess, learn, apply, repeat — replace one-time education.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map the Reskilling Gap: What skills are becoming obsolete? What\'s replacing them? Create a transition map for 10 common jobs.', xp: 50},
                {mode: 'ideas', task: 'Study Successful Reskilling Programs: What works? Corporate training, bootcamps, apprenticeships. What has the best outcomes?', xp: 45},
                {mode: 'execution', task: 'Design a Continuous Skill Assessment: A system that regularly evaluates skills and identifies gaps before they become critical.', xp: 55},
                {mode: 'ideas', task: 'Research the Psychology of Career Change: Why is reskilling hard emotionally? Identity, sunk costs, fear. Design for the psychology.', xp: 50},
                {mode: 'execution', task: 'Create a "Skill Decay" Alert System: Notifies workers when their skills are becoming less valuable. Early warning system.', xp: 50},
                {mode: 'execution', task: 'Design a Reskilling Pathway Generator: Input current skills, output pathways to adjacent high-value skills. Personalized transitions.', xp: 55},
                {mode: 'personality', task: 'Reskill 5 People for Free: Take mid-career professionals through your process. Document what works, what\'s hard.', xp: 55},
                {mode: 'execution', task: 'Build a "Skills Insurance" Product: Subscription that guarantees continuous employability through ongoing reskilling.', xp: 55},
                {mode: 'execution', task: 'Create Corporate Reskilling Programs: B2B offering for companies managing workforce transitions.', xp: 55},
                {mode: 'personality', task: 'Partner with a Company Doing Layoffs: Offer reskilling as an alternative to severance. Prove the model.', xp: 60},
                {mode: 'execution', task: 'Design Outcomes-Based Pricing: Only pay if the reskilling leads to new employment. Align incentives.', xp: 50},
                {mode: 'ideas', task: 'Predict the Reskilling Mandate: Write a 2032 headline about governments requiring continuous reskilling. What triggered the policy?', xp: 45}
            ]
        },
        {
            title: '👤 Human Differentiation Training',
            mode: 'personality',
            description: 'When AI does tasks, human value comes from judgment, leadership, creativity, and relationships. Training people in the skills AI can\'t replicate.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Define "Irreplaceable Human Skills": What can\'t AI do? Judgment under uncertainty, emotional intelligence, ethical reasoning, creative leaps. Create the definitive list.', xp: 50},
                {mode: 'ideas', task: 'Study How These Skills Develop: Judgment, leadership, creativity — how are they actually learned? Research the development pathways.', xp: 50},
                {mode: 'execution', task: 'Design a "Human Edge" Assessment: Measures someone\'s level of development in AI-proof skills. Benchmarking tool.', xp: 55},
                {mode: 'execution', task: 'Create Training for Each Skill: Judgment training, leadership development, creativity exercises. Curriculum for each human differentiator.', xp: 55},
                {mode: 'ideas', task: 'Research How Experts Develop Judgment: How do doctors, pilots, executives develop good judgment? Extract the training methods.', xp: 50},
                {mode: 'personality', task: 'Train 5 People in Human Differentiation: Pilot your curriculum. What\'s hard to teach? What clicks?', xp: 55},
                {mode: 'execution', task: 'Design Exercises That Can\'t Be AI\'d: Challenges that require genuine human skills — ethical dilemmas, ambiguous situations, relationship navigation.', xp: 50},
                {mode: 'execution', task: 'Create a "Human Premium" Certification: Verified proof that someone has developed the skills AI can\'t replicate.', xp: 55},
                {mode: 'personality', task: 'Partner with a Leadership Development Firm: They have clients. You have the AI-era framing. Collaborate.', xp: 55},
                {mode: 'execution', task: 'Build Corporate "Human Edge" Programs: Training for companies that want their workforce to stay valuable.', xp: 55},
                {mode: 'personality', task: 'Write "The Human Advantage": A book or manifesto on what humans do that AI can\'t. Become the authority.', xp: 50},
                {mode: 'ideas', task: 'Predict the "Human Premium" Job Market: Write a 2035 headline about jobs that specifically require verified human skills. What\'s the premium?', xp: 45}
            ]
        },
        {
            title: '💰 Portfolio Career Management',
            mode: 'execution',
            description: 'Single jobs become risky. Multiple income streams become mandatory. People need systems to manage 3-5 income sources, balance time, and optimize their career portfolio.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Portfolio Careers: Who already does this? Freelancers, creators, entrepreneurs with multiple ventures. What are their systems?', xp: 45},
                {mode: 'ideas', task: 'Map Income Stream Types: Employment, freelance, products, investments, royalties. What are the characteristics of each?', xp: 45},
                {mode: 'execution', task: 'Design a "Career Portfolio" Framework: How to think about diversifying income. Risk, correlation, time investment, growth potential.', xp: 55},
                {mode: 'execution', task: 'Create a Career Portfolio Assessment: Evaluates someone\'s current diversification and recommends improvements.', xp: 50},
                {mode: 'ideas', task: 'Research Time Management for Multi-Income: How do people successfully juggle multiple income streams? What systems work?', xp: 50},
                {mode: 'execution', task: 'Build a Portfolio Career Dashboard: Track income, time, and growth across multiple sources. The operating system for diversified work.', xp: 55},
                {mode: 'personality', task: 'Coach 5 People to Diversify Income: Help single-job workers add 1-2 income streams. Document the process.', xp: 55},
                {mode: 'execution', task: 'Design "Income Stream Starter Kits": Templates and guides for launching common additional income sources.', xp: 50},
                {mode: 'execution', task: 'Create a Community for Portfolio Workers: Peer support, resource sharing, accountability for multi-income professionals.', xp: 50},
                {mode: 'personality', task: 'Run a "Diversify Your Income" Workshop: Live session teaching the portfolio career approach. Scale the education.', xp: 55},
                {mode: 'execution', task: 'Build Corporate "Income Diversification" Programs: Help companies support employees in building resilient careers.', xp: 55},
                {mode: 'ideas', task: 'Predict the End of Single-Income Careers: Write a 2033 headline about portfolio careers becoming the norm. What killed single jobs?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🎬 CREATOR MIDDLE CLASS DISAPPEARS - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'creator-middle-class-dies',
    title: 'Creator middle class disappears (top 1% capture most)',
    source: 'Creator economy data, platform economics, power law distributions',
    probability: 85,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'AI floods the zone with infinite content. Algorithms reward the top of the power law. Being "pretty good" earns nothing. You either build a monopoly on attention or you lose.',
    atRisk: 'Mid-tier YouTubers, hobby creators hoping to go full-time, anyone whose strategy is "consistent content" without differentiation',
    opportunities: [
        {
            title: '🏘️ Community Monetization Platforms',
            mode: 'execution',
            description: 'When ad revenue concentrates at the top, the middle survives through community. Memberships, events, access, and belonging — not views — become the revenue model.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Successful Community Businesses: Patreon, Discord, Circle, Substack. What makes some communities monetize while others don\'t?', xp: 45},
                {mode: 'ideas', task: 'Map Community Revenue Streams: Memberships, events, courses, merchandise, services. What are all the ways communities make money?', xp: 45},
                {mode: 'execution', task: 'Design a "Community Business Model Canvas": Framework for planning a sustainable community-based business.', xp: 50},
                {mode: 'ideas', task: 'Research the Value of Belonging: Why do people pay for communities? Status, connection, identity, access. Understand the psychology.', xp: 50},
                {mode: 'execution', task: 'Create a Community Launch Playbook: Step-by-step guide to starting and monetizing a community from scratch.', xp: 55},
                {mode: 'execution', task: 'Design Community Engagement Systems: Rituals, events, and structures that keep communities active and paying.', xp: 50},
                {mode: 'personality', task: 'Help 3 Creators Launch Communities: Take creators from "audience" to "community." Document what works.', xp: 55},
                {mode: 'execution', task: 'Build Community Analytics: Metrics that predict community health and revenue. What should creators track?', xp: 50},
                {mode: 'execution', task: 'Create Event Templates for Creators: Virtual and IRL event formats that drive revenue and engagement.', xp: 50},
                {mode: 'personality', task: 'Write "The Community Business Manifesto": Why audience isn\'t enough. Make the case for community-first creator businesses.', xp: 50},
                {mode: 'execution', task: 'Design a "Community Revenue Accelerator": Program that helps creators hit $10K/month from community.', xp: 55},
                {mode: 'ideas', task: 'Predict the Platform Shift: Write a 2028 headline about creators abandoning ad-based platforms for community. What triggered the exodus?', xp: 45}
            ]
        },
        {
            title: '🎯 Niche Authority Development',
            mode: 'personality',
            description: 'Generalist creators lose. The winners own a niche so specifically that they\'re the undisputed authority. Coaching creators to find and dominate micro-niches.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Niche Authority Examples: Find 10 creators who dominate micro-niches. What do they have in common? How did they find their niche?', xp: 45},
                {mode: 'ideas', task: 'Map the Niche Selection Criteria: What makes a good niche? Passion, expertise, market size, competition, monetization potential. Create the framework.', xp: 50},
                {mode: 'execution', task: 'Design a Niche Discovery Process: Exercises that help creators find their unique intersection of expertise, interest, and market.', xp: 55},
                {mode: 'ideas', task: 'Research "1000 True Fans" Economics: How small can a niche be and still support a creator? Do the math.', xp: 45},
                {mode: 'execution', task: 'Create a "Niche Down" Workshop: Live or recorded program that takes creators through niche selection and positioning.', xp: 50},
                {mode: 'execution', task: 'Design Authority-Building Content Strategies: Content plans that establish niche dominance, not just visibility.', xp: 50},
                {mode: 'personality', task: 'Coach 5 Creators to Niche Down: Take generalist creators and help them specialize. Document the transformation.', xp: 55},
                {mode: 'execution', task: 'Build a Niche Research Toolkit: Tools and templates for evaluating niche opportunities.', xp: 45},
                {mode: 'execution', task: 'Create "From Generalist to Authority" Case Studies: Document creators who made the transition successfully.', xp: 50},
                {mode: 'personality', task: 'Partner with Creator Agencies: They manage talent that needs positioning. Offer niche consulting.', xp: 55},
                {mode: 'execution', task: 'Design a Niche Authority Certification: Verify that a creator has achieved dominance in their space.', xp: 50},
                {mode: 'ideas', task: 'Predict the Generalist Extinction: Write a 2029 headline about generalist creators completely failing. What changed?', xp: 45}
            ]
        },
        {
            title: '🤝 Creator Collectives & Shared Resources',
            mode: 'execution',
            description: 'Solo creators can\'t compete with studios. Collectives — shared distribution, resources, and bargaining power — become how middle-tier creators survive.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Existing Creator Collectives: Who\'s doing this well? What structures work? MCNs, collectives, co-ops. Analyze the models.', xp: 45},
                {mode: 'ideas', task: 'Map What Creators Can Share: Distribution, equipment, editing, sponsorship sales, legal, accounting. What\'s more efficient together?', xp: 50},
                {mode: 'execution', task: 'Design a Collective Operating Agreement: Legal and governance structure for creator collectives. Templates and frameworks.', xp: 55},
                {mode: 'ideas', task: 'Research Revenue Sharing Models: How do collectives split money fairly? Study examples from music, art, co-ops.', xp: 50},
                {mode: 'execution', task: 'Create a "Collective in a Box": Everything a group of creators needs to form a collective. Legal, operational, financial.', xp: 55},
                {mode: 'execution', task: 'Design Cross-Promotion Systems: How collective members help each other grow. Fair, effective, sustainable.', xp: 50},
                {mode: 'personality', task: 'Launch a Pilot Collective: Bring 5-10 creators together. Run the collective for 6 months. Document learnings.', xp: 60},
                {mode: 'execution', task: 'Build Shared Services for Collectives: Bookkeeping, legal, editing, sponsorship sales that collectives can share.', xp: 55},
                {mode: 'execution', task: 'Create Collective Health Metrics: How do you know if a collective is working? Define and track the KPIs.', xp: 45},
                {mode: 'personality', task: 'Connect Existing Collectives: Build a network of creator collectives. Shared learnings, bargaining power.', xp: 55},
                {mode: 'execution', task: 'Design Collective Sponsorship Packaging: How collectives can offer brands combined reach. Sales materials.', xp: 50},
                {mode: 'ideas', task: 'Predict the Creator Union: Write a 2030 headline about creators organizing. What triggered collective action?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 😔 LONELINESS EPIDEMIC - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'loneliness-epidemic',
    title: 'Loneliness epidemic intensifies',
    source: 'Surgeon General reports, social research, declining community data',
    probability: 90,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Loneliness is the new smoking. It\'s a health crisis, a productivity crisis, and a meaning crisis. Those who build real connection infrastructure — not apps — win.',
    atRisk: 'Remote workers, single adults, elderly without community, anyone whose social life depends on work or school structures',
    opportunities: [
        {
            title: '🏛️ IRL Community Builders',
            mode: 'personality',
            description: 'Online communities don\'t solve loneliness. Physical spaces, regular gatherings, and real relationships do. The opportunity: build the social infrastructure that institutions used to provide.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study What Communities Used to Provide: Churches, clubs, unions, neighborhoods. What social functions did they serve? List them all.', xp: 45},
                {mode: 'ideas', task: 'Research Successful Modern Communities: What IRL communities thrive today? CrossFit, running clubs, maker spaces. What makes them work?', xp: 50},
                {mode: 'execution', task: 'Design a Community Archetype: Detailed blueprint for a specific type of gathering. Purpose, format, frequency, economics.', xp: 55},
                {mode: 'ideas', task: 'Map the Lonely Demographics: Who\'s most lonely? Remote workers, new parents, retirees, transplants. Quantify the segments.', xp: 45},
                {mode: 'execution', task: 'Create a "Launch a Community" Playbook: Step-by-step guide to starting an IRL community from scratch.', xp: 55},
                {mode: 'personality', task: 'Host 10 Gatherings: Start a community. Run it for 3 months. Document what works, what\'s hard, what people actually want.', xp: 60},
                {mode: 'execution', task: 'Design Community Rituals: The specific practices that turn strangers into community. Opening rituals, naming ceremonies, traditions.', xp: 50},
                {mode: 'execution', task: 'Build Community Economics: How does an IRL community sustain itself financially? Membership, events, sponsorship. Create the model.', xp: 50},
                {mode: 'ideas', task: 'Research Third Places: Ray Oldenburg\'s concept. What makes a great third place? Apply to community design.', xp: 45},
                {mode: 'execution', task: 'Create a "Community Franchise" Model: Templates for others to launch the same community format in their city.', xp: 55},
                {mode: 'personality', task: 'Train 5 Community Leaders: Take people through your playbook. Help them launch communities. Build a network.', xp: 55},
                {mode: 'ideas', task: 'Predict the Community Revival: Write a 2032 headline about IRL communities replacing social media. What triggered the shift?', xp: 45}
            ]
        },
        {
            title: '💑 Relationship Coaching & Matchmaking',
            mode: 'personality',
            description: 'Dating apps create paradox of choice and infinite swiping. Real matchmaking — human judgment, curation, accountability — becomes the premium service.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Why Dating Apps Fail: Research the psychology. Paradox of choice, gamification, misaligned incentives. Understand the problem.', xp: 45},
                {mode: 'ideas', task: 'Research Traditional Matchmaking: How did matchmakers work historically? What made them effective? What translates to today?', xp: 45},
                {mode: 'execution', task: 'Design a Modern Matchmaking Service: Not an app. Human judgment, curated introductions, accountability. Create the service model.', xp: 55},
                {mode: 'ideas', task: 'Map Matchmaking Economics: What do people pay for matchmaking? What\'s the success rate? Is it a sustainable business?', xp: 50},
                {mode: 'execution', task: 'Create an Intake Process: How do you assess someone\'s relationship readiness, preferences, and patterns? Design the methodology.', xp: 50},
                {mode: 'execution', task: 'Design Pre-Date Coaching: Preparing people for success before introductions. Mindset, expectations, authenticity.', xp: 50},
                {mode: 'personality', task: 'Make 10 Introductions: Practice matchmaking with friends or clients. Track outcomes. Learn what predicts success.', xp: 55},
                {mode: 'execution', task: 'Build a Relationship Coaching Curriculum: For singles who aren\'t ready to be matched yet. Self-work first.', xp: 50},
                {mode: 'execution', task: 'Create Post-Match Support: What happens after the introduction? Debrief, coaching, course-correction.', xp: 45},
                {mode: 'personality', task: 'Partner with Therapists or Coaches: They have clients who want relationships. Build referral relationships.', xp: 55},
                {mode: 'execution', task: 'Design Group Events for Matchmaking: Curated gatherings where matches can meet organically. Event formats.', xp: 50},
                {mode: 'ideas', task: 'Predict the Dating App Decline: Write a 2030 headline about dating apps losing to human matchmaking. What changed?', xp: 45}
            ]
        },
        {
            title: '🧘 Loneliness Wellness & Prevention',
            mode: 'execution',
            description: 'Loneliness becomes a health metric like blood pressure. Screening, intervention, and ongoing support for social health. Healthcare meets social infrastructure.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Loneliness Health Impacts: What does loneliness do to the body? Inflammation, heart disease, dementia. Quantify the health crisis.', xp: 50},
                {mode: 'ideas', task: 'Study Loneliness Interventions: What actually reduces loneliness? Social skills training, befriending programs, community connection. What\'s evidence-based?', xp: 50},
                {mode: 'execution', task: 'Design a Loneliness Screening Tool: Assessment that identifies at-risk individuals before crisis. For employers, healthcare, or self-assessment.', xp: 55},
                {mode: 'execution', task: 'Create a "Social Health Plan": Like a fitness plan, but for connection. Weekly activities, accountability, progress tracking.', xp: 55},
                {mode: 'ideas', task: 'Research Corporate Loneliness Costs: What does employee loneliness cost companies? Absenteeism, turnover, health costs. Build the business case.', xp: 50},
                {mode: 'execution', task: 'Design a Corporate Social Wellness Program: Loneliness prevention for employees. Screening, interventions, community building.', xp: 55},
                {mode: 'personality', task: 'Pilot with 20 Individuals: Run people through your loneliness intervention. Measure outcomes. Iterate.', xp: 55},
                {mode: 'execution', task: 'Build a "Social Health Coach" Training: Train people to specialize in loneliness intervention. Certification program.', xp: 55},
                {mode: 'execution', task: 'Create Healthcare Integration: How does loneliness screening fit into regular healthcare? Design the clinical pathway.', xp: 55},
                {mode: 'personality', task: 'Partner with an Employer or Health System: Pilot your corporate program. Get data on outcomes.', xp: 60},
                {mode: 'execution', task: 'Design Peer Support Networks: Training lonely people to support each other. Scalable intervention.', xp: 50},
                {mode: 'ideas', task: 'Predict the Loneliness Prescription: Write a 2031 headline about doctors prescribing social connection. What made it medical?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 📄 RESUMES BECOME OBSOLETE - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'resumes-obsolete',
    title: 'Traditional resumes become obsolete',
    source: 'Skills-based hiring trends, AI screening failures, portfolio movement',
    probability: 72,
    timeframe: '2028-2032',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Resumes measure the past. AI can fake credentials. The only thing that matters is demonstrated ability. Those who can SHOW their work beat those who DESCRIBE it.',
    atRisk: 'Job seekers relying on credentials, resume writers, traditional recruiters, anyone whose career strategy is "build the perfect resume"',
    opportunities: [
        {
            title: '🎨 Personal Brand Studios',
            mode: 'personality',
            description: 'Your career is a brand. Your portfolio is the product. Studios that help professionals develop and distribute their personal brand become essential career infrastructure.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Successful Personal Brands: Find 10 professionals who got jobs/clients through personal brand. What did they build? How did it work?', xp: 45},
                {mode: 'ideas', task: 'Define Personal Brand Components: Portfolio, narrative, distribution channels, reputation signals. What makes a complete personal brand?', xp: 50},
                {mode: 'execution', task: 'Create a Personal Brand Assessment: Evaluates someone\'s current brand and identifies gaps. Diagnostic tool.', xp: 50},
                {mode: 'execution', task: 'Design a "Brand Sprint" Process: Condensed workshop that helps someone define their professional brand. Framework and exercises.', xp: 55},
                {mode: 'ideas', task: 'Research Distribution Channels by Industry: Where should a lawyer build brand vs an engineer vs a designer? Map the channels per profession.', xp: 50},
                {mode: 'execution', task: 'Create Portfolio Templates by Role: What should a product manager\'s portfolio look like vs a marketer\'s? Design the formats.', xp: 50},
                {mode: 'personality', task: 'Build 5 Personal Brands: Take professionals through your process. Document before/after. Show outcomes.', xp: 55},
                {mode: 'execution', task: 'Design Content Systems for Professionals: Sustainable ways to create and distribute brand-building content. Not influencer — professional.', xp: 50},
                {mode: 'execution', task: 'Create a "LinkedIn to Portfolio" Migration: Help professionals shift from resume-style LinkedIn to portfolio-style presence.', xp: 50},
                {mode: 'personality', task: 'Partner with Recruiters: They see failed resumes. You fix personal brands. Build referral relationships.', xp: 55},
                {mode: 'execution', task: 'Design Personal Brand Maintenance: Ongoing services to keep brands current. Retainer model.', xp: 50},
                {mode: 'ideas', task: 'Predict the Resume\'s Death: Write a 2030 headline about companies banning resumes. What replaced them?', xp: 45}
            ]
        },
        {
            title: '🧪 Simulation-Based Hiring Platforms',
            mode: 'execution',
            description: 'Don\'t tell me what you can do — show me. Platforms that let candidates demonstrate skills through realistic simulations replace resume screening.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Work Sample Tests: What companies use work samples in hiring? What\'s the evidence on predictive validity vs resumes?', xp: 50},
                {mode: 'ideas', task: 'Map Skills by Simulation-Ability: Which skills can be assessed through simulation? Which require other methods? Create a framework.', xp: 50},
                {mode: 'execution', task: 'Design a Simulation for One Role: Pick a job. Create a realistic work simulation that predicts performance. Full specification.', xp: 55},
                {mode: 'ideas', task: 'Study Anti-Cheating Measures: If hiring is simulation-based, how do you prevent fraud? Research verification methods.', xp: 50},
                {mode: 'execution', task: 'Create a Simulation Design Methodology: Process for creating valid, fair, predictive work simulations. Reusable framework.', xp: 55},
                {mode: 'execution', task: 'Build a Scoring Rubric System: How do you objectively evaluate simulation performance? Design the assessment framework.', xp: 50},
                {mode: 'personality', task: 'Test with 5 Hiring Managers: Have them evaluate candidates through your simulation vs traditional methods. Compare outcomes.', xp: 55},
                {mode: 'execution', task: 'Design the Candidate Experience: How does it feel to do a hiring simulation? Make it respectful of time, clear, and useful even if rejected.', xp: 50},
                {mode: 'execution', task: 'Create a Simulation Library: Pre-built simulations for common roles. Product manager, engineer, marketer, sales.', xp: 55},
                {mode: 'personality', task: 'Partner with a Company to Replace Resume Screening: Pilot simulation-first hiring. Measure time-to-hire, quality, candidate experience.', xp: 60},
                {mode: 'execution', task: 'Build Skills Verification Credentials: After passing a simulation, candidates get a verifiable credential. Portable proof.', xp: 55},
                {mode: 'ideas', task: 'Predict the Simulation Standard: Write a 2031 headline about simulation-based hiring becoming required. What made it standard?', xp: 45}
            ]
        },
        {
            title: '📊 Skills Verification Marketplaces',
            mode: 'execution',
            description: 'A marketplace where skills are verified, rated, and searchable. Employers search for proven capabilities, not credentials. LinkedIn rebuilt for the skills economy.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Analyze LinkedIn\'s Failures: Why doesn\'t LinkedIn effectively verify skills? What are the structural problems? Design around them.', xp: 45},
                {mode: 'ideas', task: 'Research Existing Skills Platforms: Upwork, Toptal, Braintrust. How do they verify skills? What works? What doesn\'t?', xp: 50},
                {mode: 'execution', task: 'Design a Skills Taxonomy: Comprehensive, consistent way to describe professional skills. The data model for the marketplace.', xp: 55},
                {mode: 'execution', task: 'Create Multiple Verification Methods: Assessments, peer review, work samples, credentials. Different methods for different skills.', xp: 55},
                {mode: 'ideas', task: 'Research Reputation Systems: How do eBay, Airbnb, and Stack Overflow build trust? Apply to professional reputation.', xp: 50},
                {mode: 'execution', task: 'Design the Employer Search Experience: How do employers find candidates by verified skill? Search, filter, comparison. Create the UX.', xp: 50},
                {mode: 'execution', task: 'Build a Skill Endorsement System: Meaningful endorsements that carry weight. Not LinkedIn\'s worthless clicks.', xp: 50},
                {mode: 'personality', task: 'Onboard 50 Professionals: Verify their skills through your system. Build the initial marketplace supply.', xp: 55},
                {mode: 'execution', task: 'Create a Skills API: Let other platforms use verified skills data. Become the infrastructure layer.', xp: 55},
                {mode: 'personality', task: 'Convince 5 Employers to Hire Through Skills: Not resumes. Measure satisfaction, time-to-hire, quality.', xp: 60},
                {mode: 'execution', task: 'Design Skills-Based Salary Data: What should verified skills command? Build the compensation benchmark.', xp: 50},
                {mode: 'ideas', task: 'Predict LinkedIn\'s Response: Write a 2029 headline about LinkedIn pivoting to skills verification. What forced the change?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🎤 PERFECT VOICE CLONING - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'voice-cloning-trivial',
    title: 'Perfect voice cloning becomes trivially easy',
    source: 'ElevenLabs, Resemble AI, open source voice models',
    probability: 95,
    timeframe: 'Already happening',
    category: 'ai',
    threatMode: 'personality',
    threatReason: 'Your voice is no longer proof of identity. Trust in audio collapses. Those who build verification systems and new trust infrastructure win.',
    atRisk: 'Call centers relying on voice verification, families without safe words, anyone who trusts phone calls, audio-based authentication systems',
    opportunities: [
        {
            title: '🔐 Voice Authentication & Verification',
            mode: 'execution',
            description: 'Voice is no longer proof of identity. New verification systems — challenge-response, liveness detection, multi-factor — become essential infrastructure.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Voice Fraud Vectors: How can cloned voices be used maliciously? Family scams, corporate fraud, authentication bypass. Create a threat taxonomy.', xp: 50},
                {mode: 'ideas', task: 'Research Current Voice Auth: How do banks and call centers verify identity by voice? What breaks with perfect cloning?', xp: 45},
                {mode: 'execution', task: 'Design a Challenge-Response Protocol: Questions or tasks that cloned voices can\'t answer. Real-time verification methods.', xp: 55},
                {mode: 'ideas', task: 'Study Liveness Detection: What distinguishes live speech from recordings or synthesis? Breathing, hesitation, ambient noise.', xp: 50},
                {mode: 'execution', task: 'Create a Family Safety Protocol: Simple system families can use to verify calls are real. Safe words, callback procedures.', xp: 45},
                {mode: 'execution', task: 'Design Enterprise Voice Security: Protocol for businesses to verify voice communications. Training, procedures, technology.', xp: 55},
                {mode: 'personality', task: 'Test with 10 Families: Implement your safety protocol. Does it work? Is it usable? Iterate.', xp: 55},
                {mode: 'execution', task: 'Build a "Voice Verification" Checklist: Simple steps anyone can take to verify a voice call is legitimate.', xp: 45},
                {mode: 'execution', task: 'Create Corporate Training on Voice Fraud: Curriculum for employees on recognizing and preventing voice clone attacks.', xp: 50},
                {mode: 'personality', task: 'Partner with a Bank or Call Center: Help them redesign voice verification. Pilot new protocols.', xp: 60},
                {mode: 'execution', task: 'Design a Voice Provenance System: Way to cryptographically sign and verify authentic voice recordings.', xp: 55},
                {mode: 'ideas', task: 'Predict the First Major Voice Clone Fraud: Write a 2027 headline about a massive voice cloning scam. What was stolen? What changed?', xp: 50}
            ]
        },
        {
            title: '🔍 Deepfake Detection for Calls',
            mode: 'execution',
            description: 'Real-time detection of synthetic voices during phone calls. Protect banks, families, and enterprises from voice clone fraud.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Deepfake Detection Tech: What methods detect synthetic audio? Spectral analysis, artifact detection, ML classifiers. Survey the field.', xp: 50},
                {mode: 'ideas', task: 'Study Detection Arms Race: How do detection methods evolve as synthesis improves? What\'s the long-term trajectory?', xp: 50},
                {mode: 'execution', task: 'Design Detection UX: How do you alert someone mid-call that the voice may be fake? Without causing panic. Create the interface.', xp: 50},
                {mode: 'execution', task: 'Build a Detection Prototype: Simple tool that analyzes audio for synthetic markers. Even if imperfect, start somewhere.', xp: 55},
                {mode: 'ideas', task: 'Map the Customer Segments: Who needs this most? Banks, elderly, executives, high-net-worth. Prioritize by urgency.', xp: 45},
                {mode: 'execution', task: 'Create a Consumer Protection App: Phone app that monitors calls for deepfake indicators. MVP feature set.', xp: 55},
                {mode: 'execution', task: 'Design Enterprise Integration: How does detection plug into call center software? API specifications.', xp: 55},
                {mode: 'personality', task: 'Test with Real Synthetic Voices: Generate cloned voices and test your detection. Measure accuracy.', xp: 55},
                {mode: 'execution', task: 'Build an Alert and Response Protocol: When deepfake is detected, then what? Design the workflow.', xp: 50},
                {mode: 'personality', task: 'Partner with a Telecom or Bank: Pilot your detection system. Get real-world data.', xp: 60},
                {mode: 'execution', task: 'Create Detection Accuracy Benchmarks: How do you measure and communicate detection reliability?', xp: 50},
                {mode: 'ideas', task: 'Predict Detection Becoming Standard: Write a 2029 headline about deepfake detection being required on all calls. What regulation passed?', xp: 45}
            ]
        },
        {
            title: '👨‍👩‍👧 Family Safety Protocols & Training',
            mode: 'personality',
            description: 'Families need playbooks for the voice clone era. Safe words, verification procedures, and training to protect against impersonation scams.',
            difficulty: 'easy',
            timeframe: '1-3 months',
            quests: [
                {mode: 'ideas', task: 'Research Family Voice Scams: Document real cases of voice cloning used against families. What happened? How did it work?', xp: 40},
                {mode: 'execution', task: 'Create a Family Safe Word System: Protocol for establishing and using verification phrases. Simple enough for grandparents.', xp: 45},
                {mode: 'execution', task: 'Design a Family Security Workshop: 30-minute training any family can do together. Materials, exercises, protocols.', xp: 50},
                {mode: 'ideas', task: 'Identify Most Vulnerable Family Members: Who gets targeted? Elderly, children, caregivers. Tailor protection strategies.', xp: 45},
                {mode: 'execution', task: 'Build a "Voice Clone Drill": Practice exercise where families test their verification protocols.', xp: 45},
                {mode: 'personality', task: 'Run 5 Family Workshops: Deliver your training. Learn what resonates, what confuses, what sticks.', xp: 55},
                {mode: 'execution', task: 'Create Shareable Safety Guides: One-pagers families can print and reference. Fridge-worthy.', xp: 40},
                {mode: 'execution', task: 'Design Emergency Response Steps: If someone thinks they\'ve been scammed, what do they do? Create the playbook.', xp: 45},
                {mode: 'personality', task: 'Partner with Senior Centers: Elderly are most vulnerable. Offer free training to senior communities.', xp: 50},
                {mode: 'execution', task: 'Build a Family Security Assessment: Questionnaire that identifies a family\'s vulnerability and recommends steps.', xp: 45},
                {mode: 'personality', task: 'Create Viral Safety Content: TikTok, YouTube explaining voice clone risks. Reach millions of families.', xp: 50},
                {mode: 'ideas', task: 'Predict Family Safety Becoming Curriculum: Write a 2028 headline about schools teaching voice clone safety. What incident triggered it?', xp: 40}
            ]
        }
    ]
},

// ============================================================================
// 🌍 REAL-TIME PERFECT TRANSLATION - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'perfect-translation',
    title: 'Real-time perfect language translation eliminates barriers',
    source: 'Meta SeamlessM4T, Google Translate trajectory, AI audio models',
    probability: 80,
    timeframe: '2026-2028',
    category: 'ai',
    threatMode: 'ideas',
    threatReason: 'Language stops being a moat. Anyone can sell anywhere, hire anyone, access any market. The winners understand that culture — not language — becomes the real barrier.',
    atRisk: 'Translators, language teachers, companies whose moat was local-language expertise, anyone who thinks knowing English is a competitive advantage',
    opportunities: [
        {
            title: '🎭 Cultural Nuance Consulting',
            mode: 'personality',
            description: 'Translation becomes free. Cultural understanding doesn\'t. The consultant who helps navigate humor, taboos, business customs, and local aesthetics wins.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map What Translation Misses: Humor, sarcasm, status signals, taboos, religious sensitivities. What doesn\'t translate even with perfect words?', xp: 50},
                {mode: 'ideas', task: 'Research Cultural Business Failures: Companies that failed in new markets due to cultural misunderstanding. What went wrong?', xp: 45},
                {mode: 'execution', task: 'Create a Cultural Due Diligence Framework: Checklist for entering a new cultural market. Beyond language to meaning.', xp: 55},
                {mode: 'ideas', task: 'Study How Culture Varies: Hofstede dimensions, Meyer\'s Culture Map. What are the key variables that differ across cultures?', xp: 50},
                {mode: 'execution', task: 'Design Cultural Adaptation Guides: For specific markets — Japan, Brazil, Germany, India. What do outsiders get wrong?', xp: 55},
                {mode: 'personality', task: 'Interview 10 People from Different Cultures: What do foreigners misunderstand about their culture? Collect the insights.', xp: 55},
                {mode: 'execution', task: 'Build a "Cultural Red Flags" Detector: Common mistakes companies make when entering new cultures. Warning system.', xp: 50},
                {mode: 'execution', task: 'Create Cultural Training for Remote Teams: Global teams need cultural fluency. Design the curriculum.', xp: 50},
                {mode: 'personality', task: 'Consult for 3 Companies Expanding Internationally: Help them navigate cultural challenges. Build case studies.', xp: 55},
                {mode: 'execution', task: 'Design Pricing for Cultural Consulting: Retainer, project-based, training? Create sustainable business model.', xp: 45},
                {mode: 'personality', task: 'Write "Beyond Translation": Thought leadership on cultural intelligence in the AI era. Become the authority.', xp: 50},
                {mode: 'ideas', task: 'Predict Cultural Intelligence as Job Requirement: Write a 2030 headline about cultural fluency becoming mandatory for global roles.', xp: 45}
            ]
        },
        {
            title: '🌐 Global Sales & Customer Success',
            mode: 'execution',
            description: 'One salesperson can now sell to the entire world. Companies need global sales operations — one person covering 20 markets instead of 20 people.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map the Global Sales Stack: What tools enable one person to sell globally? Translation, scheduling, payment, compliance. Create the toolkit.', xp: 45},
                {mode: 'ideas', task: 'Research Global Sales Leaders: Who\'s already doing this well? What\'s their process? Interview or study 5 examples.', xp: 50},
                {mode: 'execution', task: 'Design a Global Sales Playbook: How to run sales across time zones, languages, and cultures. The methodology.', xp: 55},
                {mode: 'execution', task: 'Create Market Prioritization Framework: Which global markets to enter first? Demand, competition, payment infrastructure.', xp: 50},
                {mode: 'ideas', task: 'Study Cross-Border Payment Solutions: Stripe Atlas, Wise, local payment methods. What enables global revenue collection?', xp: 45},
                {mode: 'execution', task: 'Build Global Sales Templates: Outreach, proposals, contracts that work across cultures. Modular and adaptable.', xp: 50},
                {mode: 'personality', task: 'Close 5 Deals in Non-English Markets: Use translation tools. Document what works, what breaks.', xp: 60},
                {mode: 'execution', task: 'Design Follow-the-Sun Customer Success: One team covering global customers 24/7 through handoffs. Create the ops model.', xp: 55},
                {mode: 'execution', task: 'Create Global Sales Training: Teach salespeople to sell across languages and cultures effectively.', xp: 50},
                {mode: 'personality', task: 'Partner with a SaaS Company Going Global: Help them build global sales ops. Prove the model.', xp: 55},
                {mode: 'execution', task: 'Build a Global Sales Dashboard: Track performance across markets, languages, regions.', xp: 50},
                {mode: 'ideas', task: 'Predict the End of Regional Sales Teams: Write a 2029 headline about global sales consolidation. What enabled it?', xp: 45}
            ]
        },
        {
            title: '✈️ Translation-Driven Travel Experiences',
            mode: 'execution',
            description: 'Travel anywhere without language barriers. New travel experiences emerge for people who can now visit any country and communicate freely.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Map Travel Language Friction: Where does language barrier hurt travel most? Navigation, restaurants, emergencies, local experiences. List the pain points.', xp: 40},
                {mode: 'ideas', task: 'Research Translation Travel Tech: What devices and apps exist? AirPods, dedicated devices, phone apps. Test and compare.', xp: 45},
                {mode: 'execution', task: 'Design a "Language-Free Travel" Guide: How to set up your tech stack for seamless international travel. Step-by-step.', xp: 45},
                {mode: 'execution', task: 'Create Destination Guides for Non-Speakers: "Visit Japan Without Japanese" — local tips, tech setup, cultural basics.', xp: 50},
                {mode: 'ideas', task: 'Identify New Travel Markets: What destinations were avoided due to language? Where does perfect translation unlock demand?', xp: 45},
                {mode: 'execution', task: 'Design Deep Local Experiences: Tours and experiences that were impossible without local language. Now accessible.', xp: 50},
                {mode: 'personality', task: 'Take a Trip Using Only Translation: Visit a country where you don\'t speak the language. Document the experience.', xp: 55},
                {mode: 'execution', task: 'Build a Translation Travel Checklist: Everything travelers need to prepare for language-barrier-free travel.', xp: 40},
                {mode: 'execution', task: 'Create "Local Connection" Experiences: Pair travelers with locals for authentic experiences, translation-enabled.', xp: 50},
                {mode: 'personality', task: 'Partner with a Travel Agency: Help them offer language-barrier-free packages. New market opportunity.', xp: 55},
                {mode: 'execution', task: 'Design Emergency Protocols: What happens when translation fails in a crisis? Backup systems for travelers.', xp: 45},
                {mode: 'ideas', task: 'Predict the Tourism Explosion: Write a 2028 headline about translation transforming global tourism. Which destinations boomed?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🎵 AI MUSIC INDISTINGUISHABLE FROM HUMAN - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'ai-music-indistinguishable',
    title: 'AI generates music indistinguishable from human artists',
    source: 'Suno, Udio, MusicLM trajectories',
    probability: 88,
    timeframe: '2026-2027',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'When anyone can generate a hit song, the music itself becomes worthless. The value shifts to artist identity, story, live performance, and human connection.',
    atRisk: 'Session musicians, jingle writers, stock music creators, artists without strong personal brands, anyone whose value is "making sounds"',
    opportunities: [
        {
            title: '🎤 Artist Brand & Story Studios',
            mode: 'personality',
            description: 'The music is free. The artist is the product. Studios that build compelling artist identities, stories, and brands become essential.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Artists with Strong Brands: Taylor Swift, Beyoncé, Tyler the Creator. What makes their brand work? It\'s not just the music.', xp: 50},
                {mode: 'ideas', task: 'Analyze Brand Components: Origin story, visual identity, values, fan relationship, narrative arc. What makes an artist brand?', xp: 50},
                {mode: 'execution', task: 'Create an Artist Brand Framework: Methodology for developing a compelling artist identity. The brand-building process.', xp: 55},
                {mode: 'ideas', task: 'Research Fan Psychology: Why do fans connect with artists? Parasocial relationships, identity, belonging. Understand the psychology.', xp: 50},
                {mode: 'execution', task: 'Design a "Brand Audit" for Artists: Assessment that identifies gaps in an artist\'s brand and positioning.', xp: 50},
                {mode: 'execution', task: 'Build Storytelling Templates: Frameworks for artist origin stories, comeback narratives, evolution arcs.', xp: 50},
                {mode: 'personality', task: 'Brand 3 Emerging Artists: Apply your framework. Help them develop distinctive identities.', xp: 55},
                {mode: 'execution', task: 'Create Visual Identity Systems: Templates and processes for artist visual branding — covers, social, merch.', xp: 50},
                {mode: 'execution', task: 'Design Fan Relationship Strategies: How artists build and maintain genuine fan connections at scale.', xp: 50},
                {mode: 'personality', task: 'Partner with a Label or Manager: They need brand development. Offer your services.', xp: 55},
                {mode: 'execution', task: 'Create "Human Artist" Certification: A badge that verifies the human behind the art. Authenticity premium.', xp: 50},
                {mode: 'ideas', task: 'Predict the First AI Artist Scandal: Write a 2028 headline about a beloved "artist" revealed as AI. What happened to fans?', xp: 45}
            ]
        },
        {
            title: '🎪 Live Experience & Performance',
            mode: 'execution',
            description: 'AI can\'t play a live show. The live experience becomes the primary revenue and connection point. Building the infrastructure for premium live music.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Live Music Economics: How do artists make money from live shows? Tickets, merch, VIP, sponsorship. Understand the model.', xp: 45},
                {mode: 'ideas', task: 'Study Premium Live Experiences: What makes a concert unforgettable? Beyond the music — production, intimacy, exclusivity.', xp: 50},
                {mode: 'execution', task: 'Design "Intimate Experience" Formats: Small-venue, high-touch live experiences. 50-person concerts, house shows, private performances.', xp: 55},
                {mode: 'execution', task: 'Create Live Show Templates: Production elements, fan interactions, setlist structures that maximize connection.', xp: 50},
                {mode: 'ideas', task: 'Map the Venue Landscape: What venues exist for intimate shows? Homes, galleries, warehouses, private clubs. Create a database.', xp: 45},
                {mode: 'execution', task: 'Design VIP Experience Tiers: Meet and greets, soundchecks, dinners with artists. Premium live add-ons.', xp: 50},
                {mode: 'execution', task: 'Build a House Concert Network: Platform connecting artists with hosts for private shows. The Airbnb of concerts.', xp: 55},
                {mode: 'personality', task: 'Produce 5 Live Experiences: Book and run intimate shows. Test formats, pricing, artist fit.', xp: 55},
                {mode: 'execution', task: 'Create Live-Stream Hybrid Events: Combine in-person intimacy with global reach. The best of both.', xp: 50},
                {mode: 'personality', task: 'Partner with 10 Artists: Build a roster of artists who want to do premium live experiences.', xp: 55},
                {mode: 'execution', task: 'Design Subscription Live Experiences: Monthly intimate shows for paying members. Recurring revenue model.', xp: 55},
                {mode: 'ideas', task: 'Predict Live Music Premium: Write a 2030 headline about live concert tickets costing 10x recorded music. Why did this happen?', xp: 45}
            ]
        },
        {
            title: '🎧 Personalized Soundtrack Platforms',
            mode: 'execution',
            description: 'AI generates personalized music for every moment — workout, focus, sleep, mood. Infinite soundtrack for your life.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Functional Music Use Cases: When do people use music functionally? Focus, sleep, workout, meditation, productivity. List all contexts.', xp: 45},
                {mode: 'ideas', task: 'Research Music-Brain Science: How does music affect focus, relaxation, energy? What parameters matter? BPM, key, instrumentation.', xp: 50},
                {mode: 'execution', task: 'Design a "Mood Engine": System that generates appropriate music based on user state and activity. Specification.', xp: 55},
                {mode: 'execution', task: 'Create Context-Aware Triggers: Music that adapts to calendar, location, time of day, heart rate. The intelligence layer.', xp: 55},
                {mode: 'ideas', task: 'Study Existing Functional Music: Brain.fm, Endel, Focus@Will. What do they do well? What\'s missing?', xp: 45},
                {mode: 'execution', task: 'Build a Personalization Model: How music adapts to individual preferences over time. Learning system design.', xp: 55},
                {mode: 'execution', task: 'Design the User Experience: How do users interact with infinite personalized music? Not playlists. Something new.', xp: 50},
                {mode: 'personality', task: 'Test with 20 Users: Give them AI-generated personalized soundtracks. Measure satisfaction, effectiveness.', xp: 55},
                {mode: 'execution', task: 'Create B2B Applications: Personalized music for gyms, offices, spas, retail. The commercial opportunity.', xp: 50},
                {mode: 'execution', task: 'Build Integration APIs: Let other apps use personalized soundtrack generation. Platform play.', xp: 55},
                {mode: 'execution', task: 'Design Ethical Guidelines: What are the risks of music-based mood manipulation? Create responsible use principles.', xp: 50},
                {mode: 'ideas', task: 'Predict the Personal Soundtrack Era: Write a 2029 headline about everyone having AI-generated life soundtracks. What changed?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// ⚖️ AI HANDLES 80% OF LEGAL WORK - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'ai-legal-80-percent',
    title: 'AI handles 80% of routine legal work',
    source: 'Harvey AI, CoCounsel adoption, legal tech investment',
    probability: 70,
    timeframe: '2030-2035',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Routine legal work becomes automated — contracts, research, compliance, discovery. Human lawyers become strategists and relationship managers, not document processors.',
    atRisk: 'Junior associates, paralegals, document review attorneys, legal researchers, solo practitioners competing on price',
    opportunities: [
        {
            title: '🤝 Legal Strategy & Negotiation Boutiques',
            mode: 'personality',
            description: 'AI does the research. Humans do the judgment. Boutique firms focused on high-stakes strategy, negotiation, and courtroom presence.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Legal Work by Automation Potential: What legal tasks can AI do? What requires human judgment? Create the hierarchy.', xp: 50},
                {mode: 'ideas', task: 'Research High-Value Legal Moments: When does human legal skill matter most? Negotiation, trial, deal-making, crisis. Identify the leverage points.', xp: 50},
                {mode: 'execution', task: 'Design a "Strategy-Only" Law Firm Model: No document work, no research. Pure strategy and presence. What does the firm look like?', xp: 55},
                {mode: 'ideas', task: 'Study Elite Negotiators: What makes great legal negotiators effective? Beyond knowledge to psychology and presence.', xp: 50},
                {mode: 'execution', task: 'Create a Legal Strategy Framework: Methodology for approaching high-stakes legal situations. The strategic playbook.', xp: 55},
                {mode: 'execution', task: 'Design "AI-Augmented Strategy" Workflow: How strategists use AI research to inform human judgment. The integration.', xp: 50},
                {mode: 'personality', task: 'Interview 5 Elite Litigators: What do they do that can\'t be automated? Extract the human value.', xp: 55},
                {mode: 'execution', task: 'Build a Client Communication System: High-touch client relationships for strategic matters. The service model.', xp: 50},
                {mode: 'execution', task: 'Create Pricing for Strategic Services: Value-based pricing for high-stakes legal strategy. Not hourly.', xp: 50},
                {mode: 'personality', task: 'Partner with AI Legal Tools: They handle automation. You handle strategy. Build the partnership.', xp: 55},
                {mode: 'execution', task: 'Design a "Human Counsel" Premium: Certification that strategic advice comes from experienced humans.', xp: 50},
                {mode: 'ideas', task: 'Predict the Associate Extinction: Write a 2032 headline about law firms eliminating junior associates. What replaced the training pipeline?', xp: 45}
            ]
        },
        {
            title: '🏢 Legal Ops Automation Firms',
            mode: 'execution',
            description: 'Help law firms and legal departments implement AI automation. The system integrators of legal tech transformation.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map the Legal Tech Stack: What AI legal tools exist? Harvey, CoCounsel, Kira, Luminance. Create the landscape map.', xp: 50},
                {mode: 'ideas', task: 'Research Legal Department Pain Points: Where does legal spend the most time on low-value work? Contracts, compliance, discovery.', xp: 50},
                {mode: 'execution', task: 'Design a Legal Automation Assessment: Framework for evaluating a legal team\'s automation opportunities. The diagnostic.', xp: 55},
                {mode: 'execution', task: 'Create Implementation Playbooks: Step-by-step guides for implementing common legal AI tools.', xp: 55},
                {mode: 'ideas', task: 'Study Change Management in Legal: Lawyers are conservative. How do you drive adoption? Research what works.', xp: 50},
                {mode: 'execution', task: 'Build ROI Calculators: Tools that quantify the value of legal automation. Make the business case.', xp: 50},
                {mode: 'personality', task: 'Implement 3 Legal Automation Projects: Work with law firms or legal teams. Build case studies.', xp: 60},
                {mode: 'execution', task: 'Design Legal AI Training Programs: Teach lawyers to work with AI tools effectively. Curriculum.', xp: 50},
                {mode: 'execution', task: 'Create Integration Architectures: How legal AI tools connect with existing systems. Technical specs.', xp: 55},
                {mode: 'personality', task: 'Partner with Legal AI Vendors: They build tools. You implement them. Build the channel.', xp: 55},
                {mode: 'execution', task: 'Design Ongoing Optimization Services: Retainer for continuously improving legal automation.', xp: 50},
                {mode: 'ideas', task: 'Predict the Legal Tech Consolidation: Write a 2030 headline about legal tech winners. Who survived?', xp: 45}
            ]
        },
        {
            title: '📋 Self-Serve Legal for SMBs',
            mode: 'execution',
            description: 'Small businesses can\'t afford lawyers but need legal help. AI-powered self-serve legal products for contracts, compliance, and common issues.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map SMB Legal Needs: What legal issues do small businesses face? Contracts, employment, IP, compliance. Prioritize by frequency and pain.', xp: 45},
                {mode: 'ideas', task: 'Research Existing Self-Serve Legal: LegalZoom, Rocket Lawyer, Clerky. What works? What\'s missing? Find the gaps.', xp: 45},
                {mode: 'execution', task: 'Design a Contract Generation System: AI that creates customized contracts from simple inputs. Spec the product.', xp: 55},
                {mode: 'execution', task: 'Create "Legal Health Check" for SMBs: Assessment that identifies legal risks and gaps. Lead generation tool.', xp: 50},
                {mode: 'ideas', task: 'Study SMB Legal Buying Behavior: How do small businesses currently get legal help? What do they avoid? Why?', xp: 45},
                {mode: 'execution', task: 'Build Plain-English Legal Explanations: Translate legal concepts for non-lawyers. The content library.', xp: 45},
                {mode: 'execution', task: 'Design a Compliance Monitoring System: Automated tracking of regulatory requirements for SMBs. By industry.', xp: 55},
                {mode: 'personality', task: 'Test with 10 Small Businesses: Give them your self-serve tools. What\'s useful? What\'s confusing?', xp: 55},
                {mode: 'execution', task: 'Create Industry-Specific Packages: Legal templates for restaurants, agencies, e-commerce. Vertical focus.', xp: 50},
                {mode: 'execution', task: 'Design Escalation to Human Lawyers: When self-serve isn\'t enough, connect to attorneys. The hybrid model.', xp: 50},
                {mode: 'personality', task: 'Partner with Accountants or Bookkeepers: They serve SMBs who need legal. Build referral relationships.', xp: 55},
                {mode: 'ideas', task: 'Predict SMB Legal Transformation: Write a 2029 headline about small businesses handling legal without lawyers. What enabled it?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🎉 EXPERIENCE ECONOMY GROWS - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'experience-economy-grows',
    title: 'Experience economy continues explosive growth',
    source: 'Consumer spending data, post-COVID trends, millennial/Gen-Z preferences',
    probability: 92,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'People want memories, not things. Those who can create transformative experiences win. Those selling commodities lose.',
    atRisk: 'Retailers focused on products, service businesses without experiential elements, anyone competing on price alone',
    opportunities: [
        {
            title: '🎨 Experience Design Studios',
            mode: 'ideas',
            description: 'Designing memorable experiences for brands, venues, and events. The architects of transformation.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Peak Experience Psychology: What makes experiences memorable? Peak-end rule, surprise, emotion, social sharing. Understand the science.', xp: 50},
                {mode: 'ideas', task: 'Analyze Great Experiences: Disney, Meow Wolf, Sleep No More, Secret Cinema. What makes them work? Deconstruct the elements.', xp: 50},
                {mode: 'execution', task: 'Create an Experience Design Framework: Methodology for designing memorable experiences. The creative process.', xp: 55},
                {mode: 'ideas', task: 'Map Experience Types: Entertainment, learning, transformation, escape, connection. Categorize the landscape.', xp: 45},
                {mode: 'execution', task: 'Design a "Memory Moment" Toolkit: Templates for creating peak moments within experiences. The building blocks.', xp: 50},
                {mode: 'execution', task: 'Build an Experience Brief Template: How to capture client needs for experience design. The discovery process.', xp: 45},
                {mode: 'personality', task: 'Design 3 Experiences: For brands, venues, or events. Create and document the designs.', xp: 55},
                {mode: 'execution', task: 'Create Experience Measurement: How do you know an experience worked? Metrics beyond attendance.', xp: 50},
                {mode: 'execution', task: 'Design Scalable Experience Formats: Experiences that can be replicated across locations. Franchisable.', xp: 55},
                {mode: 'personality', task: 'Partner with Event Agencies: They need experience design capability. Offer your services.', xp: 55},
                {mode: 'execution', task: 'Build a Portfolio of Experience Designs: Case studies showing your approach and results.', xp: 50},
                {mode: 'ideas', task: 'Predict the Experience Requirement: Write a 2030 headline about experiences becoming mandatory for brands. What made it essential?', xp: 45}
            ]
        },
        {
            title: '🏕️ Micro-Retreats & Local Adventures',
            mode: 'execution',
            description: 'People want transformation but lack time and money for big trips. Micro-retreats — 2-hour to 2-day local experiences — fill the gap.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Research Micro-Retreat Demand: Who wants short transformative experiences? What are they looking for? Survey or interview 20 people.', xp: 45},
                {mode: 'ideas', task: 'Map Local Experience Opportunities: What transformative experiences could happen within 1 hour of your city? Underutilized spaces, activities.', xp: 45},
                {mode: 'execution', task: 'Design 5 Micro-Retreat Formats: 2-hour, half-day, full-day, overnight. Different themes and transformations.', xp: 55},
                {mode: 'execution', task: 'Create Venue Partnership Templates: Agreements with spaces that can host micro-retreats. Farms, studios, nature areas.', xp: 45},
                {mode: 'ideas', task: 'Study Successful Micro-Experiences: What local experiences already work? Escape rooms, cooking classes, sound baths. What makes them succeed?', xp: 45},
                {mode: 'execution', task: 'Build a Facilitator Training: How to lead transformative micro-experiences. The guide curriculum.', xp: 50},
                {mode: 'personality', task: 'Run 10 Micro-Retreats: Test your formats. Learn what sells, what transforms, what people share.', xp: 55},
                {mode: 'execution', task: 'Create Marketing for Local Experiences: How to reach people seeking local transformation. Channels and messaging.', xp: 45},
                {mode: 'execution', task: 'Design Corporate Micro-Retreats: Team experiences for companies. Different value proposition, higher prices.', xp: 50},
                {mode: 'personality', task: 'Build a Facilitator Network: Train others to run your formats. Scale beyond yourself.', xp: 55},
                {mode: 'execution', task: 'Create a Micro-Retreat Platform: Marketplace connecting seekers with local experiences.', xp: 55},
                {mode: 'ideas', task: 'Predict the Local Experience Boom: Write a 2028 headline about micro-retreats replacing traditional vacations. Why?', xp: 40}
            ]
        },
        {
            title: '🏢 Corporate Offsites as Product',
            mode: 'execution',
            description: 'Remote companies need intentional gathering. Corporate offsites become a product category with specialized designers, venues, and facilitators.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Corporate Offsite Failures: What goes wrong? Bad venues, no agenda, too much work, not enough bonding. List the pitfalls.', xp: 45},
                {mode: 'ideas', task: 'Study Great Company Retreats: What do companies like Zapier, GitLab, Basecamp do? Analyze successful remote-company gatherings.', xp: 50},
                {mode: 'execution', task: 'Create an Offsite Design Framework: Methodology for designing effective team gatherings. The planning process.', xp: 55},
                {mode: 'execution', task: 'Build an Offsite Checklist: Everything from venue selection to follow-up. The comprehensive guide.', xp: 45},
                {mode: 'ideas', task: 'Map Offsite Types: Strategy, bonding, celebration, onboarding, crisis. Different gatherings need different designs.', xp: 45},
                {mode: 'execution', task: 'Design Facilitation Agendas: Templates for different offsite goals. Plug-and-play programming.', xp: 50},
                {mode: 'personality', task: 'Facilitate 5 Corporate Offsites: Run team gatherings. Build case studies and testimonials.', xp: 55},
                {mode: 'execution', task: 'Create Venue Evaluation Criteria: What makes a great offsite venue? Scoring system for selection.', xp: 45},
                {mode: 'execution', task: 'Design Remote-First Offsite Principles: What\'s different when the team is normally distributed? Specific considerations.', xp: 50},
                {mode: 'personality', task: 'Partner with Venues: Hotels, retreat centers, unique spaces. Build preferred relationships.', xp: 55},
                {mode: 'execution', task: 'Build an Offsite ROI Calculator: Prove the value of gathering to finance-minded executives.', xp: 50},
                {mode: 'ideas', task: 'Predict the Gathering Mandate: Write a 2029 headline about in-person gathering becoming required for remote teams. What happened?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🧠 MENTAL HEALTH DEMAND EXCEEDS SUPPLY - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'mental-health-demand-crisis',
    title: 'Mental health demand far exceeds supply of providers',
    source: 'WHO data, therapist shortage statistics, youth mental health crisis',
    probability: 95,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'There aren\'t enough therapists. Period. Technology and new models must extend care to millions who can\'t access traditional therapy.',
    atRisk: 'Traditional private practice therapists competing on availability, mental health systems that don\'t scale, anyone ignoring the crisis',
    opportunities: [
        {
            title: '👥 Group Therapy & Cohort Programs',
            mode: 'execution',
            description: 'One therapist, eight clients. Group therapy scales while maintaining effectiveness. Building group programs for specific populations.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Group Therapy Effectiveness: When does group work better than individual? What conditions, populations, issues?', xp: 50},
                {mode: 'ideas', task: 'Study Successful Group Models: AA, DBT groups, support groups. What makes them work? Structure, facilitation, culture.', xp: 50},
                {mode: 'execution', task: 'Design a Group Therapy Format: 8-week cohort program for a specific issue. Curriculum, exercises, progression.', xp: 55},
                {mode: 'ideas', task: 'Identify Underserved Populations: Who can\'t access mental health care? New parents, shift workers, rural residents. Find the gaps.', xp: 45},
                {mode: 'execution', task: 'Create Facilitator Training: How to lead effective therapy groups. The clinical curriculum.', xp: 55},
                {mode: 'execution', task: 'Build Group Matching Systems: How do you put the right people together? Assessment and grouping methodology.', xp: 50},
                {mode: 'personality', task: 'Run 3 Pilot Groups: Test your format. Measure outcomes. Iterate based on feedback.', xp: 55},
                {mode: 'execution', task: 'Design Virtual Group Protocols: Online groups that maintain intimacy and effectiveness.', xp: 50},
                {mode: 'execution', task: 'Create Pricing for Group Programs: Make it accessible while sustainable. The economic model.', xp: 45},
                {mode: 'personality', task: 'Partner with Employers or Insurers: They want scalable mental health. Offer group solutions.', xp: 55},
                {mode: 'execution', task: 'Build a Group Program Marketplace: Platform connecting people to appropriate group programs.', xp: 55},
                {mode: 'ideas', task: 'Predict Group Therapy Mainstream: Write a 2030 headline about group therapy becoming primary care model. What changed?', xp: 45}
            ]
        },
        {
            title: '💪 Preventative Mental Fitness',
            mode: 'execution',
            description: 'Don\'t wait for crisis. Build mental fitness before problems emerge. The gym membership model for mental health.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Mental Fitness Concept: What does "mental fitness" mean? Resilience, emotional regulation, stress management. Define the domain.', xp: 45},
                {mode: 'ideas', task: 'Study Prevention Science: What interventions prevent mental health problems? Before crisis, not after.', xp: 50},
                {mode: 'execution', task: 'Create a Mental Fitness Assessment: Measure someone\'s baseline mental fitness. The diagnostic.', xp: 50},
                {mode: 'execution', task: 'Design a Mental Fitness Program: Daily/weekly practices that build mental strength. The workout routine for the mind.', xp: 55},
                {mode: 'ideas', task: 'Analyze the Peloton Model: How did fitness become subscription? Apply lessons to mental fitness.', xp: 45},
                {mode: 'execution', task: 'Build a Mental Fitness App Concept: Features, content, progression. The product specification.', xp: 55},
                {mode: 'personality', task: 'Pilot with 30 People: Run them through your mental fitness program. Measure outcomes.', xp: 55},
                {mode: 'execution', task: 'Create Corporate Mental Fitness: Workplace programs that build team mental fitness. B2B opportunity.', xp: 50},
                {mode: 'execution', task: 'Design Mental Fitness Metrics: How do you know it\'s working? Track and visualize progress.', xp: 45},
                {mode: 'personality', task: 'Partner with Gyms or Wellness Centers: They do physical fitness. Add mental. Build the relationship.', xp: 55},
                {mode: 'execution', task: 'Create Mental Fitness Certification: Train coaches to deliver mental fitness programs.', xp: 55},
                {mode: 'ideas', task: 'Predict Mental Fitness Mandate: Write a 2031 headline about mental fitness becoming required like physical fitness. What triggered it?', xp: 45}
            ]
        },
        {
            title: '🏥 Therapist-Extender Tools',
            mode: 'execution',
            description: 'Help therapists see more patients effectively. AI triage, between-session support, supervision tools that extend each therapist\'s capacity.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Therapist Time Usage: What do therapists spend time on? Sessions, notes, admin, coordination. Find the time sinks.', xp: 45},
                {mode: 'ideas', task: 'Research AI in Mental Health: What tools exist? Woebot, Wysa, Talkspace. What works? What\'s missing?', xp: 50},
                {mode: 'execution', task: 'Design Between-Session Support: AI or human support between therapy sessions. Extends the therapeutic relationship.', xp: 55},
                {mode: 'execution', task: 'Create AI Triage for Therapy: System that assesses new patients and matches to appropriate care. Save therapist time.', xp: 55},
                {mode: 'ideas', task: 'Study Therapist Burnout: Why do therapists burn out? How can tools help with sustainability?', xp: 50},
                {mode: 'execution', task: 'Build Note-Taking Automation: AI that helps therapists with documentation. Save hours per week.', xp: 50},
                {mode: 'execution', task: 'Design Supervision Efficiency Tools: Help supervisors oversee more therapists effectively.', xp: 50},
                {mode: 'personality', task: 'Test with 5 Therapists: Give them your tools. Measure time saved, satisfaction, patient outcomes.', xp: 55},
                {mode: 'execution', task: 'Create Patient Progress Tracking: Dashboard that helps therapists monitor all patients between sessions.', xp: 50},
                {mode: 'personality', task: 'Partner with a Therapy Practice: Pilot your tools in a real clinical setting.', xp: 60},
                {mode: 'execution', task: 'Design Ethical Guidelines: What should AI do vs not do in mental health? Create responsible use framework.', xp: 50},
                {mode: 'ideas', task: 'Predict the Therapist Multiplier: Write a 2030 headline about therapists seeing 3x more patients with AI. How did it work?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🎓 COLLEGE ROI QUESTIONED - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'college-roi-questioned',
    title: 'College ROI increasingly questioned',
    source: 'Student debt data, alternative credential growth, employer hiring shifts',
    probability: 88,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'When college costs $200K and AI can teach for free, the degree loses its monopoly. Those who build alternative paths win.',
    atRisk: 'Traditional universities slow to adapt, students blindly following the degree path, education debt-dependent businesses',
    opportunities: [
        {
            title: '🛠️ Alternative Credential & Apprenticeships',
            mode: 'execution',
            description: 'Build the alternative to college. Apprenticeships, bootcamps, credentials that prove ability without the degree.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Alternative Credential Landscape: Bootcamps, certifications, apprenticeships, portfolios. What exists? What works?', xp: 45},
                {mode: 'ideas', task: 'Research Employer Acceptance: Which employers hire without degrees? What do they look for instead? Interview 10 hiring managers.', xp: 55},
                {mode: 'execution', task: 'Design an Apprenticeship Program: Structure for learning-while-earning. Curriculum, employer partnerships, progression.', xp: 55},
                {mode: 'ideas', task: 'Study Successful Non-Degree Paths: People who built great careers without college. What did they do instead?', xp: 45},
                {mode: 'execution', task: 'Create a "College Alternative" Guide: For high school students and parents. The decision framework.', xp: 50},
                {mode: 'execution', task: 'Build Employer Partnerships: Companies willing to hire from your alternative program. Create the pipeline.', xp: 55},
                {mode: 'personality', task: 'Place 10 People Without Degrees: Help non-college candidates get hired. Build case studies.', xp: 60},
                {mode: 'execution', task: 'Design Credential Stacking: How multiple smaller credentials add up to career readiness. The architecture.', xp: 50},
                {mode: 'execution', task: 'Create ROI Comparison Tools: Calculator showing college vs alternatives for specific careers.', xp: 45},
                {mode: 'personality', task: 'Partner with High Schools: Help students explore alternatives before defaulting to college.', xp: 55},
                {mode: 'execution', task: 'Build an Alternative Credential Platform: Marketplace connecting learners with non-degree programs.', xp: 55},
                {mode: 'ideas', task: 'Predict the College Reckoning: Write a 2032 headline about major universities closing. What replaced them?', xp: 50}
            ]
        },
        {
            title: '💼 Employer-Led Training Pipelines',
            mode: 'execution',
            description: 'Companies train their own talent instead of requiring degrees. Building the infrastructure for employer-led education.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Corporate Training History: When did companies train employees? What changed? Why did they outsource to colleges?', xp: 45},
                {mode: 'ideas', task: 'Study Successful Corporate Universities: AT&T, McDonald\'s Hamburger University, Google Career Certificates. What works?', xp: 50},
                {mode: 'execution', task: 'Design a "Hire to Train" Program: Structure where companies hire then train, instead of requiring pre-trained candidates.', xp: 55},
                {mode: 'ideas', task: 'Calculate the Economics: Is it cheaper to train internally or require degrees? Build the business case.', xp: 50},
                {mode: 'execution', task: 'Create Training Curriculum Templates: Modular training programs companies can customize. Building blocks.', xp: 55},
                {mode: 'execution', task: 'Design Assessment for Trainability: What predicts success in training programs? Better than degree screening.', xp: 50},
                {mode: 'personality', task: 'Convince 3 Companies to Try "Hire to Train": Pilot the model. Document results.', xp: 60},
                {mode: 'execution', task: 'Build Training Infrastructure: LMS, assessment, certification for employer-led education.', xp: 55},
                {mode: 'execution', task: 'Create Industry-Specific Programs: Training pipelines for tech, healthcare, trades. Vertical focus.', xp: 50},
                {mode: 'personality', task: 'Partner with Workforce Development: Government agencies funding job training. Access the resources.', xp: 55},
                {mode: 'execution', task: 'Design Career Progression Within Training: Not just entry-level. Ongoing development pathways.', xp: 50},
                {mode: 'ideas', task: 'Predict the Corporate University Boom: Write a 2030 headline about companies becoming primary educators. Why did this happen?', xp: 45}
            ]
        },
        {
            title: '📁 Portfolio-First Career Accelerators',
            mode: 'personality',
            description: 'Build a portfolio, not a resume. Programs that help people create proof of work that gets them hired.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Study Portfolio-Based Hiring: Which fields hire on portfolio? Design, development, writing. What makes portfolios work?', xp: 45},
                {mode: 'ideas', task: 'Research Portfolio Requirements: What do employers actually want to see? Interview 10 hiring managers across fields.', xp: 50},
                {mode: 'execution', task: 'Create a Portfolio Development Curriculum: Structured program to build hire-worthy portfolios. The process.', xp: 55},
                {mode: 'execution', task: 'Design Portfolio Templates by Role: What should a PM portfolio include vs a marketer? Role-specific guidance.', xp: 50},
                {mode: 'ideas', task: 'Identify Portfolio-Friendly Projects: Real projects people can do to build portfolios. The project library.', xp: 45},
                {mode: 'execution', task: 'Build Portfolio Review System: Feedback mechanism to improve portfolios. Peer and expert review.', xp: 50},
                {mode: 'personality', task: 'Run a Portfolio Accelerator Cohort: 8 weeks to a job-ready portfolio. Test with 10 people.', xp: 55},
                {mode: 'execution', task: 'Create Portfolio-to-Job Pipelines: Connect people with strong portfolios to employers who value them.', xp: 55},
                {mode: 'execution', task: 'Design Portfolio Hosting: Platform optimized for showcasing work to employers. The portfolio infrastructure.', xp: 50},
                {mode: 'personality', task: 'Partner with Employers: Build relationships with companies that hire on portfolio.', xp: 55},
                {mode: 'execution', task: 'Create Portfolio Success Metrics: Track how portfolios lead to jobs. Prove the model.', xp: 45},
                {mode: 'ideas', task: 'Predict the Portfolio Standard: Write a 2029 headline about portfolios replacing resumes as hiring default. What drove the change?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 💰 UBI EXPERIMENTS EXPAND - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'ubi-experiments-expand',
    title: 'Universal Basic Income experiments expand globally',
    source: 'Pilot program data, AI displacement projections, political momentum',
    probability: 75,
    timeframe: '2026-2030',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'When survival is guaranteed, purpose becomes the scarcity. Those who help people find meaning, contribution, and growth in a post-work world win.',
    atRisk: 'Businesses dependent on economic desperation, anyone whose pitch is "work or starve," institutions that assume employment equals purpose',
    opportunities: [
        {
            title: '🎯 Purpose Economy Platforms',
            mode: 'personality',
            description: 'When income is guaranteed, people still need purpose. Platforms that connect people to meaningful projects, communities, and missions.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Purpose Psychology: What gives people meaning? Work, contribution, growth, connection. Study the literature.', xp: 50},
                {mode: 'ideas', task: 'Study Post-Retirement Purpose: How do retirees find meaning? What works, what fails? Lessons for UBI world.', xp: 45},
                {mode: 'execution', task: 'Design a Purpose Marketplace: Platform connecting people to meaningful projects that need help. Not jobs — missions.', xp: 55},
                {mode: 'ideas', task: 'Map Contribution Opportunities: What needs doing that isn\'t paid? Community projects, mentorship, care, creativity.', xp: 50},
                {mode: 'execution', task: 'Create a Purpose Assessment: Help people identify what gives them meaning. The diagnostic tool.', xp: 50},
                {mode: 'execution', task: 'Build Purpose-Finding Curriculum: Program that helps people discover and pursue meaningful contribution.', xp: 55},
                {mode: 'personality', task: 'Help 10 People Find Purpose: Work with unemployed or underemployed people. Test your approaches.', xp: 55},
                {mode: 'execution', task: 'Design Recognition Systems: How do you reward contribution when money isn\'t the currency? Status, impact, growth.', xp: 50},
                {mode: 'execution', task: 'Create Community Purpose Projects: Local initiatives that give people meaningful work. Replicable models.', xp: 50},
                {mode: 'personality', task: 'Partner with UBI Pilots: Work with existing basic income experiments. Provide purpose infrastructure.', xp: 60},
                {mode: 'execution', task: 'Build Purpose Metrics: How do you measure meaning and fulfillment? Create the assessment framework.', xp: 45},
                {mode: 'ideas', task: 'Predict the Purpose Crisis: Write a 2032 headline about widespread meaninglessness despite guaranteed income. What was missing?', xp: 50}
            ]
        },
        {
            title: '🏘️ Local Creator & Service Micro-Economies',
            mode: 'execution',
            description: 'UBI enables local economic experimentation. Neighborhood economies, time banks, local currencies, and hyperlocal services emerge.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Alternative Economies: Time banks, local currencies, mutual aid, gift economies. What exists? What works?', xp: 45},
                {mode: 'ideas', task: 'Study Successful Local Economies: Ithaca Hours, Bristol Pound, time banking networks. Analyze the models.', xp: 50},
                {mode: 'execution', task: 'Design a Neighborhood Economy: Framework for hyperlocal exchange — services, skills, goods. The blueprint.', xp: 55},
                {mode: 'execution', task: 'Create a Local Service Marketplace: Platform for neighbors to exchange services. Beyond TaskRabbit — community-first.', xp: 55},
                {mode: 'ideas', task: 'Map Underutilized Local Resources: What skills, tools, spaces exist in neighborhoods that aren\'t being shared?', xp: 45},
                {mode: 'execution', task: 'Build Time Banking Infrastructure: System for tracking and exchanging time-based contributions.', xp: 50},
                {mode: 'personality', task: 'Launch a Pilot in One Neighborhood: Test your local economy model. Document what works.', xp: 55},
                {mode: 'execution', task: 'Design Trust Systems for Local Exchange: How do neighbors build trust for economic exchange? Reputation, verification.', xp: 50},
                {mode: 'execution', task: 'Create Local Economy Starter Kits: Everything a neighborhood needs to launch their own micro-economy.', xp: 50},
                {mode: 'personality', task: 'Connect Local Economy Experiments: Build a network of neighborhoods trying this. Shared learnings.', xp: 55},
                {mode: 'execution', task: 'Design Local Currency Models: When and how local currencies make sense. The implementation guide.', xp: 50},
                {mode: 'ideas', task: 'Predict the Local Economy Renaissance: Write a 2030 headline about neighborhood economies booming. What enabled it?', xp: 45}
            ]
        },
        {
            title: '🧘 Mental Health & Meaning Infrastructure',
            mode: 'personality',
            description: 'Guaranteed income doesn\'t guarantee happiness. Mental health and meaning support becomes essential infrastructure for UBI societies.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Lottery Winner Psychology: What happens to people who get sudden unearned income? Mental health, purpose, relationships.', xp: 50},
                {mode: 'ideas', task: 'Study UBI Pilot Mental Health Data: What happened to participants\' wellbeing? Stress, purpose, social connection.', xp: 50},
                {mode: 'execution', task: 'Design UBI-Era Mental Health Programs: Support specifically for the challenges of guaranteed income. Unique needs.', xp: 55},
                {mode: 'ideas', task: 'Map the "Meaning Void" Risks: What psychological problems emerge when work isn\'t required? Depression, isolation, purposelessness.', xp: 50},
                {mode: 'execution', task: 'Create Transition Support Programs: Help people shift from work-defined identity to chosen purpose.', xp: 55},
                {mode: 'execution', task: 'Build Community Connection Systems: Combat isolation that could come from not having workplace community.', xp: 50},
                {mode: 'personality', task: 'Interview 20 Long-Term Unemployed: What are the mental health challenges? What helped? Learn from experience.', xp: 55},
                {mode: 'execution', task: 'Design Daily Structure Tools: Help people create productive routines without work requirements.', xp: 45},
                {mode: 'execution', task: 'Create Peer Support Networks: Connect people navigating UBI-era life challenges together.', xp: 50},
                {mode: 'personality', task: 'Partner with Mental Health Organizations: They\'ll need UBI-specific expertise. Build the relationship.', xp: 55},
                {mode: 'execution', task: 'Build "Life Design" Programs: Curriculum for creating fulfilling lives without traditional work.', xp: 55},
                {mode: 'ideas', task: 'Predict the Meaning Industry: Write a 2033 headline about purpose-finding becoming a major industry. What drove demand?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🏠 HOUSING AFFORDABILITY CRISIS - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'housing-affordability-crisis',
    title: 'Housing affordability crisis worsens in major metros',
    source: 'Housing cost data, wage stagnation, construction deficit',
    probability: 90,
    timeframe: 'Already happening',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Traditional homeownership becomes impossible for most. Those who build alternative housing models, creative financing, and new ways to live win.',
    atRisk: 'Traditional real estate agents, mortgage-dependent businesses, anyone whose model assumes people can afford houses',
    opportunities: [
        {
            title: '🏘️ Alternative Housing Models',
            mode: 'execution',
            description: 'Co-living, modular housing, ADUs, tiny homes, manufactured housing. Building the infrastructure for housing that people can actually afford.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Alternative Housing Types: Co-living, modular, ADU, tiny home, manufactured. What exists? What\'s the economics of each?', xp: 50},
                {mode: 'ideas', task: 'Research Successful Alternative Housing: Which models actually work at scale? Common, Factory OS, Boxabl. Analyze the winners.', xp: 50},
                {mode: 'execution', task: 'Design a Co-Living Model: Shared housing for specific demographic. Layout, economics, community design.', xp: 55},
                {mode: 'ideas', task: 'Study Zoning and Regulatory Barriers: What prevents alternative housing? Where is it allowed? Map the opportunities.', xp: 50},
                {mode: 'execution', task: 'Create an ADU Development Guide: Step-by-step for homeowners to add units. Permits, financing, design.', xp: 50},
                {mode: 'execution', task: 'Build Alternative Housing Financial Models: How do investors, developers, and residents make these work?', xp: 55},
                {mode: 'personality', task: 'Interview 10 Alternative Housing Residents: What works? What\'s hard? What would make it better?', xp: 50},
                {mode: 'execution', task: 'Design a Modular Housing Product: Spec for factory-built housing that\'s affordable and attractive.', xp: 55},
                {mode: 'execution', task: 'Create a "Housing Innovation" Pitch Deck: For investors or municipalities. Make the case for alternative models.', xp: 50},
                {mode: 'personality', task: 'Partner with a Developer or Municipality: Pilot an alternative housing project. Build the case study.', xp: 60},
                {mode: 'execution', task: 'Build a Housing Model Comparison Tool: Help people evaluate which alternative housing fits them.', xp: 45},
                {mode: 'ideas', task: 'Predict Housing Model Shift: Write a 2032 headline about alternative housing becoming mainstream. What triggered adoption?', xp: 45}
            ]
        },
        {
            title: '💳 Rent-to-Own & Shared Equity Platforms',
            mode: 'execution',
            description: 'New financing models that let people build equity without traditional mortgages. Shared equity, rent-to-own, fractional ownership.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Alternative Ownership Models: Rent-to-own, shared equity, land trusts, fractional ownership. How does each work?', xp: 50},
                {mode: 'ideas', task: 'Study Successful Programs: Divvy, Landed, Unison. What makes these models work? Where do they struggle?', xp: 50},
                {mode: 'execution', task: 'Design a Rent-to-Own Program: Structure, terms, protections for both parties. The complete model.', xp: 55},
                {mode: 'ideas', task: 'Map the Regulatory Landscape: What rules govern alternative ownership? Where is innovation possible?', xp: 45},
                {mode: 'execution', task: 'Create Shared Equity Agreements: Legal templates for shared ownership arrangements.', xp: 55},
                {mode: 'execution', task: 'Build ROI Calculators: Help people compare traditional mortgage vs alternative ownership paths.', xp: 50},
                {mode: 'personality', task: 'Interview 10 People Locked Out of Ownership: What would help them? What have they tried? Understand the need.', xp: 50},
                {mode: 'execution', task: 'Design Investor Structures: How do investors participate in shared equity? Returns, risks, liquidity.', xp: 55},
                {mode: 'execution', task: 'Create Consumer Education: Help people understand and evaluate alternative ownership options.', xp: 45},
                {mode: 'personality', task: 'Partner with a Housing Organization: Test your models with real homebuyers. Prove it works.', xp: 60},
                {mode: 'execution', task: 'Build a Matching Platform: Connect people who need alternative ownership with programs that offer it.', xp: 55},
                {mode: 'ideas', task: 'Predict Traditional Mortgage Decline: Write a 2030 headline about alternative ownership overtaking mortgages. What changed?', xp: 45}
            ]
        },
        {
            title: '🚚 Remote Relocation Services',
            mode: 'execution',
            description: 'Help people escape expensive cities for affordable areas. Move optimization, remote work setup, community finding.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Map Affordable Markets: Where is housing affordable with good quality of life? Create a database of opportunity locations.', xp: 45},
                {mode: 'ideas', task: 'Research Relocation Barriers: Why don\'t more people move? Job, family, fear, logistics. Understand the friction.', xp: 45},
                {mode: 'execution', task: 'Create a "Should I Move?" Framework: Decision tool for evaluating relocation. Cost, quality of life, opportunity.', xp: 50},
                {mode: 'execution', task: 'Design a Relocation Package: End-to-end service for moving to an affordable area. What\'s included?', xp: 55},
                {mode: 'ideas', task: 'Study Remote Work Requirements: What do people need to work remotely from a new location? Infrastructure, setup.', xp: 45},
                {mode: 'execution', task: 'Build Location Comparison Tools: Side-by-side comparison of cost of living, amenities, community.', xp: 50},
                {mode: 'personality', task: 'Help 5 People Relocate: Guide them through the process. Document what works, what\'s hard.', xp: 55},
                {mode: 'execution', task: 'Create Community Finding Services: Help relocators find their people in new cities. The social infrastructure.', xp: 50},
                {mode: 'execution', task: 'Design "Trial Living" Programs: Try a city before committing. Short-term stays with community integration.', xp: 50},
                {mode: 'personality', task: 'Partner with Affordable Cities: They want to attract remote workers. Build the relationship.', xp: 55},
                {mode: 'execution', task: 'Build a Relocation Community: Connect people who\'ve moved with people considering it. Peer support.', xp: 50},
                {mode: 'ideas', task: 'Predict the Urban Exodus: Write a 2029 headline about mass migration from expensive cities. What triggered it?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 💼 GIG/FREELANCE BECOMES DOMINANT - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'gig-freelance-dominant',
    title: 'Gig and freelance work becomes dominant for 50%+ of workers',
    source: 'Labor statistics, platform growth, corporate cost-cutting',
    probability: 72,
    timeframe: '2030-2035',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Employment becomes a minority arrangement. Those who build infrastructure for independent workers — benefits, finance, community — win.',
    atRisk: 'Traditional employers competing for talent, HR departments, anyone whose model assumes employees',
    opportunities: [
        {
            title: '🏥 Benefits & Insurance for Independents',
            mode: 'execution',
            description: 'Freelancers need health insurance, retirement, disability — all the things employees get. Building the benefits infrastructure for independents.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Freelancer Benefits Gaps: What benefits do freelancers lack? Health, retirement, disability, parental leave. Quantify the problem.', xp: 50},
                {mode: 'ideas', task: 'Research Existing Solutions: Freelancers Union, Catch, Stride. What exists? What\'s missing? Find the gaps.', xp: 50},
                {mode: 'execution', task: 'Design a Freelancer Benefits Bundle: Package of essential benefits for independent workers. What\'s included, how it works.', xp: 55},
                {mode: 'ideas', task: 'Study Benefits Portability: How can benefits move with workers across gigs? The infrastructure challenge.', xp: 50},
                {mode: 'execution', task: 'Create a Benefits Comparison Tool: Help freelancers evaluate and choose benefits options.', xp: 45},
                {mode: 'execution', task: 'Build Group Buying Power: Aggregate freelancers for better insurance rates. The collective model.', xp: 55},
                {mode: 'personality', task: 'Interview 20 Freelancers About Benefits: What do they have? What do they need? What would they pay?', xp: 50},
                {mode: 'execution', task: 'Design Retirement Solutions: How do freelancers save for retirement without employer 401k? Create the product.', xp: 55},
                {mode: 'execution', task: 'Create Emergency Safety Nets: Disability, illness, income gaps. Insurance products for freelance risks.', xp: 55},
                {mode: 'personality', task: 'Partner with Insurance Companies: They need freelancer distribution. Build the relationship.', xp: 55},
                {mode: 'execution', task: 'Build a Freelancer Benefits Platform: One-stop shop for independent worker benefits.', xp: 55},
                {mode: 'ideas', task: 'Predict Portable Benefits Law: Write a 2031 headline about legislation requiring portable benefits. What triggered it?', xp: 45}
            ]
        },
        {
            title: '💰 Freelancer Finance Tooling',
            mode: 'execution',
            description: 'Freelancer finances are complex — variable income, quarterly taxes, no payroll. Building the financial operating system for independents.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map Freelancer Financial Pain Points: Irregular income, tax complexity, no benefits, cash flow. List all the challenges.', xp: 45},
                {mode: 'ideas', task: 'Research Existing Tools: Quickbooks Self-Employed, Bonsai, Cushion. What works? What\'s missing?', xp: 45},
                {mode: 'execution', task: 'Design an Income Smoothing System: Turn variable freelance income into predictable monthly pay. The product.', xp: 55},
                {mode: 'execution', task: 'Create Tax Automation: Quarterly estimates, deduction tracking, year-end prep. Seamless tax management.', xp: 55},
                {mode: 'ideas', task: 'Study Freelancer Cash Flow Patterns: When does money come in? When do expenses hit? Understand the rhythm.', xp: 45},
                {mode: 'execution', task: 'Build Emergency Fund Automation: Automatically save for income gaps. The safety net feature.', xp: 50},
                {mode: 'personality', task: 'Test with 10 Freelancers: Give them your tools. What helps? What confuses?', xp: 55},
                {mode: 'execution', task: 'Design Retirement Auto-Contribution: Set and forget retirement saving for variable income. The mechanism.', xp: 50},
                {mode: 'execution', task: 'Create Invoice and Payment Optimization: Get paid faster, manage late payers. Cash flow management.', xp: 50},
                {mode: 'personality', task: 'Partner with Freelance Platforms: Upwork, Fiverr, Toptal. Offer financial tools to their users.', xp: 55},
                {mode: 'execution', task: 'Build a Freelancer Financial Dashboard: All income, expenses, taxes, savings in one view.', xp: 55},
                {mode: 'ideas', task: 'Predict Freelancer Finance Becoming Category: Write a 2029 headline about freelancer fintech becoming huge. What drove growth?', xp: 45}
            ]
        },
        {
            title: '🤝 Reputation & Trust for Hiring',
            mode: 'execution',
            description: 'How do you trust a freelancer you\'ve never worked with? Reputation systems, verification, and trust infrastructure for the gig economy.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Trust Signals for Freelancers: What indicates a good freelancer? Reviews, portfolio, credentials, referrals. List all signals.', xp: 45},
                {mode: 'ideas', task: 'Research Platform Reputation Systems: Upwork, Airbnb, eBay. How do they build trust? What works?', xp: 50},
                {mode: 'execution', task: 'Design a Portable Reputation System: Reputation that follows freelancers across platforms. The standard.', xp: 55},
                {mode: 'ideas', task: 'Study Reputation Gaming: How do people fake reviews and credentials? Design defenses.', xp: 50},
                {mode: 'execution', task: 'Create Verification Services: Background checks, skill verification, identity confirmation for freelancers.', xp: 55},
                {mode: 'execution', task: 'Build Reference Collection Systems: Automated way to gather and verify client references.', xp: 50},
                {mode: 'personality', task: 'Interview 10 Hiring Managers: What makes them trust freelancers? What are their concerns?', xp: 50},
                {mode: 'execution', task: 'Design Work Sample Verification: Prove that portfolio pieces are actually the freelancer\'s work.', xp: 55},
                {mode: 'execution', task: 'Create a "Trusted Freelancer" Credential: Rigorous verification that means something. Premium trust.', xp: 55},
                {mode: 'personality', task: 'Partner with Freelance Platforms: Offer trust infrastructure. Build the relationships.', xp: 55},
                {mode: 'execution', task: 'Build a Trust Graph: Network of verified relationships and successful projects. Social proof at scale.', xp: 55},
                {mode: 'ideas', task: 'Predict Trust Becoming Currency: Write a 2030 headline about reputation scores determining freelancer rates. What happened?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 📴 DIGITAL DETOX & OFFLINE EXPERIENCES - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'digital-detox-grows',
    title: 'Digital detox and offline experiences grow significantly',
    source: 'Screen time backlash, mental health awareness, wellness trends',
    probability: 85,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Constant connectivity becomes recognized as harmful. Those who provide genuine offline experiences, analog products, and digital boundaries win.',
    atRisk: 'Businesses dependent on screen time, social media companies, anyone whose model is more engagement',
    opportunities: [
        {
            title: '🏕️ Screen-Free Retreats & Experiences',
            mode: 'execution',
            description: 'Vacations and experiences where phones are literally not allowed. Premium offline time as a luxury product.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Research Screen-Free Retreat Market: Who\'s doing this? Camp Grounded, Digital Detox retreats. What works?', xp: 45},
                {mode: 'ideas', task: 'Study the Psychology of Disconnection: What happens when people unplug? Withdrawal, then what? Understand the journey.', xp: 50},
                {mode: 'execution', task: 'Design a Screen-Free Retreat: Format, activities, rules, duration. The complete experience design.', xp: 55},
                {mode: 'ideas', task: 'Identify the Target Customer: Who pays for digital detox? Executives, parents, burned-out professionals. Profile them.', xp: 45},
                {mode: 'execution', task: 'Create Device Collection Protocols: How do you actually get people to give up phones? The logistics of disconnection.', xp: 45},
                {mode: 'execution', task: 'Design Analog Activities: What do people do without screens? Crafts, conversation, nature, games. The programming.', xp: 50},
                {mode: 'personality', task: 'Run 3 Pilot Retreats: Test your format. Get feedback. Iterate.', xp: 55},
                {mode: 'execution', task: 'Build Re-Entry Support: Help people maintain boundaries after the retreat ends. The lasting change.', xp: 50},
                {mode: 'execution', task: 'Create Corporate Digital Detox: Team retreats focused on disconnecting. B2B opportunity.', xp: 50},
                {mode: 'personality', task: 'Partner with Retreat Centers: They have venues. You have the program. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Design Tiered Offerings: Weekend, week-long, intensive. Different depths of disconnection.', xp: 50},
                {mode: 'ideas', task: 'Predict Digital Detox Mainstream: Write a 2029 headline about screen-free vacations becoming standard. What drove adoption?', xp: 45}
            ]
        },
        {
            title: '🎨 Analog Clubs & Craft Communities',
            mode: 'personality',
            description: 'Book clubs, knitting circles, woodworking groups, board game nights. In-person communities centered on non-digital activities.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Map Analog Activities: What do people do offline? Crafts, sports, games, reading, cooking. List the categories.', xp: 40},
                {mode: 'ideas', task: 'Research Successful Analog Communities: What makes a great book club, craft circle, or maker space? The success factors.', xp: 45},
                {mode: 'execution', task: 'Design an Analog Club Format: Structure, frequency, activities, membership. The blueprint for community.', xp: 50},
                {mode: 'execution', task: 'Create "Club in a Box" Kits: Everything someone needs to start an analog club. Materials, guides, templates.', xp: 50},
                {mode: 'ideas', task: 'Identify Underserved Analog Interests: What activities lack community? Where\'s the demand without supply?', xp: 45},
                {mode: 'personality', task: 'Start 3 Analog Clubs: Test different formats. Learn what works, what struggles.', xp: 55},
                {mode: 'execution', task: 'Build a Club Finding Platform: Help people find analog communities near them. The directory.', xp: 50},
                {mode: 'execution', task: 'Design Intergenerational Formats: Connect young and old through analog activities. Bridge the digital divide.', xp: 50},
                {mode: 'execution', task: 'Create Club Leader Training: Help people start and run thriving analog communities.', xp: 50},
                {mode: 'personality', task: 'Partner with Libraries or Community Centers: They have space and want programming. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Design Revenue Models for Clubs: How do analog communities sustain themselves? Membership, events, supplies.', xp: 45},
                {mode: 'ideas', task: 'Predict the Analog Renaissance: Write a 2030 headline about analog activities booming. What triggered the return?', xp: 45}
            ]
        },
        {
            title: '📵 Digital Boundary Coaching',
            mode: 'personality',
            description: 'Help people set and maintain healthy digital boundaries. Screen time management, notification control, intentional technology use.',
            difficulty: 'easy',
            timeframe: '1-6 months',
            quests: [
                {mode: 'ideas', task: 'Research Digital Wellness: What does healthy technology use look like? Screen time research, attention studies.', xp: 45},
                {mode: 'ideas', task: 'Map Digital Boundary Challenges: Why is it hard to disconnect? Addiction, FOMO, work expectations. Understand the barriers.', xp: 45},
                {mode: 'execution', task: 'Create a Digital Audit Tool: Assessment of someone\'s current technology habits. The diagnostic.', xp: 50},
                {mode: 'execution', task: 'Design a "Digital Boundaries" Program: Structured approach to healthier tech use. The coaching curriculum.', xp: 55},
                {mode: 'ideas', task: 'Study Successful Habit Changers: How do people actually change digital habits? What interventions work?', xp: 45},
                {mode: 'execution', task: 'Build Accountability Systems: How do you help people stick to digital boundaries? The support structure.', xp: 50},
                {mode: 'personality', task: 'Coach 10 People on Digital Boundaries: Apply your method. Learn what works, what fails.', xp: 55},
                {mode: 'execution', task: 'Create Corporate Digital Wellness: Help companies set healthy digital culture. B2B opportunity.', xp: 50},
                {mode: 'execution', task: 'Design Family Digital Agreements: Frameworks for families to set shared technology rules.', xp: 45},
                {mode: 'execution', task: 'Build a Digital Boundary App: Ironic, but tools that help enforce disconnection. The product.', xp: 50},
                {mode: 'personality', task: 'Partner with Wellness Programs: They need digital health expertise. Offer your services.', xp: 55},
                {mode: 'ideas', task: 'Predict Digital Hygiene Becoming Standard: Write a 2028 headline about digital boundaries becoming like dental hygiene. What happened?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🔧 SKILLED TRADES COMMAND PREMIUM - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'skilled-trades-premium',
    title: 'Skilled trades command premium as supply shrinks',
    source: 'Trade shortage data, demographic trends, wage growth in trades',
    probability: 92,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Everyone went to college, no one became a plumber. Skilled trades become scarce and expensive. Those who train, organize, or support tradespeople win.',
    atRisk: 'Homeowners needing repairs, businesses needing construction, anyone competing for trade labor',
    opportunities: [
        {
            title: '🎓 Modern Trade Training Schools',
            mode: 'execution',
            description: 'Trade schools redesigned for the modern era. Shorter programs, better marketing, career support, and modern apprenticeships.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Trade Training Gap: What\'s the shortage? Electricians, plumbers, HVAC. Quantify the demand vs supply.', xp: 50},
                {mode: 'ideas', task: 'Study Successful Trade Programs: What makes apprenticeships work? Germany\'s system, union programs. Analyze the models.', xp: 50},
                {mode: 'execution', task: 'Design a Modern Apprenticeship: Paid learning, mentorship, credentials. The updated model.', xp: 55},
                {mode: 'ideas', task: 'Understand Trade Training Barriers: Why don\'t more people enter trades? Stigma, awareness, cost. Solve the barriers.', xp: 50},
                {mode: 'execution', task: 'Create Trade Career Marketing: Make trades appealing to young people. Counter the "college for everyone" message.', xp: 50},
                {mode: 'execution', task: 'Build Employer Partnerships: Companies that need tradespeople and will hire graduates. Create the pipeline.', xp: 55},
                {mode: 'personality', task: 'Interview 10 Successful Tradespeople: How did they learn? What would they tell young people? Gather stories.', xp: 50},
                {mode: 'execution', task: 'Design Short-Form Trade Training: Accelerated programs for career changers. Faster paths to earning.', xp: 55},
                {mode: 'execution', task: 'Create Financial Models: Show the ROI of trade careers vs college. Make the economic case.', xp: 45},
                {mode: 'personality', task: 'Partner with High Schools: Introduce trade paths before everyone defaults to college.', xp: 55},
                {mode: 'execution', task: 'Build a Trade Career Platform: Connect aspiring tradespeople with training, apprenticeships, and jobs.', xp: 55},
                {mode: 'ideas', task: 'Predict the Trade Prestige Shift: Write a 2030 headline about trades becoming aspirational careers. What changed?', xp: 45}
            ]
        },
        {
            title: '💼 Trade Business Operations',
            mode: 'execution',
            description: 'Plumbers are great at plumbing, terrible at running businesses. Provide the back-office, scheduling, and growth tools trades businesses need.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map Trade Business Pain Points: What\'s hard about running a trade business? Scheduling, invoicing, hiring, marketing.', xp: 45},
                {mode: 'ideas', task: 'Research Existing Solutions: Jobber, Housecall Pro, ServiceTitan. What\'s good? What\'s missing?', xp: 45},
                {mode: 'execution', task: 'Create a Trade Business Starter Kit: Everything a tradesperson needs to run the business side. Tools, templates, systems.', xp: 55},
                {mode: 'execution', task: 'Design Scheduling Optimization: Help trade businesses fit more jobs in less time. Efficiency tools.', xp: 50},
                {mode: 'ideas', task: 'Study Trade Business Failures: Why do trade businesses fail? Identify the operational killers.', xp: 45},
                {mode: 'execution', task: 'Build a Trade Business Dashboard: All the metrics a trade business owner needs in one place.', xp: 50},
                {mode: 'personality', task: 'Consult for 5 Trade Businesses: Help them improve operations. Build case studies.', xp: 55},
                {mode: 'execution', task: 'Create Hiring Systems for Trades: Help trade businesses find and vet employees. The recruitment toolkit.', xp: 50},
                {mode: 'execution', task: 'Design Marketing for Trade Businesses: Local SEO, reviews, referrals. Growth without complexity.', xp: 50},
                {mode: 'personality', task: 'Partner with Trade Associations: They have members who need help. Build the relationship.', xp: 55},
                {mode: 'execution', task: 'Build a Fractional COO Service: Ongoing operations support for trade businesses. Retainer model.', xp: 55},
                {mode: 'ideas', task: 'Predict Trade Business Professionalization: Write a 2029 headline about trade businesses becoming sophisticated. What enabled it?', xp: 45}
            ]
        },
        {
            title: '⭐ Premium Home Services Brands',
            mode: 'personality',
            description: 'Build the "Apple" of home services. Premium trade services with consistent quality, transparent pricing, and great customer experience.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Premium Service Models: What makes a service feel premium? Luxury hotels, high-end retail. Extract the principles.', xp: 50},
                {mode: 'ideas', task: 'Study Home Services Frustrations: Why do people hate dealing with contractors? Pricing, reliability, communication. List the pain.', xp: 50},
                {mode: 'execution', task: 'Design Premium Service Standards: What does a "luxury" plumber look like? Uniforms, communication, cleanliness. The spec.', xp: 55},
                {mode: 'execution', task: 'Create Transparent Pricing Models: Fixed prices for common jobs. End the mystery of "I\'ll give you an estimate."', xp: 50},
                {mode: 'execution', task: 'Build a Service Guarantee: What do you promise? On-time, satisfaction, warranty. Design the guarantee.', xp: 50},
                {mode: 'personality', task: 'Test Premium Positioning with 10 Customers: Charge more, deliver more. Does it work? What do they value?', xp: 55},
                {mode: 'execution', task: 'Design Customer Communication Systems: Updates, scheduling, follow-up. Professional client experience.', xp: 50},
                {mode: 'execution', task: 'Create Tradesperson Training: Teach tradespeople to deliver premium service. The upskilling program.', xp: 55},
                {mode: 'execution', task: 'Build Brand Identity: Name, look, values for a premium home services brand.', xp: 50},
                {mode: 'personality', task: 'Recruit Premium Tradespeople: Find tradespeople who want to deliver exceptional service. Build the team.', xp: 55},
                {mode: 'execution', task: 'Design Franchise or Licensing Model: Scale premium service beyond one market.', xp: 55},
                {mode: 'ideas', task: 'Predict the Premium Trades Explosion: Write a 2030 headline about luxury home services becoming a category. What happened?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 🍽️ RESTAURANT AUTOMATION - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'restaurant-automation-mainstream',
    title: 'Restaurant automation becomes mainstream',
    source: 'Labor costs, robot deployment data, QSR investments',
    probability: 78,
    timeframe: '2026-2028',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Robots flip burgers and AI takes orders. Human restaurant value shifts to hospitality, experience, and high-touch service that machines can\'t replicate.',
    atRisk: 'Fast food workers, QSR franchisees slow to automate, anyone whose value is speed not experience',
    opportunities: [
        {
            title: '👨‍🍳 High-Touch Human Service Premium Dining',
            mode: 'personality',
            description: 'When fast food is automated, human service becomes luxury. Restaurants where the human interaction IS the product.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Human Service Value: What do humans provide that robots can\'t? Warmth, personality, surprise, care. Define the value.', xp: 50},
                {mode: 'ideas', task: 'Study High-Touch Hospitality: Great restaurants, Japanese service, luxury hotels. What makes human service special?', xp: 50},
                {mode: 'execution', task: 'Design a Human-First Restaurant Concept: Where the staff interaction is central to the experience. The vision.', xp: 55},
                {mode: 'ideas', task: 'Identify Service Moments That Matter: When does human touch transform a meal? Greeting, recommendation, problem-solving.', xp: 45},
                {mode: 'execution', task: 'Create Service Training for Human Premium: Teach hospitality skills that robots can\'t replicate.', xp: 55},
                {mode: 'execution', task: 'Design "Anti-Automation" Branding: How do you market human service as a feature? The positioning.', xp: 50},
                {mode: 'personality', task: 'Interview 10 Diners About Service: What service moments do they remember? What would they pay more for?', xp: 50},
                {mode: 'execution', task: 'Build a Service Excellence Playbook: Replicable systems for delivering exceptional human hospitality.', xp: 50},
                {mode: 'execution', task: 'Design Pricing for Human Premium: How much more will people pay for human service? Test the elasticity.', xp: 50},
                {mode: 'personality', task: 'Partner with Restaurant Operators: Help them differentiate on human service. Consulting opportunity.', xp: 55},
                {mode: 'execution', task: 'Create a "Human Hospitality" Certification: Verify restaurants that prioritize human connection.', xp: 50},
                {mode: 'ideas', task: 'Predict the Human Service Premium: Write a 2030 headline about human-served restaurants becoming luxury. What drove it?', xp: 45}
            ]
        },
        {
            title: '🤖 Restaurant Automation Integration',
            mode: 'execution',
            description: 'Help restaurants implement automation effectively. The system integrators of robot kitchens and AI ordering.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Restaurant Automation Tech: Cooking robots, AI ordering, automated inventory. What\'s available? What\'s coming?', xp: 50},
                {mode: 'ideas', task: 'Research Successful Automation: Which restaurants have automated well? Sweetgreen, Chipotle. Analyze implementations.', xp: 50},
                {mode: 'execution', task: 'Create an Automation Readiness Assessment: What makes a restaurant ready for automation? The diagnostic.', xp: 55},
                {mode: 'execution', task: 'Design Integration Playbooks: Step-by-step for implementing common automation systems.', xp: 55},
                {mode: 'ideas', task: 'Study Automation Failures: What goes wrong? Technology, staff, customer reaction. Learn from mistakes.', xp: 50},
                {mode: 'execution', task: 'Build ROI Calculators: Help restaurants evaluate automation investments. Make the business case.', xp: 50},
                {mode: 'personality', task: 'Help 3 Restaurants Automate: Hands-on implementation. Build case studies.', xp: 60},
                {mode: 'execution', task: 'Create Staff Transition Programs: Help restaurant workers adapt to automated environments.', xp: 50},
                {mode: 'execution', task: 'Design Hybrid Human-Robot Workflows: How do humans and machines work together in restaurants?', xp: 55},
                {mode: 'personality', task: 'Partner with Automation Vendors: They need implementation help. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Build a Restaurant Automation Consultancy: Ongoing service for restaurants implementing technology.', xp: 55},
                {mode: 'ideas', task: 'Predict Full Automation Threshold: Write a 2029 headline about the first fully automated restaurant chain. What was the tipping point?', xp: 45}
            ]
        },
        {
            title: '🏠 Ghost Kitchen Brand Studios',
            mode: 'execution',
            description: 'Delivery-only restaurants need great brands, not great locations. Creating virtual restaurant brands optimized for delivery.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Ghost Kitchen Landscape: Who\'s succeeding? CloudKitchens, Kitchen United, virtual brands. Analyze the market.', xp: 45},
                {mode: 'ideas', task: 'Study Virtual Brand Success Factors: What makes a delivery-only brand work? Menu, packaging, positioning.', xp: 50},
                {mode: 'execution', task: 'Create a Virtual Brand Development Framework: Process for creating ghost kitchen brands from concept to launch.', xp: 55},
                {mode: 'execution', task: 'Design Delivery-Optimized Menus: Food that travels well, photographs well, and has good margins.', xp: 50},
                {mode: 'ideas', task: 'Analyze Delivery Platform Dynamics: How do Uber Eats, DoorDash algorithms work? Optimize for visibility.', xp: 50},
                {mode: 'execution', task: 'Build Brand Identity Systems: Logos, packaging, photography for virtual restaurants.', xp: 50},
                {mode: 'personality', task: 'Launch 3 Virtual Brands: Create and test ghost kitchen concepts. Learn what works.', xp: 55},
                {mode: 'execution', task: 'Create Kitchen Efficiency Designs: Layouts and workflows for ghost kitchen operations.', xp: 50},
                {mode: 'execution', task: 'Design Multi-Brand Kitchen Models: One kitchen, multiple delivery brands. Operational complexity.', xp: 55},
                {mode: 'personality', task: 'Partner with Ghost Kitchen Operators: They need brands to fill capacity. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Build a Virtual Brand Portfolio: Multiple brands you own or license to operators.', xp: 55},
                {mode: 'ideas', task: 'Predict Ghost Kitchen Consolidation: Write a 2028 headline about virtual restaurant brand winners. Who dominated?', xp: 45}
            ]
        }
    ]
},

// ============================================================================
// 👁️ AI SURVEILLANCE EXPANDS - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'ai-surveillance-expands',
    title: 'AI surveillance expands significantly in democratic countries',
    source: 'Government AI adoption, corporate surveillance tools, privacy erosion trends',
    probability: 80,
    timeframe: '2026-2030',
    category: 'ai',
    threatMode: 'personality',
    threatReason: 'Privacy becomes a luxury, not a right. Those who help people protect their privacy, manage their digital footprint, and navigate surveillance win.',
    atRisk: 'Anyone with something to hide, activists, journalists, people who value privacy, anyone who thinks "I have nothing to hide"',
    opportunities: [
        {
            title: '🔒 Privacy-as-Luxury Products',
            mode: 'execution',
            description: 'Secure devices, private communications, anti-tracking tools. Privacy becomes a premium product for those who can afford it.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Privacy Threat Landscape: What data is collected? By whom? How is it used? Create a comprehensive threat model.', xp: 50},
                {mode: 'ideas', task: 'Research Privacy Tools: Signal, ProtonMail, VPNs, Faraday bags. What exists? What\'s the UX like?', xp: 45},
                {mode: 'execution', task: 'Design a "Privacy Stack" for Consumers: Complete toolkit for protecting privacy. Devices, software, practices.', xp: 55},
                {mode: 'ideas', task: 'Study Privacy Buyer Psychology: Who pays for privacy? What do they fear? Understand the customer.', xp: 50},
                {mode: 'execution', task: 'Create Privacy Setup Services: Help people implement privacy tools. The white-glove onboarding.', xp: 50},
                {mode: 'execution', task: 'Build a Privacy Score Assessment: Measure someone\'s current privacy posture. The diagnostic.', xp: 50},
                {mode: 'personality', task: 'Help 10 Clients Implement Privacy: Set up comprehensive privacy protection. Document the process.', xp: 55},
                {mode: 'execution', task: 'Design Privacy-First Products: Devices and services built for privacy. Product specifications.', xp: 55},
                {mode: 'execution', task: 'Create Enterprise Privacy Programs: Help companies protect employee and customer privacy.', xp: 55},
                {mode: 'personality', task: 'Partner with Security Companies: They have privacy-conscious clients. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Build a Privacy Subscription Service: Ongoing privacy management and updates.', xp: 50},
                {mode: 'ideas', task: 'Predict Privacy Becoming Luxury: Write a 2030 headline about privacy being only for the rich. What happened?', xp: 50}
            ]
        },
        {
            title: '🎭 Reputation & Footprint Management',
            mode: 'personality',
            description: 'Manage your digital footprint in a surveillance world. What\'s findable, what\'s not, what narrative does the data tell?',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Map the Digital Footprint: What data exists about a typical person? Social, financial, location, communication. Audit the trail.', xp: 45},
                {mode: 'ideas', task: 'Research Reputation Management: What do PR firms do for celebrities? What translates to regular people?', xp: 45},
                {mode: 'execution', task: 'Create a Digital Footprint Audit: Process for discovering what\'s findable about someone online.', xp: 50},
                {mode: 'execution', task: 'Design Footprint Reduction Strategies: How to minimize digital trail. Data deletion, account removal, privacy settings.', xp: 55},
                {mode: 'ideas', task: 'Study Data Broker Landscape: Who has your data? How do you get removed? Map the industry.', xp: 50},
                {mode: 'execution', task: 'Build Data Removal Services: Systematically remove data from brokers and databases.', xp: 55},
                {mode: 'personality', task: 'Audit 10 Clients\' Digital Footprints: Find what exists. Help them decide what to address.', xp: 55},
                {mode: 'execution', task: 'Create Positive Footprint Strategies: Not just removing bad, but building the narrative you want.', xp: 50},
                {mode: 'execution', task: 'Design Ongoing Monitoring: Alert when new data appears. Continuous reputation protection.', xp: 50},
                {mode: 'personality', task: 'Partner with HR Departments: They care about employee digital footprints. Offer services.', xp: 55},
                {mode: 'execution', task: 'Build a Footprint Management Platform: Tools for monitoring and managing digital presence.', xp: 55},
                {mode: 'ideas', task: 'Predict Footprint Scoring: Write a 2029 headline about employers using digital footprint scores. What are the implications?', xp: 45}
            ]
        },
        {
            title: '👁️ Civic Oversight & Transparency Tools',
            mode: 'ideas',
            description: 'Watching the watchers. Tools and organizations that monitor government and corporate surveillance and advocate for privacy rights.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map Surveillance Programs: What surveillance exists? Government, corporate, local. Document what\'s known.', xp: 50},
                {mode: 'ideas', task: 'Study Privacy Advocacy History: ACLU, EFF, Privacy International. What tactics work for protecting rights?', xp: 50},
                {mode: 'execution', task: 'Create Surveillance Transparency Tools: Make surveillance visible to ordinary people. Dashboards, reports.', xp: 55},
                {mode: 'ideas', task: 'Research FOIA and Transparency Laws: What information can be requested? How to use legal tools.', xp: 45},
                {mode: 'execution', task: 'Design "Know Your Surveillance" Campaigns: Educate people about what\'s watching them.', xp: 50},
                {mode: 'execution', task: 'Build a Surveillance Database: Searchable information about surveillance programs and vendors.', xp: 55},
                {mode: 'personality', task: 'File 10 FOIA Requests: Request surveillance information. Document what you learn.', xp: 50},
                {mode: 'execution', task: 'Create Policy Recommendations: What laws should exist to limit surveillance? Develop the framework.', xp: 55},
                {mode: 'personality', task: 'Build Coalition of Privacy Advocates: Connect organizations working on surveillance issues.', xp: 55},
                {mode: 'execution', task: 'Design Accountability Mechanisms: How do you hold surveillance programs accountable?', xp: 55},
                {mode: 'personality', task: 'Partner with Journalists: They investigate surveillance. Support their work with tools and data.', xp: 55},
                {mode: 'ideas', task: 'Predict the Privacy Backlash: Write a 2031 headline about a major anti-surveillance movement. What triggered it?', xp: 50}
            ]
        }
    ]
},

// ============================================================================
// 📚 CONTINUOUS LEARNING ESSENTIAL - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'continuous-learning-essential',
    title: 'Continuous learning becomes essential for career survival',
    source: 'Skill half-life data, AI disruption pace, employer expectations',
    probability: 95,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'Skills expire in years, not decades. Those who can\'t keep learning get left behind. Those who build learning systems and habits win.',
    atRisk: 'Workers who stopped learning after school, anyone who thinks their skills are "done," people in rapidly changing fields without learning habits',
    opportunities: [
        {
            title: '📱 Learning Operating System Products',
            mode: 'execution',
            description: 'Not courses — systems. Products that help people maintain continuous learning habits, track skills, and stay current.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Research Learning Habit Formation: How do people build lasting learning habits? Atomic Habits, behavior design. Study what works.', xp: 50},
                {mode: 'ideas', task: 'Map Current Learning Tools: Duolingo, Blinkist, Coursera, YouTube. What exists? What\'s the gap in habit systems?', xp: 45},
                {mode: 'execution', task: 'Design a Learning OS: Not content — the system for continuous learning. Habits, tracking, accountability.', xp: 55},
                {mode: 'execution', task: 'Create a Daily Learning Routine: Minimum viable learning habit. 15 minutes that compound over years.', xp: 45},
                {mode: 'ideas', task: 'Study Learning Retention: How do you remember what you learn? Spaced repetition, application. Optimize for retention.', xp: 50},
                {mode: 'execution', task: 'Build a Skills Tracker: What skills are you developing? How are you progressing? The personal dashboard.', xp: 50},
                {mode: 'personality', task: 'Test Your System with 20 People: Do they learn? Do they stick with it? Iterate based on real use.', xp: 55},
                {mode: 'execution', task: 'Design Learning Content Curation: Not more content — finding the right content for each person.', xp: 50},
                {mode: 'execution', task: 'Create Learning Accountability Features: Social support, streaks, commitments. The motivation layer.', xp: 50},
                {mode: 'personality', task: 'Partner with HR Departments: They want employees learning continuously. Offer your system.', xp: 55},
                {mode: 'execution', task: 'Build Enterprise Learning OS: Company-wide systems for continuous learning culture.', xp: 55},
                {mode: 'ideas', task: 'Predict Learning as Vital Sign: Write a 2030 headline about learning velocity becoming a key career metric. What changed?', xp: 45}
            ]
        },
        {
            title: '🎓 Corporate Upskilling Programs',
            mode: 'execution',
            description: 'Companies need their workforce to continuously learn. Building and delivering corporate learning programs that actually work.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Corporate Learning Failures: Why do most corporate training programs fail? Engagement, relevance, application. Diagnose the problem.', xp: 50},
                {mode: 'ideas', task: 'Study Successful Upskilling: Which companies do this well? Google, AT&T, Amazon. What makes their programs work?', xp: 50},
                {mode: 'execution', task: 'Design an Upskilling Framework: Methodology for building effective corporate learning programs.', xp: 55},
                {mode: 'execution', task: 'Create Skills Gap Assessment: Identify what skills a company needs vs has. The diagnostic.', xp: 50},
                {mode: 'ideas', task: 'Map Manager Role in Learning: How do managers enable or block learning? Design for manager support.', xp: 50},
                {mode: 'execution', task: 'Build Learning Cohort Models: Group-based learning that creates accountability and community.', xp: 55},
                {mode: 'personality', task: 'Run 3 Corporate Upskilling Programs: Deliver for real companies. Build case studies.', xp: 60},
                {mode: 'execution', task: 'Design Measurement for Learning: How do you prove learning programs work? Metrics beyond completion rates.', xp: 50},
                {mode: 'execution', task: 'Create Manager Training for Learning Culture: Help managers support employee development.', xp: 50},
                {mode: 'personality', task: 'Partner with HR Tech Companies: They need learning content and methodology. Build relationships.', xp: 55},
                {mode: 'execution', task: 'Build an Upskilling Consultancy: Ongoing service for companies managing workforce development.', xp: 55},
                {mode: 'ideas', task: 'Predict the CLO Rise: Write a 2029 headline about Chief Learning Officers becoming critical executives. What drove the change?', xp: 45}
            ]
        },
        {
            title: '🤖 AI-Guided Personalized Learning',
            mode: 'execution',
            description: 'AI that knows what you need to learn, finds the resources, and adapts to how you learn. Personalized learning paths at scale.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research Personalized Learning: What does effective personalization look like? Adaptive systems, recommendations. Study the field.', xp: 50},
                {mode: 'ideas', task: 'Map Learning Style Variations: How do people differ in learning? Visual, hands-on, reading. What personalizations matter?', xp: 45},
                {mode: 'execution', task: 'Design a Learning Recommendation Engine: AI that suggests what to learn next based on goals and gaps.', xp: 55},
                {mode: 'execution', task: 'Create Skill Goal Setting Systems: Help people define what they want to learn and why. The motivation layer.', xp: 50},
                {mode: 'ideas', task: 'Study Content Discovery: How do you find the best learning resources? Curation, reviews, recommendations.', xp: 45},
                {mode: 'execution', task: 'Build Learning Path Generation: AI that creates customized learning journeys from available content.', xp: 55},
                {mode: 'personality', task: 'Test with 30 Learners: Does personalized AI guidance improve outcomes? Measure and iterate.', xp: 55},
                {mode: 'execution', task: 'Design Progress Adaptation: AI that adjusts based on how someone is doing. Speed up, slow down, change approach.', xp: 55},
                {mode: 'execution', task: 'Create Learning Coach Chatbot: AI that answers questions, provides encouragement, keeps people on track.', xp: 55},
                {mode: 'personality', task: 'Partner with Content Providers: They have content. You have the personalization. Build integrations.', xp: 55},
                {mode: 'execution', task: 'Build an AI Learning Platform: Full system for personalized continuous learning.', xp: 60},
                {mode: 'ideas', task: 'Predict AI Tutors for Adults: Write a 2030 headline about AI learning coaches becoming standard. What enabled mass adoption?', xp: 45}
            ]
        }
    ]
},

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
    source: 'Polymarket prediction market',
    sourceUrl: 'https://polymarket.com/predictions/openai',
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
    source: 'Polymarket prediction market',
    sourceUrl: 'https://polymarket.com/event/gpt-6-released-by',
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
    source: 'Polymarket prediction market',
    sourceUrl: 'https://polymarket.com/predictions/ai',
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
    source: 'Polymarket prediction market',
    sourceUrl: 'https://polymarket.com/predictions/openai',
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
    source: 'Polymarket prediction market',
    sourceUrl: 'https://polymarket.com/predictions/ai',
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
},

// ADDITIONAL FORECASTS INSERTED HERE
// ============================================================================
// 💻 TECH & BUSINESS
// ============================================================================

{
    id: 'spacex-ipo-trillion',
    title: 'SpaceX IPO closes above $1 trillion market cap',
    source: 'Polymarket',
    probability: 81,
    timeframe: '2026-2027',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Space economy opens up. Early movers in space-adjacent businesses win.',
    atRisk: 'Companies ignoring space as a market',
    opportunities: [
        {
            title: '🚀 Space Economy Analyst',
            mode: 'ideas',
            description: 'Help investors and businesses understand opportunities in the emerging space economy.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research the space economy: Starlink, satellite internet, space tourism. Map the landscape.', xp: 40},
                {mode: 'ideas', task: 'Identify 20 companies that could benefit from SpaceX success (suppliers, competitors, adjacent).', xp: 40},
                {mode: 'execution', task: 'Create "Space Economy Investment Map" showing opportunities and connections.', xp: 50},
                {mode: 'personality', task: 'Share your analysis with investors and space enthusiasts.', xp: 45},
                {mode: 'execution', task: 'Write weekly updates on space economy developments.', xp: 45},
                {mode: 'personality', task: 'Build audience of space-curious investors.', xp: 50},
                {mode: 'execution', task: 'Create premium research reports on specific opportunities.', xp: 55},
                {mode: 'personality', task: 'Connect with VCs and analysts covering space.', xp: 55},
                {mode: 'execution', task: 'Develop consulting offering for space-adjacent investment.', xp: 55},
                {mode: 'execution', task: 'Land first paid research or consulting client.', xp: 60}
            ]
        }
    ]
},

{
    id: 'anthropic-ipo',
    title: 'Anthropic IPO values company at $100B+',
    source: 'Polymarket',
    probability: 45,
    timeframe: '2026-2027',
    category: 'tech',
    threatMode: 'ideas',
    threatReason: 'AI safety-focused companies may dominate enterprise. Understanding their approach matters.',
    atRisk: 'Businesses choosing AI vendors without considering safety track record',
    opportunities: [
        {
            title: '🛡️ AI Vendor Evaluation Consultant',
            mode: 'ideas',
            description: 'Help enterprises choose between AI vendors based on safety, reliability, and fit.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Deep dive into differences between OpenAI, Anthropic, Google, Meta AI approaches.', xp: 40},
                {mode: 'execution', task: 'Create comparison matrix: safety, capabilities, pricing, enterprise features.', xp: 45},
                {mode: 'ideas', task: 'Research AI vendor failures and successes. What went wrong/right?', xp: 40},
                {mode: 'execution', task: 'Develop "AI Vendor Selection Framework" for enterprises.', xp: 50},
                {mode: 'personality', task: 'Share framework with CTOs and technical leaders.', xp: 50},
                {mode: 'execution', task: 'Create RFP template for AI vendor evaluation.', xp: 45},
                {mode: 'personality', task: 'Offer free vendor evaluations to 3 companies.', xp: 50},
                {mode: 'execution', task: 'Build case studies from your evaluations.', xp: 45},
                {mode: 'execution', task: 'Package as consulting service.', xp: 50},
                {mode: 'execution', task: 'Get first paid vendor evaluation engagement.', xp: 55}
            ]
        }
    ]
},

{
    id: 'apple-ai-device',
    title: 'Apple launches dedicated AI device (not phone/watch/computer)',
    source: 'Industry Rumors',
    probability: 40,
    timeframe: '2026-2027',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Apple entering AI hardware legitimizes the category and sets design standards.',
    atRisk: 'AI hardware startups that can\'t compete with Apple\'s ecosystem',
    opportunities: [
        {
            title: '📱 Apple Ecosystem AI Developer',
            mode: 'execution',
            description: 'Build apps and integrations for Apple\'s AI ecosystem before competitors.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'execution', task: 'Learn Apple\'s AI frameworks: Core ML, Create ML, Apple Intelligence APIs.', xp: 45},
                {mode: 'ideas', task: 'Study how Apple approaches AI differently (on-device, privacy-focused).', xp: 40},
                {mode: 'execution', task: 'Build a simple app using Apple\'s AI capabilities.', xp: 50},
                {mode: 'ideas', task: 'Identify 10 app ideas that could leverage Apple AI hardware.', xp: 40},
                {mode: 'execution', task: 'Prototype your best app idea.', xp: 55},
                {mode: 'personality', task: 'Share your development journey with iOS developer community.', xp: 45},
                {mode: 'execution', task: 'Submit app to App Store.', xp: 50},
                {mode: 'personality', task: 'Connect with Apple developer relations if possible.', xp: 50},
                {mode: 'execution', task: 'Iterate based on user feedback.', xp: 45},
                {mode: 'execution', task: 'Get 1,000 downloads or first revenue.', xp: 60}
            ]
        }
    ]
},

{
    id: 'meta-metaverse-pivot',
    title: 'Meta pivots away from metaverse, doubles down on AI',
    source: 'Industry Analysis',
    probability: 70,
    timeframe: '2026',
    category: 'tech',
    threatMode: 'ideas',
    threatReason: 'VR/AR timelines extend. AI becomes the near-term opportunity.',
    atRisk: 'VR developers who bet everything on near-term metaverse adoption',
    opportunities: [
        {
            title: '🥽 VR/AR Long-Term Positioning',
            mode: 'ideas',
            description: 'Position for VR/AR\'s eventual success while building sustainable income now.',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research VR/AR adoption curves. When do experts expect mass adoption?', xp: 35},
                {mode: 'ideas', task: 'Identify skills that transfer from VR/AR to current AI opportunities.', xp: 40},
                {mode: 'execution', task: 'Build one project that works in both VR and non-VR contexts.', xp: 50},
                {mode: 'execution', task: 'Create content about VR/AR for the long-term believers.', xp: 40},
                {mode: 'personality', task: 'Build community of patient VR/AR enthusiasts.', xp: 50},
                {mode: 'execution', task: 'Develop AI-powered tools that could enhance future VR/AR.', xp: 50},
                {mode: 'personality', task: 'Connect with VR/AR researchers and developers.', xp: 50},
                {mode: 'execution', task: 'Create sustainable income while waiting for VR/AR.', xp: 55},
                {mode: 'ideas', task: 'Write "State of VR/AR" annual report to build authority.', xp: 45},
                {mode: 'execution', task: 'Be positioned when VR/AR finally takes off.', xp: 55}
            ]
        }
    ]
},

{
    id: 'tiktok-ban-upheld',
    title: 'TikTok ban or forced sale happens in US',
    source: 'Legal Analysis',
    probability: 55,
    timeframe: '2026',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Creator platforms are fragile. Diversification across platforms essential.',
    atRisk: 'Creators dependent entirely on TikTok for income',
    opportunities: [
        {
            title: '📱 Platform-Agnostic Creator',
            mode: 'execution',
            description: 'Build audience across multiple platforms so no single ban can destroy your business.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Audit your current platform dependency. Where does your income come from?', xp: 30},
                {mode: 'execution', task: 'Identify 3 platforms where your content could work.', xp: 35},
                {mode: 'execution', task: 'Repurpose your best content for a second platform.', xp: 40},
                {mode: 'execution', task: 'Post consistently on 2 platforms for 30 days.', xp: 45},
                {mode: 'personality', task: 'Build email list to own your audience directly.', xp: 50},
                {mode: 'execution', task: 'Get 500+ subscribers on email list.', xp: 50},
                {mode: 'execution', task: 'Create content that drives people to your owned channels.', xp: 45},
                {mode: 'personality', task: 'Build relationships with followers across platforms.', xp: 45},
                {mode: 'execution', task: 'Ensure no single platform is >50% of your audience.', xp: 50},
                {mode: 'execution', task: 'Create revenue stream that doesn\'t depend on any platform.', xp: 55}
            ]
        }
    ]
},

{
    id: 'twitter-x-decline',
    title: 'Twitter/X loses significant market share to alternatives',
    source: 'Industry Analysis',
    probability: 45,
    timeframe: '2026',
    category: 'tech',
    threatMode: 'personality',
    threatReason: 'Professional networking platforms shift. Being early on new platforms matters.',
    atRisk: 'Professionals whose network is entirely on Twitter/X',
    opportunities: [
        {
            title: '🔄 Platform Migration Expert',
            mode: 'personality',
            description: 'Help professionals and businesses migrate their presence to emerging platforms.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Research Twitter alternatives: Threads, Bluesky, Mastodon. What\'s different about each?', xp: 30},
                {mode: 'execution', task: 'Create accounts on 3 alternative platforms. Learn how they work.', xp: 35},
                {mode: 'execution', task: 'Document best practices for each platform.', xp: 40},
                {mode: 'personality', task: 'Build small presence on each platform to understand dynamics.', xp: 45},
                {mode: 'execution', task: 'Create "Platform Migration Playbook" guide.', xp: 45},
                {mode: 'personality', task: 'Help 5 people migrate their presence for free.', xp: 50},
                {mode: 'execution', task: 'Document results and best practices.', xp: 40},
                {mode: 'personality', task: 'Share case studies of successful migrations.', xp: 45},
                {mode: 'execution', task: 'Offer paid migration services.', xp: 50},
                {mode: 'execution', task: 'Get first paid migration client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'amazon-ai-assistant',
    title: 'Amazon launches GPT-competitor AI assistant',
    source: 'Industry Rumors',
    probability: 75,
    timeframe: '2026',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'E-commerce AI changes shopping forever. Product discovery goes conversational.',
    atRisk: 'E-commerce sellers not optimizing for AI-driven discovery',
    opportunities: [
        {
            title: '🛒 AI Shopping Optimization',
            mode: 'execution',
            description: 'Help e-commerce sellers optimize for AI-driven product discovery.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study how AI assistants recommend products. What signals do they use?', xp: 40},
                {mode: 'ideas', task: 'Research how Amazon\'s algorithm currently works. Read case studies.', xp: 40},
                {mode: 'execution', task: 'Create framework for AI-friendly product listings.', xp: 45},
                {mode: 'execution', task: 'Test framework on real products (yours or client\'s).', xp: 50},
                {mode: 'personality', task: 'Share findings with Amazon seller communities.', xp: 45},
                {mode: 'execution', task: 'Document before/after results.', xp: 45},
                {mode: 'personality', task: 'Offer free audits to 5 Amazon sellers.', xp: 50},
                {mode: 'execution', task: 'Refine framework based on real results.', xp: 45},
                {mode: 'execution', task: 'Create consulting service package.', xp: 50},
                {mode: 'execution', task: 'Get first paid optimization client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'starlink-global-coverage',
    title: 'Starlink achieves true global coverage',
    source: 'SpaceX Announcements',
    probability: 85,
    timeframe: '2026',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Internet everywhere changes remote work, travel, and living possibilities.',
    atRisk: 'Businesses built on geographic internet limitations',
    opportunities: [
        {
            title: '🌍 Remote Location Business',
            mode: 'execution',
            description: 'Build businesses that leverage internet access in previously unreachable locations.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Identify 10 businesses that couldn\'t exist without reliable rural/remote internet.', xp: 35},
                {mode: 'ideas', task: 'Research digital nomad trends. Where are people going? What do they need?', xp: 40},
                {mode: 'execution', task: 'Visit or research 3 remote locations with new Starlink coverage.', xp: 45},
                {mode: 'ideas', task: 'Identify specific opportunity in underserved remote location.', xp: 45},
                {mode: 'execution', task: 'Create business plan for remote-location venture.', xp: 50},
                {mode: 'personality', task: 'Connect with people already living/working in remote areas.', xp: 50},
                {mode: 'execution', task: 'Test your concept with minimal investment.', xp: 55},
                {mode: 'execution', task: 'Get first customers or validate demand.', xp: 55},
                {mode: 'personality', task: 'Document your journey for others interested in remote opportunities.', xp: 45},
                {mode: 'execution', task: 'Scale or pivot based on real results.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🚗 AUTONOMOUS VEHICLES & TRANSPORTATION
// ============================================================================

{
    id: 'robotaxi-10-cities',
    title: 'Robotaxis operate in 10+ major US cities',
    source: 'Industry Projections',
    probability: 70,
    timeframe: '2026-2027',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Transportation becomes a service, not ownership. Massive ripple effects.',
    atRisk: 'Car dealerships, parking garages, gas stations in urban areas',
    opportunities: [
        {
            title: '🚕 Robotaxi Experience Designer',
            mode: 'ideas',
            description: 'Design in-vehicle experiences for passengers who no longer need to drive.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Take 10+ robotaxi rides (Waymo, Cruise). Document the experience in detail.', xp: 40},
                {mode: 'ideas', task: 'Identify 15 things passengers could do during rides they can\'t do while driving.', xp: 40},
                {mode: 'ideas', task: 'Study airline and train passenger experiences. What translates to cars?', xp: 35},
                {mode: 'execution', task: 'Design 5 in-vehicle experience concepts (productivity, entertainment, wellness).', xp: 50},
                {mode: 'personality', task: 'Survey 30 robotaxi riders about what they want.', xp: 50},
                {mode: 'execution', task: 'Create detailed design deck for best concept.', xp: 50},
                {mode: 'personality', task: 'Share concepts with AV companies and automotive designers.', xp: 55},
                {mode: 'execution', task: 'Build prototype or mockup of one experience.', xp: 55},
                {mode: 'personality', task: 'Connect with automotive interior designers.', xp: 50},
                {mode: 'execution', task: 'Pitch to AV companies or automotive suppliers.', xp: 60}
            ]
        }
    ]
},

// ============================================================================
// 🚗 AUTONOMOUS VEHICLES MASS ADOPTION - COMPREHENSIVE FORECAST
// ============================================================================

{
    id: 'autonomous-mass-adoption-2030',
    title: 'Fully autonomous vehicles reach mass adoption by 2030',
    source: 'Waymo, Tesla FSD trajectory',
    probability: 72,
    timeframe: '2028-2030',
    category: 'transportation',
    threatMode: 'execution',
    threatReason: 'Driving becomes obsolete, but the commute doesn\'t disappear — it transforms. Winners design the experience inside the vehicle, not the vehicle itself.',
    atRisk: 'Professional drivers, driving instructors, auto insurance agents, parking lot operators, car dealership sales, traffic enforcement, body shops dependent on human error accidents',
    opportunities: [
        // OPPORTUNITY 1: INSURANCE
        {
            title: '🛡️ Autonomous Insurance Innovation',
            mode: 'ideas',
            description: 'Insurance shifts from driver risk to system risk. Entirely new categories of coverage will emerge for AI failures, software updates, and fleet operations.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Map the New Liability Stack: Take a single autonomous trip (real or hypothetical). Write down every system involved: vehicle hardware, perception software, decision-making AI, mapping provider, cloud infrastructure, update pipeline. Identify who gets blamed if something goes wrong at each layer.', xp: 45},
                {mode: 'ideas', task: 'Replace "Accident" With "Failure Mode": Take 5 historical car accident scenarios. Rewrite them as system failure reports: sensor misclassification, latency issue, edge-case data gap, model confidence error. Categorize each by predictability and repeatability.', xp: 50},
                {mode: 'execution', task: 'Design a Synthetic Risk Dataset: Invent a fictional autonomous fleet. Define miles driven, software update frequency, incident rate per update, severity tiers. Build a simple risk table that an insurer could price.', xp: 55},
                {mode: 'execution', task: 'Audit an AI Like an Insurer Would: Pick any AI system (navigation, scheduling, recommender). Answer: How often does it fail? How detectable are failures? How fast can it be rolled back? Score it like a credit report for AI.', xp: 50},
                {mode: 'ideas', task: 'Find the New Policyholder: List 10 companies involved in autonomy (sensor manufacturers, AI model providers, mapping services, OTA update vendors). For each: What could go wrong? Who sues them? What coverage doesn\'t exist yet?', xp: 55},
                {mode: 'execution', task: 'Write a One-Page Policy That Doesn\'t Exist: Create a fictional policy like "Model Update Liability Insurance" or "AI Perception Error Indemnity". Define what\'s covered, what\'s excluded, trigger conditions.', xp: 50},
                {mode: 'ideas', task: 'Pick a Single Failure Mode to Insure: Choose one risk (software update regressions, edge-case geography failures, sensor degradation). Write why this risk is growing, why incumbents ignore it, who would pay to transfer it.', xp: 55},
                {mode: 'execution', task: 'Build the "Insurance Adjacent" MVP: Design one of these: AI audit tool, risk dashboard, compliance reporting layer, incident classification system. Rule: You are NOT allowed to sell insurance yet.', xp: 60},
                {mode: 'personality', task: 'Predict the First Autonomous Insurance Scandal: Invent a plausible headline from 2028. Explain what failed, why insurance coverage was unclear, who lost billions. Propose the company that could have prevented it. Share publicly.', xp: 55}
            ]
        },
        // OPPORTUNITY 2: FASHION & LIFESTYLE
        {
            title: '👜 Fashion & Lifestyle for Transit',
            mode: 'personality',
            description: 'Interiors become status symbols. Clothing categories will be invented for postures that didn\'t matter before. The Labubu and Stanley Cup accessory phenomenon will repeat inside vehicles.',
            difficulty: 'medium',
            timeframe: '3-9 months',
            quests: [
                {mode: 'ideas', task: 'Redefine the Use-Case of Clothing: Take one clothing category (blazer, dress, pants, shoes). Rewrite its purpose for a 2-4 hour autonomous commute: What fails? What becomes uncomfortable? What becomes unnecessary? Redefine the garment\'s job.', xp: 40},
                {mode: 'ideas', task: 'Map the New Postures: List and sketch outfits for these postures: reclining + laptop, fully asleep, one-leg-up lounging, camera-on Zoom call, quick exit → dinner-ready.', xp: 45},
                {mode: 'execution', task: 'Design an Outfit That Never Stands Up: Design a head-to-toe look that never needs to walk more than 30 steps but still signals taste, status, or identity. Choose fabrics, closures, silhouettes accordingly.', xp: 50},
                {mode: 'ideas', task: 'Invent a New Clothing Category: Create a category that only makes sense in driverless cars: transit robes, modular sleep suits, convertible work-lounge skins, privacy-enhancing garments. Define when it\'s worn, why it didn\'t exist before, why it feels inevitable.', xp: 55},
                {mode: 'execution', task: 'Dress for Always-On Cameras: Design a look optimized for sitting camera angles, mixed lighting, long wear without adjustment. Eliminate wrinkles, glare, awkward folds.', xp: 45},
                {mode: 'execution', task: 'Design the First "In-Car Capsule Drop": Create a 5-piece capsule meant to be sold inside the vehicle ecosystem through ride-hailing upgrades, subscription wardrobes, or autonomous fleet partnerships.', xp: 55},
                {mode: 'ideas', task: 'Design the Autonomous Travel Aesthetic: Design a cohesive in-car lifestyle kit: clothing, blanket/wrap, slippers, scent, eye mask. Name the aesthetic ("Night Transit", "Soft Arrival", "Moving Residence").', xp: 50},
                {mode: 'ideas', task: 'Who Loses When Cars Become Lounges? List fashion categories that decline (heels, stiff tailoring, hard bags) vs explode (knits, wraps, transformables). List retail formats that die vs emerge.', xp: 45},
                {mode: 'execution', task: 'Pick a Single In-Transit Pain Point: Choose one (wrinkling during long recline, temperature regulation while asleep, looking polished after sleep, privacy in glass-walled vehicles). Write who experiences this daily, why current fashion ignores it, what a premium solution looks like.', xp: 50},
                {mode: 'execution', task: 'Prototype Without Fabric: Create a digital lookbook, narrative campaign, and product description. No samples allowed. Test taste before manufacturing.', xp: 55},
                {mode: 'personality', task: 'Predict the First Driverless Fashion Status Symbol: Write a 2029 headline about the garment everyone wears in autonomous cars. Explain what it signals, who adopts first, why it becomes inevitable. Share publicly.', xp: 50}
            ]
        },
        // OPPORTUNITY 3: CAR INTERIORS
        {
            title: '🪑 Car Interior Revolution',
            mode: 'execution',
            description: 'Car interiors transform from driver-centric to room-like spaces. Sleep zones, work zones, social zones, and privacy zones become standard. The steering wheel deletion creates new square footage for value.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Delete the Driver: Take a current luxury car interior. Remove steering wheel, pedals, driver-oriented dashboard. Redesign the space as if no one ever faces forward. Every removed component creates new square footage for value.', xp: 50},
                {mode: 'ideas', task: 'Name the New Zones: Define interior zones for Sleep, Work, Social, Privacy, and Transition (wake-up/arrival). Name them like rooms in a home or hotel suite.', xp: 45},
                {mode: 'execution', task: 'Design for the 3-Hour Recline: Design seating for 3-hour sleep, 90-minute work session, 30-minute decompression. Specify angle, materials, pressure points, sensory controls.', xp: 55},
                {mode: 'ideas', task: 'Invent a Seat That Isn\'t a Seat: Create a new object that replaces traditional car seats, airline seats, and office chairs. Define what posture it supports, how it transforms, why it couldn\'t exist before autonomy.', xp: 55},
                {mode: 'execution', task: 'Design a Mood Engine: Create 3 interior modes: Sleep Mode, Focus Mode, Arrival Mode. Define lighting, sound, temperature, scent, screen behavior for each.', xp: 50},
                {mode: 'execution', task: 'Design the Zoom-Ready Interior: Design an interior optimized for video calls, content creation, private conversations. Specify camera placement, background surfaces, lighting angles, acoustic treatment.', xp: 50},
                {mode: 'ideas', task: 'Design an Interior That Never Shows Speed: Design an interior where speed is invisible, acceleration is imperceptible, distance feels irrelevant. Explain why this increases trust and who wants it most.', xp: 50},
                {mode: 'execution', task: 'Design a Mobile Hotel Room: Design a one-night autonomous suite with sleep, bathroom workaround, storage, wake-up ritual. Define who pays, when it\'s used, why hotels lose.', xp: 55},
                {mode: 'ideas', task: 'Create an Interior Subscription: Design a subscription for seasonal interiors, mood-based swaps, or brand-collab interiors. Define update cadence, price logic, target customer.', xp: 50},
                {mode: 'execution', task: 'Build the Interior MVP Without a Car: Prototype a seat module, lighting system, privacy solution, or digital interior OS. Must work in a room first, no vehicle required.', xp: 60},
                {mode: 'personality', task: 'Predict the First Interior Status Symbol: Write a 2028 headline about the autonomous interior feature everyone now expects. Explain what it signals, who adopts first, why it becomes non-negotiable. Share publicly.', xp: 50}
            ]
        },
        // OPPORTUNITY 4: SLEEP THERAPY & SOUNDPROOFING
        {
            title: '😴 Sleep Therapy & Soundproof Systems',
            mode: 'execution',
            description: 'Driverless cars turn sleep from "recovery at home" into "programmable therapy in motion." Silence, darkness, temperature, vibration, and sound become products, not amenities.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Redefine Sleep as an Input-Output System: Break sleep into controllable variables: Sound, Light, Temperature, Motion, Pressure, Timing. For each: What helps sleep? What disrupts it in cars specifically?', xp: 45},
                {mode: 'ideas', task: 'Map Sleep Debt by Lifestyle: Pick 3 personas (founder/exec, parent, shift worker). For each: When are they sleep deprived? Where are they already traveling while exhausted? What would they pay for guaranteed rest?', xp: 50},
                {mode: 'execution', task: 'Audit Noise Like a Sleep Engineer: List all sound sources inside an autonomous vehicle (road noise, wind, mechanical hum, notifications, other passengers). Classify each by frequency, predictability, sleep disruption severity.', xp: 45},
                {mode: 'execution', task: 'Design a Silence Stack: Design a layered silence system: physical insulation, active noise cancellation, sound masking, personalized audio profiles. Explain what each layer solves, why no single solution is enough.', xp: 55},
                {mode: 'execution', task: 'Design a Sleep Therapy Session in Motion: Design a 90-minute mobile sleep protocol with wind-down, sleep induction, maintenance, and wake-up phases. Specify sound, lighting, temperature shifts, timing cues.', xp: 55},
                {mode: 'execution', task: 'Solve the Wake-Up Problem: Design a wake-up system that prevents sleep inertia, syncs with destination arrival, leaves the user functional. Consider light ramps, sound gradients, gentle motion cues.', xp: 50},
                {mode: 'execution', task: 'Design a Mattress for Motion: Design a sleep surface that adapts to vibration, redistributes pressure while reclining, works seated or flat. Explain why existing mattresses don\'t work, what must be invented.', xp: 55},
                {mode: 'execution', task: 'Invent a Personal Sleep Pod: Design a modular pod for shared fleets that provides privacy, sound isolation, hygiene, emotional safety. Define how it\'s cleaned, swapped, and who pays for it.', xp: 60},
                {mode: 'ideas', task: 'Replace the One-Night Hotel: Compare $250 airport hotel stay vs $300 overnight autonomous sleep ride. Analyze convenience, recovery quality, time saved.', xp: 45},
                {mode: 'execution', task: 'Design a Sleep Subscription: Design a subscription offering guaranteed rest hours per month, priority sleep vehicles, personalized sleep profiles. Define who it\'s for, why they stay subscribed, why this beats wearables.', xp: 55},
                {mode: 'execution', task: 'Build a Sleep MVP Without a Car: Prototype one: soundproof panel, sleep sound algorithm, lighting sequence, or portable pod. Must work in a bedroom first, then scale to vehicles.', xp: 55},
                {mode: 'personality', task: 'Predict the First Autonomous Sleep Prescription: Write a 2029 headline: "Doctors now prescribe autonomous sleep sessions for burnout". Explain why it became medicalized, who pays, which company wins first. Share publicly.', xp: 50}
            ]
        },
        // OPPORTUNITY 5: MOTION SICKNESS SOLUTIONS
        {
            title: '🤢 Motion Sickness & Stability Design',
            mode: 'execution',
            description: 'Motion sickness isn\'t a medical issue — it\'s a design failure caused by broken sensory trust. Solving this removes a hard adoption ceiling for autonomous vehicles.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Rewrite What Motion Sickness Actually Is: Rewrite motion sickness as a sensory mismatch, a prediction failure, a systems coordination problem. List what the body expects, what autonomy breaks, where design can intervene.', xp: 45},
                {mode: 'ideas', task: 'Audit Your Own Body: Recall the last time you felt motion sick. Write what you were looking at, your posture, sound environment, airflow, whether motion was predictable.', xp: 40},
                {mode: 'execution', task: 'Design a Fake Horizon: Design a non-screen-based horizon system using light, lines, peripheral cues. Explain where it lives in the interior, when it activates, why it reduces nausea.', xp: 50},
                {mode: 'execution', task: 'Remove the Forward View: Assume no windshield view, passenger facing sideways or backward, screens in use. Design a visual system that still keeps people stable.', xp: 55},
                {mode: 'ideas', task: 'Find the Anti-Nausea Posture: Define the worst posture for nausea and the best posture for nausea. Explain head angle, neck support, body alignment to motion.', xp: 45},
                {mode: 'execution', task: 'Invent a Seat That Actively Prevents Sickness: Design a seat that micro-adjusts during turns, stabilizes the head, signals upcoming motion. Explain what it senses, how it moves, why this beats recliners.', xp: 60},
                {mode: 'execution', task: 'Design a Motion-Calming Sound Profile: Design a sound environment that masks disruptive frequencies, reinforces motion cues, reduces anxiety. Specify frequency ranges, volume dynamics, when it changes.', xp: 50},
                {mode: 'execution', task: 'Engineer Air as Medicine: Design an airflow + scent system that reduces nausea, maintains alertness, avoids sensory overload. Explain vent placement, scent strategy, personalization logic.', xp: 50},
                {mode: 'execution', task: 'Make Motion Predictable: Design a system that subtly communicates upcoming turns, braking, acceleration using light, haptics, sound. No screens allowed.', xp: 55},
                {mode: 'ideas', task: 'Design for Children & Elderly First: Redesign your anti-nausea system for a 6-year-old and an 80-year-old. Explain what changes, what stays, why this improves mainstream adoption.', xp: 50},
                {mode: 'execution', task: 'Build the MVP Without a Car: Prototype one: lighting system, seat add-on, sound profile, or wearable stabilizer. Testable in a room, must show measurable relief.', xp: 55},
                {mode: 'personality', task: 'Predict the First Autonomy Adoption Stall: Write a 2027 headline: "Autonomous adoption slows due to widespread passenger nausea". Explain what wasn\'t solved, who ignored it, which company fixes it and wins. Share publicly.', xp: 50}
            ]
        },
        // OPPORTUNITY 6: AI CONCIERGE ASSISTANTS
        {
            title: '🤖 AI Concierge Trip Assistants',
            mode: 'ideas',
            description: 'The AI assistant stops being a chatbot and becomes a trip director + body-aware concierge. It\'s not helping you drive — it\'s helping you arrive well.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Rewrite the Job Description: Rewrite "concierge" for autonomous travel including physical state (tired, nauseous, alert), emotional state (stressed, excited, private), temporal state (early, on time, flexible). List what the assistant controls, what it never asks permission for, what it escalates to the human.', xp: 50},
                {mode: 'ideas', task: 'Design for Arrival, Not the Ride: Pick one arrival scenario (board meeting, date, overnight flight replacement, family pickup). Define how the passenger should feel upon arrival and what must happen during transit to enable that.', xp: 45},
                {mode: 'execution', task: 'Build the Context Stack: Design a context model that includes calendar, trip length, time of day, passenger history, weather + traffic smoothness, body signals. Decide what is inferred, what is explicit, what decays over time.', xp: 55},
                {mode: 'ideas', task: 'Anticipate Before the User Notices: Write 10 things a concierge assistant should do BEFORE the user asks during a 90-minute ride. Examples: adjust lighting before a call, suggest a rest window, silence notifications pre-nausea, prep arrival wardrobe reminder.', xp: 50},
                {mode: 'execution', task: 'Design a Motion-Safe Mode: Design an assistant mode that activates when reading starts, reclining increases, or turns intensify. Define what the assistant changes (light, sound, posture cues) and what it explains vs does silently.', xp: 55},
                {mode: 'execution', task: 'Solve the Nausea Moment: Design a 60-second intervention for early nausea. What\'s the first signal? What does the assistant do immediately? What happens if symptoms escalate?', xp: 50},
                {mode: 'execution', task: 'Design the Meeting-in-Motion Flow: Design how the assistant prepares for a video call: lighting, camera framing, sound isolation, do-not-disturb logic. Include a pre-call checklist the user never sees.', xp: 55},
                {mode: 'execution', task: 'Privacy as a Concierge Service: Design a system where the assistant detects sensitive moments, manages glass opacity, sound bleed, notifications, and adapts for shared rides vs private.', xp: 50},
                {mode: 'ideas', task: 'Curate the Journey: Design a curated 2-hour journey with content (audio/visual), food or beverage timing, rest + stimulation cycles. Name the experience ("Soft Arrival", "Night Transit", "Executive Reset").', xp: 50},
                {mode: 'execution', task: 'Solve the Last 10 Minutes: Design how the assistant handles wake-up, grooming reminders, mental framing, arrival pacing. Explain why the last 10 minutes matter more than the first 50.', xp: 55},
                {mode: 'execution', task: 'Prototype the Concierge Without a Car: Prototype using calendar + maps + audio, simple rules engine, one arrival scenario. Measure stress reduction, perceived control, arrival readiness.', xp: 60},
                {mode: 'personality', task: 'Predict the Moment Concierge AI Becomes Mandatory: Write a 2028 headline: "Passengers refuse autonomous rides without concierge AI". Explain what broke without it, what the assistant fixed, who owns the layer. Share publicly.', xp: 50}
            ]
        }
    ]
},

{
    id: 'ev-charging-ubiquitous',
    title: 'EV charging becomes as convenient as gas stations',
    source: 'Industry Projections',
    probability: 60,
    timeframe: '3-5 years',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'EV adoption accelerates. Gas station business model transforms.',
    atRisk: 'Gas stations that don\'t adapt; mechanics specialized in combustion engines',
    opportunities: [
        {
            title: '⚡ EV Charging Location Scout',
            mode: 'execution',
            description: 'Help businesses identify and develop EV charging opportunities.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research EV charging economics. How do charging stations make money?', xp: 35},
                {mode: 'ideas', task: 'Study where EV drivers charge and where gaps exist.', xp: 40},
                {mode: 'execution', task: 'Map charging deserts in your area using apps like PlugShare.', xp: 40},
                {mode: 'execution', task: 'Identify 10 businesses that could benefit from adding charging.', xp: 45},
                {mode: 'personality', task: 'Talk to 5 business owners about adding EV charging.', xp: 50},
                {mode: 'ideas', task: 'Research incentives and grants for EV charging installation.', xp: 40},
                {mode: 'execution', task: 'Create proposal template for businesses considering charging.', xp: 50},
                {mode: 'personality', task: 'Connect with EV charging installers for partnerships.', xp: 50},
                {mode: 'execution', task: 'Help one business through the charging installation process.', xp: 55},
                {mode: 'execution', task: 'Get first paid consulting or referral fee.', xp: 55}
            ]
        }
    ]
},

{
    id: 'delivery-robots-common',
    title: 'Delivery robots become common in suburban neighborhoods',
    source: 'Industry Projections',
    probability: 50,
    timeframe: '3-5 years',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Last-mile delivery transforms. Local delivery jobs change significantly.',
    atRisk: 'Delivery drivers, local courier services',
    opportunities: [
        {
            title: '🤖 Robot Delivery Coordinator',
            mode: 'execution',
            description: 'Help businesses integrate robot delivery into their operations.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research delivery robot companies: Starship, Serve, Nuro. What\'s available?', xp: 35},
                {mode: 'execution', task: 'Map which areas in your region have robot delivery available.', xp: 35},
                {mode: 'ideas', task: 'Identify businesses that could benefit: restaurants, pharmacies, grocers.', xp: 40},
                {mode: 'personality', task: 'Talk to 5 local businesses about their delivery challenges.', xp: 45},
                {mode: 'execution', task: 'Create business case template for robot delivery adoption.', xp: 45},
                {mode: 'personality', task: 'Connect with robot delivery company sales teams.', xp: 50},
                {mode: 'execution', task: 'Help one business pilot robot delivery.', xp: 55},
                {mode: 'execution', task: 'Document results: cost savings, customer satisfaction.', xp: 45},
                {mode: 'personality', task: 'Share case study with other businesses.', xp: 45},
                {mode: 'execution', task: 'Get paid for integration consulting.', xp: 55}
            ]
        }
    ]
},

{
    id: 'flying-cars-limited',
    title: 'Flying cars/air taxis begin limited commercial operations',
    source: 'Joby, Archer announcements',
    probability: 45,
    timeframe: '2026-2027',
    category: 'tech',
    threatMode: 'ideas',
    threatReason: 'New transportation layer emerges. Early infrastructure positions win big.',
    atRisk: 'Urban real estate without vertical takeoff potential',
    opportunities: [
        {
            title: '🛫 Vertiport Scout',
            mode: 'ideas',
            description: 'Identify and evaluate potential locations for air taxi takeoff/landing spots.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research air taxi requirements: space, noise limits, infrastructure.', xp: 40},
                {mode: 'ideas', task: 'Study early vertiport developments. What are they looking for?', xp: 40},
                {mode: 'execution', task: 'Map 20 potential vertiport locations in your metro area.', xp: 50},
                {mode: 'ideas', task: 'Research zoning and regulatory requirements for vertiports.', xp: 45},
                {mode: 'personality', task: 'Connect with commercial real estate developers.', xp: 50},
                {mode: 'execution', task: 'Create location evaluation framework.', xp: 50},
                {mode: 'personality', task: 'Reach out to air taxi companies about site selection.', xp: 55},
                {mode: 'execution', task: 'Develop pitch deck for property owners.', xp: 50},
                {mode: 'personality', task: 'Facilitate introductions between property owners and air taxi cos.', xp: 55},
                {mode: 'execution', task: 'Get commission or fee from successful site development.', xp: 60}
            ]
        }
    ]
},

// ============================================================================
// 🏠 SERVICES & TRADES
// ============================================================================

{
    id: 'handyman-premium',
    title: 'Skilled trades command premium prices as supply shrinks',
    source: 'Labor Statistics',
    probability: 85,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Everyone went to college. Skilled trades face massive labor shortage.',
    atRisk: 'White-collar workers competing in oversupplied job markets',
    opportunities: [
        {
            title: '🔧 Premium Handyman Service',
            mode: 'execution',
            description: 'High-end handyman service for busy professionals who can\'t find reliable help.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify 10 common home repairs/tasks that are hard to find help for.', xp: 30},
                {mode: 'execution', task: 'Learn or improve 3 handyman skills (YouTube, classes, practice).', xp: 45},
                {mode: 'execution', task: 'Get basic tools and supplies for common repairs.', xp: 35},
                {mode: 'personality', task: 'Tell 20 people you\'re available for handyman work.', xp: 40},
                {mode: 'execution', task: 'Complete your first 5 jobs (even if cheap/free).', xp: 45},
                {mode: 'personality', task: 'Ask every customer for review and referral.', xp: 45},
                {mode: 'execution', task: 'Set premium pricing based on reliability and quality.', xp: 40},
                {mode: 'execution', task: 'Create booking system and professional presence.', xp: 45},
                {mode: 'personality', task: 'Build relationships with real estate agents for referrals.', xp: 50},
                {mode: 'execution', task: 'Reach $2,000/month in handyman income.', xp: 55}
            ]
        }
    ]
},

{
    id: 'landscaping-shortage',
    title: 'Landscaping and outdoor services face critical labor shortage',
    source: 'Industry Reports',
    probability: 80,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Outdoor work is hard but increasingly valuable. Supply/demand imbalance grows.',
    atRisk: 'Those competing in oversupplied indoor/office job markets',
    opportunities: [
        {
            title: '🌿 Premium Landscaping Service',
            mode: 'execution',
            description: 'High-end landscaping for clients who can\'t find reliable service.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research landscaping services in your area. What\'s missing?', xp: 30},
                {mode: 'execution', task: 'Start with basic services: mowing, trimming, cleanup. Get equipment.', xp: 40},
                {mode: 'personality', task: 'Get first 5 customers from neighbors, friends, Nextdoor.', xp: 45},
                {mode: 'execution', task: 'Deliver exceptional service. Show up on time, communicate clearly.', xp: 40},
                {mode: 'personality', task: 'Ask every customer for review and referral.', xp: 45},
                {mode: 'execution', task: 'Learn additional skills: irrigation, hardscaping basics, design.', xp: 50},
                {mode: 'execution', task: 'Raise prices as demand increases.', xp: 40},
                {mode: 'personality', task: 'Build relationships with garden centers for referrals.', xp: 45},
                {mode: 'execution', task: 'Hire helper for busy season.', xp: 50},
                {mode: 'execution', task: 'Reach $5,000/month in landscaping revenue.', xp: 55}
            ]
        }
    ]
},

{
    id: 'home-organization-demand',
    title: 'Home organization services see massive demand increase',
    source: 'Industry Reports',
    probability: 75,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'People have stuff and no time. Marie Kondo created demand, few can fulfill it.',
    atRisk: 'No one — this is pure opportunity in undersupplied market',
    opportunities: [
        {
            title: '🏠 Professional Home Organizer',
            mode: 'personality',
            description: 'Help overwhelmed families declutter and organize their homes.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Read Marie Kondo, The Home Edit, or similar. Learn frameworks.', xp: 30},
                {mode: 'execution', task: 'Practice by organizing your own space. Document before/after.', xp: 35},
                {mode: 'personality', task: 'Offer free organizing session to 3 friends. Get practice.', xp: 45},
                {mode: 'execution', task: 'Create photo portfolio of your work.', xp: 40},
                {mode: 'personality', task: 'Get testimonials from free sessions.', xp: 40},
                {mode: 'execution', task: 'Set pricing: hourly or by project.', xp: 35},
                {mode: 'personality', task: 'Post before/after photos on social media.', xp: 45},
                {mode: 'execution', task: 'Get first 3 paying clients.', xp: 50},
                {mode: 'personality', task: 'Ask happy clients for referrals.', xp: 45},
                {mode: 'execution', task: 'Reach $1,500/month in organizing income.', xp: 55}
            ]
        }
    ]
},

{
    id: 'senior-services-boom',
    title: 'Services for aging population see explosive growth',
    source: 'Demographics',
    probability: 95,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Baby boomers aging. Massive demand for patient, trustworthy service providers.',
    atRisk: 'No one — demographics guarantee this market',
    opportunities: [
        {
            title: '👴 Senior Concierge Service',
            mode: 'personality',
            description: 'Help seniors with tasks their families can\'t: tech help, errands, companionship.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Research what services seniors need most: tech help, transportation, errands.', xp: 30},
                {mode: 'personality', task: 'Talk to 5 seniors or their adult children about challenges.', xp: 40},
                {mode: 'execution', task: 'Define your service offering: what will you do and not do?', xp: 35},
                {mode: 'personality', task: 'Volunteer at senior center to build trust and learn.', xp: 45},
                {mode: 'execution', task: 'Get basic background check to build credibility.', xp: 35},
                {mode: 'personality', task: 'Get first 3 clients through word of mouth.', xp: 50},
                {mode: 'execution', task: 'Set hourly or package pricing.', xp: 35},
                {mode: 'personality', task: 'Build relationships with families, not just seniors.', xp: 50},
                {mode: 'execution', task: 'Create client tracking and scheduling system.', xp: 40},
                {mode: 'execution', task: 'Reach $2,000/month in senior services.', xp: 55}
            ]
        }
    ]
},

{
    id: 'pet-services-boom',
    title: 'Pet services industry continues explosive growth',
    source: 'Industry Reports',
    probability: 90,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Pets are family now. Spending on pet services increasingly exceeds logic.',
    atRisk: 'No one — pet parents spend irrationally',
    opportunities: [
        {
            title: '🐕 Premium Pet Services',
            mode: 'execution',
            description: 'Offer premium pet sitting, walking, or specialized pet services.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Research pet services in your area. What\'s oversupplied vs undersupplied?', xp: 30},
                {mode: 'execution', task: 'Choose your niche: walking, sitting, training, grooming.', xp: 30},
                {mode: 'personality', task: 'Start with friends\' pets. Build experience and references.', xp: 40},
                {mode: 'execution', task: 'Get pet first aid certified (shows professionalism).', xp: 40},
                {mode: 'execution', task: 'Create professional presence: photos with pets, reviews.', xp: 40},
                {mode: 'personality', task: 'List on Rover/Wag AND market independently.', xp: 40},
                {mode: 'execution', task: 'Set premium pricing based on reliability and quality.', xp: 35},
                {mode: 'personality', task: 'Build relationships with vets and pet stores for referrals.', xp: 50},
                {mode: 'execution', task: 'Get 10 regular clients.', xp: 50},
                {mode: 'execution', task: 'Reach $2,500/month in pet services.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🍽️ HOSPITALITY & RESTAURANTS
// ============================================================================

{
    id: 'restaurant-automation',
    title: 'Restaurant automation (ordering kiosks, robot cooking) goes mainstream',
    source: 'Industry Trend',
    probability: 65,
    timeframe: '2-4 years',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Fast food and fast casual automate. Human servers become premium, not default.',
    atRisk: 'Fast food workers; restaurants slow to adopt technology',
    opportunities: [
        {
            title: '🤖 Restaurant Tech Consultant',
            mode: 'execution',
            description: 'Help restaurants evaluate and implement automation technology.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research restaurant automation: kiosks, kitchen robots, AI ordering.', xp: 40},
                {mode: 'execution', task: 'Visit 10 restaurants using technology. Document what works.', xp: 40},
                {mode: 'ideas', task: 'Create comparison of restaurant tech vendors and solutions.', xp: 45},
                {mode: 'personality', task: 'Talk to 5 restaurant owners about their tech challenges.', xp: 50},
                {mode: 'execution', task: 'Develop ROI calculator for restaurant automation.', xp: 50},
                {mode: 'execution', task: 'Create "Restaurant Tech Readiness Assessment"', xp: 45},
                {mode: 'personality', task: 'Offer free assessments to 3 restaurants.', xp: 50},
                {mode: 'execution', task: 'Document results and recommendations.', xp: 45},
                {mode: 'execution', task: 'Create consulting service package.', xp: 50},
                {mode: 'execution', task: 'Get first paid restaurant tech consulting client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ghost-kitchens-expand',
    title: 'Ghost kitchens become significant portion of restaurant industry',
    source: 'Industry Reports',
    probability: 70,
    timeframe: '2-4 years',
    category: 'tech',
    threatMode: 'execution',
    threatReason: 'Restaurant economics favor delivery-only. Physical dining becomes premium experience.',
    atRisk: 'Mediocre dine-in restaurants competing with delivery-optimized ghost kitchens',
    opportunities: [
        {
            title: '👻 Ghost Kitchen Launcher',
            mode: 'execution',
            description: 'Help entrepreneurs start ghost kitchen concepts with minimal capital.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research ghost kitchen economics. What are the real costs?', xp: 40},
                {mode: 'execution', task: 'Visit ghost kitchen facilities. Understand the operations.', xp: 45},
                {mode: 'ideas', task: 'Analyze delivery app data. What cuisines are underserved in your area?', xp: 45},
                {mode: 'execution', task: 'Create "Ghost Kitchen Launch Playbook"', xp: 50},
                {mode: 'personality', task: 'Connect with ghost kitchen facility operators.', xp: 50},
                {mode: 'execution', task: 'Help launch one ghost kitchen concept (your own or client\'s).', xp: 60},
                {mode: 'execution', task: 'Document the process: costs, timeline, results.', xp: 45},
                {mode: 'personality', task: 'Share case study with aspiring restaurant entrepreneurs.', xp: 50},
                {mode: 'execution', task: 'Create consulting or partnership model.', xp: 50},
                {mode: 'execution', task: 'Launch or help launch 3 ghost kitchen concepts.', xp: 60}
            ]
        }
    ]
},

{
    id: 'hotel-personalization',
    title: 'AI-powered hotel personalization becomes standard',
    source: 'Industry Trend',
    probability: 70,
    timeframe: '2-4 years',
    category: 'tech',
    threatMode: 'personality',
    threatReason: 'Hotels know everything about you. Human hospitality must exceed AI personalization.',
    atRisk: 'Hotel staff who don\'t add value beyond what AI can deliver',
    opportunities: [
        {
            title: '🏨 Hospitality Experience Designer',
            mode: 'personality',
            description: 'Design memorable guest experiences that technology can\'t replicate.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study luxury hospitality. What makes Ritz-Carlton, Four Seasons special?', xp: 40},
                {mode: 'personality', task: 'Interview 10 people about their best hotel experiences. What stood out?', xp: 45},
                {mode: 'ideas', task: 'Identify 10 human touches that AI can\'t replicate.', xp: 40},
                {mode: 'execution', task: 'Create "Human Touch Playbook" for hospitality staff.', xp: 50},
                {mode: 'personality', task: 'Share playbook with hotel managers for feedback.', xp: 50},
                {mode: 'execution', task: 'Develop training workshop for hospitality teams.', xp: 50},
                {mode: 'personality', task: 'Pilot workshop with one hotel.', xp: 55},
                {mode: 'execution', task: 'Document impact on guest satisfaction.', xp: 45},
                {mode: 'execution', task: 'Create consulting/training service package.', xp: 50},
                {mode: 'execution', task: 'Get first paid hospitality training client.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 📱 SOCIAL MEDIA & CONTENT
// ============================================================================

{
    id: 'social-media-ai-dominated',
    title: 'Social media feeds become majority AI-generated content',
    source: 'Industry Trend',
    probability: 60,
    timeframe: '2-3 years',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'AI content floods platforms. Human authenticity becomes rare and valuable.',
    atRisk: 'Creators who could be mistaken for AI; generic content producers',
    opportunities: [
        {
            title: '✨ Verified Human Creator',
            mode: 'personality',
            description: 'Build audience specifically around being authentically, provably human.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify what makes content feel authentically human vs AI-generated.', xp: 35},
                {mode: 'execution', task: 'Develop content style that emphasizes human elements: imperfection, emotion, spontaneity.', xp: 45},
                {mode: 'personality', task: 'Show your face, your voice, your environment. Make it personal.', xp: 40},
                {mode: 'execution', task: 'Document your creative process. Show the human behind the content.', xp: 40},
                {mode: 'personality', task: 'Engage in real conversations with followers.', xp: 45},
                {mode: 'execution', task: 'Create "proof of humanity" content: live sessions, behind-the-scenes.', xp: 45},
                {mode: 'personality', task: 'Build relationships, not just follower counts.', xp: 50},
                {mode: 'execution', task: 'Reach 1,000 engaged followers who know you\'re real.', xp: 50},
                {mode: 'personality', task: 'Create community around authentic human connection.', xp: 50},
                {mode: 'execution', task: 'Monetize through relationships, not volume.', xp: 55}
            ]
        }
    ]
},

{
    id: 'social-media-dies',
    title: 'Traditional social media usage declines as AI companions rise',
    source: 'Speculative/Industry Discussion',
    probability: 25,
    timeframe: '5-10 years',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'If AI companions satisfy social needs, human connection becomes scarce luxury.',
    atRisk: 'Businesses built entirely on social media engagement',
    opportunities: [
        {
            title: '🤝 Human Connection Facilitator',
            mode: 'personality',
            description: 'Create spaces and experiences for genuine human connection in AI-saturated world.',
            difficulty: 'medium',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research AI companion trends. What needs are they meeting?', xp: 35},
                {mode: 'ideas', task: 'Identify what human connection provides that AI can\'t.', xp: 40},
                {mode: 'execution', task: 'Design an experience that facilitates real human connection.', xp: 45},
                {mode: 'personality', task: 'Host first small gathering focused on authentic connection.', xp: 50},
                {mode: 'execution', task: 'Create format that could be repeated.', xp: 45},
                {mode: 'personality', task: 'Get feedback on what worked.', xp: 40},
                {mode: 'execution', task: 'Iterate and host 3 more events.', xp: 50},
                {mode: 'personality', task: 'Build community of people seeking real connection.', xp: 50},
                {mode: 'execution', task: 'Create membership or recurring event model.', xp: 50},
                {mode: 'execution', task: 'Monetize through events or community membership.', xp: 55}
            ]
        }
    ]
},

{
    id: 'hobby-content-explosion',
    title: 'Niche hobby content sees explosive growth',
    source: 'Industry Trend',
    probability: 85,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'People retreat to specific interests. Generic content loses, niche wins.',
    atRisk: 'Creators trying to appeal to everyone',
    opportunities: [
        {
            title: '🎯 Micro-Niche Creator',
            mode: 'personality',
            description: 'Dominate a tiny niche that you genuinely love.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'List 10 hobbies or interests you could talk about passionately for hours.', xp: 25},
                {mode: 'ideas', task: 'Research each: existing creators, audience size, monetization potential.', xp: 35},
                {mode: 'execution', task: 'Pick the one where you have genuine edge and interest.', xp: 30},
                {mode: 'execution', task: 'Create 20 pieces of content in 30 days.', xp: 45},
                {mode: 'personality', task: 'Engage deeply with everyone in your niche community.', xp: 45},
                {mode: 'execution', task: 'Become known as a valuable contributor before promoting yourself.', xp: 40},
                {mode: 'personality', task: 'Connect with other creators in your micro-niche.', xp: 45},
                {mode: 'execution', task: 'Reach 1,000 followers in your specific niche.', xp: 50},
                {mode: 'execution', task: 'Create product or service for your niche.', xp: 50},
                {mode: 'execution', task: 'Make first $500 from your niche audience.', xp: 55}
            ]
        }
    ]
},

{
    id: 'newsletter-renaissance',
    title: 'Email newsletters continue growth as algorithm-free channel',
    source: 'Industry Trend',
    probability: 80,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Owning your audience matters. Email is the only platform you control.',
    atRisk: 'Creators without email list at mercy of algorithm changes',
    opportunities: [
        {
            title: '📧 Newsletter Builder',
            mode: 'execution',
            description: 'Build a newsletter in a topic you know well. Own your audience.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Identify topic you could write about weekly for 2+ years.', xp: 30},
                {mode: 'ideas', task: 'Research existing newsletters in your space. What\'s your angle?', xp: 35},
                {mode: 'execution', task: 'Set up newsletter on Substack, Beehiiv, or ConvertKit.', xp: 30},
                {mode: 'execution', task: 'Write and send your first 4 issues.', xp: 40},
                {mode: 'personality', task: 'Tell everyone you know about your newsletter.', xp: 40},
                {mode: 'execution', task: 'Reach 100 subscribers.', xp: 45},
                {mode: 'execution', task: 'Publish consistently for 8 weeks.', xp: 45},
                {mode: 'personality', task: 'Collaborate with other newsletter writers.', xp: 45},
                {mode: 'execution', task: 'Reach 500 subscribers.', xp: 50},
                {mode: 'execution', task: 'Monetize: paid tier, sponsorships, or products.', xp: 55}
            ]
        }
    ]
},

{
    id: 'podcast-saturation',
    title: 'Podcast market becomes oversaturated, winners take most',
    source: 'Industry Analysis',
    probability: 75,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Too many podcasts, not enough listeners. Only exceptional survive.',
    atRisk: 'Generic interview podcasts without unique angle',
    opportunities: [
        {
            title: '🎙️ Ultra-Niche Podcast',
            mode: 'personality',
            description: 'Create podcast for tiny but passionate audience. Better to be loved by few than liked by many.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify niche so specific that existing podcasts don\'t serve it well.', xp: 40},
                {mode: 'execution', task: 'Define your unique angle. What can only YOU bring?', xp: 40},
                {mode: 'execution', task: 'Record and publish first 4 episodes.', xp: 45},
                {mode: 'personality', task: 'Find and engage with your 100 ideal listeners.', xp: 50},
                {mode: 'execution', task: 'Publish weekly for 8 weeks consistently.', xp: 45},
                {mode: 'personality', task: 'Get guests who your niche audience would kill to hear.', xp: 50},
                {mode: 'execution', task: 'Reach 500 downloads per episode.', xp: 50},
                {mode: 'personality', task: 'Build community around the podcast.', xp: 50},
                {mode: 'execution', task: 'Monetize through premium content or community.', xp: 50},
                {mode: 'execution', task: 'Reach $500/month in podcast revenue.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🎨 CREATIVE & HOBBIES
// ============================================================================

{
    id: 'ai-art-tools-mainstream',
    title: 'AI art tools become standard part of creative workflow',
    source: 'Industry Trend',
    probability: 90,
    timeframe: 'Already happening',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'AI generates infinite images. Human curation and direction become the skill.',
    atRisk: 'Stock photographers, generic illustrators',
    opportunities: [
        {
            title: '🎨 AI Art Director',
            mode: 'ideas',
            description: 'Direct AI art tools to create specific visions. Prompting is the new drawing.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Use 5 AI art tools (Midjourney, DALL-E, Stable Diffusion). Create 100 images.', xp: 35},
                {mode: 'ideas', task: 'Study art direction: composition, color theory, style. Learn vocabulary.', xp: 40},
                {mode: 'execution', task: 'Develop consistent style you can replicate with prompts.', xp: 45},
                {mode: 'execution', task: 'Create portfolio of best AI art in your style.', xp: 40},
                {mode: 'personality', task: 'Share your work and process online.', xp: 40},
                {mode: 'execution', task: 'Create AI art for specific use case: book covers, social media, products.', xp: 45},
                {mode: 'personality', task: 'Offer free AI art to 5 people who need visuals.', xp: 45},
                {mode: 'execution', task: 'Build portfolio from collaborations.', xp: 45},
                {mode: 'execution', task: 'List AI art services on freelance platforms.', xp: 45},
                {mode: 'execution', task: 'Get first paid AI art commission.', xp: 55}
            ]
        }
    ]
},

{
    id: 'crafting-resurgence',
    title: 'Handmade and craft goods see resurgence as AI makes digital cheap',
    source: 'Industry Trend',
    probability: 70,
    timeframe: '2-5 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Digital becomes commodity. Physical handmade becomes premium.',
    atRisk: 'No one — this is opportunity in contrast to AI',
    opportunities: [
        {
            title: '✋ Handmade Goods Business',
            mode: 'execution',
            description: 'Sell genuinely handmade goods as premium alternative to mass-produced.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify craft you enjoy that could become product: pottery, woodwork, textiles.', xp: 30},
                {mode: 'execution', task: 'Create 10 items. Practice your craft.', xp: 40},
                {mode: 'execution', task: 'Photograph your work professionally.', xp: 35},
                {mode: 'personality', task: 'Share your work on social media. Show the making process.', xp: 40},
                {mode: 'execution', task: 'List items on Etsy or your own site.', xp: 40},
                {mode: 'personality', task: 'Tell the story behind each piece. People buy stories.', xp: 45},
                {mode: 'execution', task: 'Get first 10 sales.', xp: 50},
                {mode: 'personality', task: 'Ask every buyer for review and photos of item in use.', xp: 45},
                {mode: 'execution', task: 'Develop signature style that\'s recognizably yours.', xp: 45},
                {mode: 'execution', task: 'Reach $1,000/month in handmade sales.', xp: 55}
            ]
        }
    ]
},

{
    id: 'experience-economy',
    title: 'Experience economy grows as people prefer doing over having',
    source: 'Consumer Trends',
    probability: 80,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'People want memories, not stuff. Experience creators win.',
    atRisk: 'Retailers selling commodity products',
    opportunities: [
        {
            title: '🎭 Experience Creator',
            mode: 'personality',
            description: 'Design and host unique experiences people will remember and share.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'List 10 experiences you\'ve had that were memorable. What made them special?', xp: 30},
                {mode: 'ideas', task: 'Research experience economy: escape rooms, dinner parties, workshops.', xp: 35},
                {mode: 'execution', task: 'Design one unique experience you could host.', xp: 45},
                {mode: 'execution', task: 'Host first event for friends. Get detailed feedback.', xp: 50},
                {mode: 'personality', task: 'Document the experience with photos and video.', xp: 40},
                {mode: 'execution', task: 'Iterate based on feedback.', xp: 40},
                {mode: 'personality', task: 'Host for paying strangers. Price it.', xp: 50},
                {mode: 'execution', task: 'List on Airbnb Experiences, Eventbrite, or your own site.', xp: 45},
                {mode: 'personality', task: 'Get reviews and testimonials.', xp: 45},
                {mode: 'execution', task: 'Make experience repeatable. Host monthly.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🧠 HUMAN CONNECTION & WELLBEING
// ============================================================================

{
    id: 'loneliness-epidemic',
    title: 'Loneliness epidemic intensifies despite digital connection',
    source: 'Health Studies',
    probability: 85,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Digital connection doesn\'t satisfy. Real human connection becomes premium service.',
    atRisk: 'No one — this is massive opportunity',
    opportunities: [
        {
            title: '🤗 Connection Coach',
            mode: 'personality',
            description: 'Help lonely people build genuine relationships and community.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research loneliness research. Understand the causes and solutions.', xp: 35},
                {mode: 'ideas', task: 'Study successful community builders. What do they do?', xp: 35},
                {mode: 'execution', task: 'Create framework for building genuine connections.', xp: 45},
                {mode: 'personality', task: 'Practice your own connection skills. Meet 10 new people.', xp: 45},
                {mode: 'execution', task: 'Design coaching program for connection-building.', xp: 50},
                {mode: 'personality', task: 'Coach 3 people for free. Document results.', xp: 50},
                {mode: 'execution', task: 'Refine your program based on what worked.', xp: 45},
                {mode: 'personality', task: 'Share your approach publicly. Help others.', xp: 45},
                {mode: 'execution', task: 'Set up paid coaching practice.', xp: 50},
                {mode: 'execution', task: 'Get first 5 paying clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'mental-health-demand',
    title: 'Mental health services demand far exceeds supply',
    source: 'Health Statistics',
    probability: 95,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Everyone needs mental health support. Therapists are overwhelmed.',
    atRisk: 'No one — demand far exceeds supply',
    opportunities: [
        {
            title: '🧠 Mental Health Adjacent Services',
            mode: 'personality',
            description: 'Provide support services that complement but don\'t replace therapy.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research what mental health support looks like outside therapy: coaching, groups, apps.', xp: 35},
                {mode: 'ideas', task: 'Identify gap you could fill without practicing therapy.', xp: 40},
                {mode: 'execution', task: 'Get relevant training or certification in coaching, facilitation, etc.', xp: 50},
                {mode: 'execution', task: 'Define your offering clearly. What you do and don\'t do.', xp: 40},
                {mode: 'personality', task: 'Offer free sessions to build experience.', xp: 50},
                {mode: 'execution', task: 'Create clear boundaries and referral protocols.', xp: 40},
                {mode: 'personality', task: 'Build relationships with therapists for referrals.', xp: 50},
                {mode: 'execution', task: 'Set up professional practice.', xp: 45},
                {mode: 'personality', task: 'Get testimonials (with permission).', xp: 45},
                {mode: 'execution', task: 'Build to 10 regular clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'digital-detox-demand',
    title: 'Digital detox and offline experiences see growing demand',
    source: 'Consumer Trends',
    probability: 75,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'People are burned out on screens. Offline becomes luxury.',
    atRisk: 'No one — this is opportunity in contrast to digital overload',
    opportunities: [
        {
            title: '📵 Digital Detox Guide',
            mode: 'personality',
            description: 'Help people take meaningful breaks from technology.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Do your own digital detox for a week. Document the experience.', xp: 40},
                {mode: 'ideas', task: 'Research digital detox retreats and programs. What do they offer?', xp: 35},
                {mode: 'execution', task: 'Create "Digital Detox Starter Guide"', xp: 40},
                {mode: 'personality', task: 'Share your detox experience publicly.', xp: 40},
                {mode: 'execution', task: 'Design a weekend digital detox experience.', xp: 45},
                {mode: 'personality', task: 'Host experience for 5 friends.', xp: 50},
                {mode: 'execution', task: 'Refine based on feedback.', xp: 40},
                {mode: 'personality', task: 'Partner with retreat center or outdoor venue.', xp: 50},
                {mode: 'execution', task: 'Host first paid detox retreat.', xp: 55},
                {mode: 'execution', task: 'Create recurring retreat or coaching program.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🎓 EDUCATION & LEARNING
// ============================================================================

{
    id: 'college-value-questioned',
    title: 'Traditional college ROI increasingly questioned',
    source: 'Industry Analysis',
    probability: 80,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'Credentials matter less. Demonstrated skills matter more.',
    atRisk: 'People with expensive degrees but no portfolio',
    opportunities: [
        {
            title: '🎓 Alternative Education Guide',
            mode: 'ideas',
            description: 'Help people find alternatives to traditional college.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research alternatives: bootcamps, apprenticeships, self-directed learning.', xp: 35},
                {mode: 'ideas', task: 'Interview 10 people who succeeded without traditional degrees.', xp: 45},
                {mode: 'execution', task: 'Create "Alternative Education Pathways" guide for different careers.', xp: 50},
                {mode: 'personality', task: 'Share guide publicly. Help people explore options.', xp: 45},
                {mode: 'execution', task: 'Develop framework for choosing education path.', xp: 45},
                {mode: 'personality', task: 'Coach 5 people through education decisions for free.', xp: 50},
                {mode: 'execution', task: 'Document outcomes and refine approach.', xp: 45},
                {mode: 'personality', task: 'Build audience of people questioning traditional paths.', xp: 50},
                {mode: 'execution', task: 'Create paid coaching or course.', xp: 50},
                {mode: 'execution', task: 'Get first paid education coaching clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'lifelong-learning-essential',
    title: 'Continuous learning becomes essential for career survival',
    source: 'Industry Consensus',
    probability: 95,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'ideas',
    threatReason: 'Skills expire faster. Continuous learning is the new job security.',
    atRisk: 'Anyone who stopped learning after formal education',
    opportunities: [
        {
            title: '📚 Learning Coach',
            mode: 'ideas',
            description: 'Help professionals develop effective learning habits and strategies.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study learning science: spaced repetition, active recall, etc.', xp: 40},
                {mode: 'execution', task: 'Develop your own learning system. Test it on a new skill.', xp: 45},
                {mode: 'execution', task: 'Create "Learn Anything Fast" framework.', xp: 45},
                {mode: 'personality', task: 'Share your learning system publicly.', xp: 40},
                {mode: 'execution', task: 'Design coaching program around learning skills.', xp: 50},
                {mode: 'personality', task: 'Coach 5 people on learning for free.', xp: 50},
                {mode: 'execution', task: 'Track results. How much faster do clients learn?', xp: 45},
                {mode: 'personality', task: 'Get testimonials from successful clients.', xp: 45},
                {mode: 'execution', task: 'Create paid learning coaching offer.', xp: 50},
                {mode: 'execution', task: 'Get first 5 paying clients.', xp: 55}
            ]
        }
    ]
},

// MORE FORECASTS PLACEHOLDER 2
// ============================================================================
// ₿ CRYPTO - Continued
// ============================================================================

{
    id: 'ethereum-scaling-works',
    title: 'Ethereum L2 scaling solutions achieve mass adoption',
    source: 'Technical Progress',
    probability: 75,
    timeframe: '2026',
    category: 'crypto',
    threatMode: 'execution',
    threatReason: 'Cheap transactions enable new use cases. Builders on L2s have advantage.',
    atRisk: 'Developers only building on expensive L1s',
    opportunities: [
        {
            title: '⚡ L2 Developer/Educator',
            mode: 'execution',
            description: 'Help developers and businesses build on Layer 2 solutions.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'execution', task: 'Learn to build on 3 L2s: Arbitrum, Optimism, Base. Complete tutorials.', xp: 50},
                {mode: 'ideas', task: 'Research differences between L2s. When to use which?', xp: 40},
                {mode: 'execution', task: 'Deploy simple app on each L2. Document the process.', xp: 50},
                {mode: 'execution', task: 'Create "L2 Development Guide" comparing options.', xp: 50},
                {mode: 'personality', task: 'Share guide with developer communities.', xp: 45},
                {mode: 'execution', task: 'Create tutorial series for L2 development.', xp: 50},
                {mode: 'personality', task: 'Help 5 developers deploy their first L2 app.', xp: 50},
                {mode: 'execution', task: 'Build portfolio of L2 projects.', xp: 50},
                {mode: 'personality', task: 'Get hired for L2 development work.', xp: 55},
                {mode: 'execution', task: 'Complete first paid L2 development project.', xp: 60}
            ]
        }
    ]
},

{
    id: 'crypto-etf-expansion',
    title: 'More crypto ETFs approved beyond Bitcoin',
    source: 'Regulatory Trends',
    probability: 70,
    timeframe: '2026',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'Traditional finance embraces crypto. New investor education opportunities.',
    atRisk: 'Crypto natives who don\'t understand traditional finance crossover',
    opportunities: [
        {
            title: '📈 Crypto ETF Educator',
            mode: 'ideas',
            description: 'Help traditional investors understand crypto through familiar ETF structures.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research all approved and pending crypto ETFs. Understand differences.', xp: 40},
                {mode: 'ideas', task: 'Study how traditional investors think about ETFs vs direct crypto.', xp: 40},
                {mode: 'execution', task: 'Create "Crypto ETF Comparison Guide" for traditional investors.', xp: 45},
                {mode: 'personality', task: 'Share guide in traditional finance communities.', xp: 45},
                {mode: 'execution', task: 'Develop framework: when to use ETF vs direct crypto ownership.', xp: 45},
                {mode: 'personality', task: 'Answer questions from ETF-curious investors.', xp: 45},
                {mode: 'execution', task: 'Create content explaining crypto through traditional finance lens.', xp: 45},
                {mode: 'personality', task: 'Build audience of traditional investors exploring crypto.', xp: 50},
                {mode: 'execution', task: 'Create paid educational product.', xp: 50},
                {mode: 'execution', task: 'Get first paying students or consulting clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'dao-governance-matures',
    title: 'DAO governance models mature and find product-market fit',
    source: 'Industry Evolution',
    probability: 45,
    timeframe: '3-5 years',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'New organizational structures emerge. Understanding DAOs becomes professional skill.',
    atRisk: 'Organizations ignoring decentralized governance trends',
    opportunities: [
        {
            title: '🏛️ DAO Governance Consultant',
            mode: 'ideas',
            description: 'Help DAOs design and implement effective governance structures.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Study successful and failed DAO governance models. What works?', xp: 45},
                {mode: 'execution', task: 'Participate actively in 3 DAOs. Learn governance firsthand.', xp: 50},
                {mode: 'ideas', task: 'Research governance frameworks: conviction voting, quadratic voting, etc.', xp: 45},
                {mode: 'execution', task: 'Create "DAO Governance Best Practices" guide.', xp: 50},
                {mode: 'personality', task: 'Share insights with DAO communities.', xp: 45},
                {mode: 'execution', task: 'Develop governance audit framework.', xp: 55},
                {mode: 'personality', task: 'Offer governance audits to 3 DAOs.', xp: 55},
                {mode: 'execution', task: 'Document improvements from your recommendations.', xp: 50},
                {mode: 'execution', task: 'Create consulting service package.', xp: 50},
                {mode: 'execution', task: 'Get first paid DAO governance engagement.', xp: 60}
            ]
        }
    ]
},

{
    id: 'crypto-gaming-grows',
    title: 'Crypto gaming finds sustainable model beyond speculation',
    source: 'Industry Evolution',
    probability: 40,
    timeframe: '3-5 years',
    category: 'crypto',
    threatMode: 'execution',
    threatReason: 'Gaming + crypto creates new economies. Early expertise valuable.',
    atRisk: 'Game developers ignoring blockchain integration possibilities',
    opportunities: [
        {
            title: '🎮 Crypto Gaming Specialist',
            mode: 'execution',
            description: 'Help game studios understand and implement blockchain elements.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'execution', task: 'Play 10 crypto games. Analyze what works and what doesn\'t.', xp: 40},
                {mode: 'ideas', task: 'Research sustainable crypto game economies. What makes them work?', xp: 45},
                {mode: 'execution', task: 'Create "Crypto Gaming Analysis" report on current landscape.', xp: 50},
                {mode: 'personality', task: 'Share analysis with game developers.', xp: 45},
                {mode: 'ideas', task: 'Identify how traditional games could benefit from crypto elements.', xp: 45},
                {mode: 'execution', task: 'Design crypto integration proposal for a specific game type.', xp: 55},
                {mode: 'personality', task: 'Connect with indie game developers open to experimentation.', xp: 50},
                {mode: 'execution', task: 'Help implement crypto features in one game.', xp: 60},
                {mode: 'execution', task: 'Document results and learnings.', xp: 50},
                {mode: 'execution', task: 'Build reputation as crypto gaming expert.', xp: 55}
            ]
        }
    ]
},

{
    id: 'real-world-assets-tokenized',
    title: 'Real-world asset tokenization gains mainstream traction',
    source: 'Industry Trend',
    probability: 55,
    timeframe: '3-5 years',
    category: 'crypto',
    threatMode: 'ideas',
    threatReason: 'Traditional assets move on-chain. Bridge between TradFi and DeFi becomes valuable.',
    atRisk: 'Financial professionals ignoring tokenization trends',
    opportunities: [
        {
            title: '🏦 RWA Tokenization Consultant',
            mode: 'ideas',
            description: 'Help asset owners understand and explore tokenization options.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research RWA tokenization: real estate, bonds, commodities, art.', xp: 45},
                {mode: 'ideas', task: 'Study existing RWA platforms: Centrifuge, Maple, etc.', xp: 45},
                {mode: 'execution', task: 'Create "RWA Tokenization Guide" for asset owners.', xp: 50},
                {mode: 'personality', task: 'Share with real estate investors and family offices.', xp: 50},
                {mode: 'execution', task: 'Develop evaluation framework: which assets are good candidates?', xp: 50},
                {mode: 'personality', task: 'Connect with lawyers specializing in securities and blockchain.', xp: 55},
                {mode: 'execution', task: 'Help one asset owner explore tokenization options.', xp: 55},
                {mode: 'personality', task: 'Build network of RWA platforms and service providers.', xp: 55},
                {mode: 'execution', task: 'Create consulting service.', xp: 50},
                {mode: 'execution', task: 'Land first paid RWA consulting engagement.', xp: 60}
            ]
        }
    ]
},

// ============================================================================
// 🎬 MEDIA - Need ~40 more
// ============================================================================

{
    id: 'youtube-shorts-dominance',
    title: 'Short-form video becomes dominant content format',
    source: 'Platform Data',
    probability: 90,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Attention spans shrink. Short-form skills become essential.',
    atRisk: 'Long-form creators who can\'t adapt',
    opportunities: [
        {
            title: '📱 Short-Form Video Producer',
            mode: 'execution',
            description: 'Master short-form video creation for yourself or clients.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Study 50 viral short-form videos. What patterns do you see?', xp: 30},
                {mode: 'execution', task: 'Create 30 short-form videos in 30 days. Build the skill.', xp: 45},
                {mode: 'ideas', task: 'Identify your hook and editing style.', xp: 35},
                {mode: 'execution', task: 'Post on TikTok, Reels, and Shorts simultaneously.', xp: 40},
                {mode: 'execution', task: 'Analyze what works. Double down on winners.', xp: 40},
                {mode: 'personality', task: 'Engage with comments and build community.', xp: 40},
                {mode: 'execution', task: 'Reach 1,000 followers on one platform.', xp: 50},
                {mode: 'personality', task: 'Offer to create short-form for 3 businesses or creators.', xp: 50},
                {mode: 'execution', task: 'Build portfolio of successful short-form content.', xp: 45},
                {mode: 'execution', task: 'Get first paid short-form video client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'live-streaming-economy',
    title: 'Live streaming becomes significant commerce channel',
    source: 'Industry Trend',
    probability: 75,
    timeframe: '2-4 years',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Live commerce blurs entertainment and shopping. Personality-driven sales explode.',
    atRisk: 'Traditional e-commerce without personality',
    opportunities: [
        {
            title: '🎥 Live Commerce Host',
            mode: 'personality',
            description: 'Sell products through engaging live streams.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study successful live commerce: QVC, TikTok Shop, Amazon Live.', xp: 35},
                {mode: 'execution', task: 'Do your first live stream (even with zero viewers). Get comfortable.', xp: 40},
                {mode: 'personality', task: 'Stream 10 times. Practice your hosting skills.', xp: 45},
                {mode: 'ideas', task: 'Identify products you could authentically sell live.', xp: 35},
                {mode: 'execution', task: 'Partner with brand or create your own products to sell.', xp: 45},
                {mode: 'execution', task: 'Do your first commerce-focused live stream.', xp: 50},
                {mode: 'personality', task: 'Build audience that shows up for your lives.', xp: 50},
                {mode: 'execution', task: 'Make your first sale during a live stream.', xp: 50},
                {mode: 'execution', task: 'Develop repeatable live commerce format.', xp: 50},
                {mode: 'execution', task: 'Reach $1,000 in live commerce sales.', xp: 55}
            ]
        }
    ]
},

{
    id: 'substack-newsletter-economy',
    title: 'Newsletter economy continues to grow despite saturation',
    source: 'Platform Data',
    probability: 70,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Direct audience ownership wins. Email remains most valuable channel.',
    atRisk: 'Creators without email lists',
    opportunities: [
        {
            title: '✍️ Paid Newsletter Writer',
            mode: 'execution',
            description: 'Build a paid newsletter in a niche you know.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify niche with passionate audience willing to pay.', xp: 35},
                {mode: 'execution', task: 'Set up newsletter on Substack, Beehiiv, or Ghost.', xp: 30},
                {mode: 'execution', task: 'Write and send 10 free issues. Build consistency.', xp: 45},
                {mode: 'personality', task: 'Promote newsletter across all channels.', xp: 40},
                {mode: 'execution', task: 'Reach 500 free subscribers.', xp: 50},
                {mode: 'execution', task: 'Launch paid tier with exclusive content.', xp: 45},
                {mode: 'personality', task: 'Engage with subscribers. Make them feel valued.', xp: 45},
                {mode: 'execution', task: 'Get first 10 paying subscribers.', xp: 50},
                {mode: 'execution', task: 'Reach $500 MRR from newsletter.', xp: 55},
                {mode: 'execution', task: 'Scale to $2,000 MRR.', xp: 60}
            ]
        }
    ]
},

{
    id: 'audio-content-grows',
    title: 'Audio content continues growth (podcasts, audio rooms, voice notes)',
    source: 'Industry Data',
    probability: 80,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Audio is intimate. Voice builds trust faster than text.',
    atRisk: 'Creators only doing visual content',
    opportunities: [
        {
            title: '🎙️ Audio-First Creator',
            mode: 'personality',
            description: 'Build audience primarily through audio content.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Record your first 5 audio pieces (podcast episodes, voice notes, etc).', xp: 35},
                {mode: 'ideas', task: 'Find your audio format: podcast, daily audio, audio newsletter.', xp: 35},
                {mode: 'execution', task: 'Publish weekly audio content for 8 weeks.', xp: 45},
                {mode: 'personality', task: 'Share audio clips on social to drive listeners.', xp: 40},
                {mode: 'execution', task: 'Reach 100 regular listeners.', xp: 45},
                {mode: 'personality', task: 'Respond to listener messages and questions.', xp: 45},
                {mode: 'execution', task: 'Get your first audio sponsorship or create premium tier.', xp: 50},
                {mode: 'personality', task: 'Guest on other podcasts or audio shows.', xp: 50},
                {mode: 'execution', task: 'Reach 500 regular listeners.', xp: 50},
                {mode: 'execution', task: 'Monetize to $500/month from audio.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ugc-creator-economy',
    title: 'UGC (user-generated content) creator economy expands',
    source: 'Industry Trend',
    probability: 85,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'Brands need authentic content. UGC creators fill the gap.',
    atRisk: 'Expensive production studios losing to authentic creators',
    opportunities: [
        {
            title: '📸 UGC Creator',
            mode: 'execution',
            description: 'Create user-generated style content for brands.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Study successful UGC. What makes it feel authentic?', xp: 30},
                {mode: 'execution', task: 'Create 10 sample UGC pieces for imaginary brands.', xp: 40},
                {mode: 'execution', task: 'Build portfolio website showcasing your UGC style.', xp: 40},
                {mode: 'personality', task: 'Reach out to 20 brands offering UGC services.', xp: 45},
                {mode: 'execution', task: 'Get your first UGC gig (even if low-paid).', xp: 50},
                {mode: 'execution', task: 'Deliver excellent work. Get testimonial.', xp: 45},
                {mode: 'personality', task: 'List on UGC platforms: Billo, JoinBrands, Trend.', xp: 40},
                {mode: 'execution', task: 'Complete 10 paid UGC projects.', xp: 50},
                {mode: 'execution', task: 'Raise rates based on demand.', xp: 45},
                {mode: 'execution', task: 'Reach $2,000/month in UGC income.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-content-detection',
    title: 'AI content detection becomes standard practice',
    source: 'Industry Trend',
    probability: 70,
    timeframe: '2-3 years',
    category: 'media',
    threatMode: 'execution',
    threatReason: 'AI detection divides authentic from generated. Human proof becomes valuable.',
    atRisk: 'Creators passing off AI content as human-made',
    opportunities: [
        {
            title: '✋ Certified Human Creator',
            mode: 'personality',
            description: 'Build brand specifically around provably human-created content.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research AI detection tools and their accuracy.', xp: 35},
                {mode: 'execution', task: 'Develop process for proving your content is human-created.', xp: 40},
                {mode: 'personality', task: 'Document your creation process publicly.', xp: 45},
                {mode: 'execution', task: 'Create content that showcases human elements AI can\'t replicate.', xp: 45},
                {mode: 'personality', task: 'Build audience that values human authenticity.', xp: 50},
                {mode: 'execution', task: 'Get verified or certified as human creator if platforms offer this.', xp: 45},
                {mode: 'personality', task: 'Speak about human vs AI content authenticity.', xp: 50},
                {mode: 'execution', task: 'Command premium rates for verified human content.', xp: 50},
                {mode: 'execution', task: 'Build sustainable business on authenticity premium.', xp: 55},
                {mode: 'personality', task: 'Become known voice on human creativity in AI age.', xp: 55}
            ]
        }
    ]
},

{
    id: 'local-content-resurgence',
    title: 'Local news and content sees resurgence',
    source: 'Industry Trend',
    probability: 60,
    timeframe: '3-5 years',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'National media loses trust. Local, trusted voices win.',
    atRisk: 'National media outlets without local presence',
    opportunities: [
        {
            title: '📍 Local Content Creator',
            mode: 'personality',
            description: 'Become the trusted voice for your local community.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify what local information your community needs but doesn\'t get.', xp: 35},
                {mode: 'execution', task: 'Start creating local content: news, events, guides, reviews.', xp: 40},
                {mode: 'personality', task: 'Attend local events and share about them.', xp: 45},
                {mode: 'execution', task: 'Post consistently about your local area for 8 weeks.', xp: 45},
                {mode: 'personality', task: 'Build relationships with local businesses and leaders.', xp: 50},
                {mode: 'execution', task: 'Reach 1,000 local followers.', xp: 50},
                {mode: 'personality', task: 'Become known as the local expert.', xp: 50},
                {mode: 'execution', task: 'Get first local sponsorship or partnership.', xp: 50},
                {mode: 'execution', task: 'Create local guide or resource people pay for.', xp: 50},
                {mode: 'execution', task: 'Monetize to $1,000/month from local content.', xp: 55}
            ]
        }
    ]
},

{
    id: 'gaming-content-mainstream',
    title: 'Gaming content becomes fully mainstream entertainment',
    source: 'Industry Data',
    probability: 90,
    timeframe: 'Already happening',
    category: 'media',
    threatMode: 'personality',
    threatReason: 'Gaming is entertainment now. Gaming personalities command massive audiences.',
    atRisk: 'Traditional entertainment ignoring gaming',
    opportunities: [
        {
            title: '🎮 Gaming Content Creator',
            mode: 'personality',
            description: 'Build audience around gaming content.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Identify your gaming niche: specific game, genre, or style.', xp: 30},
                {mode: 'execution', task: 'Set up streaming and recording equipment.', xp: 40},
                {mode: 'execution', task: 'Stream or post gaming content 20 times in first month.', xp: 45},
                {mode: 'personality', task: 'Find your unique personality/angle. What makes you different?', xp: 40},
                {mode: 'execution', task: 'Create clips from your best moments for short-form.', xp: 40},
                {mode: 'personality', task: 'Engage with gaming communities beyond just posting.', xp: 45},
                {mode: 'execution', task: 'Reach 500 followers on primary platform.', xp: 50},
                {mode: 'personality', task: 'Collaborate with other gaming creators.', xp: 50},
                {mode: 'execution', task: 'Get first brand deal or sponsorship.', xp: 55},
                {mode: 'execution', task: 'Monetize to $500/month from gaming content.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 💼 WORK - Additional forecasts
// ============================================================================

{
    id: 'passion-economy-expands',
    title: 'Passion economy enables millions to monetize niche interests',
    source: 'Industry Trend',
    probability: 85,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'personality',
    threatReason: 'Anyone can monetize expertise. Competition increases but so does market.',
    atRisk: 'People with no monetizable passion or skill',
    opportunities: [
        {
            title: '💡 Passion Monetization Coach',
            mode: 'personality',
            description: 'Help people identify and monetize their passions.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research passion economy success stories. What patterns emerge?', xp: 35},
                {mode: 'execution', task: 'Create framework for identifying monetizable passions.', xp: 45},
                {mode: 'personality', task: 'Test framework by helping 5 friends identify their monetizable passion.', xp: 50},
                {mode: 'execution', task: 'Document results. What worked?', xp: 40},
                {mode: 'execution', task: 'Create "Find Your Monetizable Passion" guide.', xp: 45},
                {mode: 'personality', task: 'Share guide and build audience of aspiring passion entrepreneurs.', xp: 50},
                {mode: 'execution', task: 'Develop coaching program around passion monetization.', xp: 50},
                {mode: 'personality', task: 'Get testimonials from successful clients.', xp: 45},
                {mode: 'execution', task: 'Launch paid coaching.', xp: 50},
                {mode: 'execution', task: 'Get 10 paid coaching clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'fractional-work-grows',
    title: 'Fractional executives and part-time experts become common',
    source: 'Industry Trend',
    probability: 80,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Companies hire expertise part-time. High-skill fractional work expands.',
    atRisk: 'Full-time employees who could offer more value fractionally',
    opportunities: [
        {
            title: '🧩 Fractional Expert',
            mode: 'execution',
            description: 'Offer your expertise to multiple companies on fractional basis.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Identify your highest-value expertise that could be offered fractionally.', xp: 40},
                {mode: 'ideas', task: 'Research fractional roles in your field. What exists?', xp: 35},
                {mode: 'execution', task: 'Create positioning: "Fractional [Your Role]"', xp: 40},
                {mode: 'execution', task: 'Define your fractional offering: hours, deliverables, price.', xp: 45},
                {mode: 'personality', task: 'Tell your network you\'re available for fractional work.', xp: 45},
                {mode: 'execution', task: 'Land your first fractional client.', xp: 55},
                {mode: 'execution', task: 'Deliver excellent results. Document impact.', xp: 50},
                {mode: 'personality', task: 'Get testimonial and referrals.', xp: 45},
                {mode: 'execution', task: 'Land second and third fractional clients.', xp: 55},
                {mode: 'execution', task: 'Reach $5,000/month from fractional work.', xp: 60}
            ]
        }
    ]
},

{
    id: 'solopreneur-tools-mature',
    title: 'Tools for solopreneurs mature, enabling one-person businesses',
    source: 'Industry Trend',
    probability: 90,
    timeframe: 'Already happening',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'One person can now do what required teams. Leverage is everything.',
    atRisk: 'Those not using modern tools; bloated teams',
    opportunities: [
        {
            title: '🚀 Solopreneur Systems Builder',
            mode: 'execution',
            description: 'Help solopreneurs set up efficient one-person business systems.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Audit your own solopreneur stack. What tools do you use?', xp: 35},
                {mode: 'ideas', task: 'Research best solopreneur tools for different business types.', xp: 40},
                {mode: 'execution', task: 'Create "Solopreneur Tech Stack" guide.', xp: 45},
                {mode: 'personality', task: 'Share guide with solopreneur communities.', xp: 45},
                {mode: 'execution', task: 'Develop "Solopreneur Systems Audit" service.', xp: 45},
                {mode: 'personality', task: 'Offer free audits to 5 solopreneurs.', xp: 50},
                {mode: 'execution', task: 'Document time savings and improvements.', xp: 45},
                {mode: 'execution', task: 'Create paid audit + setup service.', xp: 50},
                {mode: 'personality', task: 'Get testimonials from satisfied clients.', xp: 45},
                {mode: 'execution', task: 'Get 10 paid system setup clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'async-work-default',
    title: 'Asynchronous work becomes default for knowledge workers',
    source: 'Industry Trend',
    probability: 70,
    timeframe: '3-5 years',
    category: 'work',
    threatMode: 'execution',
    threatReason: 'Real-time meetings decline. Async communication skills become essential.',
    atRisk: 'People who can\'t communicate effectively in writing',
    opportunities: [
        {
            title: '📝 Async Communication Coach',
            mode: 'execution',
            description: 'Help teams communicate effectively without real-time meetings.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Study async-first companies: GitLab, Automattic. How do they work?', xp: 40},
                {mode: 'execution', task: 'Implement async practices in your own work. Document results.', xp: 45},
                {mode: 'execution', task: 'Create "Async Communication Handbook"', xp: 45},
                {mode: 'personality', task: 'Share handbook with remote work communities.', xp: 45},
                {mode: 'execution', task: 'Develop async communication training program.', xp: 50},
                {mode: 'personality', task: 'Offer free training to one team.', xp: 50},
                {mode: 'execution', task: 'Measure meeting reduction and productivity impact.', xp: 50},
                {mode: 'execution', task: 'Create case study from pilot.', xp: 45},
                {mode: 'execution', task: 'Launch paid training service.', xp: 50},
                {mode: 'execution', task: 'Get first paid corporate training client.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 🤖 AI - Additional forecasts
// ============================================================================

{
    id: 'ai-agents-autonomous',
    title: 'AI agents handle complex multi-step tasks autonomously',
    source: 'Industry Projections',
    probability: 65,
    timeframe: '2-3 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'AI agents do your busywork. Value shifts to directing and reviewing.',
    atRisk: 'Those doing repetitive multi-step tasks that can be automated',
    opportunities: [
        {
            title: '🤖 AI Agent Builder',
            mode: 'execution',
            description: 'Build custom AI agents for specific workflows.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'execution', task: 'Learn AI agent frameworks: LangChain, AutoGPT, CrewAI.', xp: 50},
                {mode: 'execution', task: 'Build your first simple AI agent that completes a multi-step task.', xp: 50},
                {mode: 'ideas', task: 'Identify 10 repetitive workflows that could be automated by agents.', xp: 40},
                {mode: 'execution', task: 'Build agent for one specific workflow.', xp: 55},
                {mode: 'personality', task: 'Share your agent-building journey publicly.', xp: 45},
                {mode: 'execution', task: 'Offer custom agent building to 3 businesses.', xp: 55},
                {mode: 'execution', task: 'Document time savings and ROI.', xp: 50},
                {mode: 'execution', task: 'Create agent-building service package.', xp: 50},
                {mode: 'execution', task: 'Get first paid agent-building client.', xp: 60},
                {mode: 'execution', task: 'Build portfolio of custom agents.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-personalization-everywhere',
    title: 'AI personalization becomes standard in all digital experiences',
    source: 'Industry Trend',
    probability: 85,
    timeframe: '2-4 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Generic experiences die. Everything becomes personalized.',
    atRisk: 'Businesses offering one-size-fits-all experiences',
    opportunities: [
        {
            title: '🎯 AI Personalization Consultant',
            mode: 'ideas',
            description: 'Help businesses implement AI personalization.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research AI personalization tools and platforms.', xp: 40},
                {mode: 'ideas', task: 'Study personalization success cases. What drives ROI?', xp: 40},
                {mode: 'execution', task: 'Create "AI Personalization Readiness Assessment"', xp: 50},
                {mode: 'personality', task: 'Share assessment with e-commerce and SaaS businesses.', xp: 45},
                {mode: 'execution', task: 'Develop personalization implementation framework.', xp: 50},
                {mode: 'personality', task: 'Offer free assessments to 5 businesses.', xp: 50},
                {mode: 'execution', task: 'Document potential ROI from personalization.', xp: 45},
                {mode: 'execution', task: 'Create consulting service.', xp: 50},
                {mode: 'execution', task: 'Help one business implement personalization.', xp: 55},
                {mode: 'execution', task: 'Get first paid consulting engagement.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-customer-service',
    title: 'AI handles majority of customer service interactions',
    source: 'Industry Trend',
    probability: 75,
    timeframe: '2-4 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Basic support goes AI. Human support becomes premium escalation.',
    atRisk: 'Entry-level customer service roles',
    opportunities: [
        {
            title: '🎧 AI Customer Service Implementer',
            mode: 'execution',
            description: 'Help businesses implement AI customer service while preserving human touch.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research AI customer service tools: chatbots, voice AI, etc.', xp: 35},
                {mode: 'execution', task: 'Test 5 AI customer service platforms.', xp: 40},
                {mode: 'ideas', task: 'Identify when AI should handle vs escalate to human.', xp: 40},
                {mode: 'execution', task: 'Create "AI Customer Service Implementation Guide"', xp: 50},
                {mode: 'personality', task: 'Share guide with business owners.', xp: 45},
                {mode: 'execution', task: 'Develop implementation framework.', xp: 50},
                {mode: 'personality', task: 'Offer free assessments to 5 businesses.', xp: 50},
                {mode: 'execution', task: 'Help one business implement AI CS.', xp: 55},
                {mode: 'execution', task: 'Measure cost savings and customer satisfaction.', xp: 50},
                {mode: 'execution', task: 'Get first paid implementation client.', xp: 55}
            ]
        }
    ]
},

{
    id: 'ai-copilots-everywhere',
    title: 'AI copilots integrated into all major software',
    source: 'Industry Trend',
    probability: 90,
    timeframe: '2-3 years',
    category: 'ai',
    threatMode: 'execution',
    threatReason: 'Every tool has AI. Knowing how to use AI features becomes baseline skill.',
    atRisk: 'People not learning AI features of their tools',
    opportunities: [
        {
            title: '🛠️ AI Feature Trainer',
            mode: 'execution',
            description: 'Train teams on AI features in tools they already use.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'execution', task: 'Learn AI features in 10 common tools: Office, Google, Adobe, etc.', xp: 40},
                {mode: 'ideas', task: 'Identify which AI features save most time for each tool.', xp: 35},
                {mode: 'execution', task: 'Create "Hidden AI Features" guide for common tools.', xp: 45},
                {mode: 'personality', task: 'Share tips on social media and LinkedIn.', xp: 40},
                {mode: 'execution', task: 'Develop 1-hour training for specific tool suites.', xp: 45},
                {mode: 'personality', task: 'Offer free training to 3 teams.', xp: 50},
                {mode: 'execution', task: 'Measure time savings from training.', xp: 45},
                {mode: 'execution', task: 'Create paid training packages.', xp: 45},
                {mode: 'personality', task: 'Get testimonials from trained teams.', xp: 45},
                {mode: 'execution', task: 'Get first paid corporate training client.', xp: 55}
            ]
        }
    ]
},

// ============================================================================
// 📈 FINANCE - Additional forecasts
// ============================================================================

{
    id: 'inflation-persistent',
    title: 'Inflation remains above 3% through 2026',
    source: 'Polymarket/Fed Analysis',
    probability: 35,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Persistent inflation favors asset owners over wage earners. Multiple income streams essential.',
    atRisk: 'People on fixed incomes or single salary',
    opportunities: [
        {
            title: '💰 Inflation-Proof Income Builder',
            mode: 'execution',
            description: 'Help people build income streams that keep pace with or exceed inflation.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research which income sources historically outpace inflation.', xp: 40},
                {mode: 'ideas', task: 'Identify 10 inflation-resistant side businesses anyone could start.', xp: 40},
                {mode: 'execution', task: 'Create "Inflation-Proof Income Guide" with specific strategies.', xp: 50},
                {mode: 'personality', task: 'Share guide publicly. Build audience worried about inflation.', xp: 45},
                {mode: 'execution', task: 'Start your own inflation-resistant income stream as proof of concept.', xp: 55},
                {mode: 'execution', task: 'Document your results over 3 months.', xp: 45},
                {mode: 'personality', task: 'Coach 5 people through starting their income streams.', xp: 50},
                {mode: 'execution', task: 'Track client results. Build case studies.', xp: 50},
                {mode: 'execution', task: 'Create paid course or coaching program.', xp: 50},
                {mode: 'execution', task: 'Get 10 paying clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'housing-unaffordable',
    title: 'Housing affordability crisis worsens in major metros',
    source: 'Industry Analysis',
    probability: 80,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Traditional homeownership path breaks. Alternative housing models emerge.',
    atRisk: 'Young people following traditional "buy a house" advice',
    opportunities: [
        {
            title: '🏠 Alternative Housing Consultant',
            mode: 'ideas',
            description: 'Help people find creative housing solutions: co-living, house hacking, nomad life.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research alternative housing models: co-living, ADUs, house hacking, international living.', xp: 35},
                {mode: 'ideas', task: 'Interview 10 people using non-traditional housing. What works?', xp: 45},
                {mode: 'execution', task: 'Create "Housing Alternatives Guide" for your target demographic.', xp: 45},
                {mode: 'personality', task: 'Share guide publicly. Build audience struggling with housing.', xp: 45},
                {mode: 'execution', task: 'Develop decision framework: which alternative fits which situation?', xp: 45},
                {mode: 'personality', task: 'Help 5 people find alternative housing solutions for free.', xp: 50},
                {mode: 'execution', task: 'Document results and testimonials.', xp: 45},
                {mode: 'execution', task: 'Create consulting service.', xp: 45},
                {mode: 'personality', task: 'Partner with real estate agents who serve non-traditional buyers.', xp: 50},
                {mode: 'execution', task: 'Get first paid consulting clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'retail-investing-grows',
    title: 'Retail investor participation continues growing',
    source: 'Industry Data',
    probability: 75,
    timeframe: 'Already happening',
    category: 'finance',
    threatMode: 'ideas',
    threatReason: 'Everyone is an investor now. Financial literacy becomes essential.',
    atRisk: 'Uninformed retail investors making emotional decisions',
    opportunities: [
        {
            title: '📊 Financial Literacy Educator',
            mode: 'ideas',
            description: 'Teach new investors the basics before they lose money.',
            difficulty: 'easy',
            timeframe: '2-4 months',
            quests: [
                {mode: 'ideas', task: 'Identify top 10 mistakes new retail investors make.', xp: 30},
                {mode: 'execution', task: 'Create "New Investor Survival Guide" covering basics.', xp: 40},
                {mode: 'personality', task: 'Share guide on social media, Reddit, investing communities.', xp: 40},
                {mode: 'execution', task: 'Create simple explainer content: stocks, bonds, ETFs, risk.', xp: 40},
                {mode: 'personality', task: 'Answer questions from new investors publicly.', xp: 45},
                {mode: 'execution', task: 'Build audience of investing beginners.', xp: 45},
                {mode: 'execution', task: 'Create beginner investing course.', xp: 50},
                {mode: 'personality', task: 'Get testimonials from people you helped.', xp: 45},
                {mode: 'execution', task: 'Launch paid course or community.', xp: 50},
                {mode: 'execution', task: 'Get first 20 paying students.', xp: 55}
            ]
        }
    ]
},

{
    id: 'fintech-disruption',
    title: 'Traditional banks lose significant market share to fintech',
    source: 'Industry Analysis',
    probability: 70,
    timeframe: '3-5 years',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Banking moves digital. Traditional bank branches and roles transform.',
    atRisk: 'Bank employees in redundant roles; people loyal to legacy banks',
    opportunities: [
        {
            title: '💳 Fintech Navigator',
            mode: 'execution',
            description: 'Help people and businesses find the best fintech solutions for their needs.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research fintech landscape: neobanks, payment apps, lending platforms.', xp: 35},
                {mode: 'execution', task: 'Use 10 different fintech apps. Document pros and cons.', xp: 40},
                {mode: 'execution', task: 'Create comparison guide: "Which Fintech App for What?"', xp: 45},
                {mode: 'personality', task: 'Share guide publicly. Build audience of fintech-curious users.', xp: 45},
                {mode: 'execution', task: 'Develop "Fintech Stack Audit" for businesses.', xp: 50},
                {mode: 'personality', task: 'Offer free audits to 5 small businesses.', xp: 50},
                {mode: 'execution', task: 'Document savings and improvements from audits.', xp: 45},
                {mode: 'execution', task: 'Create consulting service.', xp: 45},
                {mode: 'personality', task: 'Partner with accountants and bookkeepers for referrals.', xp: 50},
                {mode: 'execution', task: 'Get first paid consulting clients.', xp: 55}
            ]
        }
    ]
},

{
    id: 'gold-safe-haven',
    title: 'Gold and precious metals see continued demand as safe haven',
    source: 'Market Analysis',
    probability: 70,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'ideas',
    threatReason: 'Uncertainty drives safe haven demand. Understanding portfolio protection matters.',
    atRisk: 'Investors 100% in growth assets without hedges',
    opportunities: [
        {
            title: '🥇 Precious Metals Educator',
            mode: 'ideas',
            description: 'Help regular investors understand gold and precious metals as portfolio component.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'ideas', task: 'Research precious metals investing: physical, ETFs, mining stocks, allocation.', xp: 40},
                {mode: 'ideas', task: 'Study historical performance in different economic conditions.', xp: 40},
                {mode: 'execution', task: 'Create "Beginner Guide to Precious Metals Investing"', xp: 45},
                {mode: 'personality', task: 'Share guide in investing communities.', xp: 40},
                {mode: 'execution', task: 'Develop framework: how much gold/silver makes sense for different situations.', xp: 45},
                {mode: 'personality', task: 'Answer questions about precious metals publicly.', xp: 45},
                {mode: 'execution', task: 'Create content comparing different ways to own precious metals.', xp: 45},
                {mode: 'personality', task: 'Build audience interested in portfolio protection.', xp: 50},
                {mode: 'execution', task: 'Create paid course or consulting service.', xp: 50},
                {mode: 'execution', task: 'Get first paying clients or students.', xp: 55}
            ]
        }
    ]
},

{
    id: 'commercial-real-estate-crisis',
    title: 'Commercial real estate faces significant repricing',
    source: 'Industry Analysis',
    probability: 65,
    timeframe: '2026-2027',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Office and retail space transforms. Opportunities in distressed assets and conversions.',
    atRisk: 'Commercial landlords slow to adapt; office-dependent businesses',
    opportunities: [
        {
            title: '🏢 Commercial Property Repurposing Scout',
            mode: 'ideas',
            description: 'Identify commercial properties ripe for conversion or creative reuse.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research office-to-residential conversions. What makes properties good candidates?', xp: 45},
                {mode: 'ideas', task: 'Study creative reuse examples: offices to housing, malls to mixed-use.', xp: 40},
                {mode: 'execution', task: 'Map distressed commercial properties in your area.', xp: 45},
                {mode: 'execution', task: 'Develop evaluation criteria for conversion potential.', xp: 50},
                {mode: 'personality', task: 'Connect with developers interested in conversions.', xp: 55},
                {mode: 'execution', task: 'Create pitch deck on specific conversion opportunity.', xp: 55},
                {mode: 'personality', task: 'Build relationships with commercial real estate brokers.', xp: 55},
                {mode: 'execution', task: 'Facilitate introduction between property owner and developer.', xp: 55},
                {mode: 'execution', task: 'Get commission or consulting fee from deal.', xp: 60},
                {mode: 'execution', task: 'Build deal flow pipeline.', xp: 60}
            ]
        }
    ]
},

{
    id: 'private-credit-boom',
    title: 'Private credit continues growth as banks pull back',
    source: 'Industry Trend',
    probability: 75,
    timeframe: '2026',
    category: 'finance',
    threatMode: 'ideas',
    threatReason: 'Alternative lending expands. Understanding private credit becomes valuable.',
    atRisk: 'Investors only in public markets missing private opportunities',
    opportunities: [
        {
            title: '💵 Private Credit Educator',
            mode: 'ideas',
            description: 'Help accredited investors understand private credit opportunities.',
            difficulty: 'hard',
            timeframe: '6-12 months',
            quests: [
                {mode: 'ideas', task: 'Research private credit landscape: direct lending, mezzanine, distressed.', xp: 45},
                {mode: 'ideas', task: 'Study how accredited investors access private credit.', xp: 45},
                {mode: 'execution', task: 'Create "Private Credit 101" guide for accredited investors.', xp: 50},
                {mode: 'personality', task: 'Share guide with high-net-worth investor communities.', xp: 50},
                {mode: 'execution', task: 'Develop risk assessment framework for private credit.', xp: 50},
                {mode: 'personality', task: 'Connect with private credit funds and platforms.', xp: 55},
                {mode: 'execution', task: 'Create comparison of private credit investment options.', xp: 50},
                {mode: 'personality', task: 'Build audience of investors interested in alternatives.', xp: 50},
                {mode: 'execution', task: 'Offer paid educational content or consulting.', xp: 55},
                {mode: 'execution', task: 'Get first paying clients.', xp: 60}
            ]
        }
    ]
},

{
    id: 'tax-optimization-ai',
    title: 'AI-powered tax optimization becomes mainstream',
    source: 'Industry Trend',
    probability: 65,
    timeframe: '2-4 years',
    category: 'finance',
    threatMode: 'execution',
    threatReason: 'Tax prep gets automated. Complex tax strategy remains human domain.',
    atRisk: 'Basic tax preparers',
    opportunities: [
        {
            title: '🧾 AI Tax Tool Trainer',
            mode: 'execution',
            description: 'Help people and businesses use AI tax tools effectively.',
            difficulty: 'medium',
            timeframe: '3-6 months',
            quests: [
                {mode: 'execution', task: 'Test 5 AI tax tools. Document capabilities and limitations.', xp: 40},
                {mode: 'ideas', task: 'Identify what AI tax tools do well vs where they fail.', xp: 40},
                {mode: 'execution', task: 'Create guide: "Getting the Most from AI Tax Tools"', xp: 45},
                {mode: 'personality', task: 'Share guide with small business owners.', xp: 45},
                {mode: 'execution', task: 'Develop training on AI tax tool usage.', xp: 50},
                {mode: 'personality', task: 'Offer free training to 5 small businesses.', xp: 50},
                {mode: 'execution', task: 'Document tax savings achieved.', xp: 45},
                {mode: 'execution', task: 'Create paid training service.', xp: 50},
                {mode: 'personality', task: 'Partner with accountants for referrals.', xp: 50},
                {mode: 'execution', task: 'Get first paid training clients.', xp: 55}
            ]
        }
    ]
}

];
