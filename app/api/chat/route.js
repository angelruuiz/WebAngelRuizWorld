export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente Ejecutivo de Ángel Ruiz, ilusionista profesional. 
Responde siempre de usted, de forma elegante y breve.
Servicios: Magia de Cerca y Magia de Cóctel para empresas y bodas.
Restricción: No hace magia infantil.
Objetivo: Ayudar al cliente e invitar a pulsar el botón de reserva.`;

    // Usamos gemini-2.0-flash porque es el que tu cuenta reconoce como disponible
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
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
        return new Response(JSON.stringify({ 
            error: "Fallo de servidor",
            detail: data.error?.message || "Error desconocido"
        }), { status: 500 });
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
