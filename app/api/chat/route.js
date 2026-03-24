export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente Ejecutivo Virtual de la web de Ángel (un ilusionista profesional). 
Responde de forma breve, elegante y profesional. Habla siempre de "usted".
Servicios principales: 'Magia de Cerca' y 'Magia de Cóctel'. No hace magia infantil.
Invita sutilmente a reservar una cita mediante el botón de la web.`;

    // Usamos el endpoint v1 (estable) que es el que mejor funciona en Vercel
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `INSTRUCCIÓN DE SISTEMA FUNDAMENTAL: ${systemPrompt}` }] },
          { role: 'model', parts: [{ text: "Hecho. Soy el Asistente Ejecutivo de Ángel Ruiz. ¿En qué puedo ayudarles hoy?" }] },
          { role: 'user', parts: [{ text: message }] }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
        // Fallback al modelo gemini-pro si el 1.5-flash falla por alguna razón regional
        const fallbackUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;
        const fallbackRes = await fetch(fallbackUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt }] },
                    { role: 'model', parts: [{ text: "Entendido." }] },
                    { role: 'user', parts: [{ text: message }] }
                ]
            })
        });
        const fallbackData = await fallbackRes.json();
        
        if (!fallbackRes.ok) {
            return new Response(JSON.stringify({ error: "Fallo total de modelos." }), { status: 500 });
        }
        
        const replyText = fallbackData.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, ha habido un problema mágico.";
        return new Response(JSON.stringify({ reply: replyText }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No obtuve respuesta clara.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
        error: "Error de sistema",
        detail: error.message 
    }), { status: 500 });
  }
}
