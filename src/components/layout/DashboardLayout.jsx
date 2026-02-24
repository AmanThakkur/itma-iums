import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 70 : 250;

  const toggleSidebar = () => setCollapsed((s) => !s);

  // Tabs opened from submenu clicks
  const [openTabs, setOpenTabs] = useState([]);

  const addTab = (path, title) => {
    setOpenTabs((prev) => {
      if (prev.find((t) => t.path === path)) return prev;
      return [...prev, { path, title }];
    });
  };

  const removeTab = (path) => {
    setOpenTabs((prev) => prev.filter((t) => t.path !== path));
  };

  return (
    <div className="app-container">
      <Header />

      <div className="main-wrapper">
        <Sidebar collapsed={collapsed} addTab={addTab} />

        <div className="right-section">
          <Topbar
            collapsed={collapsed}
            toggleSidebar={toggleSidebar}
            sidebarWidth={sidebarWidth}
            openTabs={openTabs}
            removeTab={removeTab}
          />
          <div className="content-area">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
