const mongoose = require("mongoose");

const aadharModel = mongoose.Schema({
  aadharNumber: { type: String, unique: true },
  phoneNumber: String,
  name: String,
  gender: String,
  dob: String,
  address: String,
});

const AadharData = mongoose.model("AadharData", aadharModel);

module.exports = AadharData;
