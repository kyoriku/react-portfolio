import Helmet from 'react-helmet';
import Skills from './Skills';
import Certificates from './Certificates';
import Resume from './Resume';
import '../styles/Experience.css';

/**
 * Main Experience component that displays skills and experience section
 * Manages animations, document title, and provides accessibility features
 * for screen readers and keyboard navigation
 * Respects user's motion preferences for animations
 */
const Experience = () => {
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

      <section
        className="experience-section"
        aria-labelledby="experience-heading"
      >

        <div className="container spacing pt-0">
          <article className="experience-content">
            <Skills />
            <Certificates />
            <Resume />
          </article>
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
      </section>
    </>
  );
};

export default Experience;