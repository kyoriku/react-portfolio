import React from 'react'; // Importing React to use JSX

// Functional component to display footer
const Footer = () => {
  // Returning the footer with social media links
  return (
    <footer className="bg-dark mt-auto">
      <div className="navbar navbar-expand-sm navbar-dark justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/kyoriku" target="_blank">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/austingraham1/" target="_blank">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/@arcaneviva" target="_blank">YouTube</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
