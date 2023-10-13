import React from "react";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="login">
      <form action="">
        <label htmlFor="">Username / Email </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" className="btn" />
        <p className="asIf">
          Don't have an account? 
          <br></br>
          <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
