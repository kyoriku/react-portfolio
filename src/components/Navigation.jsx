import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Get current location

  // Helper function to check if link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link
          className={`navbar-brand ${location.pathname === '/' ? 'active' : ''}`}
          to="/"
          onClick={() => setExpanded(false)}
        >
          Austin Graham
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {[
              { name: 'About', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Resume', path: '/resume' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;