import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const firstNavItemRef = useRef(null);

  // Handle back to top functionality
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#back-to-nav') {
        window.scrollTo(0, 0);
        const isMobileView = window.matchMedia('(max-width: 767.98px)').matches;

        if (isMobileView) {
          // Expand the menu first
          setExpanded(true);

          // Focus the active nav link after menu animation
          setTimeout(() => {
            const activeNavItem = document.querySelector('.nav-link.active');
            if (activeNavItem) {
              activeNavItem.focus();
            }
          }, 300);
        } else {
          // Desktop behavior - just focus the active nav link
          const activeNavItem = document.querySelector('.nav-link.active');
          if (activeNavItem) {
            activeNavItem.focus();
          }
        }

        // Clear the hash without jumping
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClick = (e) => {
      if (!expanded) return;

      const isOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
      const isOutsideToggle = toggleRef.current && !toggleRef.current.contains(e.target);

      if (isOutsideMenu && isOutsideToggle) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [expanded]);

  // Close menu on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && expanded) {
      setExpanded(false);
      toggleRef.current?.focus();
    }
  };

  // Move focus to first nav item when menu opens on mobile
  useEffect(() => {
    if (expanded && firstNavItemRef.current && window.innerWidth < 768) {
      firstNavItemRef.current.focus();
    }
  }, [expanded]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className="navbar navbar-expand-md"
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <Link
          className={`navbar-brand ${location.pathname === '/' ? 'active' : ''}`}
          to="/"
          onClick={() => setExpanded(false)}
          aria-current={location.pathname === '/' ? 'page' : undefined}
        >
          Austin Graham
          {location.pathname === '/' && (
            <span className="visually-hidden"> (current page)</span>
          )}
        </Link>

        <button
          ref={toggleRef}
          className={`navbar-toggler custom-toggler ${expanded ? 'is-active' : ''}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="main-nav-menu"
          aria-label={expanded ? 'Close main menu' : 'Open main menu'}
        >
          <div
            className="hamburger-lines"
            aria-hidden="true"
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </button>

        <div
          ref={menuRef}
          id="main-nav-menu"
          className={`navbar-menu ${expanded ? 'show' : ''}`}
          role="menubar"
          aria-label="Main menu items"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="nav-item"
                role="none"
              >
                <Link
                  ref={index === 0 ? firstNavItemRef : null}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  id={location.pathname === item.path ? 'active-nav-link' : undefined}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="visually-hidden"> (current page)</span>
                  )}
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