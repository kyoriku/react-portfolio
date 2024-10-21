import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import ResumeDownload from '../assets/documents/Austin_Graham_Resume_2024.pdf';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Resume = () => {
  return (
    <section className='container mb-4 py-4 col-md-6 contact'>
      <motion.h1
        className='text-center mb-4'
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        My Skills & Experience
      </motion.h1>
      <div className=''>
        <Skills />
        <a href={ResumeDownload} target="_blank" rel="noopener noreferrer" className='d-flex justify-content-center text-decoration-none'>
          <button className='btn btn-primary custom-btn' style={{ width: '160px', objectFit: 'cover' }} >
            <FileText className="mr-2" size={18} /> View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;