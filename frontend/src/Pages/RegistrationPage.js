import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import RegistrationBox from "../Components/RegistrationBox";

const RegistrationPage = () => {
  const [aadharData, setAadharData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const aadharNumber = urlParams.get("aadharNumber");
    console.log(aadharNumber);

    const fetchAadharData = async () => {
      try {
        const response = await fetch(`/api/aadhar-data/${aadharNumber}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAadharData(data.data);
        } else {
          console.error("Error fetching Aadhar data");
        }
      } catch (error) {
        console.error("Error fetching Aadhar data:", error);
      }
    };

    if (aadharNumber) {
      fetchAadharData();
    }
  }, []);

  return (
    <div>
      <Header showButtons={false} />

      <div className="aadhar-info-container">
        {aadharData && (
          <div className="aadhar-info">
            <h2 className="name">{aadharData.name}</h2>
            <div className="aadhar-verified">
              Aadhar Verified <span className="tick-mark">✔</span>
            </div>
            <div className="details">
              <div className="detail">
                <div className="gen-dob-ad">
                  <span className="gray">Gender</span>
                  {aadharData.gender}
                </div>
                <div className="gen-dob-ad">
                  <span className="gray"> Date of Birth</span>
                  {aadharData.dob}
                </div>
              </div>
              <div className="detail">
                <div className="gen-dob-ad">
                  <span className="gray">Address</span>{" "}
                  <span>{aadharData.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <RegistrationBox aadharData={aadharData} />
    </div>
  );
};

export default RegistrationPage;
