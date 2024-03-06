import React from 'react'; // Importing React to use JSX
import '../styles/Project.css'; // Importing CSS file to style component

// Functional component to display project information
const Project = ({ title, image, deployedLink, githubLink }) => {
  // Returning the project information with title, image, and links
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

export default Project; // Exporting the Project component to be used in other parts of the application
