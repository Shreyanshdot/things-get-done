import React , {useState} from 'react';
import './Tasks.css';
import TasksCompleted from './TasksCompleted';


function Tasks() {
    
    const [text,SetText]=useState(['']);
    const [todos,SetTodos]=useState([]);
    let sometext = [text];              
    
     
    
    function InputHandler(e){
        
       localStorage.setItem("Task ",JSON.stringify(text));
        SetText(e.target.value); 
        console.log('Got some Input !'+ e.target.value);
        console.log(sometext);                  

    }

    

    function SubmitHandler(e){
        
        e.preventDefault();

        if(text!==""){

        SetTodos([...todos,{
            text:text,
            completed:false,
            id:Math.random()*1000
        }])
        SetText("");
        console.log("submitted");
    }
    else{
        
        alert("Please Input Something !")
    }
}
        console.log(todos);
    
    
    
    

    return(
        <div className="Tasks-card">
            <h1 className="Tasks-card-label">Type Your Tasks Here :</h1>
             <div className="Tasks-body">
                <div><form onSubmit={SubmitHandler}>
                   
                   <div className="input-field">    
                       <h2 className="task-label">Hey there ! </h2>
                       <input type="text" value={sometext} placeholder="what needs to be done ?"  id="textblock1"  onChange={InputHandler}
                         size="50"/>
                       <button className="submit-button" onClick={SubmitHandler}>+</button>
                   </div>
                  
                </form> </div>
             </div>
             <TasksCompleted todos={todos} SetTodos={SetTodos} settext={text} SubmitHandler={SubmitHandler}/> 
        </div>
    );
    

}
export default Tasks;