import React from 'react'; // Importing React to use JSX
import '../styles/Project.css'; // Importing CSS file to style component

// Functional component to display project information
const Project = ({ title, image, deployedLink, githubLink }) => {
  // Returning the project information with title, image, and links
  return (
    <article className='project-card-container'>
      <section className='card project-card'>
        <div className='project-title'>
          <h3 className='m-2'>{title}</h3>
        </div>
        <div className='project-image-container'>
          <img
            src={image}
            alt={title}
            className='project-image'
          />
        </div>
        <div className='project-links py-1'>
          <div className='d-flex px-1'>
            <a
              href={deployedLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary m-1 btn-equal-width'
            >
              Live Demo
            </a>
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary m-1 btn-equal-width'
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Project; // Exporting the Project component to be used in other parts of the application
