import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Project.css';

const Project = ({ title, image, deployedLink, githubLink, technologies, description }) => {
  return (
    <motion.div
      className="card h-100 shadow-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <img src={image} alt={title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} height='200' />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <hr className='mt-0 mb-2' />
        <p className="card-text mb-2">{description}</p>
        <div className="mb-2">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
          ))}
        </div>
        <div className="mt-auto d-flex gap-1">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-flex align-items-center justify-content-center w-100 custom-btn">
            <ExternalLink size={18} className="me-1" />
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-flex align-items-center justify-content-center w-100 custom-btn">
            <Github size={18} className="me-1" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
