// DashboardLayout.jsx
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
