import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "../../assets/images/forgot-bg.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button
        onClick={() => navigate("/")}
        aria-label="Back to login"
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          zIndex: 3,
          background: "#ffffff",
          border: "1px solid #e6e9ef",
          padding: "8px 12px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Back
      </button>

      <div className="login-container">
        <div className="simple-page">
          <h2>Reset Password</h2>

          <p>Please enter your registered email address.</p>

          <input
            type="email"
            placeholder="Enter your email"
            className="simple-input"
          />

          <button className="simple-btn">Send Reset Link</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;