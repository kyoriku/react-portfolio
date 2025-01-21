import { useState } from 'react';
import { motion } from 'framer-motion';

export const SkillItem = ({ skill, variants }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.li
      className="skill-item"
      variants={variants}
    >
      {imageError ? (
        <>
          <div className="skill-icon-fallback" aria-hidden="true">
            {skill.name.charAt(0)}
          </div>
          <div className="visually-hidden" role="status" aria-live="polite">
            {skill.name} skill icon unavailable
          </div>
        </>
      ) : (
        <figure className="skill-icon-container mb-0" role="img" aria-label={`${skill.name} skill icon`}>
          <img
            src={skill.icon}
            alt=""
            className="skill-icon"
            loading="eager"
            width="48"
            height="48"
            onError={() => setImageError(true)}
          />
          <div className="icon-overlay" aria-hidden="true" />
        </figure>
      )}

      <dl className="skill-details mb-0">
        <dt className="skill-name">{skill.name}</dt>
        <dd className="skill-description visually-hidden">{skill.description}</dd>
      </dl>
    </motion.li>
  );
};