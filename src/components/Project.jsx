import React from 'react';
import '../styles/Project.css';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <article className='col-md-4 p-2'>
      <section className='card'>
        <div className='project-title'>
          <h3 className='m-2'>{title}</h3>
        </div>
        <img src={image} alt={title} />
        <div className='project-links py-1'>
          <a href={deployedLink} target='_blank' rel='noopener noreferrer' className='btn btn-dark m-1'>
            Deployed Application
          </a>
          <a href={githubLink} target='_blank' rel='noopener noreferrer' className='btn btn-dark m-1'>
            GitHub Repository
          </a>
        </div>
      </section>
    </article>
  );
};

export default Project;
