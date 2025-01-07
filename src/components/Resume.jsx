import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import '../styles/Resume.css';

/**
 * Animation configuration for Framer Motion
 * Defines transitions for heading and content sections
 * Includes opacity and vertical translation with easing functions
 */
const animationConfig = {
  heading: {
    hidden: {
      opacity: 0,
      y: -25
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  },
  content: {
    hidden: {
      opacity: 0,
      y: 25
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1
      }
    }
  }
};

/**
 * ViewResumeButton component provides PDF resume download functionality
 * Includes accessibility features and semantic HTML structure
 * Manages external link behavior and screen reader support
 */
const ViewResumeButton = () => (
  <section
    className="resume-view-container"
    aria-labelledby="view-resume-heading"
  >
    <h2 id="view-resume-heading" className="visually-hidden">View Resume</h2>
    <a
      href="/documents/Austin_Graham_Resume_2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-button"
      aria-label="Open resume PDF in new tab"
      title="View resume as PDF in new browser tab"
    >
      <span className="icon-wrapper" aria-hidden="true">
        <FileText size={22} />
      </span>
      <span className="link-text">View Resume</span>
      <span className="visually-hidden">(opens in new tab)</span>
    </a>
  </section>
);

/**
 * Main Resume component that displays skills and experience section
 * Manages animations, document title, and provides accessibility features
 * for screen readers and keyboard navigation
 * Respects user's motion preferences for animations
 */
const Resume = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  // Update document title and restore on unmount
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Austin Graham | Resume";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <motion.section
      className="resume-section"
      initial="hidden"
      animate="visible"
      aria-labelledby="resume-heading"
      variants={animations}
    >
      <div className="container py-3 pb-4">
        {/* Navigation instructions for screen reader users */}
        <div className="visually-hidden" aria-label="Navigation Instructions">
          <p>
            Press Tab to move forward through skill sections.
            Press Shift + Tab to move backward through sections.
            Use the arrow keys or Page Up/Down to scroll through the skills list.
            The Back to Top link at the bottom of the page returns focus to the main navigation menu.
            Screen reader users: Each skill displays the technology name and its description.
          </p>
        </div>

        {/* Resume header section */}
        <header>
          <motion.h1
            id="resume-heading"
            className="text-center mb-3 gradient-text"
            variants={animations.heading}
          >
            Skills & Experience
          </motion.h1>
          <p className="visually-hidden">
            Explore my technical skills in both front-end and back-end development,
            along with a downloadable copy of my complete resume.
          </p>
        </header>

        {/* Main content section */}
        <motion.article
          variants={animations.content}
          className="resume-content"
        >
          <Skills />
          <ViewResumeButton />
        </motion.article>
      </div>

      {/* Back to top navigation link */}
      <a
        href="#back-to-nav"
        className="back-to-top skip-link"
        aria-label="Back to top and return to navigation"
      >
        Back to top
        <span className="visually-hidden"> (Press Enter to return to navigation)</span>
      </a>
    </motion.section>
  );
};

export default Resume;