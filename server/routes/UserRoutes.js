// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../model/User"); // Import the User model

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, email, password } = req.body;

    // Create a new user document
    const newUser = new User({ username, email, password });

    // Save the user document to the database
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});




// Route for user login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failewwwd" });
    }
  });

module.exports = router;
