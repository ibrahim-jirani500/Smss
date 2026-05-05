function addstudent (){
    return(
<div className="addstudent">                   
                
           <div className="add-container">
             <form action="">
<h3>Registration</h3>
       
<input className="input" type="text" placeholder="Full Name" required/>        
<input className="input" type="text" placeholder="Registration number" required/>
<input className="input" type="number" placeholder="Home phone"/>
<input className="input" type="number" placeholder="Gender" required/>
<input className="input" type="text" placeholder="Residential address" required/>
<input className="input" type="text" placeholder="Any Disability" required/>
<input className="input" type="number" placeholder="Year Of Study" required/>

        

        <button>Add</button>
 
    

        </form>
           </div>
        </div>
    )
}
export default addstudent