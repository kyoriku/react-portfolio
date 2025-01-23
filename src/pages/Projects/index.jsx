import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { MetaTags } from './components/MetaTags';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { useAnimations } from './hooks/useAnimations';
import './styles/Projects.css';

const Projects = () => {
  const animations = useAnimations();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [lastFocusedElement, setLastFocusedElement] = useState(null);

  const handleViewDetails = (project) => {
    setLastFocusedElement(document.activeElement);
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    if (lastFocusedElement) {
      setTimeout(() => {
        lastFocusedElement.focus();
      }, 0);
    }
  };

  return (
    <>
      <MetaTags />
      <motion.section
        className="portfolio-section"
        initial="hidden"
        animate="visible"
        aria-labelledby="portfolio-heading"
        variants={animations}
      >
        <div className="container spacing pt-0">
          <header>
            <motion.h1
              className="text-start gradient-text my-0 mt-4"
              variants={animations?.heading}
              id="portfolio-heading"
            >
              Projects
            </motion.h1>
            <hr className="skill-divider" aria-hidden="true" />
          </header>

          <ProjectGrid
            animations={animations}
            onViewDetails={handleViewDetails}
          />
        </div>

        <ProjectDetailsModal
          show={showModal}
          onHide={handleCloseModal}
          project={selectedProject}
        />

        <BackToTop />
      </motion.section>
    </>
  );
};

export default Projects;