import React from 'react'; // Importing React to use JSX
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Importing CSS file to style component

// Functional component to display footer
const Footer = () => {
  // Returning the footer with social media links
  return (
    <footer className="text-center mt-auto footer bg-dark">
      <div className="py-2">
        <a href="https://github.com/kyoriku" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/austingraham1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://www.youtube.com/@arcaneviva" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component to be used in other parts of the application
