console.log(
  import.meta.env.VITE_GEMINI_API_KEY
); 
 import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function getFeedback(
  question,
  answer
) {
  const model =
  genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
You are an interview evaluator.

Question:
${question}

Candidate Answer:
${answer}

Rules:
- Give score out of 10.
- Completely wrong answer = 0/10
- Partially correct answer = 4-7/10
- Accurate answer = 8-10/10

Return format:

Score: X/10
Feedback: Your feedback
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}