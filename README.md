# Lab: Task Manager
A simple React app for managing tasks — add new tasks, mark them completed, and search/filter tasks in real-time. Built using React hooks: useContext for global state, useId for unique IDs, and useRef for optimized inputs.

#Features

View all tasks on page load (data fetched from backend)
Add new tasks through a controlled form
Mark tasks as completed or undo completion
Search tasks by name with live filtering
Global state management with React Context API
Accessibility improvements using useId
Getting Started

#Prerequisites
Node.js and npm installed
Backend server running on port 6001 (make sure db.json is set up)

#Installation
git clone
npm install
npm run dev
npm run server 
Open the app in your browser at http://localhost:3000 or the port specified by your dev server.

Usage

Add tasks in the input field and submit to add to your list.
Click the complete button to mark a task done (or undo it).
Use the search bar to filter tasks by their titles.
Tasks persist in the backend JSON server (db.json).
Technologies Used

React (Hooks: useContext, useState, useRef, useId)
JSON Server (for backend API)
Vite (React build tool)
