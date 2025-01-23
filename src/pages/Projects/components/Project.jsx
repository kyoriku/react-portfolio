import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ProjectImage } from './ProjectImage';
import { ProjectContent } from './ProjectContent';

export const Project = ({
  title,
  image,
  deployedLink,
  githubLink,
  technologies,
  description,
  isFocused,
  onFocus,
  onBlur,
  onViewDetails
}) => {
  const [imageError, setImageError] = useState(false);
  const titleId = `${title.toLowerCase()}-title`;
  const projectRef = useRef(null);

  return (
    <motion.article
      ref={projectRef}
      className={`project-card ${isFocused ? 'focused' : ''}`}
      id={title.toLowerCase()}
      aria-labelledby={titleId}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <ProjectImage
        image={image}
        title={title}
        setImageError={setImageError}
        imageError={imageError}
      />
      <ProjectContent
        title={title}
        titleId={titleId}
        description={description}
        technologies={technologies}
        deployedLink={deployedLink}
        githubLink={githubLink}
        image={image}
        onViewDetails={onViewDetails}
      />
    </motion.article>
  );
};