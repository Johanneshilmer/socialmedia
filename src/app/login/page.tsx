import React from "react";
import NavBar from "../components/NavBar";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="login-main">
        <div className="login-form">
          <div className="container login-header">
            <h1>Login</h1>
          </div>

          <form
            action="/api/login"
            method="POST"
            className="container login-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
