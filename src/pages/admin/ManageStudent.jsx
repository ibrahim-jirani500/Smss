import { Link, useNavigate } from "react-router-dom";


function ManageStudent(){
    const navigate=useNavigate();
    return(
 <Link to={'/addstudent'} onClick={()=>Navigate('/addstudent')}>➕Add Student</Link>




    );

}
export default ManageStudent