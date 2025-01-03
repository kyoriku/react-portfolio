import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Project from './Project';
import '../styles/Portfolio.css';

const projectsData = [
  {
    title: 'AdminAccess',
    image: '/images/adminaccess.jpg',
    deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/AdminAccess',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
    description: 'A content management system for managing a company\'s employee database.'
  },
  {
    title: 'RendezView',
    image: '/images/rendezview.jpg',
    deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/RendezView',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'A platform for organizing and managing events with friends.'
  },
  {
    title: 'FilmFinder',
    image: '/images/filmfinder.jpg',
    deployedLink: 'https://kyoriku.github.io/FilmFinder/',
    githubLink: 'https://github.com/kyoriku/FilmFinder',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
    description: 'A web application for discovering and exploring movies using external APIs.'
  },
  {
    title: 'Tech Blog',
    image: '/images/tech-blog-cms.jpg',
    deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/tech-blog',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'A CMS-style blog site for publishing articles, blog posts, and thoughts about tech.'
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather-dashboard.jpg',
    deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
    githubLink: 'https://github.com/kyoriku/weather-dashboard',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    description: 'A weather dashboard that provides current and future weather conditions.'
  },
  {
    title: 'Coding Quiz',
    image: '/images/coding-quiz.jpg',
    deployedLink: 'https://kyoriku.github.io/code-quiz/',
    githubLink: 'https://github.com/kyoriku/code-quiz',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive coding quiz application with a timer and high score tracking.'
  }
];

const animationConfig = {
  heading: {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
};

const ProjectGrid = ({ animations }) => (
  <motion.div
    className="row g-3 project-grid"
    variants={animations.container}
    role="list"
    aria-label="Portfolio projects"
  >
    {projectsData.map((project, index) => (
      <motion.div
        key={project.title}
        className="col-md-6 col-lg-4"
        variants={animations.item}
        role="listitem"
        aria-label={`${project.title} project card`}
      >
        <Project {...project} />
      </motion.div>
    ))}
  </motion.div>
);

const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();
  const animations = shouldReduceMotion ? {} : animationConfig;
  const [isNavigatingByKeyboard, setIsNavigatingByKeyboard] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'A' && activeElement.href) {
          e.preventDefault();

          // Check if it's an internal navigation link (starts with '#' or is a React Router link)
          if (activeElement.getAttribute('href').startsWith('#') ||
            activeElement.getAttribute('href').startsWith('/')) {
            // Handle internal navigation
            if (activeElement.getAttribute('href').startsWith('#')) {
              const targetId = activeElement.getAttribute('href').substring(1);
              document.getElementById(targetId)?.focus();
            } else {
              // Let React Router handle the navigation
              activeElement.click();
            }
          } else {
            // External links (project demos and GitHub links) open in new tab
            window.open(activeElement.href, '_blank');
          }
        }
      }

      if (e.key === 'Tab') {
        setIsNavigatingByKeyboard(true);
      }

      const focusableElements = Array.from(document.querySelectorAll(
        '.project-card a[href]'
      ));

      const currentIndex = focusableElements.indexOf(document.activeElement);

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown': {
          if (currentIndex !== -1) {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % focusableElements.length;
            focusableElements[nextIndex]?.focus();
          }
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          if (currentIndex !== -1) {
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
            focusableElements[prevIndex]?.focus();
          }
          break;
        }
        case 'Escape': {
          document.getElementById('portfolio-heading')?.focus();
          break;
        }
      }
    };

    const handleMouseMove = () => {
      if (isNavigatingByKeyboard) {
        setIsNavigatingByKeyboard(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isNavigatingByKeyboard]);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Austin Graham | Projects";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <motion.section
      className="portfolio-section"
      initial="hidden"
      animate="visible"
      aria-labelledby="portfolio-heading"
      variants={animations}
    >
      <div className="container py-3 pb-4">
        <div className="visually-hidden">
          <h2>Navigation Instructions</h2>
          <p>
            Press Tab to move forward through project links.
            Press Shift + Tab to move backward.
            Enter opens the focused link in a new window.
            Use Arrow keys to move between adjacent project links.
            Escape exits the project grid and returns focus to main heading.
            Back to top link returns to navigation menu.
            Screen reader users: Each project card displays the project title, description, technologies used, and provides links to both the deployed application and source code.
          </p>
        </div>

        <header>
          <motion.h1
            className="text-center mb-3 gradient-text"
            variants={animations?.heading || {}}
            id="portfolio-heading"
            tabIndex="-1"
          >
            Projects
          </motion.h1>
          <p className="visually-hidden">
            Explore my latest web development projects, featuring full-stack applications
            built with modern technologies.
          </p>
        </header>

        <ProjectGrid animations={animations} />
      </div>

      <a
        href="#active-nav-link"
        className="back-to-top skip-link"
        aria-label="Back to top and return to navigation"
      >
        Back to top
        <span className="visually-hidden"> (Press Enter to return to navigation)</span>
      </a>
    </motion.section>
  );
};

export default Portfolio;