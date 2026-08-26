const express = require("express");

const app = express();

app.use(express.json());

// Test API
app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "P2P Exchange API is working"
  });
});

// Registration API - temporary test
app.post("/api/auth/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  res.status(201).json({
    success: true,
    message: "Registration API is working."
  });
});

module.exports = app;