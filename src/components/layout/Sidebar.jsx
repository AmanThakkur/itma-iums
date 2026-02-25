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

  const academicRoutes = [
    "/course-master",
    "/subject-master",
    "/session-master",
  ];

  const budgetRoutes = [
    "/budget-master", 
    "/budget-allocation"
  ];

  const examinationRoutes = [
    "/exam-master",
    "/exam-schedule",
    "/result-master",
  ];

  const feeRoutes = [
    "/fee-master", 
    "/fee-structure", 
    "/fee-collection"
  ];

  const payrollRoutes = [
    "/payroll-master", 
    "/payroll-process", 
    "/payslip"
  ];

  const userRoutes = [
    "/user-master", 
    "/role-master", 
    "/permission-master"
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
      else if (academicRoutes.includes(location.pathname))
        setOpenMenu("academic");
      else if (budgetRoutes.includes(location.pathname)) setOpenMenu("budget");
      else if (examinationRoutes.includes(location.pathname))
        setOpenMenu("examination");
      else if (feeRoutes.includes(location.pathname)) setOpenMenu("fee");
      else if (payrollRoutes.includes(location.pathname))
        setOpenMenu("payroll");
      else if (userRoutes.includes(location.pathname)) setOpenMenu("user");
      else setOpenMenu(null);
    }
  }, [location.pathname, navigationType]);
  
  // useEffect(() => {
  //   if (navigationType === "PUSH") {
  //     if (hrmsRoutes.includes(location.pathname)) setOpenMenu("hrms");
  //     else setOpenMenu(null);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.pathname, navigationType]);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Top Brand Section */}
      <div className="sidebar-brand">
        <Link to="/admin" className="brand-left">
          <img src={homeIcon} alt="Home" className="brand-image" />
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

          <ul className={`submenu ${openMenu === "hrms" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/financial-year-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab)
                    addTab("/financial-year-master", "Financial Year Master");
                }}
              >
                Financial Year Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/salary-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
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
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
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

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "academic" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("academic")}
          >
            Academic Management
          </div>

          <ul className={`submenu ${openMenu === "academic" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/course-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/course-master", "Course Master");
                }}
              >
                Course Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/subject-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/subject-master", "Subject Master");
                }}
              >
                Subject Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/session-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/session-master", "Session Master");
                }}
              >
                Session Master
              </NavLink>
            </li>
          </ul>
        </li>


        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "budget" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("budget")}
          >
            Budget Management
          </div>

          <ul className={`submenu ${openMenu === "budget" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/budget-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/budget-master", "Budget Master");
                }}
              >
                Budget Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/budget-allocation"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/budget-allocation", "Budget Allocation");
                }}
              >
                Budget Allocation
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "examination" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("examination")}
          >
            Examination
          </div>

          <ul className={`submenu ${openMenu === "examination" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/exam-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/exam-master", "Exam Master");
                }}
              >
                Exam Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/exam-schedule"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/exam-schedule", "Exam Schedule");
                }}
              >
                Exam Schedule
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/result-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/result-master", "Result Master");
                }}
              >
                Result Master
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "fee" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("fee")}
          >
            Fee Management
          </div>

          <ul className={`submenu ${openMenu === "fee" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/fee-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/fee-master", "Fee Master");
                }}
              >
                Fee Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/fee-structure"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/fee-structure", "Fee Structure");
                }}
              >
                Fee Structure
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/fee-collection"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  addTab("/fee-collection", "Fee Collection");
                }}
              >
                Fee Collection
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "payroll" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("payroll")}
          >
            Payroll
          </div>

          <ul className={`submenu ${openMenu === "payroll" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/payroll-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/payroll-master", "Payroll Master");
                }}
              >
                Payroll Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/payroll-process"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/payroll-process", "Payroll Process");
                }}
              >
                Payroll Process
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/payslip"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/payslip", "Payslip");
                }}
              >
                Payslip
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="menu-parent">
          <div
            className={`parent-title ${openMenu === "user" ? "parent-open" : ""}`}
            onClick={() => toggleMenu("user")}
          >
            User Management
          </div>

          <ul className={`submenu ${openMenu === "user" ? "show" : ""}`}>
            <li>
              <NavLink
                to="/user-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/user-master", "User Master");
                }}
              >
                User Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/role-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/role-master", "Role Master");
                }}
              >
                Role Master
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/permission-master"
                className={({ isActive }) => (isActive ? "active-submenu" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  if (addTab) addTab("/permission-master", "Permission Master");
                }}
              >
                Permission Master
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;