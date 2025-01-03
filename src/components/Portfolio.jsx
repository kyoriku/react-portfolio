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

const PortfolioNavigation = () => (
  <nav
    aria-label="Portfolio navigation"
    className="portfolio-nav"
  >
    <div className="visually-hidden">
      <h2>Navigation Instructions</h2>
      <p>
        • Tab key: Move forward through project cards and their interactive elements (links).
        • Shift + Tab: Move backward through project cards and their interactive elements.
        • Enter: When focused on a link, opens the link in a new window.
        • Arrow keys (Left/Right/Up/Down): Move between adjacent project cards in the grid.
        • Escape key: Return focus to the main heading.
        • B key: Quickly return to the top of the portfolio page from anywhere.
        • Screen reader users: Each project card displays the project title, description, technologies used, and provides links to both the deployed application and source code.
      </p>
    </div>
    <ul className="nav-list">
      {projectsData.map((project) => (
        <li key={project.title}>
          <a
            href={`#${project.title.toLowerCase()}`}
            className="nav-link"
            aria-label={`Navigate to ${project.title} project`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(project.title.toLowerCase())?.focus();
            }}
          >
            {project.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

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
        <Project {...project}
          tabIndex="0"
        />
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
          if (activeElement.getAttribute('href').startsWith('#')) {
            const targetId = activeElement.getAttribute('href').substring(1);
            document.getElementById(targetId)?.focus();
          } else {
            window.open(activeElement.href, '_blank');
          }
        }
      }

      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        const heading = document.getElementById('portfolio-heading');
        if (heading) {
          heading.focus();
          heading.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (e.key === 'Tab') {
        setIsNavigatingByKeyboard(true);
      }

      const focusableElements = Array.from(document.querySelectorAll(
        '.project-card[tabindex="0"], .project-card a[href]'
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
    document.title = " Austin Graham | Projects";
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

      <a
        href="#portfolio-heading"
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
        <span className="visually-hidden"> (Press Enter)</span>
      </a>

      <div className="container py-3 pb-4">
        <div className="visually-hidden">
          <PortfolioNavigation />
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
        href="#portfolio-heading"
        className="back-to-top skip-link"
        aria-label="Back to top of page"
      >
        Back to top
      </a>
    </motion.section>
  );
};

export default Portfolio;