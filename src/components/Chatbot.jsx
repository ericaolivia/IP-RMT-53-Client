import { useState, useRef, useEffect } from "react";
import axios from "axios";

const geminiApiKey = "AIzaSyA5JJb0qsdWpIKQwJA5lbDY2GFkkn5U6vs"; 

const geminiClient = axios.create({
  headers: {
    "x-goog-api-key": geminiApiKey,
    "Content-Type": "application/json",
  },
});

const geminiEndpoint =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

const cleanAndFormatResponse = (text) => {
  let cleanedText = text.replace(/\*\*/g, "");

  cleanedText = cleanedText.replace(/\* /g, "• ");

  cleanedText = cleanedText.replace(/\n{2,}/g, "\n");

  return cleanedText;
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleUserMessage = async (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: text },
    ]);

    try {
      const response = await geminiClient.post(geminiEndpoint, {
        contents: [
          {
            role: "user",
            parts: [{ text }],
          },
        ],
      });

      let responseText = response.data.candidates[0].content.parts[0].text;

      responseText = cleanAndFormatResponse(responseText);

      const isCodeBlock =
        responseText.startsWith("```") && responseText.endsWith("```");

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: responseText,
          isCodeBlock,
        },
      ]);
    } catch (error) {
      console.error("Error handling user message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleUserMessage(input);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container flex flex-col justify-center items-center">
      <h1 className="chatbot-title py-10">Ask Recipe!</h1>
      <div className="chatbot-messages px-20 py-6">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.role}`}>
            <strong>{message.role === "user" ? "You" : "Bot"}:</strong>
            {message.isCodeBlock ? (
              <pre className="code-block">
                <code>{message.content.slice(3, -3)}</code>
              </pre>
            ) : (
              <span>{message.content}</span>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatbot-input px-4 py-2 m-4"
          placeholder="Type your message..."
        />
        <button type="submit" className="chatbot-button btn btn-error px-6 py-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
