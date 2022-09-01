import React from 'react';
import "../Styles/TasksCompleted.css";
import SingleTask from "./SingleTask";

function TasksCompleted({todos,SetTodos})
    {
        
       
        return(
            
            <div className="taskscompleted-card">
                <h2 className="header-text"> Tasks List </h2>
            <div className="tasks">
             <h4 className="text"> following is a List of all the tasks you have : </h4>    
               
                  <div className="taskmap">
                    
                    
                   {todos.map((todo) => (
                       <SingleTask text={todo.text} todo={todo} todos={todos} SetTodos={SetTodos} key={todo.id}  />
                   ))}
                   
                  </div> 
                   
            </div>
           
            </div>


    );
}
export default TasksCompleted;