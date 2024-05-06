import React from "react";

const MobileLogin = (props) => {
  return (
    <>
      <div className="login-elements">
        <label htmlFor="mobileNumber">Registered Mobile Number</label>
        <input
          type="text"
          id="mobileNumber"
          placeholder="Enter your mobile number"
          value={props.mobileNumber}
          onChange={props.handleMobileNumberChange}
          required
        />
      </div>
      <div className="login-elements">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password}
          onChange={props.handlePasswordChange}
          required
        />
      </div>
    </>
  );
};

export default MobileLogin;
