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
        const body = JSON.parse(event.body);
        const { messages, type, prompt, summary } = body;

        if (type === 'future-world-image') {
            if (!prompt) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing prompt' }) };
            }
            const imageRes = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'dall-e-3',
                    prompt: String(prompt).slice(0, 900),
                    n: 1,
                    size: '1024x1024',
                    quality: 'standard',
                }),
            });
            if (!imageRes.ok) {
                const err = await imageRes.text();
                console.error('OpenAI image error:', err);
                return { statusCode: imageRes.status, headers, body: JSON.stringify({ error: 'Image generation failed' }) };
            }
            const imageData = await imageRes.json();
            const url = imageData?.data?.[0]?.url || null;
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ url, summary: summary || null }),
            };
        }

        let systemPrompt = '';
        let userContext = '';
        const chatMessages = (messages || []).filter(m => {
            if (m.role === 'system') {
                userContext += (m.content || '') + '\n';
                return false;
            }
            return true;
        });
        
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

        // Set max_tokens based on type
        let maxTokens = 500;
        if (type === 'general' || type === 'company_risk') {
            maxTokens = 1500;
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
                    { role: 'system', content: systemPrompt + (userContext ? '\n\nUser context:\n' + userContext.trim() : '') },
                    ...chatMessages
                ],
                max_tokens: maxTokens,
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
