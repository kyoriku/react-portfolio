import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Project.css';

// Technology icons configuration
const techIcons = {
  'HTML': '/icons/html.webp',
  'CSS': '/icons/css.webp',
  'JavaScript': '/icons/javascript.webp',
  'jQuery': '/icons/jquery.webp',
  'React': '/icons/react.webp',
  'Bootstrap': '/icons/bootstrap.webp',
  'Node.js': '/icons/nodejs.webp',
  'Express': '/icons/express.webp',
  'MySQL': '/icons/mysql.webp',
  'MongoDB': '/icons/mongodb.webp',
  'GraphQL': '/icons/graphql.webp',
  'Sequelize': '/icons/sequelize.webp',
  'Handlebars': '/icons/handlebars.webp',
  'TMDb API': '/icons/api.webp',
  'Watchmode API': '/icons/api.webp',
  'OpenWeather API': '/icons/api.webp',
  'AWS': '/icons/aws.webp',
  'DynamoDB': '/icons/dynamodb.webp',
  'EC2': '/icons/ec2.webp',
  'S3': '/icons/s3.webp',
  'Python': '/icons/python.webp',
  'Flask': '/icons/flask.webp',
  'SQLAlchemy': '/icons/sqlalchemy.webp',
  'Jinja': '/icons/jinja.webp',
  'Gunicorn': '/icons/gunicorn.webp'
};

// Animation configuration
const animationConfig = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

// TechStack Component
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
            alt=""
            className="tech-icon"
            width="24"
            height="24"
            loading="eager"
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

// ProjectLinks Component
// const ProjectLinks = ({ deployedLink, githubLink, title }) => (
//   <footer className="project-links">
//     <a
//       href={deployedLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="project-link demo-link"
//       aria-label={`Visit ${title} website (opens in new tab)`}
//       title={`View ${title} live site`}
//     >
//       <ExternalLink size={18} aria-hidden="true" />
//       <span>View Site</span>
//       <span className="visually-hidden">(opens in new tab)</span>
//     </a>
//     <a
//       href={githubLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="project-link github-link"
//       aria-label={`View ${title} source code on GitHub (opens in new tab)`}
//       title={`View ${title} source code on GitHub`}
//     >
//       <Github size={18} aria-hidden="true" />
//       <span>View Code</span>
//       <span className="visually-hidden">(opens in new tab)</span>
//     </a>
//   </footer>
// );

const ProjectLinks = ({ deployedLink, githubLink, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="project-links">
      {!deployedLink ? (
        <span
          className="project-link demo-link project-link-disabled"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-disabled="true"
        >
          <ExternalLink size={18} aria-hidden="true" />
          <span>View Site</span>
          <span className="visually-hidden">(Not currently deployed)</span>
          {showTooltip && (
            <div className="tooltip-custom">
              Live deployment not available
            </div>
          )}
        </span>
      ) : (
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link demo-link"
          aria-label={`Visit ${title} website (opens in new tab)`}
          title={`View ${title} live site`}
        >
          <ExternalLink size={18} aria-hidden="true" />
          <span>View Site</span>
          <span className="visually-hidden">(opens in new tab)</span>
        </a>
      )}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link github-link"
        aria-label={`View ${title} source code on GitHub (opens in new tab)`}
        title={`View ${title} source code on GitHub`}
      >
        <Github size={18} aria-hidden="true" />
        <span>View Code</span>
        <span className="visually-hidden">(opens in new tab)</span>
      </a>
    </footer>
  );
};

// ProjectImage Component
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
      loading="eager"
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

// ProjectContent Component
const ProjectContent = ({
  title,
  titleId,
  description,
  technologies,
  deployedLink,
  githubLink,
  onViewDetails,
  image
}) => (
  <div className="project-content">
    <header>
      <h2
        className="project-title"
        id={titleId}
      >
        {title}
      </h2>
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
        <button
          onClick={() => onViewDetails({ title, description, technologies, deployedLink, githubLink, image })}
          className="view-details-button"
          aria-label={`Read more about ${title}`}
        >
          View Details <span aria-hidden="true">→</span>
        </button>
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

// Project.jsx (continued)
const Project = ({
  title,
  image,
  deployedLink,
  githubLink,
  technologies,
  description,
  isFocused,
  onFocus,
  onBlur,
  onViewDetails
}) => {
  const [imageError, setImageError] = useState(false);
  const animations = useReducedMotion() ? {} : animationConfig;
  const titleId = `${title.toLowerCase()}-title`;
  const projectRef = useRef(null);

  return (
    <motion.article
      ref={projectRef}
      className={`project-card ${isFocused ? 'focused' : ''}`}
      id={title.toLowerCase()}
      aria-labelledby={titleId}
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
        image={image}
        onViewDetails={() => onViewDetails({
          title,
          image,
          description,
          technologies,
          deployedLink,
          githubLink
        })}
      />
    </motion.article>
  );
};

export default Project;