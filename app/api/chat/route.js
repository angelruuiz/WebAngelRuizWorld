import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Error: No encuentro la clave GEMINI_API_KEY en Vercel. Revisa 'Settings -> Environment Variables'." }), { status: 200 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`Actúa como el asistente de Ángel Ruiz, el mago. Responde: ${message}`);
    const response = await result.response;
    const text = response.text();

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
