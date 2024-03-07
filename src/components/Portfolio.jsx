import React from 'react'; // Importing React to use JSX
import Project from './Project'; // Importing Project component to display project information

// Importing images to display project information
import TextEditor from '../assets/images/text-editor.jpg';
import Rendezview from '../assets/images/rendezview.jpg';
import TechBlog from '../assets/images/tech-blog-cms.jpg';
import FilmFinder from '../assets/images/film-finder.jpg';
import WeatherDashboard from '../assets/images/weather-dashboard.jpg';
import CodeQuiz from '../assets/images/coding-quiz.jpg';

// Functional component to display portfolio
const Portfolio = () => {
  const projects = [
    {
      title: 'Text Editor',
      image: TextEditor,
      deployedLink: 'https://justanothertextedit-5400b8b59bb6.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/text-editor',
    },
    {
      title: 'RendezView',
      image: Rendezview,
      deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/RendezView',
    },
    {
      title: 'Tech Blog',
      image: TechBlog,
      deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
      githubLink: 'https://github.com/kyoriku/tech-blog',
    },
    {
      title: 'FilmFinder',
      image: FilmFinder,
      deployedLink: 'https://kyoriku.github.io/FilmFinder/',
      githubLink: 'https://github.com/kyoriku/FilmFinder',
    },
    {
      title: 'Weather Dashboard',
      image: WeatherDashboard,
      deployedLink: 'https://kyoriku.github.io/weather-dashboard/',
      githubLink: 'https://github.com/kyoriku/weather-dashboard',
    },
    {
      title: 'Code Quiz',
      image: CodeQuiz,
      deployedLink: 'https://kyoriku.github.io/code-quiz/',
      githubLink: 'https://github.com/kyoriku/code-quiz',
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
