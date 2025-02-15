import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave, isEditing }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low"
  });

  useEffect(() => {
    if (isEditing) {
      setNewTask(task);
    }
  }, [isEditing, task]);

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (newTask.title === "") {
      alert("Title is required");
      return;
    }
    onSave(newTask);
  };

  return (
    <div className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={newTask.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleChange}
      />
      <select
        name="priority"
        value={newTask.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleSubmit}>
        {isEditing ? "Save Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
