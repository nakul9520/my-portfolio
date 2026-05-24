import 'server-only';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set');
}

const genAI = new GoogleGenerativeAI(apiKey);

export function getGeminiModel(systemInstruction?: string) {
  return genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction,
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  });
}

export { genAI };
