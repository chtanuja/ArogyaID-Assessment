const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const addUserAadharData = require("./addUserAadharData");
const path = require("path");

const app = express();
dotenv.config();
connectDB();

app.use("/api/check-aadhar", require("./routes/checkAadhar.js"));
app.use("/api/aadhar-data", require("./routes/checkAadhar.js"));
app.use("/api/register", require("./routes/RegisterUser"));
app.use("/api/authenticate-user", require("./routes/authenticateUser.js"));
app.use("/api/getUserProfile", require("./routes/getUserProfile"));

// ----------------Deployment-----------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// ----------------Deployment-----------------

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`App is running on port ${PORT}`));
