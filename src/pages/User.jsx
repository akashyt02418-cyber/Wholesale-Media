import React, { useState } from "react";
import "./User.css";

function User() {
  const [mode, setMode] = useState("login"); 
  // login | signup | forgot

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>
          {mode === "login" && "Login"}
          {mode === "signup" && "Create Account"}
          {mode === "forgot" && "Forgot Password"}
        </h2>

        <form>
          {mode === "signup" && (
            <input type="text" placeholder="Full Name" />
          )}

          <input type="email" placeholder="Email" />

          {mode !== "forgot" && (
            <input type="password" placeholder="Password" />
          )}

          <button type="button">
            {mode === "login" && "Login"}
            {mode === "signup" && "Sign Up"}
            {mode === "forgot" && "Reset Password"}
          </button>
        </form>

        <div className="auth-links">
          {mode === "login" && (
            <>
              <span onClick={() => setMode("forgot")}>
                Forgot Password?
              </span>
              <span onClick={() => setMode("signup")}>
                New user? Create account
              </span>
            </>
          )}

          {mode === "signup" && (
            <span onClick={() => setMode("login")}>
              Already have an account? Login
            </span>
          )}

          {mode === "forgot" && (
            <span onClick={() => setMode("login")}>
              Back to Login
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
