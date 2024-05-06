// server/routes/checkAadhar.js

const express = require("express");
const router = express.Router();
const AadharData = require("../Models/aadharModel");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { aadharNumber } = req.body;
    const user = await AadharData.findOne({ aadharNumber });
    if (user) {
      res.status(200).json({ exists: true, message: "Aadhar number exists" });
    } else {
      res
        .status(404)
        .json({ exists: false, message: "Aadhar number not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:aadharNumber", async (req, res) => {
  try {
    const { aadharNumber } = req.params;
    const user = await AadharData.findOne({ aadharNumber });
    if (!user) {
      return res.status(404).json({ message: "Aadhar data not found" });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
