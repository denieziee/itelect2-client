import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

// Session 13: the tasks are typed in here, in the browser.
// Session 14 replaces this array with a request to the live API.
const STARTING_TASKS = [
  { id: 1, title: "Set up PostgreSQL database", dueDate: "2026-10-20" },
  { id: 2, title: "Deploy the API to Render", dueDate: "2026-10-21" },
  { id: 3, title: "Build the React client", dueDate: "2026-10-22" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: "",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="tasks">
      <h1>Task Manager</h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
