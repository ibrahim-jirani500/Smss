import { BrowserRouter ,Routes,Route,Link,useNavigation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Header";
import Dashboard from "./pages/admin/Dashboard"
import ManageStudent from "./pages/admin/ManageStudent"
import Examination from "./pages/admin/Examination";
import AddStudent from "./pages/admin/AddStudent";
import ManageStaff from "./pages/admin/ManageStaff";
import AddTeacher from "./pages/admin/AddTeacher";
import Header from "./pages/Header";

function App(){
  return(
   
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/ManageStudent" element={<ManageStudent/>}/>
    <Route path="/ManageStaff" element={<ManageStaff/>}/>    
    <Route path="/Examination" element={<Examination/>}/>
    <Route path="/AddStudent" element={<AddStudent/>}/>
    <Route path="/AddTeacher" element={<AddTeacher/>}/>
    
      </Routes>
</BrowserRouter>
      
    
    
  );
}

export default App

//pD03CtRNBLOfT2AH