import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import ResumeDownload from '../assets/documents/Austin_Graham_Resume_2024.pdf';
import '../styles/Resume.css';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Resume = () => {
  return (
    <motion.section
      className='resume-section container py-5'
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className='text-center mb-5 gradient-text'
        variants={headingVariants}
      >
        My Skills & Experience
      </motion.h1>

      <motion.div
        variants={contentVariants}
        className='resume-content'
      >
        <Skills />

        <div className="resume-download-container">
          <a
            href={ResumeDownload}
            target="_blank"
            rel="noopener noreferrer"
            className='resume-button'
          >
            <FileText size={22} />
            <span>View Resume</span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;