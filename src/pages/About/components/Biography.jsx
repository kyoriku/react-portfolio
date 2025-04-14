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
            As a software engineer specializing in full stack web development, I create elegant technical solutions that solve real-world problems. I leverage React, Node.js, and efficient database architecture to build secure, scalable applications with a strong focus on performance and user experience.
          </BiographyText>
          <BiographyText animations={animations}>
            My technical expertise includes implementing authentication systems, optimizing API efficiency, and designing responsive interfaces. I've developed systems ranging from employee management dashboards to cloud-native platforms with AWS infrastructure, consistently delivering solutions that enhance operational efficiency and drive measurable outcomes.
          </BiographyText>
          <BiographyText animations={animations} className="mb-0">
            With experience in high-pressure environments, I bring a unique blend of technical skill and practical problem-solving to software development. This combination enables me to build applications that not only function flawlessly but also address genuine business needs—creating technology that makes a meaningful difference for users and stakeholders alike.
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