import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';
import AdminAccess from '../assets/images/adminaccess.jpg';
import Rendezview from '../assets/images/rendezview.jpg';
import TechBlog from '../assets/images/tech-blog-cms.jpg';
import FilmFinder from '../assets/images/filmfinder.jpg';
import WeatherDashboard from '../assets/images/weather-dashboard.jpg';
import CodeQuiz from '../assets/images/coding-quiz.jpg';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Portfolio = () => {
  const projects = [
    {
      title: 'AdminAccess',
      image: AdminAccess,
      deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/AdminAccess',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      description: 'A content management system for managing a company\'s employee database.'
    },
    {
      title: 'RendezView',
      image: Rendezview,
      deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/RendezView',
      technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
      description: 'A platform for organizing and managing events with friends.'
    },
    {
      title: 'FilmFinder',
      image: FilmFinder,
      deployedLink: 'https://kyoriku.github.io/FilmFinder/',
      githubLink: 'https://github.com/kyoriku/FilmFinder',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
      description: 'A web application for discovering and exploring movies using external APIs.'
    },
    {
      title: 'Tech Blog',
      image: TechBlog,
      deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/tech-blog',
      technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
      description: 'A CMS-style blog site for publishing articles, blog posts, and thoughts about tech.'
    },
    {
      title: 'Weather Dashboard',
      image: WeatherDashboard,
      deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
      githubLink: 'https://github.com/kyoriku/weather-dashboard',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      description: 'A weather dashboard that provides current and future weather conditions.'
    },
    {
      title: 'Coding Quiz',
      image: CodeQuiz,
      deployedLink: 'https://kyoriku.github.io/code-quiz/',
      githubLink: 'https://github.com/kyoriku/code-quiz',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'An interactive coding quiz application with a timer and high score tracking.'
    },
  ];

  return (
    <section className="container py-4 mb-4">
      <motion.h1
        className="text-center mb-4 "
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        My Portfolio
      </motion.h1>

      <motion.div
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-6 col-lg-4"
            variants={itemVariants}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;