import React from 'react';
import "./SingleTask.css";


function SingleTask({text,todo,todos,SetTodos}){
    
   
    function CheckboxHandler(){
    

        SetTodos(todos.map((item)=>{
            if(/*checkBox.checked===true &&*/ item.id===todo.id) {
                return{
                    ...item,completed:!item.completed
                }
            }
            
            return item;
        }))

    }



    return(
        <div className={todo.completed===true?"single-task":''}>
              <input type="checkbox"  id="checkbox" onClick={CheckboxHandler}/>
            {text}
        </div>
    )

}
export default SingleTask;
