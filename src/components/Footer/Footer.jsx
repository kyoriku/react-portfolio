import React from 'react';
import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

// Collection of social media links with their details and accessibility labels
const socialLinks = [
  {
    icon: faGithub,
    href: "https://github.com/kyoriku",
    label: "Visit my GitHub profile",
    name: "GitHub"
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/austingraham1/",
    label: "Connect with me on LinkedIn",
    name: "LinkedIn"
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/@arcaneviva",
    label: "Subscribe to my YouTube channel",
    name: "YouTube"
  }
];

/**
 * Footer component serves as the main footer section of the website
 * Handles social media links, email contact, and copyright information with responsive layout
 * Includes accessibility features for screen readers and keyboard navigation
 */
const Footer = () => {
  return (
    <footer className="footer mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="container py-3 position-relative">
        {/* Email link - desktop version */}
        <a
          href="mailto:hello@austingraham.ca"
          className="email-link d-none d-lg-flex align-items-center"
          aria-label="Send me an email"
          title='Send me an email'
        >
          <Mail className="me-2" aria-hidden="true" size={18} />
          <small>hello@austingraham.ca</small>
        </a>

        {/* Social media navigation section */}
        <nav className="social-links" aria-label="Social media links">
          {socialLinks.map(({ icon, href, label, name }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} aria-hidden="true" title={name} />
              <span className="visually-hidden">{name}</span>
            </a>
          ))}
        </nav>

        {/* Copyright notice - desktop version */}
        <small className="copyright d-none d-lg-block">
          © 2024 Austin Graham
        </small>

        {/* Email and copyright - mobile version */}
        <div className="d-lg-none text-center">
          <a
            href="mailto:hello@austingraham.ca"
            className="email-link-mobile d-block mt-3"
            aria-label="Send me an email"
            title='Send me an email'
          >
            <Mail className="me-2" aria-hidden="true" size={18} />
            <small>hello@austingraham.ca</small>
          </a>
          <small className="copyright-mobile d-block mt-3">
            © 2024 Austin Graham
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;