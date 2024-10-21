import React from 'react';
import { motion } from 'framer-motion';
import ArmoredCore from '../assets/images/armoredcore.jpg';
import { MapPin } from 'lucide-react';
import '../styles/About.css';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const About = () => {
  return (
    <motion.section
      className="container py-4 mb-4"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center mb-4"
        variants={headingVariants}
      >
        About Me
      </motion.h1>

      <motion.div
        className="row g-0 align-items-center"
        variants={contentVariants}
      >
        <div className="col-md-4 d-flex justify-content-center align-items-center px-3">
          <img src={ArmoredCore} alt="Profile picture" className="about-image img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-3">Austin Graham</h2>
              <h3 className="card-subtitle mb-3">Full Stack Developer</h3>
              <p className="card-text mb-3 d-flex align-items-center">
                <MapPin size={18} className="me-2" /> Toronto, Canada
              </p>
              <p className="card-text">
                I specialize in full-stack development, proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and MongoDB. Currently improving my React skills and applying Agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
