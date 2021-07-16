import React , {useState} from 'react';
import './Tasks.css'
import TasksCompleted from './TasksCompleted';



function Tasks() {
   
   
    const [text,SetText]=useState(['']);
    
    
    function InputHandler(e){

        SetText(e.target.value);
        console.log('Got some Input !'+ e.target.value);
    }

    function SubmitHandler(e){
        
        e.preventDefault();
        console.log("submitted");
    }
    
    
    return(
        <div className="Tasks-card">
            <h1 className="Tasks-card-label">Type Your Tasks Here :</h1> 
            <div className="Tasks-body">
                <div> <form onSubmit={SubmitHandler} >
                   
                   <div className="input-field">    
                       <h1 className="task-label">Hey there ! </h1>
                       <input type="text" placeholder="what needs to be done ?" id="textblock1" onInput={InputHandler} size="50"/>
                       <button className="submit-button" onClick={SubmitHandler}>+</button>
                   </div>
   
                </form> </div>

                {text}

            </div>
                <TasksCompleted/>
        </div>
    );
    

}
export default Tasks;