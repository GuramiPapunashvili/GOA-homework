import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === currentTaskId ? { ...t, ...task } : t
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskId(null);
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setCurrentTaskId(id);
  };

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm task={tasks.find(t => t.id === currentTaskId)} onSave={isEditing ? updateTask : addTask} isEditing={isEditing} />
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("low")}>Low</button>
        <button onClick={() => setFilter("medium")}>Medium</button>
        <button onClick={() => setFilter("high")}>High</button>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={handleEdit} filter={filter} />
    </div>
  );
};

export default Dashboard;
