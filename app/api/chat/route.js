import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la clave API." }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Intentamos el modelo estándar
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(message);
        const text = result.response.text();
        return new Response(JSON.stringify({ reply: text }), { 
            status: 200, 
            headers: { 'Content-Type': 'application/json' } 
        });
    } catch (apiError) {
        // Si falla, intentamos listar qué modelos SÍ están disponibles para informarte
        let available = "No pude listar los modelos.";
        try {
            const list = await genAI.listModels();
            available = list.models.map(m => m.name.replace("models/", "")).join(", ");
        } catch (listErr) {
            available = `Error al listar: ${listErr.message}`;
        }
        
        return new Response(JSON.stringify({ 
            error: "Fallo de modelo.",
            detail: `Google dice que '${apiError.message}'. Tus modelos disponibles son: [${available}]`
        }), { status: 500 });
    }

  } catch (error) {
    return new Response(JSON.stringify({ 
        error: "Error de sistema.",
        detail: error.message 
    }), { status: 500 });
  }
}
