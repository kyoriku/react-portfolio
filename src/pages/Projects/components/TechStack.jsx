import { techIcons } from '../config/techIcons';

/**
 * TechStack component displays a list of technology badges with icons
 * Includes screen reader support and fallback for missing icons
 * Uses semantic HTML with figure elements for each technology
 */
export const TechStack = ({ technologies, projectTitle }) => (
  <section
    className="tech-stack"
    aria-label={`Technologies used in ${projectTitle}`}
  >
    {/* Screen reader text listing all technologies */}
    <div className="visually-hidden">
      Built with {technologies.join(', ')}
    </div>
    {/* Map through technologies and create badge for each */}
    {technologies.map((tech, index) => (
      <figure
        key={index}
        className="tech-badge m-0"
        role="group"
        aria-label={tech}
      >
        {/* Conditional rendering of tech icon with error handling */}
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