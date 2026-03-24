export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    // DIAGNÓSTICO: Listar modelos disponibles vía REST directo
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
    const listData = await listRes.json();

    if (!listRes.ok) {
        return new Response(JSON.stringify({ 
            error: "Fallo al identificar tu cuenta.",
            detail: `Google dice: ${listData.error?.message || "Acceso denegado"}`
        }), { status: 500 });
    }

    const available = listData.models ? listData.models.map(m => m.name.replace("models/", "")) : [];
    
    if (available.length === 0) {
        return new Response(JSON.stringify({ reply: "Tu clave API no tiene modelos habilitados. Crea una clave nueva en un proyecto nuevo de AI Studio." }), { status: 200 });
    }

    // Elegir el mejor disponible
    const target = available.includes("gemini-1.5-flash") ? "gemini-1.5-flash" : available[0];

    const chatUrl = `https://generativelanguage.googleapis.com/v1/models/${target}:generateContent?key=${apiKey}`;
    const response = await fetch(chatUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Actúa como asistente de Ángel Ruiz: ${message}` }] }]
      })
    });

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || `Error en ${target}: ${JSON.stringify(data.error)}`;

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
        error: "Error de sistema.",
        detail: error.message 
    }), { status: 500 });
  }
}
