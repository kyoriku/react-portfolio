import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Project from './Project';
import '../styles/Portfolio.css';

const ANIMATION_CONFIG = {
  heading: {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  },
};

const projects = [
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
  },
];

const Portfolio = () => {
  const animations = useReducedMotion() ? {} : ANIMATION_CONFIG;

  return (
    <motion.section
      className="portfolio-section"
      initial="hidden"
      animate="visible"
      aria-labelledby="portfolio-heading"
      variants={animations}
    >
      <div className="container py-3 pb-4">
        <header>
          <motion.h1
            className="text-center mb-3 gradient-text"
            variants={animations?.heading || {}}
            id="portfolio-heading"
          >
            Projects
          </motion.h1>
        </header>

        <motion.div
          className="row g-3 project-grid"
          variants={animations.container}
          role="list"
          aria-label="Project list"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              variants={animations.item}
              role="listitem"
            >
              <Project {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
