const Task = ({ task, onToggle, onDelete }) => {
    return (
      <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <span>{task.name} ({task.category})</span>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default Task;
  