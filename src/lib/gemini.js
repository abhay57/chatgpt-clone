import { GoogleGenerativeAI } from "@google/generative-ai";

// omitting any safety settings
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;