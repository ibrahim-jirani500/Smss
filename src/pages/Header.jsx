import { useNavigate } from 'react-router-dom';
import './Header.css'
function Header(){
  const navigate=useNavigate();
  return(
    <div className='Header'>
      <div className='nav-bar'>
        <div className='nav-links'>
       <button>
        Home
      </button>      
      <button>
        Student portal
      </button>
      <button onClick={()=>navigate('/Login')}>Staff Portal</button>
      <button>
        Annoucements
      </button>      
      <button>
        About Us
      </button>

        </div>
      </div>
      <div className='details'>
        
         <div className='details-center'>
           <h1>NAMIKASI SECONDARY SCHOOL
           </h1>

        </div>
      </div>

    </div>
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
  );
}
export default Header


