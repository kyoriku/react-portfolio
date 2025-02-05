import { motion } from 'framer-motion';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

export const CredentialItem = ({ item, variants, type }) => {
  const Icon = type === 'education' ? GraduationCap : Award;
  
  return (
    <motion.li className="certificate-item" variants={variants}>
      <div className="certificate-content">
        <div className="certificate-icon" aria-hidden="true">
          <Icon size={28} aria-hidden="true" />
        </div>

        <div className="certificate-details">
          <h2 className="certificate-name">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                {item.name}
                <span>
                  <ExternalLink size={16} className="certificate-link-icon" aria-hidden="true" />
                  <span className="visually-hidden">(opens in new tab)</span>
                </span>
              </a>
            ) : (
              <span>{item.name}</span>
            )}
          </h2>
          <p className="certificate-meta">
            {item.issuer} • {item.date}
          </p>
        </div>
      </div>
    </motion.li>
  );
};