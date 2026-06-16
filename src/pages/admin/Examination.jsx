    import { useNavigate } from "react-router-dom"
   // import './Examination.css'
function Examination(){
const navigate = useNavigate();
return(
    <div className="classes">
        <div className="class-buttons">
             <button className="class" onClick={()=>navigate('/Login')}>
          FORM 1
      </button>
      <button className="class" onClick={()=>navigate('/Login')}>
          FORM 2
      </button>
      <button className="class" onClick={()=>navigate('/Login')}>FORM 3</button>
       <button className="class" onClick={()=>navigate('/Login')}>FORM 4</button>
        </div>
        
    </div>
)
}
export default Examination