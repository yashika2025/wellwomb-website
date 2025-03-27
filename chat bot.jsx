import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Predefined AI responses for PCOD
    const botReplies = {
      "what is pcod": "PCOD (Polycystic Ovarian Disease) is a hormonal disorder.",
      "how to manage pcod": "A balanced diet, regular exercise, and reducing stress help manage PCOD.",
      "symptoms of pcod": "Irregular periods, weight gain, acne, and hormonal imbalance are common symptoms.",
    };

    const botMessage = { text: botReplies[input.toLowerCase()] || "I'm still learning! 😊", sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>💬 WellWomb Chatbot</h2>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={{ ...styles.message, background: msg.sender === "user" ? "#007bff" : "#e0e0e0", textAlign: msg.sender === "user" ? "right" : "left", color: msg.sender === "user" ? "white" : "black" }}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about PCOD..." style={styles.input} />
        <button onClick={handleSendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "#f9f9f9", textAlign: "center" },
  header: { fontSize: "18px", marginBottom: "10px" },
  chatWindow: { height: "300px", overflowY: "auto", padding: "10px", background: "white", borderRadius: "5px", textAlign: "left" },
  message: { padding: "8px", borderRadius: "5px", marginBottom: "5px" },
  inputArea: { display: "flex", marginTop: "10px" },
  input: { flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" },
  button: { padding: "8px", marginLeft: "5px", background: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }
};
