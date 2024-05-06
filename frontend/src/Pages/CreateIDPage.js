import React, { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import Header from "../Components/Header";
import aadharicon from "../aadhaar-icon.png";
import licence from "../licence.svg";
import { Link } from "react-router-dom";

const CreateIDPage = () => {
  const [IDType, setIDType] = useState("aadhar");
  const [aadharNumber, setAadharNumber] = useState("");

  const handleAadharNumberChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleReset = () => {
    setAadharNumber("");
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/check-aadhar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aadharNumber }),
      });
      if (response.ok) {
        const data = await response.json();
        // setAadharData(data);
        // setShowRegistration(true);
        window.location.href = `/registration?aadharNumber=${aadharNumber}`;
      } else {
        console.error("Aadhar not found");
      }
    } catch (error) {
      console.error("Error checking Aadhar:", error);
    }
  };

  // const handleSendOTP = async () => {
  //   try {
  //     const response = await fetch("/api/send-otp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ aadharNumber }),
  //     });
  //     if (response.ok) {
  //       setShowOTPInput(true);
  //     } else {
  //       console.error("Failed to send OTP");
  //     }
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     // Send request to verify OTP
  //     const response = await fetch("/api/verify-otp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ otp, aadharNumber }),
  //     });
  //     if (response.ok) {
  //       // Redirect to registration page upon successful OTP verification
  //       window.location.href = "/registration";
  //     } else {
  //       console.error("Invalid OTP");
  //     }
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //   }
  // };

  const handleIDType = (type) => {
    setIDType(type);
  };

  return (
    <div>
      <Header showButtons={false} />
      <Center className="login-container">
        <Box className="login-box">
          <div className="login-heading">
            Create your Healthcare Professional ID
          </div>
          <div className="register-sub-heading">
            The Healthcare Professional ID will connect you to the India's
            Digital Health ecosystem
          </div>
          <label htmlFor="generateIDVia" className="login-via-label">
            Generate Healthcare Professional ID via
          </label>
          <div className="loginVia-button-group">
            <button
              onClick={() => handleIDType("aadhar")}
              id="aadhatbtn"
              className="register-id-btn"
            >
              <img src={aadharicon} />
              Aadhar
            </button>
            <button id="licencebtn" className="register-id-btn">
              <img src={licence} />
              Driving license
            </button>
          </div>
          <form>
            <div className="login-elements">
              <label htmlFor="aadharNumber">
                Enter your Aadhar Number/Virtual ID
              </label>
              <input
                type="text"
                id="aadharNumber"
                value={aadharNumber}
                onChange={handleAadharNumberChange}
              />
              {/* {!showOTPInput && (
                <a href="#" className="send-otp" onClick={handleSendOTP}>
                  Send OTP
                </a>
              )} */}
            </div>

            {/* {showOTPInput && (
              <div className="login-elements">
                <label htmlFor="otp">
                  We have sent OTP to your Aadhar linked mobile number
                </label>
                <input
                  type="number"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            )} */}

            <div className="login-cancel">
              <Button
                colorScheme="gray"
                className="login-button"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                colorScheme="orange"
                className="login-button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            <div className="to-register">
              Already have an account?
              <a href="#">
                &nbsp;
                <Link to="/login">Login here</Link>
              </a>
            </div>
          </form>
        </Box>
      </Center>
    </div>
  );
};

export default CreateIDPage;
