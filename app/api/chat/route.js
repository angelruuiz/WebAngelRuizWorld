export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "DEBUG: No encuentro la variable 'GEMINI_API_KEY' en Vercel. Revisa que el NOMBRE sea exacto." }), { status: 200 });
    }

    console.log("DEBUG: Probando conexión directa a Google...");
    
    // Paso 1: Intentar hablar con el modelo básico directamente
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Responde "OK": ${message}` }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Si falla, vamos a pedirle a Google la lista de qué modelos SÍ admite esta clave
      const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
      const listRes = await fetch(listUrl);
      const listData = await listRes.json();
      const available = listData.models ? listData.models.map(m => m.name.replace("models/", "")).join(", ") : "Ninguno";

      return new Response(JSON.stringify({ 
        reply: `ERROR DE GOOGLE (${response.status}): ${data.error?.message || "Sin mensaje"}. \nModelos que ve tu clave: [${available}]` 
      }), { status: 200 });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Google respondió vacío.";

    return new Response(JSON.stringify({ reply: replyText }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      reply: `ERROR DE SISTEMA: ${error.message}` 
    }), { status: 200 });
  }
}
