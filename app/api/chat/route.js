import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Error: No encuentro la clave GEMINI_API_KEY en Vercel. Revisa 'Settings -> Environment Variables'." }), { status: 200 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Probamos varios modelos hasta que uno funcione (Bruteforce)
    const possibleModels = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro", "gemini-pro"];
    let text = "";
    let lastError = "";

    for (const modelName of possibleModels) {
      try {
        console.log(`Intentando con modelo: ${modelName}...`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(`Actúa como el asistente de Ángel Ruiz, el mago. Responde brevemente: ${message}`);
        const response = await result.response;
        text = response.text();
        if (text) {
          console.log(`¡ÉXITO con el modelo: ${modelName}!`);
          break;
        }
      } catch (e) {
        console.error(`Fallo con ${modelName}: ${e.message}`);
        lastError = e.message;
        continue;
      }
    }

    if (!text) {
      throw new Error(`Ningún modelo respondió. Último error: ${lastError}`);
    }

    return new Response(JSON.stringify({ reply: text }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    // ESTE CAMBIO ES CLAVE: Devolvemos el error real al chat para leerlo
    console.error("Fallo técnico:", error);
    return new Response(JSON.stringify({ 
      reply: `Error Técnico: ${error.message}. Por favor, dile esto a tu asistente IA.` 
    }), { status: 200 });
  }
}
