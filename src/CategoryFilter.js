import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file for styling

const CategoryFilter = () => {
  return (
    <div className="CategoryFilter">
      <h3>Filter by Category:</h3>
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/category/work">Work</Link></li>
        <li><Link to="/category/personal">Personal</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
}

export default CategoryFilter;
