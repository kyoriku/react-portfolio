import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectLinks component displays project deployment and GitHub links
 * Handles conditional rendering for unavailable deployments with tooltip
 * Implements accessibility features for both available and disabled states
 */
export const ProjectLinks = ({ deployedLink, githubLink, title }) => {
  // State for managing tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="project-links">
      {/* Conditionally render either disabled span or active link for deployment */}
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
          {/* Tooltip for explaining disabled state */}
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