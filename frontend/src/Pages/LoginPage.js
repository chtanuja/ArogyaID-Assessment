import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import mobile from "../mobile.png";
import person from "../person.png";
import MobileLogin from "../Components/MobileLogin";
import UsernameLogin from "../Components/UsernameLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loginType, setLoginType] = useState("mobile");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLoginType = (type) => {
    setLoginType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const mobileOrUser = loginType === "mobile" ? mobileNumber : username;

    // Validate form fields
    if (!mobileOrUser || !password) {
      setError("Please enter both mobile number and password");
      return;
    }

    // Perform authentication logic (replace with your actual authentication logic)

    try {
      if (loginType === "mobile") {
        const response = await fetch("/api/authenticate-user/mobile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobileNumber, password }),
        });
        if (response.ok) {
          // Redirect to user profile page upon successful login
          console.log(`response from login ${response.user}`);
          window.location.href = `/user-profile?mobileNumber=${mobileNumber}`;
        } else {
          // Handle authentication error
          setError("Invalid credentials. Please try again.");
        }
      } else {
        const response = await fetch("/api/authenticate-user/username", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
          // Redirect to user profile page upon successful login
          window.location.href = `/user-profile?username=${username}`;
        } else {
          // Handle authentication error
          setError("Invalid credentials. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Header showButtons={false} />
      <Center className="login-container">
        <Box className="login-box">
          <div className="login-heading">
            Login to National Healthcare Providers Registry
          </div>

          <label htmlFor="loginVia" className="login-via-label">
            Login via
          </label>
          <div className="loginVia-button-group">
            <button onClick={() => handleLoginType("username")}>
              <img src={person} />
              Health care professional ID/ Username
            </button>
            <button onClick={() => handleLoginType("mobile")} id="usernameBtn">
              <img src={mobile} />
              Mobile Number
            </button>
          </div>
          {loginType === "mobile" ? (
            <MobileLogin
              mobileNumber={mobileNumber}
              password={password}
              handleMobileNumberChange={handleMobileNumberChange}
              handlePasswordChange={handlePasswordChange}
            />
          ) : (
            <UsernameLogin
              userName={username}
              password={password}
              handleUserNameChange={handleUserNameChange}
              handlePasswordChange={handlePasswordChange}
            />
          )}

          <div className="login-cancel">
            <Button colorScheme="gray" className="login-button">
              Cancel
            </Button>
            <Button
              colorScheme="orange"
              className="login-button"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
          <div className="to-register">
            Do not have an account?
            <a href="#">
              &nbsp;
              <Link to="/CreateID">Register here</Link>
            </a>
          </div>
        </Box>
      </Center>
    </div>
  );
};

export default LoginPage;
