import { motion } from 'framer-motion';
import { CertificateItem } from './CertificateItem';

export const CertificatesSection = ({ data, id, variants }) => (
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