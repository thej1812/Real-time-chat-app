import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./components/Homepage"; // ✅ Import Homepage
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* Other Routes */}
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/chat/:room" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}
