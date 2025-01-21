import { motion } from 'framer-motion';
import { expertiseData } from '../constants';
import ExpertiseCard from './ExpertiseCard';
import BackToTop from './BackToTop';

const ExpertiseSection = ({ animations }) => (
  <section
    className="expertise-section mb-5"
    aria-labelledby="expertise-heading"
    aria-description="Technical specializations and development expertise"
    role="region"
  >
    <div className="container">
      <header>
        <motion.h2
          id="expertise-heading"
          className="gradient-text expertise-heading my-0"
          variants={animations?.heading}
          initial="hidden"
          animate="visible"
        >
          Technical Specializations
        </motion.h2>
        <hr className="skill-divider" aria-hidden="true" />
      </header>

      <motion.div
        className="row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations?.staggerContainer}
      >
        {expertiseData.map((card, index) => (
          <ExpertiseCard
            key={card.title}
            {...card}
            index={index}
            animations={animations}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ExpertiseSection;
