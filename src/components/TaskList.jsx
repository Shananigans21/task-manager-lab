import React from "react";

function TaskList({ tasks, toggleComplete, searchTerm }) {
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
          <button data-testid={task.id} onClick={() => toggleComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
