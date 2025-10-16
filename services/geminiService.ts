
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const runPythonCode = async (code: string): Promise<string> => {
  try {
    const prompt = `
You are an expert Python interpreter. Your task is to execute the provided Python code and return only the standard output.

**Instructions:**
1.  **Execute the Code:** Run the Python code exactly as provided.
2.  **Handle Input:** If the code requires user input (e.g., via the \`input()\` function), simulate a realistic and plausible user entry based on the prompt in the code. For example, if it asks "Enter your name:", you could simulate entering "Alex". If it asks for a number, provide a reasonable number like 5 or 10.
3.  **Return Only Output:** Your response MUST ONLY contain the text that would be printed to the console (stdout). Do not include any explanations, comments, introductory phrases like "Here is the output:", or the simulated input values.
4.  **Errors:** If the code has a syntax error or would cause a runtime error, return the standard Python error traceback.

**Python Code to Execute:**
\`\`\`python
${code}
\`\`\`
`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const text = response.text;
    
    // Clean up potential markdown formatting from the response
    return text.replace(/^```(python|text)?\n|```$/g, '').trim();

  } catch (error) {
    console.error("Error executing code with Gemini API:", error);
    if (error instanceof Error) {
        return `Failed to run code: ${error.message}`;
    }
    return "An unexpected error occurred while trying to run the code.";
  }
};
