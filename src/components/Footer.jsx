import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-3 d-flex flex-column">
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
              <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
                title={name}
              />
              <span className="visually-hidden">{name}</span>
            </a>
          ))}
        </nav>
        <small className="copyright d-none d-lg-block">
          © {currentYear} Austin Graham. All rights reserved.
        </small>
        <small className="copyright-mobile d-lg-none">
          © {currentYear} Austin Graham. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;