import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Topbar = ({ toggleSidebar, openTabs = [], removeTab }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const hambStyle = {
    // position: "absolute",
    
    // top: "10px",
    zIndex: 1200,
  };

  return (
    <div className="topbar" style={{ position: "relative" }}>
      <div className="humburger" style={hambStyle}>
        <button
          className="nav-link fa-show blue"
          onClick={(e) => {
            e.preventDefault();
            toggleSidebar();
          }}
          aria-label="Toggle sidebar"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Opened submenu tabs (tablet-like) */}
      {openTabs && openTabs.length > 0 && (
        <div className="opened-tabs">
          {openTabs.map((t) => (
            <div className={`tab-pill ${location.pathname === t.path ? "active" : ""}`} key={t.path}>
              <button
                className="tab-link"
                onClick={() => navigate(t.path)}
                type="button"
              >
                {t.title}
              </button>
              <button
                className="tab-close"
                onClick={() => removeTab && removeTab(t.path)}
                aria-label={`Close ${t.title}`}
                type="button"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <i
        className="fa fa-cogs settings-icon"
        onClick={() => setOpen(!open)}
      ></i>

      {open && (
        <div className="settings-dropdown">
          <div
            className="dropdown-item"
            role="button"
            onClick={() => {
              setOpen(false);
              navigate("/change-password");
            }}
          >
            <i className="fa fa-key"></i> Change Password
          </div>

          <div className="dropdown-divider"></div>

          <div
            className="dropdown-item logout"
            role="button"
            onClick={() => {
              logout();
              setOpen(false);
              navigate("/", { replace: true });
            }}
          >
            <i className="fa fa-power-off"></i> Logout
          </div>
        </div>
      )}
    </div>

    
  );
};

export default Topbar;
