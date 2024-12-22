import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default App;
function App() {
  const [tasks, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTodos([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_,i) => i !== index)
    newTasks.pop(index,1);
    setTodos(newTasks);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
      <ul>{tasks.map((todo, task) => (<li key={task}>{todo}<button onClick={() => removeTask(task)}>Remove</button></li>))}</ul>
    </div>
  );
}

export default App;


