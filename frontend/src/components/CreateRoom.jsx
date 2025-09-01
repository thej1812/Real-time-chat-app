import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './createRoom.css'
export default function CreateRoom() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!username.trim()) {
      alert("Please enter your name!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/rooms/create", { name, password });
      navigate(`/chat/${name}`, { state: { username } });
    } catch {
      alert("Room already exists. Try another name!");
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
    <div className="create-room-container">
  <div className="create-room-form">
    <h1>Create a Chat Room</h1>
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
    <button className="create-btn" onClick={handleCreate}>
      Create Room
    </button>
  </div>
</div>
</>
  );
}
