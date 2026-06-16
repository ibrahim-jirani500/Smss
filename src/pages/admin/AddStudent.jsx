function addstudent (){
    return(
<div className="addstudent">                   
                
           <div className="add-container">
             <form action="">
<h3>Add Student</h3>
       
<input className="input" type="text" placeholder="Full Name" required/>        
<input className="input" type="text" placeholder="Registration number" required/>
<input className="input" type="number" placeholder="Home phone"/>
<input className="input" type="number" placeholder="Gender" required/>
<input className="input" type="text" placeholder="Residential address" required/>
<input className="input" type="text" placeholder="Any Disability" required/>
<input className="input" type="number" placeholder="Year Of Study" required/>

        

        <button>Save</button>
        <button>cancel</button>
 
    

        </form>
           </div>
        </div>
    )
}
export default addstudent