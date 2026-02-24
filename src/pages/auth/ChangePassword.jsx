import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";
import bgImage from "../../assets/images/forget-bg.jpg";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState(null);

  const validate = () => {
    if (!current || !newPass || !confirm) {
      setMessage({ type: "error", text: "All fields are required." });
      return false;
    }
    if (newPass !== confirm) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return false;
    }
    if (newPass.length < 6) {
      setMessage({ type: "error", text: "New password should be at least 6 characters." });
      return false;
    }
    if (newPass === current) {
      setMessage({ type: "error", text: "New password must be different from current password." });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;

    // Simulate API call
    setTimeout(() => {
      setMessage({ type: "success", text: "Password changed successfully." });
      setCurrent("");
      setNewPass("");
      setConfirm("");
    }, 700);
  };

  return (
    <div
      className="change-root"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(247, 250, 252, 0.75), rgb(238 242 255 / 30%)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="change-topbar">
        <button className="home-btn" onClick={() => navigate("/admin")}>Home</button>
      </div>

      <div className="change-page">
        <div className="change-card">
          <h2>Change Password</h2>
          <p className="muted">Update your account password securely.</p>

          {message && (
            <div className={`msg ${message.type}`}>{message.text}</div>
          )}

          <form className="change-form" onSubmit={handleSubmit}>
            <label>Current Password</label>
            <div className="input-wrap">
              <input
                type={showCurrent ? "text" : "password"}
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                placeholder="Enter current password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowCurrent((s) => !s)}
                aria-label="Toggle current password visibility"
              >
                {showCurrent ? "Hide" : "Show"}
              </button>
            </div>

            <label>New Password</label>
            <div className="input-wrap">
              <input
                type={showNew ? "text" : "password"}
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="Enter new password"
                autoComplete="new-password"
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowNew((s) => !s)}
                aria-label="Toggle new password visibility"
              >
                {showNew ? "Hide" : "Show"}
              </button>
            </div>

            <label>Confirm New Password</label>
            <div className="input-wrap">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm new password"
                autoComplete="new-password"
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            <div className="actions">
              <button type="submit" className="btn primary">
                Update Password
              </button>
              <button
                type="button"
                className="btn secondary"
                onClick={() => {
                  setCurrent("");
                  setNewPass("");
                  setConfirm("");
                  setMessage(null);
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
