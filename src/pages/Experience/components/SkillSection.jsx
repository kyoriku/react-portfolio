import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';

export const SkillSection = ({ title, data, id, variants }) => (
  <div className="skill-category">
    <h2 className="skill-category-title">{title}</h2>
    <div className="skill-divider" aria-hidden="true" />
    <motion.ul
      className="skills-grid"
      variants={variants?.container}
      initial="hidden"
      animate="visible"
      aria-label={`${title} - ${data.length} skills`}
    >
      {data.map(skill => (
        <SkillItem
          key={skill.name}
          skill={skill}
          variants={variants?.item}
        />
      ))}
    </motion.ul>
  </div>
);