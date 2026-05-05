import { useNavigate } from 'react-router-dom';
import './Landing.css'
function Landing(){
  const navigate=useNavigate();
  return(
   
    <div className="Landing-page">
      
        <div className="Landing-container">
      <p>
        Sign in
      </p>
      
      <button className="btn" onClick={()=>navigate()}>
          Student
      </button>
      <button className="btn" onClick={()=>navigate()}>
          Teacher
      </button>
      <button className="btn" onClick={()=>navigate('/Login')}>Admin</button>

         </div>
    </div>
   
  );
}
export default Landing


