import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: faGithub, href: "https://github.com/kyoriku" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/austingraham1/" },
    { icon: faYoutube, href: "https://www.youtube.com/@arcaneviva" }
  ];

  return (
    <footer className="footer mt-auto">
      <div className="container py-3">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;