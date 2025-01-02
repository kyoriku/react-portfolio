import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/Skills.css';

// Centralized data for skills, making the component more maintainable
const skillsData = {
  frontend: [
    {
      name: 'HTML',
      icon: '/icons/html.jpg',
      description: 'Semantic HTML5 markup for structuring web content and ensuring accessibility'
    },
    {
      name: 'CSS',
      icon: '/icons/css.jpg',
      description: 'CSS3 styling including Flexbox, Grid, and responsive design principles'
    },
    {
      name: 'JavaScript',
      icon: '/icons/javascript.jpg',
      description: 'Modern ES6+ JavaScript for dynamic client-side functionality'
    },
    {
      name: 'jQuery',
      icon: '/icons/jquery.jpg',
      description: 'jQuery for DOM manipulation and cross-browser compatibility'
    },
    {
      name: 'React',
      icon: '/icons/reactjs.jpg',
      description: 'React.js library for building interactive user interfaces with components'
    },
    {
      name: 'Bootstrap',
      icon: '/icons/bootstrap.jpg',
      description: 'Bootstrap framework for rapid responsive web development'
    }
  ],
  backend: [
    {
      name: 'APIs',
      icon: '/icons/api.jpg',
      description: 'RESTful API design and implementation with proper status codes and JWT auth'
    },
    {
      name: 'Node.js',
      icon: '/icons/nodejs.jpg',
      description: 'Server-side JavaScript runtime for scalable network applications'
    },
    {
      name: 'Express',
      icon: '/icons/expressjs.jpg',
      description: 'Express.js framework for building robust web applications and APIs'
    },
    {
      name: 'MySQL',
      icon: '/icons/mysql.jpg',
      description: 'Relational database design and management with MySQL'
    },
    {
      name: 'MongoDB',
      icon: '/icons/mongodb.jpg',
      description: 'NoSQL database for flexible, document-oriented data storage'
    },
    {
      name: 'GraphQL',
      icon: '/icons/graphql.jpg',
      description: 'GraphQL for efficient, flexible API queries and data handling'
    }
  ]
};

// Animation configuration with clear, reusable settings
const animationConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  },
  item: {
    hidden: {
      y: 10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        duration: 0.3
      }
    }
  }
};

/**
 * SkillItem component renders individual skill with icon and details
 * Handles image loading errors with a fallback mechanism
 */
const SkillItem = ({ skill }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.li
      className="skill-item"
      variants={animationConfig.item}
    >
      {/* Fallback for image loading errors */}
      {imageError ? (
        <>
          <div
            className="skill-icon-fallback"
            aria-hidden="true"
          >
            {skill.name.charAt(0)}
          </div>
          <div
            className="visually-hidden"
            role="status"
            aria-live="polite"
          >
            {skill.name} skill icon unavailable
          </div>
        </>
      ) : (
        <figure
          className="skill-icon-container mb-0"
          role="img"
          aria-label={`${skill.name} skill icon`}
        >
          <img
            src={skill.icon}
            alt=""
            className="skill-icon"
            loading="lazy"
            width="48"
            height="48"
            onError={() => setImageError(true)}
          />
          <div className="icon-overlay" aria-hidden="true" />
        </figure>
      )}

      {/* Skill details with semantic HTML */}
      <dl className="skill-details mb-0">
        <dt className="skill-name">{skill.name}</dt>
        <dd className="skill-description visually-hidden">{skill.description}</dd>
      </dl>
    </motion.li>
  );
};

/**
 * SkillSection component groups skills by category
 * Provides semantic structure and accessibility
 */
const SkillSection = ({ title, skills, id, variants }) => (
  <section className="skill-card" aria-labelledby={id}>
    <header>
      <h3 id={id} className="skill-section-title">{title}</h3>
      <div className="skill-divider" aria-hidden="true" />
    </header>

    <motion.ul
      className="skills-grid"
      variants={variants?.container}
      initial="hidden"
      animate="visible"
      aria-label={`${title} - ${skills.length} skills`}
    >
      {skills.map(skill => (
        <SkillItem
          key={skill.name}
          skill={skill}
        />
      ))}
    </motion.ul>
  </section>
);

/**
 * Main Skills component that renders frontend and backend skill sections
 * Respects user's reduced motion preferences
 */
const Skills = () => {
  // Disable animations for users with reduced motion preferences
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <article className="skills-container">
      {/* Skill sections */}
      <h2 className="visually-hidden">Technical Skills</h2>
      <SkillSection
        title="Front-end Proficiencies"
        skills={skillsData.frontend}
        id="frontend-skills"
        variants={animations}
      />
      <SkillSection
        title="Back-end Proficiencies"
        skills={skillsData.backend}
        id="backend-skills"
        variants={animations}
      />
    </article>
  );
};

export default Skills;
