import { motion } from 'framer-motion';
import { Project } from './Project';
import { projectsData } from '../constants';

/**
 * ProjectGrid component renders a responsive grid of project cards with animations
 * Uses Framer Motion for container and item animations with stagger effects
 * Implements semantic HTML list structure with accessibility attributes
 */
export const ProjectGrid = ({ animations, onViewDetails }) => (
  // Container with Framer Motion animations and semantic list role
  <motion.div
    className="row g-4"
    variants={animations.container}
    role="list"
    aria-label="Portfolio projects"
  >
    {/* Map through projects and render each with staggered animation */}
    {projectsData.map((project, index) => (
      <motion.div
        key={project.title}
        className="col-md-6 col-lg-4"
        variants={animations.item}
        role="listitem"
        aria-label={`${project.title} project card`}
      >
        <Project {...project} onViewDetails={onViewDetails} />
      </motion.div>
    ))}
  </motion.div>
);