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

    function DeleteHandler(){
        if(todo.completed===false){
            alert("This Task is not yet done !");
        }

        else{
        SetTodos(todos.filter((el)=>el.id!==todo.id))
        console.log("Deleted ToDo :"+todo.text);
    
        }
    }

    return(
        <div className={todo.completed===true?"single-task":''}>
             <div className="flex-div">
            
                <div className="main-div"> 
                  <input type="checkbox"  id="checkbox" onClick={CheckboxHandler}/>
                 {text}
                </div>
                <div className="deletebtn-div">
                    <button className="delete-button" onClick={DeleteHandler}>-</button>
                </div>
            
             </div>
        </div>
    )

}
export default SingleTask;
