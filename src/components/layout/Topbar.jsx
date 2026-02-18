import { useState } from "react";

const Topbar = ({  toggleSidebar }) => {
  const [open, setOpen] = useState(false);

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

      <i
        className="fa fa-cogs settings-icon"
        onClick={() => setOpen(!open)}
      ></i>

      {open && (
        <div className="settings-dropdown">
          <div className="dropdown-item">
            <i className="fa fa-key"></i> Change Password
          </div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-item logout">
            <i className="fa fa-power-off"></i> Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
