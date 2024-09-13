import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';

// Importing images to display project information
import AdminAccess from '../assets/images/adminaccess.jpg';
import BookSearch from '../assets/images/book-search-engine.jpg';
import TextEditor from '../assets/images/text-editor.jpg';
import Rendezview from '../assets/images/rendezview.jpg';
import TechBlog from '../assets/images/tech-blog-cms.jpg';
import FilmFinder from '../assets/images/film-finder.jpg';
import WeatherDashboard from '../assets/images/weather-dashboard.jpg';
import NoteTaker from '../assets/images/express-note-taker.jpg';
import WorkDayScheduler from '../assets/images/work-day-scheduler.jpg';
import CodeQuiz from '../assets/images/coding-quiz.jpg';
import PasswordGenerator from '../assets/images/password-generator.jpg';
import HTMLPortfolio from '../assets/images/portfolio.jpg';

// Animation variants for heading and project cards
const headingVariants = {
  hidden: { opacity: 0, y: -25 }, // Slide in from the top
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.025, // Stagger each card animation
    },
  },
};

// Functional component to display portfolio
const Portfolio = () => {
  const projects = [
    {
      title: 'AdminAccess',
      image: AdminAccess,
      deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/AdminAccess',
    },
    {
      title: 'RendezView',
      image: Rendezview,
      deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/RendezView',
    },
    {
      title: 'FilmFinder',
      image: FilmFinder,
      deployedLink: 'https://kyoriku.github.io/FilmFinder/',
      githubLink: 'https://github.com/kyoriku/FilmFinder',
    },
    {
      title: 'Book Search Engine',
      image: BookSearch,
      deployedLink: 'https://mern-book-search-engine-1asm.onrender.com/',
      githubLink: 'https://github.com/kyoriku/book-search-engine',
    },
    {
      title: 'Text Editor',
      image: TextEditor,
      deployedLink: 'https://justanothertextedit-5400b8b59bb6.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/text-editor',
    },
    {
      title: 'Tech Blog',
      image: TechBlog,
      deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/tech-blog',
    },
    {
      title: 'Note Taker',
      image: NoteTaker,
      deployedLink: 'https://murmuring-mesa-04318-2e971da9f7a1.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/note-taker',
    },
    {
      title: 'Weather Dashboard',
      image: WeatherDashboard,
      deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
      githubLink: 'https://github.com/kyoriku/weather-dashboard',
    },
    {
      title: 'Work Day Scheduler',
      image: WorkDayScheduler,
      deployedLink: 'https://kyoriku.github.io/work-day-scheduler/',
      githubLink: 'https://github.com/kyoriku/work-day-scheduler',
    },
    {
      title: 'Coding Quiz',
      image: CodeQuiz,
      deployedLink: 'https://kyoriku.github.io/code-quiz/',
      githubLink: 'https://github.com/kyoriku/code-quiz',
    },
    {
      title: 'Password Generator',
      image: PasswordGenerator,
      deployedLink: 'https://kyoriku.github.io/password-generator/',
      githubLink: 'https://github.com/kyoriku/password-generator',
    },
    {
      title: 'HTML Portfolio',
      image: HTMLPortfolio,
      deployedLink: 'https://kyoriku.github.io/portfolio/',
      githubLink: 'https://github.com/kyoriku/portfolio',
    },
  ];

  return (
    <section className='container py-4 mb-4'>
      {/* Animate heading to come from the top */}
      <motion.h1
        className='portfolio-text text-center mb-4'
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Portfolio
      </motion.h1>

      {/* Animate project cards with stagger effect */}
      <motion.section
        className='row text-center'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // Animation for each card
            className="col-lg-4 col-md-6 card-margin" // Ensure proper layout with columns
          >
            <Project
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
};

export default Portfolio;
