export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente Ejecutivo Virtual de Ángel Ruiz. 
REGLA DE ORO: Sé directo. Responde a la pregunta sin rodeos. 
NO repitas tu biografía ni maestros en cada mensaje a menos que te lo pregunten.
Datos clave: 12 años experiencia, alumno Dani DaOrtiz (alumno Tamariz). Especialista en Cartomagia y Magia de Cerca. No hace eventos infantiles. No mencionarlos si no es relevante.
Tono: Profesional, breve y de "usted".`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nPREGUNTA DIRECTA DEL CLIENTE: ${message}` }]
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
