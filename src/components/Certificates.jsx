import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import '../styles/Certificates.css';

const certificatesData = [
  {
    name: 'Full Stack Web Development',
    issuer: 'University of Toronto',
    date: 'March 2024',
    id: 'cert1'
  },
  {
    name: 'Google Project Management',
    issuer: 'Coursera',
    date: 'September 2024',
    link: 'https://www.credly.com/badges/99d4db78-4a6b-477a-9c6b-af69572aa11b/public_url',
    id: 'cert2'
  }
];

const animationConfig = {
  heading: {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  },
  item: {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, ease: "easeOut"
      }
    }
  }
};

const CertificateItem = ({ cert, variants }) => (
  <motion.li
    className="certificate-item"
    variants={variants}
  >
    <div className="certificate-content">
      <div className="certificate-icon" aria-hidden="true">
        <Award size={28} aria-hidden="true" />
      </div>

      <div className="certificate-details">
        <h2 className="certificate-name">
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              {cert.name}
              <span>
                <ExternalLink size={16} className="certificate-link-icon" aria-hidden="true" />
                <span className="visually-hidden">(opens in new tab)</span>
              </span>
            </a>
          ) : (
            <span>{cert.name}</span>
          )}
        </h2>
        <p className="certificate-meta">
          {cert.issuer} • {cert.date}
        </p>
      </div>
    </div>
  </motion.li>
);

const CertificatesSection = ({ data, id, variants }) => (
  <div className="certificate-category">
    <motion.ul
      className="certificates-container"
      variants={variants?.container}
      initial="hidden"
      animate="visible"
      aria-label={`Certificates - ${data.length} total`}
    >
      {data.slice().reverse().map(cert => (
        <CertificateItem
          key={cert.id}
          cert={cert}
          variants={variants?.item}
        />
      ))}
    </motion.ul>
  </div>
);

const Certificates = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <section className="mt-3" aria-labelledby="certificates-heading">
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
        <motion.div
          variants={animations?.item}
        >
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

export default Certificates;