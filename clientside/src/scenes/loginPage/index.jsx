import React from "react";

const LoginPage = () => {
  return (
    <div>
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
        <input type="submit" value="Login" />
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
