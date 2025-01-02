import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import '../styles/Resume.css';

const animationConfig = {
  heading: {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  },
  content: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } }
  }
};

const Resume = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <motion.section
      className="resume-section container py-3"
      initial="hidden"
      animate="visible"
      aria-labelledby="resume-heading"
    >
      <motion.h1
        id="resume-heading"
        className="text-center mb-3 gradient-text"
        variants={animations.heading}
      >
        Skills & Experience
      </motion.h1>

      <motion.article variants={animations.content} className="resume-content">
        <Skills />
        <section className="resume-download-container">
          <a
            href="/documents/Austin_Graham_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            aria-label="Open Austin Graham's Resume PDF in new tab"
          >
            <FileText size={22} aria-hidden="true" />
            <span>View Resume</span>
          </a>
        </section>
      </motion.article>
    </motion.section>
  );
};

export default Resume;
