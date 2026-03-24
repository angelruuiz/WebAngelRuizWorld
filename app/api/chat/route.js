export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Falta la clave GEMINI_API_KEY." }), { status: 200 });
    }

    console.log("DEBUG: Escaneando modelos disponibles...");
    
    // PASO 1: Listar modelos para saber cuáles tienes habilitados
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const listRes = await fetch(listUrl);
    const listData = await listRes.json();
    
    const availableModels = listData.models ? listData.models.map(m => m.name.replace("models/", "")) : [];
    console.log("Modelos encontrados:", availableModels);

    if (availableModels.length === 0) {
        return new Response(JSON.stringify({ 
            reply: `Error Crítico: Tu clave API no tiene acceso a ningún modelo. Error de Google: ${listData.error?.message || "Sin permisos"}` 
        }), { status: 200 });
    }

    // PASO 2: Elegir el mejor modelo disponible de tu lista
    const targetModel = availableModels.includes("gemini-1.5-flash") ? "gemini-1.5-flash" : availableModels[0];
    
    console.log(`DEBUG: Usando el modelo detectado: ${targetModel}`);

    const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
    
    const response = await fetch(chatUrl, {
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
      return new Response(JSON.stringify({ 
        reply: `Error (Mode: ${targetModel}): ${data.error?.message || "Fallo al generar contenido"}` 
      }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No obtuve respuesta del modelo.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error("Fallo técnico:", error);
    return new Response(JSON.stringify({ 
      reply: `Error de Sistema: ${error.message}` 
    }), { status: 200 });
  }
}
