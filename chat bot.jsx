import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const botReplies = {
        "what is pcod": "🌷 PCOD (Polycystic Ovarian Disease) is a hormonal disorder that affects women’s health.",
        "how to manage pcod": "🎗️ A healthy diet, regular exercise, and stress management help manage PCOD.",
        "is pcod curable": "🌷 PCOD can be managed with lifestyle changes, but it's not completely curable.",
        "can pcod affect pregnancy": "🎗️ Yes, PCOD can cause infertility, but many women conceive with treatment.",
        "what are the symptoms of pcod": "🌷 Symptoms include irregular periods, weight gain, acne, and hormonal imbalance.",
        "can pcod cause hair loss": "🎗️ Yes, PCOD can cause hair thinning due to hormonal imbalance.",
        "does pcod affect weight gain": "🌷 Yes, many women with PCOD experience weight gain due to insulin resistance.",
        "does stress affect pcod": "🎗️ Yes, stress can worsen PCOD symptoms by increasing cortisol levels.",
        "what is the best diet for pcod": "🌷 A low-carb, high-protein diet with whole foods and healthy fats is recommended.",
        "which exercises are good for pcod": "🎗️ Yoga, strength training, and cardio exercises help manage PCOD effectively.",
        "how does yoga help in pcod": "🌷 Yoga improves blood circulation, reduces stress, and balances hormones in PCOD.",
        "can home remedies cure pcod": "🎗️ Home remedies like spearmint tea and flaxseeds help but don’t completely cure PCOD.",
        "which medicines help in pcod": "🌷 Birth control pills, metformin, and hormonal therapy are commonly prescribed for PCOD.",
        "can pcod cause infertility": "🎗️ PCOD can affect ovulation, leading to infertility, but treatment can improve chances of pregnancy.",
        "should i see a doctor for pcod": "🌷 Yes, if you experience irregular periods, excessive hair growth, or difficulty conceiving, see a doctor.",
        "can birth control pills help in pcod": "🎗️ Yes, birth control pills regulate periods and reduce symptoms like acne and hair growth.",
      };

      const botMessage = {
        text: botReplies[input.toLowerCase()] || "🌷 I'm still learning! Ask me something about PCOD. 😊",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🌷 WellWomb AI Assistant 🎗️</h2>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={{ ...styles.message, background: msg.sender === "user" ? "#d63384" : "#ffe6f2", textAlign: msg.sender === "user" ? "right" : "left", color: msg.sender === "user" ? "white" : "black", alignSelf: msg.sender === "user" ? "flex-end" : "flex-start" }}>
            {msg.text}
          </div>
        ))}
        {isTyping && <div style={{ ...styles.message, background: "#ffe6f2", textAlign: "left", color: "black", alignSelf: "flex-start" }}>🌷 Typing...</div>}
      </div>
      <div style={styles.inputArea}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about PCOD..." style={styles.input} />
        <button onClick={handleSendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "420px", margin: "auto", padding: "20px", border: "1px solid #f4c2c2", borderRadius: "10px", background: "#fff0f5", textAlign: "center", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
  header: { fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#d63384", fontFamily: "'Poppins', sans-serif" },
  chatWindow: { height: "350px", overflowY: "auto", padding: "10px", background: "#fff", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "10px" },
  message: { padding: "10px", borderRadius: "15px", maxWidth: "75%", wordWrap: "break-word", fontSize: "14px" },
  inputArea: { display: "flex", marginTop: "10px", gap: "8px" },
  input: { flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "14px" },
  button: { padding: "10px 15px", background: "#d63384", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px" }
};
