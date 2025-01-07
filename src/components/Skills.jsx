import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/Skills.css';

/**
 * Centralized skill data structure containing technology information
 * Organized by category (frontend, backend, databases, devops)
 * Each skill includes name, icon path, and descriptive text
 */
const skillsData = {
  frontend: [
    { name: 'HTML5', icon: '/icons/html.png', description: 'Semantic HTML5 markup for modern web applications' },
    { name: 'CSS3', icon: '/icons/css.png', description: 'Advanced CSS3 including Flexbox, Grid, and animations' },
    { name: 'JavaScript', icon: '/icons/javascript.png', description: 'Modern ES6+ JavaScript for dynamic client-side functionality' },
    { name: 'React', icon: '/icons/react.png', description: 'React.js library for building interactive user interfaces' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.png', description: 'Bootstrap framework for responsive web development' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.png', description: 'Utility-first CSS framework for modern web applications' }
  ],
  backend: [
    { name: 'Node.js', icon: '/icons/nodejs.png', description: 'Server-side JavaScript runtime environment' },
    { name: 'Express', icon: '/icons/express.png', description: 'Web application framework for Node.js' },
    { name: 'REST APIs', icon: '/icons/api.png', description: 'RESTful API design and implementation' },
    { name: 'Python', icon: '/icons/python.png', description: 'Versatile programming language for web development and data analysis' }
  ],
  databases: [
    { name: 'MySQL', icon: '/icons/mysql.png', description: 'Relational database management system' },
    { name: 'MongoDB', icon: '/icons/mongodb.png', description: 'NoSQL database for flexible data storage' },
    { name: 'Sequelize', icon: '/icons/sequelize.png', description: 'Promise-based Node.js ORM for SQL databases' },
    { name: 'Mongoose', icon: '/icons/mongoose.png', description: 'MongoDB object modeling for Node.js' }
  ],
  devops: [
    { name: 'Git', icon: '/icons/git.png', description: 'Version control system for tracking code changes' },
    { name: 'AWS', icon: '/icons/aws.png', description: 'Cloud services including S3, DynamoDB, and EC2' },
    { name: 'Jest', icon: '/icons/jest.png', description: 'JavaScript testing framework' },
    { name: 'Vite', icon: '/icons/vite.png', description: 'Next generation frontend build tool' }
  ]
};

/**
 * Animation configuration for Framer Motion
 * Defines container and item level animations with spring physics
 * Container handles staggered children animations
 * Item animations include opacity and vertical translation
 */
const animationConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  },
  item: {
    hidden: { y: 10, opacity: 0 },
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
 * SkillItem component renders individual skill entries
 * Handles icon loading with fallback for failed image loads
 * Provides semantic HTML structure with accessibility support
 * Receives animation variants as props to respect reduced motion preferences
 */
const SkillItem = ({ skill, variants }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.li
      className="skill-item"
      variants={variants}
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
 * SkillSection component organizes skills into categorical groups
 * Provides semantic structure and accessibility features
 * Manages animation variants for child elements
 * Passes animation variants to child components to respect reduced motion preferences
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
          variants={variants?.item}
        />
      ))}
    </motion.ul>
  </section>
);

/**
 * Main Skills component that renders the complete skills showcase
 * Organizes skills into frontend, backend, database, and devops sections
 * Manages responsive layout and accessibility features
 * Respects user's motion preferences for animations by conditionally applying variants
 */
const Skills = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  const sections = [
    { title: "Frontend Development", data: skillsData.frontend, id: "frontend-skills" },
    { title: "Backend Development", data: skillsData.backend, id: "backend-skills" },
    { title: "Database Technologies", data: skillsData.databases, id: "database-skills" },
    { title: "DevOps & Tools", data: skillsData.devops, id: "devops-skills" }
  ];

  return (
    <article className="skills-container">
      <h2 className="visually-hidden">Technical Skills</h2>
      {sections.map(({ title, data, id }) => (
        <SkillSection
          key={id}
          title={title}
          skills={data}
          id={id}
          variants={animations}
        />
      ))}
    </article>
  );
};

export default Skills;
