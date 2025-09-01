const express = require("express");
const Room = require("../models/Room");
const router = express.Router();

// Create a new room
router.post("/create", async (req, res) => {
  const { name, password } = req.body;
  try {
    const existingRoom = await Room.findOne({ name });
    if (existingRoom) {
      return res.status(400).json({ success: false, message: "Room already exists" });
    }

    const room = new Room({ name, password });
    await room.save();
    res.json({ success: true, message: "Room created successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Join an existing room
router.post("/join", async (req, res) => {
  const { name, password } = req.body;
  const room = await Room.findOne({ name });
  if (!room) return res.status(404).json({ success: false, message: "Room not found" });

  if (room.password !== password)
    return res.status(401).json({ success: false, message: "Invalid password" });

  res.json({ success: true, message: "Joined room successfully" });
});

module.exports = router;
