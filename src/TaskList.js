import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from './TaskContext';
import './App.css'; // Import CSS file for styling

const TaskList = () => {
  const { category } = useParams(); // Get the category from URL params
  const { tasks } = useContext(TaskContext);

  // Filter tasks based on category if provided
  const filteredTasks = category ? tasks.filter(task => task.category === category) : tasks;

  return (
    <div className="TaskList">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Please add some.</p>
      ) : (
        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>{task.title} - {task.category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
