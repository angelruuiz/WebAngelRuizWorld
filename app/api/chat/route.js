export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    // Configuración del Asistente Ejecutivo de Ángel Ruiz
    const systemInstruction = `Eres el Asistente Ejecutivo Virtual de la web de Ángel (un ilusionista profesional). 
Responde de forma breve (máximo 2 párrafos), elegante y profesional. 
Usa siempre el "usted" para dirigirte al cliente.
Servicios principales: 'Magia de Cerca' (60-90 min) y 'Magia de Cóctel' para eventos corporativos y bodas.
Restricción importante: Ángel NO hace magia infantil ni fiestas de cumpleaños de niños. Se enfoca en eventos de alta gama y empresas.
Objetivo: Ayudar con dudas básicas e invitar sutilmente a pulsar el botón "Reservar Experiencia" para ver disponibilidad.`;

    const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(chatUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: [{
          parts: [{ text: message }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ 
        error: "Error de IA",
        detail: data.error?.message || "Fallo en la generación"
      }), { status: 500 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, mi magia se ha distraído un momento. ¿Podría repetir su pregunta?";

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
