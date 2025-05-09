// Example questions and responses for when API key is not available
const fallbackResponses = {
  "how do i sell my license":
    "To sell your license, follow these steps:\n1. Click the 'Sell My Licenses' button\n2. Fill out the form with your license details\n3. Our team will review and provide a quote\n4. Once accepted, we'll handle the transfer process",
  "what licenses can i sell":
    "We accept various software licenses including:\n- Adobe Creative Cloud\n- Microsoft Office 365\n- Autodesk products\n- And many more. Contact us to check if your license is eligible.",
  "how long does it take":
    "The process typically takes 2-3 business days:\n1. Initial review: 24 hours\n2. Quote acceptance: 24 hours\n3. Transfer process: 24-48 hours",
  "is it safe":
    "Yes, our process is completely secure:\n- We use encrypted transfers\n- All transactions are verified\n- We follow industry security standards\n- Your data is protected",
  "how much can i get":
    "The value depends on:\n- License type and version\n- Time remaining\n- Market demand\nContact us for a free quote!",
};

// Function to get AI response
export const getAIResponse = async (message) => {
  try {
    // Check if we have a hardcoded response
    const lowerMessage = message.toLowerCase();
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // If no hardcoded response, return a default message
    return "I'm here to help you with selling your software licenses. You can ask me about:\n- How to sell your license\n- What licenses we accept\n- How long the process takes\n- Safety and security\n- Pricing and quotes";
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "I apologize, but I'm having trouble processing your request right now. Please try asking about selling licenses, accepted software, process duration, or safety measures.";
  }
};

// Function to check if message is a greeting
export const isGreeting = (message) => {
  const greetings = [
    "hi",
    "hello",
    "hey",
    "greetings",
    "good morning",
    "good afternoon",
    "good evening",
  ];
  return greetings.some((greeting) => message.toLowerCase().includes(greeting));
};

// Function to get greeting response
export const getGreetingResponse = () => {
  const greetings = [
    "Hello! How can I help you with selling your software licenses today?",
    "Hi there! I'm here to help you with your software license resale. What would you like to know?",
    "Welcome! I can help you understand how to sell your unused software licenses. What would you like to learn about?",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
};
