import React from 'react';
import './Tasks.css'
import TasksCompleted from './TasksCompleted';



function Tasks() {
   
  
    function CheckInput(){
        console.log('Got some Input !');
    
    }

    return(
        <div className="Tasks-card">
            <h1 className="Tasks-card-label">Type Your Tasks Here :</h1> 
            <div className="Tasks-body">
                <div> <form >
                   
                   <div className="input-field">    
                       <h1 className="task-label">Hey there ! </h1>
                       <input type="text" placeholder="what needs to be done ?" id="textblock1" onInput={CheckInput} size="50"/>
                   </div>

                     
                </form> </div>
         </div>
                <TasksCompleted/>
        </div>
    );
    

}
export default Tasks;