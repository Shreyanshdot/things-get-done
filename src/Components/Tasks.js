import React from 'react';
import './Tasks.css'




function Tasks() {
   
  
    function CheckInput(){
        console.log('Got some Input !');
    
    }

    return(
        <div className="body">
            <h1>Type Your Tasks </h1>
             <div className="Tasks-body">
                <form action="">
                   <input type="text"   onInput={CheckInput}/>
                   <input type="text"   onInput={CheckInput}/>
                </form>
                </div>
        </div>
    );
    

}
export default Tasks;