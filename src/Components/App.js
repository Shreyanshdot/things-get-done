import React from 'react';
import './App.css';
import Tasks from './Tasks';
import Notes from './Notes';

function App() {
    

  
  return (
    
    <div className="App">
       <Tasks   />
       {/* <TasksCompleted  /> */}
       <Notes/> 
    </div>
    
     
    
    
  );
 
}

export default App;