import { useState } from "react";
import axios from "../utils/request";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const response = await axios.post("/api/ai/recommend", {
        preferences: input,
      });

      const botResponse = response.data.recommendations;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "I'm sorry, I couldn't get a recommendation at the moment.",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  return (
    <div className="flex w-screen">
      <div className="">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tell me your preferences (e.g., vegetarian, quick meals)"
          className="w-1/2"
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}
