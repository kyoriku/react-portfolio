import React, { useState } from 'react'; // Importing React to use JSX
import { Link } from 'react-router-dom'; // Importing Link to use anchor tags for routing
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS to style component
import '../styles/Navigation.css'; // Importing CSS file to style component

// Functional component to display navigation bar
const Navigation = () => {
  const [expanded, setExpanded] = useState(false);   // State to keep track of whether the navigation bar is expanded

  // Function to handle the toggle of the navigation bar
  const handleToggle = () => {
    setExpanded(!expanded); // Setting the expanded state to the opposite of its current value
  };

  // Returning the navigation bar with links to different sections of the application
  return (
    <nav className='navbar navbar-dark navbar-expand-sm'>
      <Link className='navbar-brand ms-3' to='/' onClick={() => setExpanded(false)}>Austin Graham</Link>
      <button className='navbar-toggler navbar-dark mx-2' type='button' onClick={handleToggle}>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/' onClick={() => setExpanded(false)}>About</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/portfolio' onClick={() => setExpanded(false)}>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/resume' onClick={() => setExpanded(false)}>Resume</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact' onClick={() => setExpanded(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; // Exporting the Navigation component to be used in other parts of the application
