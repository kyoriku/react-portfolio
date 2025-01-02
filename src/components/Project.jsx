import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Project.css';

const techIcons = {
  'HTML': '/icons/html.jpg',
  'CSS': '/icons/css.jpg',
  'JavaScript': '/icons/javascript.jpg',
  'jQuery': '/icons/jquery.jpg',
  'React': '/icons/reactjs.jpg',
  'Bootstrap': '/icons/bootstrap.jpg',
  'Node.js': '/icons/nodejs.jpg',
  'Express': '/icons/expressjs.jpg',
  'MySQL': '/icons/mysql.jpg',
  'MongoDB': '/icons/mongodb.jpg',
  'GraphQL': '/icons/graphql.jpg',
  'Sequelize': '/icons/sequelize.jpg',
  'Handlebars': '/icons/handlebars.jpg',
  'TMDb API': '/icons/api.jpg',
  'Watchmode API': '/icons/api.jpg',
  'OpenWeather API': '/icons/api.jpg',
};

const TechStack = ({ technologies, projectTitle }) => (
  <section
    className="tech-stack"
    aria-label={`Technologies used in ${projectTitle}`}
    aria-description={`Built with ${technologies.join(', ')}`}
  >
    {technologies.map((tech, index) => (
      <figure key={index} className="tech-badge m-0">
        {techIcons[tech] && (
          <img
            src={techIcons[tech]}
            alt={`${tech} icon`}
            className="tech-icon"
            width="24"
            height="24"
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', tech);
              e.target.style.display = 'none';
            }}
          />
        )}
        <figcaption>{tech}</figcaption>
      </figure>
    ))}
  </section>
);

const ProjectLinks = ({ deployedLink, githubLink }) => (
  <footer className="project-links">
    <a
      href={deployedLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link demo-link"
      aria-label="View Website"
    >
      <ExternalLink size={18} aria-hidden="true" />
      <span>View Site</span>
    </a>
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link github-link"
      aria-label="View Source Code on GitHub"
    >
      <Github size={18} aria-hidden="true" />
      <span>Source Code</span>
    </a>
  </footer>
);

const Project = ({ title, image, deployedLink, githubLink, technologies, description }) => {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const hoverAnimation = shouldReduceMotion
    ? {}
    : { y: -5, transition: { duration: 0.2 } };

  return (
    <motion.article
      className="project-card"
      whileHover={hoverAnimation}
    >
      <figure className="project-image-container m-0">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="project-image"
          width="100%"
          height="auto"
          loading="lazy"
          onError={() => setImageError(true)}
          aria-hidden={imageError}
        />
        {imageError && (
          <div className="image-error" role="alert">
            Unable to load project image
          </div>
        )}
        <div className="image-overlay" role="presentation"></div>
      </figure>

      <div className="project-content">
        <header>
          <h3 className="project-title">{title}</h3>
          <div className="skill-divider mt-0 mb-2" role="presentation"></div>
        </header>

        <section className="project-description">
          <p>{description}</p>
        </section>

        <TechStack technologies={technologies} projectTitle={title} />
        <ProjectLinks deployedLink={deployedLink} githubLink={githubLink} />
      </div>
    </motion.article>
  );
};

export default Project;
