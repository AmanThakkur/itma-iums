import DashboardLayout from "../../components/layout/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="page-title">HRMS & Payroll</div>

      <div className="cards">
        <div className="card">
          <h4>Total Employee</h4>
          <h2>57</h2>
        </div>

        <div className="card">
          <h4>Teaching Employee</h4>
          <h2>3</h2>
        </div>

        <div className="card">
          <h4>Non-Teaching Employee</h4>
          <h2>54</h2>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
