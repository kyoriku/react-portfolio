import { techIcons } from '../config/techIcons';

export const TechStack = ({ technologies, projectTitle }) => (
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