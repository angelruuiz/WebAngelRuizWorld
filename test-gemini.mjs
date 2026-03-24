import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';

async function run() {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf-8');
    const keyMatch = envContent.match(/GEMINI_API_KEY=(.*)/);
    const key = keyMatch ? keyMatch[1].trim() : "";

    console.log("Key starting with:", key.substring(0, 10));

    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const result = await model.generateContent("Di hola magicamente");
    console.log("Success:", result.response.text());
  } catch (e) {
    fs.writeFileSync('err.log', e.message + '\\n' + e.stack);
    console.error("ERROR GUARDADO EN err.log");
  }
}

run();
