import { AIModelRouter } from '../../services/aiModelRouter.js';

export async function handler(event, context) {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod === 'GET') {
        const router = new AIModelRouter();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                status: 'online',
                service: 'Xennials AI Free Tier Model Router',
                providers: router.providers.map(p => ({
                    id: p.id,
                    name: p.name,
                    model: p.model,
                    tier: p.tier,
                    isFree: p.isFree,
                    status: p.status
                }))
            })
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const prompt = body.prompt || body.messages || 'Hello';
        const simulateGoogle429 = body.simulateGoogle429 || false;
        const temperature = body.temperature ?? 0.7;

        const router = new AIModelRouter({
            geminiApiKey: process.env.GEMINI_API_KEY || body.geminiApiKey,
            groqApiKey: process.env.GROQ_API_KEY || body.groqApiKey,
            openRouterApiKey: process.env.OPENROUTER_API_KEY || body.openRouterApiKey
        });

        const response = await router.complete(prompt, {
            simulateGoogle429,
            temperature
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response)
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: err.message
            })
        };
    }
}
