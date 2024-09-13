import React from 'react'; // Importing React to use JSX
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import Skills from './Skills'; // Importing Skills component to display front end and back end proficiencies
import ResumeDownload from '../assets/documents/Austin_Graham_Resume_2024.pdf'; // Importing resume file

// Animation variant for the heading
const headingVariants = {
  hidden: { opacity: 0, y: -25 }, // Slide in from the top
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Functional component to display resume
const Resume = () => {
  // Returning the resume section with view button and skills
  return (
    <section className='container mb-4 py-4 col-md-6 contact'>
      <motion.h1
        className='text-center mb-4'
        variants={headingVariants} // Animate the heading
        initial="hidden"
        animate="visible"
      >
        Resume
      </motion.h1>
      <div className='card p-3 '>
        <Skills />
        <a href={ResumeDownload} target="_blank" rel="noopener noreferrer" className='d-flex justify-content-center text-decoration-none'>
          <button className='btn btn-success'>View Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Resume; // Exporting Resume component to be used in other parts of the application
