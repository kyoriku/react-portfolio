import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const CertificateItem = ({ cert, variants }) => (
  <motion.li className="certificate-item" variants={variants}>
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