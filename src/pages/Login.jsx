import { useNavigate,Link } from "react-router-dom";
import './Login.css'












function Login(){
    const navigate = useNavigate();
    return(
        
        <div className="Login">                   
                
           <div className="Login-container">
             <form action="">
<h3>Login</h3>
       
<input className="input" type="email" placeholder="Enter Email Id" required/>
        
<input className="input" type="password" placeholder="Your Password" required/>
        <button className="bttn" onClick={()=>navigate('/Admin')}>Login</button>
 
    

        </form>
           </div>
        </div>
    );
}
export default Login