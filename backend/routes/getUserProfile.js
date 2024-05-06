const express = require("express");
const router = express.Router();
const UserData = require("../Models/userModel");

router.use(express.json());

router.get("/:mobileNumber", async (req, res) => {
  try {
    const { mobileNumber } = req.params;
    const user = await UserData.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ message: "Aadhar data not found" });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserData.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "user data not found" });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
