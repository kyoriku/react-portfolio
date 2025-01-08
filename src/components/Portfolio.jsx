import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Project from './Project';

// Collection of portfolio projects with their details and links
const projectsData = [
  {
    title: 'AdminAccess',
    image: '/images/adminaccess.png',
    deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/AdminAccess',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
    description: 'A content management system for managing a company\'s employee database.'
  },
  {
    title: 'RendezView',
    image: '/images/rendezview.png',
    deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/RendezView',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'A platform for organizing and managing events with friends.'
  },
  {
    title: 'FilmFinder',
    image: '/images/filmfinder.png',
    deployedLink: 'https://kyoriku.github.io/FilmFinder/',
    githubLink: 'https://github.com/kyoriku/FilmFinder',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
    description: 'A web application for discovering and exploring movies using external APIs.'
  },
  {
    title: 'Tech Blog',
    image: '/images/tech-blog-cms.png',
    deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/tech-blog',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'A CMS-style blog site for publishing articles, blog posts, and thoughts about tech.'
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather-dashboard.png',
    deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
    githubLink: 'https://github.com/kyoriku/weather-dashboard',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    description: 'A weather dashboard that provides current and future weather conditions.'
  },
  {
    title: 'Coding Quiz',
    image: '/images/coding-quiz.png',
    deployedLink: 'https://kyoriku.github.io/code-quiz/',
    githubLink: 'https://github.com/kyoriku/code-quiz',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive coding quiz application with a timer and high score tracking.'
  }
];

// Animation variants for Framer Motion transitions
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

/**
 * ProjectGrid component organizes project cards in a responsive grid layout
 * Handles animation variants and accessibility roles for the project list
 */
const ProjectGrid = ({ animations }) => (
  <motion.div
    className="row g-3"
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

/**
 * Portfolio component serves as the main container for the projects section
 * Manages animations, document title, and provides accessibility instructions
 * for navigating through the project grid
 */
const Portfolio = () => {
  // Respect user's motion preferences for animations
  const animations = useReducedMotion() ? {} : animationConfig;

  // Update document title and restore on unmount
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Web Development Projects | Austin Graham";
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
      <div className="container spacing">
        {/* Navigation instructions for screen reader users */}
        <div className="visually-hidden" aria-label="Navigation Instructions">
          <p>
            Press Tab to move forward through project links.
            Press Shift + Tab to move backward project links.
            Press Enter to open the focused link in a new window.
            Use the arrow keys or Page Up/Down to scroll through the project grid.
            The Back to Top link at the bottom of the page returns focus to the main navigation menu.
            Screen reader users: Each project card displays the project title, description, technologies used, and provides links to both the deployed application and source code.
          </p>
        </div>

        {/* Portfolio header section */}
        <header>
          <motion.h1
            className="text-center gradient-text"
            variants={animations?.heading || {}}
            id="portfolio-heading"
          >
            Projects
          </motion.h1>
          <p className="visually-hidden">
            Explore my latest web development projects, featuring full-stack applications
            built with modern technologies.
          </p>
        </header>

        {/* Project grid display */}
        <ProjectGrid animations={animations} />
      </div>

      {/* Back to top navigation link */}
      <a
        href="#back-to-nav"
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