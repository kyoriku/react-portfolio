import { useRef, useEffect, useState } from 'react';
import { Modal } from 'bootstrap';
import { ExternalLink, Github } from 'lucide-react';
import { CategorizedTechStack } from './CategorizedTechStack';
import { ProjectLinks } from './ProjectLinks';
import { projectExperienceData } from '../constants';

/**
 * ProjectDetailsModal component provides an expanded view of project information
 * Implements Bootstrap modal functionality with keyboard navigation and focus management
 * Displays project details, development highlights, and tech stack in an accessible format
 */
export const ProjectDetailsModal = ({ project, show, onHide }) => {
  // References for modal management and accessibility
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Get extended project data from constants
  const selectedProject = project
    ? projectExperienceData.find(p => p.title === project.title) || null
    : null;

  // Initialize and manage Bootstrap modal behavior
  useEffect(() => {
    if (!show || !modalRef.current) return;

    if (project && selectedProject) {
      const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');

      bootstrap.then(({ Modal }) => {
        const modalElement = modalRef.current;
        const bsModal = new Modal(modalElement);

        if (show) {
          bsModal.show();
          // Focus the close button when modal opens for keyboard navigation
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

  // Handle modal cleanup and event listeners
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
          {/* Modal header with close button */}
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

          {/* Modal body with project details */}
          <div className="modal-body">
            {/* Project screenshot */}
            <img
              src={project.image || '/default-image.jpg'}
              alt={`Screenshot of ${selectedProject.title}`}
              className="img-fluid rounded mb-4"
            />

            {/* Detailed project description section */}
            <div className="mb-med">
              <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                Project Description
                <hr className="flex-grow-1 my-0" />
              </h4>
              <p className="project-description">{selectedProject.description}</p>
            </div>

            {/* Conditional development highlights section */}
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

            {/* Technologies used section with categorized display */}
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

          {/* Modal footer with project links */}
          <ProjectLinks
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            title={project.title}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};