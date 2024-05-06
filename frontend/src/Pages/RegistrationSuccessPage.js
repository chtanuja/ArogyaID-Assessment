import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { Button } from "@chakra-ui/react";

const RegistrationSuccessPage = () => {
  return (
    <div>
      <Header showButtons={false} />
      <div className="registration-success-container">
        <h2 className="success-message">You have registered successfully!</h2>
        <Link to="/login">
          <Button colorScheme="orange" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccessPage;
