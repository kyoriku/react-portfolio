import { motion } from 'framer-motion';
import { techStack } from '../constants';

const StackIcons = ({ animations }) => (
  <motion.ul
    className="stack-icons-gap d-flex align-items-center ms-auto list-unstyled mb-0"
    aria-label="Technical Stack"
    role="list"
    initial="hidden"
    animate="visible"
    variants={animations?.staggerContainer}
  >
    {techStack.map((tech) => (
      <motion.li
        key={tech}
        variants={animations?.fadeUpStagger}
        className="d-flex align-items-center"
      >
        <span className="visually-hidden">{tech}</span>
        <img
          src={`/icons/${tech.toLowerCase().replace('.', '')}.webp`}
          alt={`${tech} icon`}
          className="stack-icon"
          width="32"
          height="32"
          aria-hidden="true"
        />
      </motion.li>
    ))}
  </motion.ul>
);

export default StackIcons;
