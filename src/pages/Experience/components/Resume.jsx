import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useAnimations } from '../hooks/useAnimations';
import '../styles/Resume.css';

export const Resume = () => {
  const animations = useAnimations();

  return (
    <section className="mt-3 mb-med" aria-labelledby="experience-title">
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