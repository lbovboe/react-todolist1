import React,{useState} from 'react';
import Todolist from './Todolist';

function App() {
  const [todos,setTodos] = useState(["todo1","todo2"]);
  return (
    <>
      <Todolist todos={todos} />
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do </div>
    </>
    

  );
}

export default App;
