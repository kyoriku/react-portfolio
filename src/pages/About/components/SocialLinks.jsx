import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../constants';

export const SocialLinks = ({ animations }) => (
  <motion.nav
    className="social-links-about"
    aria-label="Social media links"
    initial="hidden"
    animate="visible"
    variants={animations?.staggerContainer}
  >
    <ul className="list-unstyled d-flex align-items-center gap-4 mb-0">
      {socialLinks.map((link) => (
        <motion.li
          key={link.href}
          variants={animations?.fadeUpStagger}
        >
          <a
            href={link.href}
            className="social-icon"
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            target={link.href.startsWith('http') ? '_blank' : undefined}
          >
            <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
            <span className="visually-hidden">
              {link.label}
              {link.href.startsWith('http') ? ' (opens in new tab)' : ''}
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.nav>
);
