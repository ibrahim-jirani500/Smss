import { Link, useNavigate } from "react-router-dom";

import './Student.css'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <div className="welcome" >
        <h2>Welcome To Admin Panel</h2>
    </div>
    <div className="navbar">
      <Link to={'/ManageStudent'} className="navbar-links" onClick={()=>navigate('/ManageStudent')}>Manage Student</Link>
      <div className="navbar-links" onClick={()=>navigate('/ManageStaff')}>Manage Staffs</div>
      <div className="navbar-links">Clearance</div>
      <div className="navbar-links">Records</div>
      <Link to={'/Examination'} className="navbar-links" onClick={()=>navigate('/Examination')}>Examination Results</Link>
    </div>
      
        
    </div>
  )
}
export default Dashboard;

