import { ProjectLinks } from './ProjectLinks';
import { TechStack } from './TechStack';
import { ArrowRight } from 'lucide-react';

/**
 * ProjectContent component renders the main content area of a project card
 * Displays project title, description, tech stack, and interactive links
 * Implements semantic HTML structure with accessibility features
 */
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
    {/* Project title with decorative divider */}
    <header>
      <h2 className="project-title" id={titleId}>{title}</h2>
      <hr className="skill-divider mt-0 mb-2" role="presentation" aria-hidden="true" />
    </header>

    <div className="project-details">
      {/* Project description with button to open detailed view modal */}
      <section className="project-description" aria-label={`About ${title}`}>
        <p>{description}</p>
        <button
          onClick={() => onViewDetails({ title, description, technologies, deployedLink, githubLink, image })}
          className="view-details-button"
          aria-label={`Read more about ${title}`}
        >
          View Details <span><ArrowRight size={18} aria-hidden="true" /></span>
        </button>
      </section>

      {/* Technology stack section */}
      <TechStack technologies={technologies} projectTitle={title} />
    </div>

    {/* Project links section with live site and GitHub links */}
    <ProjectLinks deployedLink={deployedLink} githubLink={githubLink} title={title} />
  </div>
);