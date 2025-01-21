import { ProjectLinks } from './ProjectLinks';
import { TechStack } from './TechStack';

export const ProjectContent = ({
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
      <h2 className="project-title" id={titleId}>{title}</h2>
      <hr className="skill-divider mt-0 mb-2" role="presentation" aria-hidden="true" />
    </header>

    <div className="project-details">
      <section className="project-description" aria-label={`About ${title}`}>
        <p>{description}</p>
        <button
          onClick={() => onViewDetails({ title, description, technologies, deployedLink, githubLink, image })}
          className="view-details-button"
          aria-label={`Read more about ${title}`}
        >
          View Details <span aria-hidden="true">→</span>
        </button>
      </section>

      <TechStack technologies={technologies} projectTitle={title} />
    </div>

    <ProjectLinks deployedLink={deployedLink} githubLink={githubLink} title={title} />
  </div>
);