// src/context/TaskContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on initial load
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Add a new task
  function addTask(task) {
    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks((prev) => [...prev, newTask]));
  }

  // Toggle completed status of a task
  function toggleComplete(id) {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !taskToUpdate.completed }),
    })
      .then((res) => res.json())
      .then((updatedTask) =>
        setTasks((prev) =>
          prev.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        )
      );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}
