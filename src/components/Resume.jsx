import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import '../styles/Resume.css';

// Centralized configuration for animations
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

// Navigation data for Table of Contents
const navigationLinks = [
  {
    href: "#frontend-skills",
    label: "Skip to front-end skills section",
    text: "Front-end Proficiencies"
  },
  {
    href: "#backend-skills",
    label: "Skip to back-end skills section",
    text: "Back-end Proficiencies"
  },
  {
    href: "#view-resume-heading",
    label: "Skip to resume download section",
    text: "View Resume"
  }
];

/**
 * TableOfContents component provides keyboard-accessible navigation
 * through main sections of the resume
 */
const TableOfContents = () => (
  <nav
    aria-label="Resume sections"
    className="visually-hidden"
    role="navigation"
  >
    <h2>Resume Navigation</h2>
    <p>Quick navigation - use tab key to move between links and enter key to jump to sections:</p>
    <ul role="list">
      {navigationLinks.map(({ href, label, text }) => (
        <li key={href} role="listitem">
          <a href={href} aria-label={label}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

/**
 * ViewResumeButton component handles the PDF resume download functionality
 * Includes loading states and accessibility announcements
 */
const ViewResumeButton = () => {
  const [status, setStatus] = useState('');

  const handleClick = () => {
    setStatus('Opening resume PDF in new tab');
  };

  return (
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
        onClick={handleClick}
      >
        <span className="icon-wrapper" aria-hidden="true">
          <FileText size={22} />
        </span>
        <span className="link-text">View Resume</span>
      </a>
      <output
        role="status"
        aria-live="polite"
        className="visually-hidden"
      >
        {status}
      </output>
    </section>
  );
};

/**
 * Main Resume component that combines all sections and handles animations
 * Respects user's reduced motion preferences
 */
const Resume = () => {
  const animations = useReducedMotion() ? {} : animationConfig;
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Austin Graham | Resume";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <motion.section
      className="resume-section container py-3"
      initial="hidden"
      animate="visible"
      aria-labelledby="resume-heading"
      role="region"
      aria-description="Use tab key to navigate between sections and enter key to activate links"
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.h1
        id="resume-heading"
        className="text-center mb-3 gradient-text"
        variants={animations.heading}
      >
        Skills & Experience
      </motion.h1>

      <aside
        className="visually-hidden"
        role="note"
        aria-label="Page description"
      >
        This section showcases my technical skills in both front-end and back-end development,
        followed by a link to view my complete resume.
      </aside>

      <TableOfContents />

      <motion.article
        variants={animations.content}
        className="resume-content"
        aria-busy={isAnimating}
      >
        <Skills />
        <ViewResumeButton />
      </motion.article>

      <a
        href="#resume-heading"
        className="skip-link visually-hidden focus:not-visually-hidden"
        aria-label="Skip to top of page"
      >
        Back to top
      </a>
    </motion.section>
  );
};

export default Resume;
