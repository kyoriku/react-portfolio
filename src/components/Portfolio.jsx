import React from 'react'; // Importing React to use JSX
import Project from './Project'; // Importing Project component to display project information

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
      githubLink: 'https://github.com/kyoriku/tech-blog'
    },
    {
      title: 'Note Taker',
      image: NoteTaker,
      deployedLink: 'https://murmuring-mesa-04318-2e971da9f7a1.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/note-taker'
    },
    {
      title: 'Weather Dashboard',
      image: WeatherDashboard,
      deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
      githubLink: 'https://github.com/kyoriku/weather-dashboard'
    },
    {
      title: 'Work Day Scheduler',
      image: WorkDayScheduler,
      deployedLink: 'https://kyoriku.github.io/work-day-scheduler/',
      githubLink: 'https://github.com/kyoriku/work-day-scheduler'
    },
    {
      title: 'Coding Quiz',
      image: CodeQuiz,
      deployedLink: 'https://kyoriku.github.io/code-quiz/',
      githubLink: 'https://github.com/kyoriku/code-quiz'
    },
    {
      title: 'Password Generator',
      image: PasswordGenerator,
      deployedLink: 'https://kyoriku.github.io/password-generator/',
      githubLink: 'https://github.com/kyoriku/password-generator'
    },
    {
      title: 'HTML Portfolio',
      image: HTMLPortfolio,
      deployedLink: 'https://kyoriku.github.io/portfolio/',
      githubLink: 'https://github.com/kyoriku/portfolio'
    },
  ];

  // Returning the portfolio section with project information
  return (
    <section className='container py-4 mb-4'>
      <h1 className='portfolio-text text-center'>Portfolio</h1>
      <section className='row text-center'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
