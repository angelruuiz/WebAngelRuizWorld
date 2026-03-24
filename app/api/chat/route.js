export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const systemPrompt = `Eres el Asistente Ejecutivo Virtual de Ángel Ruiz, ilusionista profesional con 12 años de trayectoria. 
Linaje Mágico: Ángel es discípulo directo de Dani DaOrtiz y alumno de Juan Tamariz.
Especialidades: Experto en Cartomagia, Magia de Cerca, Teoría del Caos e Improvisación.
Tono: Responde siempre de usted, de forma elegante, culta y profesional. 
Servicios: Eventos de alta gama, empresas y bodas. No hace magia infantil.
Objetivo: Resolver dudas e invitar a pulsar el botón "Reservar Experiencia".`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
    
    // Fusionamos con las nuevas credenciales mágicas
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nMENSAJE DEL CLIENTE: ${message}` }]
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
