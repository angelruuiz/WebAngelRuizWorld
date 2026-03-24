import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Falta GEMINI_API_KEY");
      return new Response(JSON.stringify({ error: "Configuración incompleta." }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Eres el Asistente Ejecutivo Virtual de la web de Ángel (un ilusionista profesional). 
Responde de forma breve, elegante y profesional. 
Habla siempre de usted.
Solo haces eventos corporativos y de alta gama. 
No haces magia infantil.
Invita sutilmente a reservar una cita mediante el botón de la web.`
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ reply: text }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error("Error en el Chatbot:", error);
    return new Response(JSON.stringify({ 
        error: "Fallo en la comunicación mágica.",
        detail: error.message 
    }), { status: 500 });
  }
}
