import { useRef, useEffect, useState } from 'react';
import { Modal } from 'bootstrap';
import { ExternalLink, Github } from 'lucide-react';
import { CategorizedTechStack } from './CategorizedTechStack';
import { projectExperienceData } from '../constants';

export const ProjectDetailsModal = ({ project, show, onHide }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const selectedProject = project
    ? projectExperienceData.find(p => p.title === project.title) || null
    : null;

  useEffect(() => {
    if (!show || !modalRef.current) return;

    if (project && selectedProject) {
      const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');

      bootstrap.then(({ Modal }) => {
        const modalElement = modalRef.current;
        const bsModal = new Modal(modalElement);

        if (show) {
          bsModal.show();
          // Focus the close button when modal opens
          setTimeout(() => {
            if (closeButtonRef.current) {
              closeButtonRef.current.focus();
            }
          }, 150); // Small delay to ensure modal is visible
        } else {
          bsModal.hide();
        }

        return () => {
          bsModal.dispose();
        };
      });
    }
  }, [show, project, selectedProject]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', onHide);
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', onHide);
      };
    }
  }, [onHide]);

  if (!project || !selectedProject) return null;

  // Convert technology objects to array of names for TechStack component
  const techNames = selectedProject.technologies.map(tech => tech.name);

  return (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex="-1"
      aria-labelledby="projectDetailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h3 className="gradient-text mb-0" id="projectDetailsModalLabel">
              {selectedProject.title}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close-button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <div className="modal-close-lines">
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={project.image || '/default-image.jpg'}
              alt={`Screenshot of ${selectedProject.title}`}
              className="img-fluid rounded mb-4"
            />

            {/* Detailed Description */}
            <div className="mb-med">
              <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                Project Description
                <hr className="flex-grow-1 my-0" />
              </h4>
              <p className="project-description">{selectedProject.description}</p>
            </div>

            {/* Development Highlights */}
            {selectedProject.highlights && (
              <div className="mb-med">
                <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                  Development Highlights
                  <hr className="flex-grow-1 my-0" />
                </h4>
                <ul className="project-experience-highlights">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div className="project-experience-tech mb-3">
              <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                Technologies Used
                <hr className="flex-grow-1 my-0" />
              </h4>
              <CategorizedTechStack
                technologies={techNames}
                projectTitle={selectedProject.title}
              />
            </div>
          </div>

          <div className="modal-footer border-top-0 project-links">
            {!project.deployedLink ? (
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
                  <div className="tooltip-custom" style={{ left: '50%' }}>
                    Live deployment not available
                  </div>
                )}
              </span>
            ) : (
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo-link"
                aria-label={`Visit ${project.title} website (opens in new tab)`}
                title={`View ${project.title} live site`}
              >
                <ExternalLink size={18} aria-hidden="true" />
                <span>View Site</span>
                <span className="visually-hidden">(opens in new tab)</span>
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              title={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} aria-hidden="true" />
              <span>View Code</span>
              <span className="visually-hidden">(opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};