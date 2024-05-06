import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const RegistrationBox = ({ aadharData }) => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    mobileNumber: "",
    email: "",
    dob: aadharData ? `${aadharData.dob}` : "",
    role: "",
    category: "",
    subcategory: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setPasswordError("Password and confirm password do not match");
      return;
    }

    setPasswordError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        window.location.href = "/registration-success";
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleReset = () => {
    setFormValues({
      mobileNumber: "",
      email: "",
      dob: `${aadharData.dob}` || "",
      role: "",
      category: "",
      subcategory: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const roles = [
    "I am a Healthcare Professional",
    "I am a Facility Manager/Administrator",
    "I am a Healthcare Professional & Facility Manager",
  ];
  const categoriesByRole = {
    "I am a Healthcare Professional": ["Doctor", "Nurse"],
    "I am a Facility Manager/Administrator": ["Facility Manager"],
    "I am a Healthcare Professional & Facility Manager": ["Doctor", "Nurse"],
  };
  const subcategoriesByCategory = {
    Doctor: [
      "Modern Medicine",
      "Dentist",
      "Ayurveda",
      "Unani",
      "Siddha",
      "Homeopathy",
      "Sowa-Rigpa",
    ],
    Nurse: [
      "Registered Auxillary Nurse Midwife(RANM)",
      "Registered Nurse(RN)",
      "Registered Nurse and Registered Midwife(RN&RN)",
      "Registered Lady Health Visitor(RLHV)",
    ],
  };

  return (
    <div className="registration-box-container">
      <h2 className="registration-box-heading">Registration Box</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-items">
          <div className="login-elements">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobileNumber"
              placeholder="Enter mobile number"
              value={formValues.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="login-elements">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="login-elements">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={formValues.dob}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="roles">
          <label className="roles-heading">Roles</label>
          {roles.map((role) => (
            <label htmlFor={role} className="radio-label">
              <input
                type="radio"
                name="role"
                value={role}
                checked={formValues.role === role}
                onChange={handleInputChange}
                required
              />
              {role}
            </label>
          ))}
        </div>
        <div className="input-items">
          <div className="login-elements">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              onChange={handleInputChange}
              name="category"
              value={formValues.category}
              required
            >
              <option value="">Select Category</option>
              {categoriesByRole[formValues.role] &&
                categoriesByRole[formValues.role].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          {formValues.category && formValues.category !== "FP" && (
            <div className="login-elements">
              <label htmlFor="subcategory">Subcategory:</label>
              <select
                id="subcategory"
                onChange={handleInputChange}
                name="subcategory"
                value={formValues.subcategory}
                required
              >
                <option value="">Select Subcategory</option>
                {subcategoriesByCategory[formValues.category] &&
                  subcategoriesByCategory[formValues.category].map(
                    (subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    )
                  )}
              </select>
            </div>
          )}
        </div>

        <div className="input-items">
          <div className="login-elements">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formValues.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="login-elements">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="login-elements">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <div className="passworderror">{passwordError}</div>
          </div>
        </div>
        <div className="button-row">
          <Button
            type="reset"
            className="reset-button"
            colorScheme="gray"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button type="submit" className="submit-button" colorScheme="orange">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationBox;
