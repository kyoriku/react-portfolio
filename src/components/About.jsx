import React from 'react';
import { motion } from 'framer-motion';
import ArmoredCore from '../assets/images/armoredcore.jpg';
import { MapPin } from 'lucide-react';
import '../styles/About.css';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      className="about-section container py-5"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center mb-5 gradient-text"
        variants={headingVariants}
      >
        About Me
      </motion.h1>

      <motion.div
        className="row g-4 align-items-center"
        variants={contentVariants}
      >
        <div className="col-md-4 text-center">
          <div className="profile-image-container">
            <img
              src={ArmoredCore}
              alt="Profile picture"
              className="about-image img-fluid"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="content-card">
            <h2 className="card-title mb-3">Austin Graham</h2>
            <h3 className="card-subtitle mb-4">Full Stack Developer</h3>
            <p className="location mb-4">
              <MapPin size={18} className="location-icon" /> Toronto, Canada
            </p>
            <p className="card-text">
              I specialize in full-stack development, proficient in HTML, CSS, JavaScript,
              Node.js, Express.js, MySQL, and MongoDB. Currently improving my React skills
              and applying Agile methodologies.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;