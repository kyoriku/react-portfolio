import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ProjectImage } from './ProjectImage';
import { ProjectContent } from './ProjectContent';

/**
 * Project component renders an individual project card with image and content
 * Handles focus states, image error handling, and renders both visual and interactive elements
 * Uses Framer Motion for animations and includes accessibility features
 */
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
  // State to handle image loading errors
  const [imageError, setImageError] = useState(false);
  
  // Create unique ID for ARIA labelling
  const titleId = `${title.toLowerCase()}-title`;
  
  // Reference to project article element for focus state management
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
      {/* Project image section with error handling */}
      <ProjectImage
        image={image}
        title={title}
        setImageError={setImageError}
        imageError={imageError}
      />
      
      {/* Project details section with title, description, and links */}
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