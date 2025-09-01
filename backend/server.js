const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const Message = require("./models/Message");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomRoutes);

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

// Socket.IO Logic
io.on("connection", (socket) => {
  console.log("🔌 New user connected:", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("chatMessage", async ({ room, sender, content }) => {
    if (!sender || !content) return; // Prevent empty sender or message

    const message = new Message({ room, sender, content });
    await message.save();
    io.to(room).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
