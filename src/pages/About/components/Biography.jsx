import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import BiographyText from './BiographyText';
import StackIcons from './StackIcons';

const Biography = ({ animations }) => (
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
          Full Stack Developer
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
            With expertise in the MERN stack, I transform complex challenges into elegant web solutions. My experience collaborating in development teams has strengthened my ability to build secure, scalable applications. I combine technical excellence with a drive to create applications that deliver measurable business impact.
          </BiographyText>
          <BiographyText animations={animations}>
            I specialize in implementing robust authentication systems, optimizing database performance, and creating intuitive user experiences. Through employee management systems and event planning platforms, I've demonstrated the ability to develop comprehensive solutions that improve efficiency and user satisfaction.
          </BiographyText>
          <BiographyText animations={animations} className="mb-0">
            My background in high-pressure hospitality environments has developed my customer-first mindset and ability to thrive in fast-paced settings. This unique perspective helps me bridge the gap between technical capabilities and practical business needs, creating solutions that enhance productivity and streamline processes.
          </BiographyText>
        </div>
      </section>
    </motion.article>
    <div className="d-lg-none bio-mobile-sections">
      <h2 className="visually-hidden">Additional Information</h2>
      <div className="technical-stack-section mt-3">
        <h3 className="h5 text-start">Technical Stack</h3>
        <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
        <StackIcons animations={animations} />
      </div>
    </div>
  </div>
);

export default Biography;
