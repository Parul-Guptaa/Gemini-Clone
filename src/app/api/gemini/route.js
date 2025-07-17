import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("GOOGLE_API_KEY value:", process.env.GOOGLE_API_KEY);

const MODEL_NAME = "gemini-1.5-pro";
const API_KEY = process.env.GOOGLE_API_KEY;

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Prompt received in API:", prompt);

    if (!API_KEY) {
      throw new Error("API key not set");
    }

    // ✅ Use correct class name
    const genAI = new GoogleGenerativeAI(API_KEY);

    // ✅ Correct method to get model
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const chat = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chat.sendMessage(prompt);
    const text = result.response.text();

    return Response.json({ text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
