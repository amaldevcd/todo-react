
import './App.css';
import {useState} from 'react';

function App() {
  const [toDo,settoDo]=useState([])
  const [todo,settodo]=useState('')
  return (
    <div className="app">
       <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input" value={todo} onChange={(e)=>settodo(e.target.value)}>
        <input type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settoDo([...toDo,todo])} className="fas fa-plus"></i>
      </div>
      { toDo.map((value)=>{
      return(<div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
      )
    })}
    </div>
    
  );
}

export default App;
