import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { socket } from "/socket";
import "./Chat.css"; 
export default function ChatRoom() {
  const { room } = useParams();
  const { state } = useLocation();
  const username = state?.username || "Anonymous";

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", room);

    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("message");
  }, [room]);

  const sendMessage = () => {
    if (!content.trim()) return;
    socket.emit("chatMessage", { room, sender: username, content });
    setContent("");
  };

  return (
    <>
     <header className="header">
        <div className="logo">ChatVerse</div>
        <nav>
         
          <a href="/">HOME</a>
         
        </nav>
      </header>
   <div className="chat-container">
  {/* Header */}
  <h1 className="chat-room-title">Room: {room}</h1>
  <p className="chat-username">Logged in as: {username}</p>
  
  {/* Messages Box */}
  <div className="chat-box">
    {messages.map((msg, i) => (
      <p key={i} className="chat-message">
        <b>{msg.sender}:</b> {msg.content}
      </p>
    ))}
  </div>
  
  {/* Input Area */}
  <div className="chat-input-area">
    <input
      className="chat-input"
      placeholder="Type a message..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
    <button className="chat-btn" onClick={sendMessage}>
      Send
    </button>
  </div>
</div>
</>
  );
}
