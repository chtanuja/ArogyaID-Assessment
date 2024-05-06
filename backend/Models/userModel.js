const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = new mongoose.Schema({
  mobileNumber: { type: String, unique: true },
  email: { type: String, unique: true },
  dob: String,
  role: String,
  category: String,
  subcategory: String,
  username: { type: String, unique: true },
  password: String,
});

userModel.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model("UserModel", userModel);

module.exports = UserModel;
