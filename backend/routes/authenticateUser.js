// authRouter.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserData = require("../Models/userModel");

router.use(express.json());

router.post("/mobile", async (req, res) => {
  const { mobileNumber, password } = req.body;

  try {
    const user = await UserData.findOne({ mobileNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/username", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserData.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("user found");

    const isPasswordMatch = bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
