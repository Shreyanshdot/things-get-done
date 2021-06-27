import React from 'react';
import './Tasks.css'




function Tasks() {
   
  
    function CheckInput(){
        console.log('Got some Input !');
    
    }

    return(
        <div className="Tasks-area">
            <h1>Type Your Tasks Here :</h1>
             <div className="Tasks-body">
                <form action="">
                   <input type="textblock1"   onInput={CheckInput}/>
                   <input type="textblock2" id="textblock2"  onInput={CheckInput}/>
                </form>
                </div>
        </div>
    );
    

}
export default Tasks;