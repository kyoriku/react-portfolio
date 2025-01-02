import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/Skills.css';

const skillsData = {
  frontend: [
    { name: 'HTML', icon: '/icons/html.jpg', description: 'HTML5 markup language' },
    { name: 'CSS', icon: '/icons/css.jpg', description: 'CSS3 styling' },
    { name: 'JavaScript', icon: '/icons/javascript.jpg', description: 'JavaScript programming' },
    { name: 'jQuery', icon: '/icons/jquery.jpg', description: 'jQuery library' },
    { name: 'React', icon: '/icons/reactjs.jpg', description: 'React framework' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.jpg', description: 'Bootstrap framework' }
  ],
  backend: [
    { name: 'APIs', icon: '/icons/api.jpg', description: 'RESTful APIs' },
    { name: 'Node.js', icon: '/icons/nodejs.jpg', description: 'Node.js runtime' },
    { name: 'Express', icon: '/icons/expressjs.jpg', description: 'Express.js framework' },
    { name: 'MySQL', icon: '/icons/mysql.jpg', description: 'MySQL database' },
    { name: 'MongoDB', icon: '/icons/mongodb.jpg', description: 'MongoDB database' },
    { name: 'GraphQL', icon: '/icons/graphql.jpg', description: 'GraphQL query language' }
  ]
};

const animationConfig = {
  container: { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } } 
  },
  item: { 
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 10, duration: 0.3 } }
  }
};

const SkillItem = ({ skill }) => {
  const [imageError, setImageError] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  if (imageError) {
    return (
      <motion.li className="skill-item" variants={animationConfig.item}>
        <div className="skill-icon-fallback" role="img" aria-label={`${skill.description} (icon unavailable)`}>
          {skill.name.charAt(0)}
        </div>
        <dl className="skill-details mb-0">
          <dt className="skill-name">{skill.name}</dt>
          <dd className="skill-description visually-hidden">{skill.description}</dd>
        </dl>
      </motion.li>
    );
  }

  return (
    <motion.li className="skill-item" variants={animationConfig.item}>
      <figure className="skill-icon-container mb-0" role="img" aria-label={`${skill.name} icon`}>
        <img 
          src={skill.icon}
          alt=""
          className="skill-icon"
          loading="lazy"
          width="48"
          height="48"
          onError={() => {
            setImageError(true);
            setStatusMessage(`${skill.name} icon failed to load, showing fallback`);
          }}
        />
        <div className="icon-overlay" aria-hidden="true" />
      </figure>
      <dl className="skill-details mb-0">
        <dt className="skill-name">{skill.name}</dt>
        <dd className="skill-description visually-hidden">{skill.description}</dd>
      </dl>
      <div className="visually-hidden" role="status" aria-live="polite">{statusMessage}</div>
    </motion.li>
  );
};

const SkillSection = ({ title, skills, id, variants }) => (
  <section className="skill-card" aria-labelledby={id}>
    <header>
      <h2 id={id} className="skill-section-title">{title}</h2>
      <div className="skill-divider" aria-hidden="true" />
    </header>
    <motion.ul 
      className="skills-grid"
      variants={variants?.container}
      initial="hidden"
      animate="visible"
      aria-label={`${title} - ${skills.length} skills`}
    >
      {skills.map(skill => <SkillItem key={skill.name} skill={skill} />)}
    </motion.ul>
  </section>
);

const Skills = () => {
  const animations = useReducedMotion() ? {} : animationConfig;
  
  return (
    <article className="skills-container" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="visually-hidden">Technical Skills Overview</h2>
      <SkillSection title="Front-end Proficiencies" skills={skillsData.frontend} id="frontend-skills" variants={animations} />
      <SkillSection title="Back-end Proficiencies" skills={skillsData.backend} id="backend-skills" variants={animations} />
    </article>
  );
};

export default Skills;
