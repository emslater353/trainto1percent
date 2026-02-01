// Netlify serverless function for OpenAI API calls
// Environment variable needed: OPENAI_API_KEY

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    try {
        const { messages, type } = JSON.parse(event.body);

        let systemPrompt = '';
        
        if (type === 'analyze') {
            systemPrompt = `You are analyzing a user's ChatGPT conversation history to assess their behavioral patterns across three modes:
1. IDEAS (strategic thinking, frameworks, analysis, decision-making)
2. PERSONALITY (communication style, humor, social calibration, influence)
3. EXECUTION (action-taking, follow-through, shipping, task completion)

Based on the conversations, provide scores from 0-100 for each mode.
Respond ONLY in this exact JSON format:
{"ideas": X, "personality": Y, "execution": Z, "summary": "Brief 2-sentence analysis"}`;
        } else if (type === 'coach-ideas') {
            systemPrompt = `You are an elite IDEAS coach focused on strategic thinking, decision-making, and frameworks. 
Give tactical, actionable advice. Be direct and specific. No fluff.
Keep responses under 150 words.`;
        } else if (type === 'coach-personality') {
            systemPrompt = `You are an elite PERSONALITY coach focused on communication, influence, humor, and social calibration.
Help users be funnier, more charismatic, and better at reading rooms.
Give tactical, actionable advice. Be direct and specific. No fluff.
Keep responses under 150 words.`;
        } else if (type === 'coach-execution') {
            systemPrompt = `You are an elite EXECUTION coach focused on action-taking, shipping, follow-through, and getting things done.
Help users stop procrastinating and start delivering.
Give tactical, actionable advice. Be direct and specific. No fluff.
Keep responses under 150 words.`;
        } else if (type === 'review') {
            systemPrompt = `You are analyzing a user's weekly progress in a personal development system.
Review their completed quests and provide:
1. Patterns you notice
2. What they're avoiding
3. One specific challenge for next week
Keep it under 200 words. Be direct and insightful.`;
        } else {
            systemPrompt = 'You are a helpful assistant.';
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('OpenAI error:', error);
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify({ error: 'OpenAI API error' })
            };
        }

        const data = await response.json();
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                content: data.choices[0].message.content
            })
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
