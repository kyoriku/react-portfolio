import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const firstNavItemRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 86;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);

      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      // Section doesn't exist (probably on error page), navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setExpanded(false);

    // Check if we're already on home page
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      setActiveSection('about');

      window.history.pushState('', document.title, window.location.pathname);
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setExpanded(false);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const sections = ['about', 'projects', 'experience', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-74px 0px -66% 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== 'back-to-nav') {
        setTimeout(() => scrollToSection(hash), 100);
      } else if (hash === 'back-to-nav') {
        window.scrollTo(0, 0);
        const isMobileView = window.matchMedia('(max-width: 767.98px)').matches;

        if (isMobileView) {
          setExpanded(true);
          setTimeout(() => {
            const activeNavItem = document.querySelector('.nav-link.active');
            if (activeNavItem) {
              activeNavItem.focus();
            }
          }, 300);
        } else {
          const activeNavItem = document.querySelector('.nav-link.active');
          if (activeNavItem) {
            activeNavItem.focus();
          }
        }
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && expanded) {
      setExpanded(false);
      toggleRef.current?.focus();
    }
  };

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
    { name: 'About', sectionId: 'about' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <nav
      className="navbar navbar-expand-md"
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <a
          href="/"
          className={`navbar-brand ${activeSection === 'about' ? 'active' : ''}`}
          onClick={handleBrandClick}
          aria-current={activeSection === 'about' ? 'page' : undefined}
        >
          Austin Graham
          {activeSection === 'about' && (
            <span className="visually-hidden"> (current section)</span>
          )}
        </a>

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
          <ul className="navbar-nav ms-auto" role="menu">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="nav-item"
                role="none"
              >
                <a
                  ref={index === 0 ? firstNavItemRef : null}
                  href={`#${item.sectionId}`}
                  className={`nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  role="menuitem"
                  aria-current={activeSection === item.sectionId ? 'page' : undefined}
                  id={activeSection === item.sectionId ? 'active-nav-link' : undefined}
                >
                  {item.name}
                  {activeSection === item.sectionId && (
                    <span className="visually-hidden"> (current section)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;