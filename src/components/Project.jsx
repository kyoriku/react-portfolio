import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Project.css';  // Make sure this path is correct

// Import your existing tech icons
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import ReactJs from '../assets/icons/reactjs.jpg';
import Bootstrap from '../assets/icons/bootstrap.jpg';
import API from '../assets/icons/api.jpg';
import Node from '../assets/icons/nodejs.jpg';
import Express from '../assets/icons/expressjs.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import MongoDb from '../assets/icons/mongodb.jpg';
import GraphQL from '../assets/icons/graphql.jpg';
import Sequelize from '../assets/icons/sequelize.jpg';
import Handlebars from '../assets/icons/handlebars.jpg';

// Create an object to map technology names to their icons
const techIcons = {
  'HTML': HTML,
  'CSS': CSS,
  'JavaScript': JavaScript,
  'jQuery': jQuery,
  'React': ReactJs,
  'Bootstrap': Bootstrap,
  'Node.js': Node,
  'Express': Express,
  'MySQL': MySQL,
  'MongoDB': MongoDb,
  'GraphQL': GraphQL,
  'Sequelize': Sequelize,
  'Handlebars': Handlebars,
  'TMDb API': API,
  'Watchmode API': API,
  'OpenWeather API': API,
};

const Project = ({ title, image, deployedLink, githubLink, technologies, description }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="image-overlay"></div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="skill-divider mt-0 mb-2"></div>
        <p className="project-description">{description}</p>

        <div className="tech-stack">
          {technologies.map((tech, index) => {
            return (
              <div key={index} className="tech-badge">
                {techIcons[tech] && (
                  <img
                    src={techIcons[tech]}
                    alt={tech}
                    className="tech-icon"
                    onError={(e) => {
                      console.log('Image failed to load:', tech);
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <span>{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="project-links">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link demo-link"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;