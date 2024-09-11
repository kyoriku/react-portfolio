import React from 'react'; // Importing React to use JSX
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import '../styles/Skills.css'; // Importing CSS file to style component

// Importing icons to display front end proficiencies
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import ReactJs from '../assets/icons/reactjs.jpg';
import Bootstrap from '../assets/icons/bootstrap.jpg';

// Importing icons to display back end proficiencies
import API from '../assets/icons/api.jpg';
import Node from '../assets/icons/nodejs.jpg';
import Express from '../assets/icons/expressjs.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import MongoDb from '../assets/icons/mongodb.jpg';
import GraphQL from '../assets/icons/graphql.jpg';

// Animation variants for skill items
const skillVariantsLeft = {
  hidden: { opacity: 0, x: -25 }, // Slide in from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const skillVariantsRight = {
  hidden: { opacity: 0, x: 25 }, // Slide in from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Functional component to display front end and back end proficiencies
const Skills = () => {
  // Array of objects containing front end technologies
  const frontEndSkills = [
    {
      skill: 'HTML',
      image: HTML,
      alt: 'HTML'
    },
    {
      skill: 'CSS',
      image: CSS,
      alt: 'CSS'
    },
    {
      skill: 'JavaScript',
      image: JavaScript,
      alt: 'JavaScript'
    },
    {
      skill: 'jQuery',
      image: jQuery,
      alt: 'jQuery'
    },
    {
      skill: 'React.js',
      image: ReactJs,
      alt: 'React'
    },
    {
      skill: 'Bootstrap',
      image: Bootstrap,
      alt: 'Bootstrap'
    }
  ];

  // Array of objects containing back end technologies
  const backEndSkills = [
    {
      skill: 'APIs',
      image: API,
      alt: 'APIs'
    },
    {
      skill: 'Node.js',
      image: Node,
      alt: 'Node.js'
    },
    {
      skill: 'Express.js',
      image: Express,
      alt: 'Express.js'
    },
    {
      skill: 'MySQL',
      image: MySQL,
      alt: 'MySQL'
    },
    {
      skill: 'MongoDB',
      image: MongoDb,
      alt: 'MongoDB'
    },
    {
      skill: 'GraphQL',
      image: GraphQL,
      alt: 'GraphQL'
    }
  ];

  // Returning the lists of front end and back end proficiencies with icons and alt text
  return (
    <section>
      <motion.h3
        className="text-center" // Add CSS classes as needed
        variants={skillVariantsLeft} // Animate the front-end heading from the left
        initial="hidden"
        animate="visible"
      >
        Front-end Proficiencies
      </motion.h3>
      <div className='skills-container'>
        {frontEndSkills.map(({ skill, image, alt }, index) => (
          <motion.div
            key={index}
            className='skill-item'
            variants={skillVariantsLeft} // Animate each skill item from the left
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt={alt} height='50' width='50' />
            <p className='skill-label'>{skill}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="text-center" // Add CSS classes as needed
        variants={skillVariantsRight} // Animate the back-end heading from the right
        initial="hidden"
        animate="visible"
      >
        Back-end Proficiencies
      </motion.h3>
      <div className='skills-container'>
        {backEndSkills.map(({ skill, image, alt }, index) => (
          <motion.div
            key={index}
            className='skill-item'
            variants={skillVariantsRight} // Animate each skill item from the right
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt={alt} height='50' width='50' />
            <p className='skill-label'>{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; // Exporting the Skills component to be used in other components
