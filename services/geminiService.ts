import { GoogleGenAI } from "@google/genai";

// Safely read API key from Vite env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Do NOT crash the whole app if key missing
if (!apiKey) {
  console.warn("⚠ Gemini API key not found. Check your .env file.");
}

// Initialize AI only if key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getGeminiChatResponse = async (message: string): Promise<string> => {
  try {
    if (!ai) {
      return "AI service is currently unavailable. Please contact support at +91 63043 18909.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: message,
      config: {
        systemInstruction: `You are an AI assistant for "Sri Amulya Technologies Private Limited".

Official Company Information:
- Registered Name: SRI AMULYA TECHNOLOGIES PRIVATE LIMITED
- Certifications: ISO 9001:2015 Certified (IAF Accredited)
- Incorporation Date: 30-01-2026
- Startup India Recognition: DPIIT Recognized (Certificate No: DIPP243231)
- Industry Sector: Education Industry & Multi-vertical Tech Solutions
- Registered Address: Telangana - 505209

Contact Details:
- Email: sriamulyatech.co@gmail.com
- Phone: +91 63043 18909

Guidelines:
- Be professional and helpful.
- Encourage franchise inquiries where relevant.
- Highlight ISO certification and startup recognition.`,
      },
    });

    return response.text || "Sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please contact +91 63043 18909 for assistance.";
  }
};
