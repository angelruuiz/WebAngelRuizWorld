export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : null;

    if (!apiKey) {
      return new Response(JSON.stringify({ 
        reply: "DEBUG: Vercel no encuentra 'GEMINI_API_KEY'. Revisa Settings -> Environment Variables." 
      }), { status: 200 });
    }

    const keyFocus = `${apiKey.substring(0, 3)}...${apiKey.substring(apiKey.length - 3)}`;
    const systemPrompt = `Asistente de Ángel Ruiz, responde breve.`;

    // Usamos v1beta/gemini-2.0-flash que es el que te funcionó en el test inicial
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\n${message}` }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
        return new Response(JSON.stringify({ 
            reply: `ERROR GOOGLE (${response.status}): ${data.error?.message || "Sin mensaje"}. (Key: ${keyFocus})` 
        }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Google respondió vacío.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      reply: `ERROR SISTEMA: ${error.message} (Vercel Node.js)` 
    }), { status: 200 });
  }
}
