import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

// Importing icons for front end proficiencies
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import ReactJs from '../assets/icons/reactjs.jpg';
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
    { name: 'React.js', icon: ReactJs },
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
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1 to 0.05
      duration: 0.3, // Added overall duration for the container
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 }, // Reduced y from 20 to 10
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200, // Increased from 100 to 200
      damping: 10, // Added damping for quicker settling
      duration: 0.3, // Added duration for each item
    },
  },
};

const SkillSection = ({ title, skills }) => (
  <div className="card mb-4">
    <div className="card-header border-0">
      <h3 className="card-title h5 mb-0">{title}</h3>
    </div>
    <hr className='mx-3 my-0' />
    <div className="card-body">
      <motion.div
        className="row row-cols-3 row-cols-lg-6 g-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="col" variants={itemVariants}>
            <div className="d-flex flex-column align-items-center">
              <img src={skill.icon} alt={skill.name} className="mb-2" style={{ width: '50px', height: '50px' }} />
              <span className="fw-medium text-center">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div>
      <SkillSection title="Front-end Proficiencies" skills={skillsData.frontend} />
      <SkillSection title="Back-end Proficiencies" skills={skillsData.backend} />
    </div>
  );
};

export default Skills;