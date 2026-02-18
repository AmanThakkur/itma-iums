import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/images/home.jpg";

const Sidebar = ({ collapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${openMenu ? "open" : ""} ${collapsed ? "collapsed" : ""}`}>

      {/* Top Brand Section */}
      <div className="sidebar-brand">
        <Link to="/admin" className="brand-left">
          <img
            src={homeIcon}
            alt="Home"
            className="brand-image"
          />
          <span className="brand-text">
            <b className="heads">HOME</b>
          </span>
        </Link>

        <span className="brand-right">
          <b className="heads">ITM-ERP</b>
        </span>
      </div>

      {/* Menu Title */}
      <h4 className="menu-title">Dashboard</h4>

      <ul className="menu-list">

    

        {/* HRMS Parent */}
        <li
          className="menu-parent"
          onClick={() => toggleMenu("hrms")}
        >
          HRMS
        </li>

        {/* HRMS Submenu */}
        {openMenu === "hrms" && (
          <ul className="submenu">
            <li>
              <Link to="/financial-year-master">
                Financial Year Master
              </Link>
            </li>
            <li>
              <Link to="/salary-master">
                Salary Master
              </Link>
            </li>
            <li>
              <Link to="/employee-master">
                Employee Master
              </Link>
            </li>
          </ul>
        )}

        <li>Academic Management</li>
        <li>Budget Management</li>
        <li>Examination</li>
        <li>Fee Management</li>
        <li>Payroll</li>
        <li>User Management</li>

      </ul>
    </div>
  );
};

export default Sidebar;
