import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Skills from './Skills';
import '../styles/Experience.css';

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
 * ResumeLink component provides PDF resume download functionality
 * Includes accessibility features and semantic HTML structure
 * Manages external link behavior and screen reader support
 */
const ResumeLink = () => (
  <section
    className="resume-view-container"
    aria-labelledby="view-resume-heading"
  >
    <h2 id="view-resume-heading" className="visually-hidden">View Resume</h2>
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
      <span className="link-text">View Resume</span>
      <span className="visually-hidden">(opens in new tab)</span>
    </a>
  </section>
);

/**
 * Main Experience component that displays skills and experience section
 * Manages animations, document title, and provides accessibility features
 * for screen readers and keyboard navigation
 * Respects user's motion preferences for animations
 */
const Experience = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <>
      <Helmet>
        <title>Experience | Austin Graham - Full Stack Developer</title>
        <meta
          name="description"
          content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
        />
        <link rel="canonical" href="https://austingraham.ca/experience" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austingraham.ca/experience" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Austin Graham" />
        <meta property="og:title" content="Experience | Austin Graham - Full Stack Developer" />
        <meta
          property="og:description"
          content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
        />
        <meta property="og:image" content="https://austingraham.ca/screenshots/experience.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://austingraham.ca/experience" />
        <meta property="twitter:title" content="Experience | Austin Graham - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
        />
        <meta property="twitter:image" content="https://austingraham.ca/screenshots/experience.jpg" />
      </Helmet>

      <motion.section
        className="experience-section"
        initial="hidden"
        animate="visible"
        aria-labelledby="experience-heading"
        variants={animations}
      >
        <div className="container spacing">
          {/* Navigation instructions for screen reader users */}
          <div className="visually-hidden" aria-label="Navigation Instructions">
            <p>
              Press Tab to move forward through sections.
              Press Shift + Tab to move backward through sections.
              Use the arrow keys or Page Up/Down to scroll through the skills list.
              The Back to Top link at the bottom of the page returns focus to the main navigation menu.
              Screen reader users: Each skill displays the technology name and its description.
            </p>
          </div>

          {/* Experience header section */}
          <header>
            <motion.h1
              id="experience-heading"
              className="text-center gradient-text"
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
            className="experience-content"
          >
            <Skills />
            <ResumeLink />
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
    </>
  );
};

export default Experience;