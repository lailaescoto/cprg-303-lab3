import React, { useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div className="App">
      <ToDoList tasks={tasks} />
    </div>
  );
}


export default App;