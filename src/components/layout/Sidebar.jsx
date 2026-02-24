import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigationType } from "react-router-dom";
import homeIcon from "../../assets/images/home.jpg";

const Sidebar = ({ collapsed, addTab }) => {
  // HRMS routes list
  const hrmsRoutes = [
    "/financial-year-master",
    "/salary-master",
    "/employee-master"
  ];

  // keep menus closed on initial load; clicking toggles them open
  const [openMenu, setOpenMenu] = useState(null);

  const location = useLocation();
  const navigationType = useNavigationType();

  // When the user navigates within the app (PUSH), open the corresponding parent
  // This keeps parent open after clicking a submenu, but keeps menus closed on first load (POP)
  useEffect(() => {
    if (navigationType === "PUSH") {
      if (hrmsRoutes.includes(location.pathname)) setOpenMenu("hrms");
      else setOpenMenu(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, navigationType]);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

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
        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "hrms" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("hrms")}
          >
            HRMS
          </div>

          <ul
            className={`submenu ${openMenu === "hrms" ? "show" : ""}`}
          >
            <li>
              <NavLink
                to="/financial-year-master"
                className={({ isActive }) =>
                  isActive ? "active-submenu" : ""
                }
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/financial-year-master", "Financial Year Master");
                }}
              >
                Financial Year Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/salary-master"
                className={({ isActive }) =>
                  isActive ? "active-submenu" : ""
                }
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/salary-master", "Salary Master");
                }}
              >
                Salary Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/employee-master"
                className={({ isActive }) =>
                  isActive ? "active-submenu" : ""
                }
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/employee-master", "Employee Master");
                }}
              >
                Employee Master
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Other Menu Items */}
        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "academic" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("academic")}
          >
            Academic Management
          </div>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "budget" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("budget")}
          >
            Budget Management
          </div>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "examination" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("examination")}
          >
            Examination
          </div>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "fee" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("fee")}
          >
            Fee Management
          </div>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "payroll" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("payroll")}
          >
            Payroll
          </div>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "user" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("user")}
          >
            User Management
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;