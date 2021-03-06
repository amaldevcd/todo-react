
import './index.css';
import {useState} from 'react';

function App() {
  const [toDos,setToDos]=useState([]);
  const [toDo,settoDo]=useState('');
  var today = new Date()
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const handleDelete = (value) =>
  {
    console.log(value.text);
    setToDos(toDos.filter((obj)=>
    {return obj.id!== value.id}
    ))
  }
return(
  <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {daylist[day]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => settoDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])}></i>
      </div>
      <div className="todos">
        {toDos.map((value) =>
        {
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e) => {console.log(e.target.checked);
              setToDos(toDos.filter((obj2) =>
              {if(value===obj2)
              {obj2.status=e.target.checked}
              console.log(value);
              return obj2;
            }))
              }} type="checkbox" name="" id="" value="false"/>
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>handleDelete(value)}></i>
          </div>
        </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;
