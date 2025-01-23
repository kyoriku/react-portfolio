import { motion } from 'framer-motion';
import { CertificatesSection } from './CertificatesSection';
import { certificatesData } from '../constants';
import { useAnimations } from '../hooks/useAnimations';
import '../styles/Certificates.css';

export const Certificates = () => {
  const animations = useAnimations();

  return (
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
          <CertificatesSection
            data={certificatesData}
            id="certificates-section"
            variants={animations}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};