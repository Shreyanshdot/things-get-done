import React from 'react';
import './Notes.css';


function Notes() {

    function CheckInput(){
        console.log('Got some Input for Notes !');
    }
    
    return(
        <div className="Notes-box">
            <h2>Type Your Notes Here :</h2>
            <textarea name="Notesarea" id="Notes-area" onInput={CheckInput} cols="52" rows="35">

            </textarea>
           
        </div>
    );
}

export default Notes;