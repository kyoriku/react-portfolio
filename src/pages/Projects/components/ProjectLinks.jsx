import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectLinks component displays project deployment and GitHub links
 * Uses consistent disabled button state for unavailable deployments
 */
export const ProjectLinks = ({ deployedLink, githubLink, title, isModal = false }) => {
  return (
    <footer className={`project-links ${isModal ? 'modal-footer border-top-0' : ''}`}>
      {!deployedLink ? (
        <button
          className="project-link demo-link disabled"
          disabled
          aria-disabled="true"
        >
          <ExternalLink size={18} aria-hidden="true" />
          <span>Visit Site</span>
          <span className="visually-hidden">(Not currently available)</span>
        </button>
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
          <span>Visit Site</span>
          <span className="visually-hidden">(opens in new tab)</span>
        </a>
      )}

      {/* GitHub repository link */}
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