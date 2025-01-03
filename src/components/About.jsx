import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import '../styles/About.css';

const ANIMATION_CONFIG = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const ProfileImage = () => (
  <div className="col-md-4 text-center" role="complementary" aria-label="Profile Image">
    <figure className="profile-image-container">
      <img src='/images/armoredcore.jpg'
        alt="Austin Graham - Full Stack Developer based in Toronto"
        aria-describedby="img-description"
        className="about-image img-fluid"
        width="280"
        height="280"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
      <figcaption id="img-description" className="visually-hidden">
        Profile photo of Austin Graham
      </figcaption>
    </figure>
  </div>
);

const Biography = () => (
  <div className="col-md-8">
    <article className="content-card">
      <header>
        <h1 id="about-heading" className="card-title mb-3 fs-2 fs-md-1">Austin Graham</h1>
        <h2 className="card-subtitle mb-4 fs-3 fs-md-2">Full Stack Developer</h2>
      </header>

      <address className="location mb-4" aria-label="Current Location">
        <MapPin
          size={22}
          className="location-icon me-2"
          aria-hidden="true"
        />
        <span>Toronto, Canada</span>
      </address>

      <section className="bio">
        <h3 id="bio-heading" className="visually-hidden">Professional Background</h3>
        <p className="card-text">
          I specialize in full-stack development, proficient in HTML, CSS, JavaScript,
          Node.js, Express, MySQL, and MongoDB. Currently improving my React skills
          and applying Agile methodologies.
        </p>
      </section>
    </article>
  </div>
);

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const animations = prefersReducedMotion ? {} : ANIMATION_CONFIG;

  return (
    <section
      className="about-wrapper"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="about-section container py-5"
        initial="hidden"
        animate="visible"
        variants={animations}
      >
        <motion.div
          className="row g-4 align-items-center"
          variants={animations}
        >
          <ProfileImage />
          <Biography />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;