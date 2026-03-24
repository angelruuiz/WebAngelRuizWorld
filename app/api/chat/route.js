import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = 'nodejs';

export async function POST(req) {
  console.log("--- Inicio de petición de chat ---");
  try {
    const body = await req.json();
    const { message } = body;
    console.log("Mensaje recibido:", message);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("DEBUG: La variable GEMINI_API_KEY está vacía o no existe.");
      return new Response(JSON.stringify({ error: "Falta la clave API en el servidor." }), { status: 500 });
    }

    console.log("DEBUG: Clave API detectada (primeros 5 caracteres):", apiKey.substring(0, 5));

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Instrucción de sistema inyectada directamente en el mensaje para máxima compatibilidad
    const prompt = `INSTRUCCIÓN DE SISTEMA: Eres el Asistente de Ángel Ruiz, ilusionista. Responde de forma profesional y breve.
    MENSAJE DEL USUARIO: ${message}`;

    console.log("DEBUG: Llamando a Google AI...");
    const result = await model.generateContent(prompt);
    
    console.log("DEBUG: Respuesta recibida de Google AI.");
    const response = await result.response;
    const text = response.text();
    
    console.log("DEBUG: Texto extraído correctamente.");

    return new Response(JSON.stringify({ reply: text }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error("ERROR DETECTADO EN EL SERVIDOR:");
    console.error("Mensaje:", error.message);
    if (error.stack) console.error("Stack:", error.stack);

    return new Response(JSON.stringify({ 
        error: "Error interno en el servidor.",
        message: error.message 
    }), { status: 500 });
  }
}
