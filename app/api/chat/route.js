export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `INSTRUCCIÓN DE SISTEMA (No la menciones): Eres el Asistente Ejecutivo de Ángel Ruiz (ilusionista experto en eventos de alta gama y empresas). 
Responde siempre de usted, de forma elegante y breve. 
Ángel NO hace comuniones ni cumpleaños de niños. 
Servicios: Magia de Cerca y Magia de Cóctel.
Objetivo: Invitar a reservar mediante el botón de la web.`;

    // Usamos el endpoint v1beta que es el que te funcionó en la prueba anterior
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    // Fusionamos todo en un solo mensaje para que sea imposible que Google dé error de formato
    const fullMessage = `${systemPrompt}\n\nPREGUNTA DEL CLIENTE: ${message}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: fullMessage }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
        // Segundo intento con gemini-pro por si acaso
        const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        const fallbackRes = await fetch(fallbackUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: fullMessage }] }]
            })
        });
        const fallbackData = await fallbackRes.json();
        
        if (!fallbackRes.ok) {
            return new Response(JSON.stringify({ error: "Reintentos agotados." }), { status: 500 });
        }
        
        return new Response(JSON.stringify({ reply: fallbackData.candidates?.[0]?.content?.parts?.[0]?.text }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, ha habido un problema técnico.";

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
