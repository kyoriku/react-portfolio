import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

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
 * Handles social media links and copyright information with responsive layout
 * Includes accessibility features for screen readers and keyboard navigation
 */
const Footer = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-3 d-flex flex-column">
        {/* Social media navigation section */}
        <nav
          className="social-links"
          aria-label="Social media links"
        >
          {socialLinks.map(({ icon, href, label, name }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              {/* Icon is decorative, actual text is provided via aria-label */}
              <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
                title={name}
              />
              {/* Visually hidden text for screen readers */}
              <span className="visually-hidden">{name}</span>
            </a>
          ))}
        </nav>

        {/* Copyright notice - desktop version (visible on large screens) */}
        <small className="copyright d-none d-lg-block">
          © {currentYear} Austin Graham. All rights reserved.
        </small>

        {/* Copyright notice - mobile version (visible on smaller screens) */}
        <small className="copyright-mobile d-lg-none">
          © {currentYear} Austin Graham. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;