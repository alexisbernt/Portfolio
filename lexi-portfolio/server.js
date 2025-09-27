// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;
const USERS_FILE = "./Users.json";

app.use(cors());
app.use(express.json());

// Ensure Users.json exists
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Handle signups
app.post("/signup", (req, res) => {
  const { name, email, newsletter } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email required" });
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));

  // Prevent duplicate emails
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: "Email already registered" });
  }

  const newUser = {
    name,
    email,
    newsletter,
    date: new Date().toISOString(),
  };

  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.status(201).json({ message: "User added successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
