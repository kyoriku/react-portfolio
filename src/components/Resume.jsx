import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';

const animationConfig = {
  heading: {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  },
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
        duration: 0.3, ease: "easeOut"
      }
    }
  }
};

/**
 * ResumeLink component provides PDF resume download functionality
 * Includes accessibility features and semantic HTML structure
 * Manages external link behavior and screen reader support
 */
const Resume = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <section className="skill-card mt-3 mb-med" aria-labelledby="experience-title">
      <motion.h1
        variants={animations?.heading}
        initial="hidden"
        animate="visible"
        id="experience-title"
        className="gradient-text my-0"
      >
        Resume
      </motion.h1>
      <div className="skill-divider" aria-hidden="true" />

      <motion.div
        className="certificate-item"
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="resume-description"
          variants={animations.item}
        >
          Browse my technical background, certifications, and evolving skillset in modern web technologies.
        </motion.p>
        <motion.div
          className="hero-actions d-flex justify-content-center"
          variants={animations.item}
        >
          <a
            href="/documents/Austin_Graham_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
            aria-label="Open resume PDF in new tab"
            title="View resume as PDF in new browser tab"
          >
            <span className="icon-wrapper" aria-hidden="true">
              <FileText size={22} />
            </span>
            <span>View Resume</span>
            <span className="visually-hidden">(opens in new tab)</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;