import React from 'react';
import Project from './Project';
import TextEditor from '../assets/text-editor.jpg';
import Rendezview from '../assets/rendezview.jpg';
import TechBlog from '../assets/tech-blog-cms.jpg';
import FilmFinder from '../assets/film-finder.jpg';
import WeatherDashboard from '../assets/weather-dashboard.jpg';
import CodeQuiz from '../assets/coding-quiz.jpg';

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

  return (
    <section className='container py-4'>
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
