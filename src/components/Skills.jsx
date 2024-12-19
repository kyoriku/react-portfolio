import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

// Importing icons for front end proficiencies
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import Reactjs from '../assets/icons/reactjs.jpg';
import Bootstrap from '../assets/icons/bootstrap.jpg';

// Importing icons for back end proficiencies
import API from '../assets/icons/api.jpg';
import Node from '../assets/icons/nodejs.jpg';
import Express from '../assets/icons/expressjs.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import MongoDb from '../assets/icons/mongodb.jpg';
import GraphQL from '../assets/icons/graphql.jpg';

const skillsData = {
  frontend: [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'jQuery', icon: jQuery },
    { name: 'React', icon: Reactjs },
    { name: 'Bootstrap', icon: Bootstrap },
  ],
  backend: [
    { name: 'APIs', icon: API },
    { name: 'Node.js', icon: Node },
    { name: 'Express.js', icon: Express },
    { name: 'MySQL', icon: MySQL },
    { name: 'MongoDB', icon: MongoDb },
    { name: 'GraphQL', icon: GraphQL },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      duration: 0.3,
    },
  },
};

const SkillSection = ({ title, skills }) => (
  <div className="skill-card">
    <h3 className="skill-section-title">{title}</h3>
    <div className="skill-divider"></div>
    <motion.div
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-item"
          variants={itemVariants}
        >
          <div className="skill-icon-container">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div className="icon-overlay"></div>
          </div>
          <span className="skill-name">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-container">
      <SkillSection title="Front-end Proficiencies" skills={skillsData.frontend} />
      <SkillSection title="Back-end Proficiencies" skills={skillsData.backend} />
    </div>
  );
};

export default Skills;