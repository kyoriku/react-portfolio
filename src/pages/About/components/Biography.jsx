import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { BiographyText } from './BiographyText';
import { StackIcons } from './StackIcons';

export const Biography = ({ animations }) => (
  <div className="col-lg-8 px-0">
    <motion.article
      initial="hidden"
      animate="visible"
      variants={animations?.staggerContainer}
      className="content-card h-100"
    >
      <header>
        <motion.h1 variants={animations?.fadeUpStagger} id="about-heading" className="mt-0 mb-0">
          Austin Graham
        </motion.h1>
        <motion.p variants={animations?.fadeUpStagger} className="card-subtitle h2 mb-3">
          Software Engineer
        </motion.p>

        <motion.div variants={animations?.fadeUpStagger}>
          <address className="location d-inline-flex align-items-center">
            <MapPin size={20} className="location-icon" aria-hidden="true" />
            <span>Toronto, Canada</span>
          </address>
        </motion.div>
      </header>
      <section className="bio" aria-label="Biography">
        <div className="card-text">
          <BiographyText animations={animations}>
            Software engineer specializing in full stack web development and business process automation. I create technical solutions that bridge modern web applications and automated workflows. Currently working at Instacart, deploying applications to embedded production devices and managing automated processes across 100+ systems.
          </BiographyText>
          <BiographyText animations={animations} className="mb-0">
            My expertise spans React/Node.js applications with advanced caching strategies, Python automation systems, and embedded device integration. I focus on building secure, scalable solutions with enterprise-level features like OAuth2 authentication, rate limiting, and comprehensive API integrations that solve real business problems.
          </BiographyText>
        </div>
      </section>
    </motion.article>
    <div className="d-lg-none bio-mobile-sections">
      <h2 className="visually-hidden">Additional Information</h2>
      <div className="technical-stack-section mt-3">
        <h3 className="h5 text-start">Tech Stack</h3>
        <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
        <StackIcons animations={animations} />
      </div>
    </div>
  </div>
);