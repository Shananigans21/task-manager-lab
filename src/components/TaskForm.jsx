import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    onAddTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">New Task:</label>
      <input
        id="task-input"
        placeholder="Add a new task..."
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
