import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './joinroom.css'
export default function JoinRoom() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!username.trim()) {
      alert("Please enter your name!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/rooms/join", { name, password });
      navigate(`/chat/${name}`, { state: { username } });
    } catch {
      alert("Invalid room or password!");
    }
  };

  return (
    <>
     <header className="header">
        <div className="logo">ChatVerse</div>
        <nav>
          <a href="/create">CREATE ROOM</a>
          <a href="/join">JOIN ROOM</a>
          <a href="/">ABOUT</a>
         
        </nav>
      </header>
    <div className="join-room-container">
      
  <div className="join-room-form">
    <h1>Join an Existing Room</h1>
    <input
      className="form-input"
      placeholder="Your Name"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
    />
    <input
      className="form-input"
      placeholder="Room Name"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
    <input
      className="form-input"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      type="password"
    />
    <button className="join-btn" onClick={handleJoin}>
      Join Room
    </button>
  </div>
</div>
</>
  );
}
