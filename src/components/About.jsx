import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import '../styles/About.css';

const animationConfig = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const ProfileImage = () => (
  <div className="col-md-4 text-center" role="complementary" aria-label="Profile Image">
    <figure className="profile-image-container">
      <img src='/images/armoredcore.webp'
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
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <>
      <Helmet>
        <title>Austin Graham - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Web Developer, Software Engineer, JavaScript, React, Node.js, Express, MySQL, MongoDB, Python, SQL, Toronto Developer, Web Application Development, Responsive Design, Accessible Web Design, Front-end Development, Back-end Development, API Development, Database Design, HTML5, CSS3, Agile Development, MERN Stack, REST APIs, AWS, Sequelize, Mongoose, Bootstrap, Tailwind CSS, Scrum, Secure Web Applications, Scalable Applications, User-Centered Design, Git, Vite, DevOps"
        />
        <link rel="canonical" href="https://austingraham.ca" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austingraham.ca" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Austin Graham" />
        <meta property="og:title" content="Austin Graham - Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta property="og:image" content="https://austingraham.ca/screenshots/about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://austingraham.ca" />
        <meta property="twitter:title" content="Austin Graham - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta property="twitter:image" content="https://austingraham.ca/screenshots/about.jpg" />
      </Helmet>

      <section
        className="about-wrapper"
        aria-labelledby="about-heading"
      >
        <motion.div
          className="about-section container spacing py-5"
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
        
        {/* Back to top navigation link */}
        <a
          href="#back-to-nav"
          className="back-to-top skip-link"
          aria-label="Back to top and return to navigation"
        >
          Back to top
          <span className="visually-hidden"> (Press Enter to return to navigation)</span>
        </a>
      </section>
    </>
  );
};

export default About;