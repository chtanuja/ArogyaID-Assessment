import React from "react";

const UsernameLogin = (props) => {
  return (
    <>
      <div className="login-elements">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your User Name"
          value={props.username}
          onChange={props.handleUserNameChange}
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

export default UsernameLogin;
