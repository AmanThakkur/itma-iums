import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import FinancialYearMaster from "../pages/hrms/FinancialYearMaster";
import SalaryMaster from "../pages/hrms/SalaryMaster";
import EmployeeMaster from "../pages/hrms/EmployeeMaster";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ChangePassword from "../pages/auth/ChangePassword";
import Terms from "../pages/common/Terms";
import Privacy from "../pages/common/Privacy";
import DashboardLayout from "../components/layout/DashboardLayout";





// Simple Protected Route
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  return isLoggedIn ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login />} />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />  

        {/* Dashboard + protected pages (persistent layout) */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="financial-year-master" element={<FinancialYearMaster />} />
          <Route path="salary-master" element={<SalaryMaster />} />
          <Route path="employee-master" element={<EmployeeMaster />} />
        </Route>

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

         
     

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
