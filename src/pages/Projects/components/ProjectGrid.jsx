import { motion } from 'framer-motion';
import { Project } from './Project';
import { projectsData } from '../constants';

export const ProjectGrid = ({ animations, onViewDetails }) => (
  <motion.div
    className="row g-4"
    variants={animations.container}
    role="list"
    aria-label="Portfolio projects"
  >
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