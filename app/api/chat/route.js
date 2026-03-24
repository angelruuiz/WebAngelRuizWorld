export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente de Ángel Ruiz, el ilusionista. Responde breve, elegante, de usted y profesional. Ángel hace Magia de Cerca y Cóctel, pero NO hace magia infantil.`;

    // Usaremos v1/gemini-2.0-flash que es el canal más directo y rápido disponible
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nMENSAJE DEL USUARIO: ${message}` }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
        // Segundo intento con gemini-flash-latest por si el nombre específico falla
        const backupUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-flash-latest:generateContent?key=${apiKey}`;
        const backupRes = await fetch(backupUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\nMENSAJE DEL USUARIO: ${message}` }] }]
            })
        });
        const backupData = await backupRes.json();
        
        if (!backupRes.ok) {
            return new Response(JSON.stringify({ error: "Fallo total.", detail: backupData.error?.message }), { status: 500 });
        }
        
        return new Response(JSON.stringify({ reply: backupData.candidates?.[0]?.content?.parts?.[0]?.text }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, mi magia se ha distraído un momento.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error de sistema", detail: error.message }), { status: 500 });
  }
}
