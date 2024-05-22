import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import './App.css'; // Import CSS file for styling

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('work'); // Default category
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === '') {
      alert('Please enter a task name.');
      return; // Exit function early if task name is empty
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Use a timestamp as a unique ID
      title: taskName,
      category,
    };

    // Add the new task to the context
    addTask(newTask);

    // Clear the form after successful submission
    setTaskName('');

    alert('Task added successfully!'); // Provide user feedback
  };

  return (
    <div className="TaskForm">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <label>
          Category:
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
