import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Project.css';

// Centralized configuration for technology icons
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
  'OpenWeather API': '/icons/api.jpg'
};

// Animation configuration for hover effects
const animationConfig = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

// TechStack component displays the technologies used in the project
const TechStack = ({ technologies, projectTitle }) => (
  <section
    className="tech-stack"
    aria-label={`Technologies used in ${projectTitle}`}
  >
    <div className="visually-hidden">
      Built with {technologies.join(', ')}
    </div>
    {technologies.map((tech, index) => (
      <figure
        key={index}
        className="tech-badge m-0"
        role="group"
        aria-label={tech}
      >
        {techIcons[tech] && (
          <img
            src={techIcons[tech]}
            alt="" // Intentionally empty alt - decorative icon, technology name is provided in text
            className="tech-icon"
            width="24"
            height="24"
            loading="lazy"
            aria-hidden="true"
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

/**
 * ProjectLinks component renders the external links section
 * including demo site and GitHub repository
 */
const ProjectLinks = ({ deployedLink, githubLink, title }) => (
  <footer className="project-links">
    <a
      href={deployedLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link demo-link"
      aria-label={`Visit ${title} website (opens in new tab)`}
    >
      <ExternalLink size={18} aria-hidden="true" />
      <span>View Site</span>
      <span className="visually-hidden">(opens in new tab)</span>
    </a>
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link github-link"
      aria-label={`View ${title} source code on GitHub (opens in new tab)`}
    >
      <Github size={18} aria-hidden="true" />
      <span>Source Code</span>
      <span className="visually-hidden">(opens in new tab)</span>
    </a>
  </footer>
);

/**
 * ProjectImage component handles the display and error states
 * of the project screenshot
 */
const ProjectImage = ({ image, title, setImageError, imageError }) => (
  <figure
    className="project-image-container m-0"
    aria-label={`${title} project screenshot`}
  >
    <img
      src={image}
      alt={`Screenshot of ${title} project interface`}
      className="project-image"
      width="100%"
      height="auto"
      loading="lazy"
      onError={() => setImageError(true)}
      aria-hidden={imageError}
      role="presentation"
    />
    {imageError && (
      <div
        className="image-error"
        role="alert"
        aria-live="polite"
      >
        Unable to load project image. Please check your connection and try again.
      </div>
    )}
    <div
      className="image-overlay"
      role="presentation"
      aria-hidden="true"
    />
  </figure>
);

/**
 * ProjectContent component structures the main information area
 * including title, description, and technology stack
 */
const ProjectContent = ({
  title,
  titleId,
  description,
  technologies,
  deployedLink,
  githubLink
}) => (
  <div className="project-content">
    <header>
      <h3
        className="project-title"
        id={titleId}
      >
        {title}
      </h3>
      <hr
        className="skill-divider mt-0 mb-2"
        role="presentation"
        aria-hidden="true"
      />
    </header>

    <div className="project-details">
      <section
        className="project-description"
        aria-label={`About ${title}`}
      >
        <p>{description}</p>
      </section>

      <TechStack
        technologies={technologies}
        projectTitle={title}
      />
    </div>

    <ProjectLinks
      deployedLink={deployedLink}
      githubLink={githubLink}
      title={title}
    />
  </div>
);

/**
 * Project component serves as the main container for individual portfolio items
 * Manages focus states and motion preferences for accessibility
 */
const Project = ({
  title,
  image,
  deployedLink,
  githubLink,
  technologies,
  description,
  isFocused,
  onFocus,
  onBlur
}) => {
  // State for handling image loading errors
  const [imageError, setImageError] = useState(false);

  // Respect user's motion preferences for animations
  const shouldReduceMotion = useReducedMotion();
  const animations = shouldReduceMotion ? {} : animationConfig;

  // Generate consistent ID for ARIA labelling
  const titleId = `${title.toLowerCase()}-title`;
  const projectRef = useRef(null);

  return (
    <motion.article
      ref={projectRef}
      className={`project-card ${isFocused ? 'focused' : ''}`}
      whileHover={animations.hover}
      id={title.toLowerCase()}
      aria-labelledby={titleId}
      tabIndex="0"
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <ProjectImage
        image={image}
        title={title}
        setImageError={setImageError}
        imageError={imageError}
      />

      <ProjectContent
        title={title}
        titleId={titleId}
        description={description}
        technologies={technologies}
        deployedLink={deployedLink}
        githubLink={githubLink}
      />
    </motion.article>
  );
};

export default Project;