import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 ? <p>No tasks available.</p> : tasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
