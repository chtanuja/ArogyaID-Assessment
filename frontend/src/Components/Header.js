import React from "react";
import { Button, Input } from "@chakra-ui/react";
import NHAlogo from "../NHAlogo.svg";
import ABDMlogo from "../ABDMlogo.svg";
import { Link } from "react-router-dom";

const Header = ({ showButtons }) => {
  return (
    <header>
      <div className="header-top">
        <div className="logo-section">
          <img src={NHAlogo} alt="Logo 1" />
          <img src={ABDMlogo} alt="Logo 2" />
        </div>
        {showButtons && (
          <div className="button-section">
            <Link to="/login">
              <Button colorScheme="orange">Login / Registration</Button>
            </Link>
            <Button colorScheme="orange">Admin Login</Button>
          </div>
        )}
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About ADBM</a>
          </li>
          <li>
            <a href="#">Resource Center</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="search-bar">
          <Button>
            Know your Doctor/Facility <i className="fas fa-search"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
