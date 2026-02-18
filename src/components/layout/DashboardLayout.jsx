import { useState } from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 70 : 250;

  const toggleSidebar = () => setCollapsed((s) => !s);

  return (
    <div className="app-container">
      <Header />

      <div className="main-wrapper">
        <Sidebar collapsed={collapsed} />

        <div className="right-section">
          <Topbar
            collapsed={collapsed}
            toggleSidebar={toggleSidebar}
            sidebarWidth={sidebarWidth}
          />
          <div className="content-area">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
