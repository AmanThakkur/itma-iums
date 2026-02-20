import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import FinancialYearMaster from "../pages/hrms/FinancialYearMaster";
import SalaryMaster from "../pages/hrms/SalaryMaster";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Terms from "../pages/common/Terms";
import Privacy from "../pages/common/Privacy";





// Simple Protected Route
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = true; // 🔥 Later replace with auth state

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

        {/* Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Financial Year Master */}
        <Route
          path="/financial-year-master"
          element={
            <ProtectedRoute>
              <FinancialYearMaster />
            </ProtectedRoute>
          }
        />

        {/* Salary Master */}
        <Route
          path="/salary-master"
          element={
            <ProtectedRoute>
              <SalaryMaster />
            </ProtectedRoute>
          }
        />

        {/* Default Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

         
     

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
