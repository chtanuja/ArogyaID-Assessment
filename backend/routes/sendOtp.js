const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const AadharData = require("../Models/aadharModel");
const dotenv = require("dotenv");

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { aadharNumber } = req.body;
    const user = await AadharData.findOne({ aadharNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = generateOTP(); // Generate OTP
    await sendOTP(user.phoneNumber, otp); // Send OTP to user's phone number

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Send OTP using Twilio
async function sendOTP(phoneNumber, otp) {
  try {
    await twilioClient.messages.create({
      body: `Your OTP for verification is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log(`OTP sent successfully to ${phoneNumber}`);
  } catch (error) {
    console.error(`Error sending OTP to ${phoneNumber}:`, error);
    throw error;
  }
}

module.exports = router;
