import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "./Lab12.css";

function Lab12() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mediaUrl, setMediaUrl] = useState({ image: "", video: "", audio: "" });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [nickname, setNickname] = useState("Guest");
  const [ipAddress, setIpAddress] = useState("Fetching...");
  const [theme, setTheme] = useState("light");
  const messagesEndRef = useRef(null);

  const API_URL = "https://67d1b65a90e0670699bb435d.mockapi.io/User";

  // Fetch messages from API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  // Fetch public IP address
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("Unknown"));
  }, []);

  // Send message function
  const sendMessage = (type, content) => {
    if (!content.trim()) return;

    const newMessage = {
      name: `${nickname} (${ipAddress})`,
      type,
      content,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [...prev, data]);
        setInput("");
        setMediaUrl({ image: "", video: "", audio: "" });
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  // Handle Emoji Selection
  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`chat-container ${theme}`}>
      {/* Header */}
      <div className="chat-header">
        <h2>Section-7 Chat Box - SSCB</h2>
        <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="chat-body">
        {/* Chat Messages */}
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.name}:</strong>
              {msg.type === "text" && <span> {msg.content}</span>}
              {msg.type === "image" && <img src={msg.content} alt="Shared" className="chat-img" />}
              {msg.type === "video" && (
                <video controls width="200">
                  <source src={msg.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {msg.type === "audio" && <audio controls src={msg.content} />}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="nickname-box">{nickname}</div>

          <input type="text" placeholder="Paste image URL..." value={mediaUrl.image} onChange={(e) => setMediaUrl({ ...mediaUrl, image: e.target.value })} />
          <button onClick={() => sendMessage("image", mediaUrl.image)}>Send Image</button>

          <input type="text" placeholder="Paste video URL..." value={mediaUrl.video} onChange={(e) => setMediaUrl({ ...mediaUrl, video: e.target.value })} />
          <button onClick={() => sendMessage("video", mediaUrl.video)}>Send Video</button>

          <input type="text" placeholder="Paste audio URL..." value={mediaUrl.audio} onChange={(e) => setMediaUrl({ ...mediaUrl, audio: e.target.value })} />
          <button onClick={() => sendMessage("audio", mediaUrl.audio)}>Send Audio</button>
        </div>
      </div>

      {/* Message Input Bar */}
      <div className="message-input">
        <input type="text" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="emoji-btn" onClick={() => setShowEmojiPicker((prev) => !prev)}>😊</button>
        <button onClick={() => sendMessage("text", input)}>Send</button>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </div>
    </div>
  );
}

export default Lab12;
