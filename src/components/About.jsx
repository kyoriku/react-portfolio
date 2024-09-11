import React from 'react'; // Importing React to use JSX
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import ArmoredCore from '../assets/images/armoredcore.jpg'; // Importing image to display profile picture
import '../styles/About.css'; // Importing CSS file to style component

// Animation variants for the heading, image, and text
const headingVariants = {
  hidden: { opacity: 0, y: -25 }, // Slide in from the top
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100 }, // Slide in from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: 100 }, // Slide in from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Functional component to display about me section
const About = () => {
  // Returning the about me section with profile picture and information
  return (
    <motion.section
      className='container py-4 mb-4'
      initial="hidden"
      animate="visible"
    >
      <motion.div className='row m-auto'>
        <motion.h1
          className='mb-4 text-center'
          variants={headingVariants} // Animate from the top
        >
          About
        </motion.h1>
        <motion.div
          className='col-md-4 d-flex justify-content-center'
          variants={imageVariants} // Image comes from the left
        >
          <motion.img
            src={ArmoredCore}
            alt='Profile picture'
            className='about-image'
            width='300'
            height='300'
          />
        </motion.div>
        <motion.div
          className='col-md-8 d-flex align-items-center about-mobile'
          variants={textVariants} // Text comes from the right
        >
          <p className='card p-3'>
            Hello! I'm Austin, a Junior Full Stack Web Developer based in Toronto with a strong foundation in both front-end and back-end technologies. I'm proficient in HTML, CSS, JavaScript, Node.js, Express.js, and databases like MySQL and MongoDB. Currently, I'm focusing on advancing my React skills and applying Agile and Scrum methodologies to my projects. My approach to web development blends creativity with a problem-solving mindset, enabling me to build functional and user-friendly applications. With experience in web development and project management, I'm motivated to contribute to dynamic teams and stay at the forefront of industry trends.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About; // Exporting the About component to be used in other parts of the application
