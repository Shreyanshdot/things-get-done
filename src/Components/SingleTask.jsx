import React from 'react';
import "../Styles/SingleTask.css";


function SingleTask({ text, todo, todos, SetTodos }) {


    function CheckboxHandler() {


        SetTodos(todos.map((item) => {
            if ( item.id === todo.id ) {
                return {
                    ...item, completed: !item.completed
                }
            }

            return item;
        }))

    }

    function DeleteHandler() {

        if (todo.completed === false) {

                if( window.confirm("This Task is not yet done, are you sure you want to delete it ?") ){

                todo.completed = true;
                SetTodos(todos.filter((el) => el.id !== todo.id))
                setTimeout(function(){alert(` Deleted : " ${text} "`);},1000)   // displays alert message after 1 sec.

                }          
            
                else{
                alert("Get going !");
                }
            }

        else {
            SetTodos(todos.filter((el) => el.id !== todo.id))
            console.log("Deleted ToDo :" + todo.text);
            let popupWin = window.open(' ',' ','width=300,height=300,left=600,top=250');
            popupWin.document.write( "Deleted ToDo: " + text);
            setTimeout(function(){ popupWin.close(); },1500);   
        }
      }
    

    return (
        <div className={todo.completed === true ? "single-task" : ''}>
            <div className="flex-div">

                <div className="main-div">
                    <input type="checkbox" id="checkbox" onClick={CheckboxHandler} />
                    {text}
                </div>
                <div className="deletebtn-div">
                    <button className="delete-button" onClick={DeleteHandler}>-</button>
                </div>

            </div>
        </div>
    );

}
export default SingleTask;
