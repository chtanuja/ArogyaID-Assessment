import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

const UserProfilePage = () => {
  console.log("UserProfilePage is mounted");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mobileNumber = urlParams.get("mobileNumber") || null;
    console.log(` ${mobileNumber}`);
    const username = urlParams.get("username") || null;
    console.log(`username ${username}`);

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `/api/getUserProfile/${username || mobileNumber}`
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          console.error("Error fetching User data");
        }
      } catch (error) {
        console.error("Error fetching User data:", error);
      }
    };

    if (username || mobileNumber) {
      fetchUserData();
    }
  }, []);

  return (
    <>
      <Header showButtons={false} />
      <div className="user-profile-container">
        {userData && (
          <div class="users-data">
            <div class="user-item">
              <div class="data-name">Mobile Number</div>
              <div class="data-value">{userData.mobileNumber}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Email</div>
              <div class="data-value">{userData.email}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Date of Birth</div>
              <div class="data-value">{userData.dob}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Role</div>
              <div class="data-value">{userData.role}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Category</div>
              <div class="data-value">{userData.category}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Sub Category</div>
              <div class="data-value">{userData.subcategory}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Username</div>
              <div class="data-value">{userData.username}</div>
            </div>
            <div class="user-item">
              <div class="data-name">Password</div>
              <div class="data-value">{userData.password}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfilePage;
