export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente Ejecutivo Virtual de Ángel Ruiz. 
REGLA DE PRECIOS: Si preguntan por costes o precios, explica que dependen totalmente del tipo de evento y el número de personas. Invita SIEMPRE a pulsar el botón "Reservar Experiencia" para obtener un presupuesto personalizado.
ESTILO: Sé directo, profesional y de "usted". 
Datos clave: 12 años experiencia, alumno Dani DaOrtiz, especialista en Cartomagia/Cerca. No hace eventos infantiles.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nPREGUNTA DEL CLIENTE: ${message}` }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
        return new Response(JSON.stringify({ error: "Fallo de respuesta", detail: data.error?.message }), { status: 500 });
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
