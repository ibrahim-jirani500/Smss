function Addteacher (){
    return(
<div className="addstudent">                   
                
           <div className="add-container">
             <form action="">
<h3>Add Teacher</h3>
       
<input className="input" type="text" placeholder="Full Name" required/>        
<input className="input" type="text" placeholder="Gender" required/>
<input className="input" type="number" placeholder=" phone number" required/>
<input className="input" type="text" placeholder="Residential address"/>
<input className="input" type="text" placeholder="subjects" required/>
<input className="input" type="number" placeholder="classes" required/>

        

         <button>Save</button>
        <button>cancel</button>
 
    

        </form>
           </div>
        </div>
    )
}
export default Addteacher