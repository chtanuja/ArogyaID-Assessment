const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userModel");
const bodyParser = require("body-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  console.log(`the request body is ${req}`);
  try {
    const {
      mobileNumber,
      email,
      dob,
      role,
      category,
      subcategory,
      username,
      password,
    } = req.body;
    console.log(req.body);
    const newUser = new UserModel({
      mobileNumber,
      email,
      dob,
      role,
      category,
      subcategory,
      username,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
