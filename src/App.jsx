import { BrowserRouter ,Routes,Route,Link,useNavigation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import ManageStudent from "./components/ManageStudent"
import Examination from "./components/Examination";
import AddStudent from "./components/AddStudent";
import ManageStaff from "./components/ManageStaff";
import AddTeacher from "./components/AddTeacher";

function App(){
  return(
   
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Admin" element={<Admin/>}/>
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