import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList"; // Import your TaskList component
import TaskForm from "./TaskForm"; // Import your TaskForm component
import CategoryFilter from "./CategoryFilter"; // Import your CategoryFilter component
import "./App.css"; // Import CSS file for styling
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <h1>CODEXCUE - Task Manager</h1>
          <CategoryFilter />

          <Routes>
            <Route path="/" exact element={<TaskList />} />{" "}
            {/* Use element prop */}
            <Route path="/category/:category" element={<TaskList />} />{" "}
            {/* Use element prop */}
            <Route path="/add-task" element={<TaskForm />} />{" "}
            {/* Use element prop */}
          </Routes>
        </div>
        <TaskForm />
      </Router>
    </TaskProvider>
  );
}

export default App;
