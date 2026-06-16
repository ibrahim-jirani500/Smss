import { Link, useNavigate } from "react-router-dom";


function ManageStaff(){
    const navigate=useNavigate();
    return(
        
 <Link to={'/AddTeacher'} onClick={()=>Navigate('/AddTeacher')}>➕Add Teacher</Link>


    );

}
export default ManageStaff