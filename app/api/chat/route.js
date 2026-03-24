export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Falta la clave GEMINI_API_KEY." }), { status: 200 });
    }

    console.log("DEBUG: Iniciando fetch directo a Google API...");
    
    // Llamada DIRECTA por HTTP para evitar fallos del SDK
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Actúa como asistente del mago Ángel Ruiz. Responde breve: ${message}` }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("DEBUG: Error de Google API:", data);
      return new Response(JSON.stringify({ 
        reply: `Error Directo de Google (${response.status}): ${data.error?.message || "Sin mensaje"}` 
      }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No obtuve respuesta clara.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error("Fallo técnico:", error);
    return new Response(JSON.stringify({ 
      reply: `Error de Red: ${error.message}` 
    }), { status: 200 });
  }
}
