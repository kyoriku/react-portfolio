import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className='navbar navbar-dark navbar-expand-sm'>
      <Link className='navbar-brand ms-3' to='/' onClick={() => setExpanded(false)}>Austin Graham</Link>
      <button className='navbar-toggler navbar-dark mx-2' type='button' onClick={handleToggle}>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/' onClick={() => setExpanded(false)}>About Me</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/portfolio' onClick={() => setExpanded(false)}>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact' onClick={() => setExpanded(false)}>Contact</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/resume' onClick={() => setExpanded(false)}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
