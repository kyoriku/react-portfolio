import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Handle all clicks on the page
  useEffect(() => {
    const handleClick = (e) => {
      // If menu is not expanded, don't do anything
      if (!expanded) return;

      // Check if click is outside both menu and toggle button
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
      const isOutsideToggle = toggleRef.current && !toggleRef.current.contains(e.target);

      if (isOutsideMenu && isOutsideToggle) {
        setExpanded(false);
      }
    };

    // Add click handler to document
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => document.removeEventListener('click', handleClick);
  }, [expanded]);

  // Close menu on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent the document click handler from firing
    setExpanded(!expanded);
  };

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

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
          ref={toggleRef}
          className={`navbar-toggler custom-toggler ${expanded ? 'is-active' : ''}`}
          type="button"
          onClick={handleToggle}
        >
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </button>

        <div
          ref={menuRef}
          className={`navbar-menu ${expanded ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                  id={location.pathname === item.path ? 'active-nav-link' : undefined}
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