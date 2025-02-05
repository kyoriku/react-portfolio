import { motion } from 'framer-motion';
import { CredentialSection } from './CredentialSection';
import { certificatesData, educationData } from '../constants';
import { useAnimations } from '../hooks/useAnimations';
import '../styles/Certificates.css';

export const Credentials = () => {
  const animations = useAnimations();

  return (
    <>
      {/* Education Section */}
      <section className="skill-card mt-3" aria-labelledby="education-heading">
        <motion.h1
          variants={animations?.heading}
          initial="hidden"
          animate="visible"
          id="education-heading"
          className="gradient-text my-0"
        >
          Education
        </motion.h1>
        <div className="skill-divider" aria-hidden="true" />

        <motion.div
          className="mb-med"
          variants={animations?.container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={animations?.item}>
            <CredentialSection
              data={educationData}
              id="education-section"
              variants={animations}
              type="education"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="skill-card mt-3" aria-labelledby="certificates-heading">
        <motion.h1
          variants={animations?.heading}
          initial="hidden"
          animate="visible"
          id="certificates-heading"
          className="gradient-text my-0"
        >
          Certifications
        </motion.h1>
        <div className="skill-divider" aria-hidden="true" />

        <motion.div
          className="mb-med"
          variants={animations?.container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={animations?.item}>
            <CredentialSection
              data={certificatesData}
              id="certificates-section"
              variants={animations}
              type="certificate"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};