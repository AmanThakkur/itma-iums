import DashboardLayout from "../../components/layout/DashboardLayout";
import "./FinancialYearMaster.css";

const FinancialYearMaster = () => {
  return (
    <DashboardLayout>

      {/* Page Title */}
      <div className="page-header">
        <h2>Financial Year Master</h2>
        <h3>Advance Search <i class="fa fa-search"></i> </h3>
      </div>

      {/* Form Section */}
      <div className="form-section">
  
    <span className="newrecord">New Record</span>
  

  <div className="form-grid">

    <div className="form-row">
      <label>Year</label>
      <select>
        <option>Select Financial Year</option>
      </select>
    </div>

    <div className="form-row">
      <label>From Date</label>
      <input type="date" />
    </div>

    <div className="form-row">
      <label>To Date</label>
      <input type="date" />
    </div>

  </div>

  <div className="btn-group">
    <button className="save-btn">Save</button>
    <button className="reset-btn">Reset</button>
  </div>

</div>


      {/* Table Section */}
      <div className="table-section">
        

        <div className="table-header">
        <h3>List of Financial Year(s)</h3>
        <h3>Run Date : 18-02-2026 12:50:57</h3>
        <div className="btnn-group">
        <button className="download-btn">Download <i class="fa fa-download"></i></button>
         </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Year</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>2025</td>
              <td>01/04/2025</td>
              <td>31/03/2026</td>
              <td className="active">Active</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>2</td>
              <td>2024</td>
              <td>01/01/2024</td>
              <td>31/05/2025</td>
              <td className="active">Active</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>3</td>
              <td>2025</td>
              <td>01/04/2025</td>
              <td>31/03/2026</td>
              <td className="active">Active</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>4</td>
              <td>2025</td>
              <td>01/04/2025</td>
              <td>31/03/2026</td>
              <td className="active">Active</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>

    </DashboardLayout>
  );
};

export default FinancialYearMaster;
