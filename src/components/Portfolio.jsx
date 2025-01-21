import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useReducedMotion } from 'framer-motion';
import Project from './Project';
import { ExternalLink, Github } from 'lucide-react';
import { Modal } from 'bootstrap';

const techIcons = {
  'HTML': '/icons/html.webp',
  'CSS': '/icons/css.webp',
  'JavaScript': '/icons/javascript.webp',
  'jQuery': '/icons/jquery.webp',
  'React': '/icons/react.webp',
  'Bootstrap': '/icons/bootstrap.webp',
  'Node.js': '/icons/nodejs.webp',
  'Express': '/icons/express.webp',
  'MySQL': '/icons/mysql.webp',
  'MongoDB': '/icons/mongodb.webp',
  'GraphQL': '/icons/graphql.webp',
  'Sequelize': '/icons/sequelize.webp',
  'Handlebars': '/icons/handlebars.webp',
  'TMDb API': '/icons/api.webp',
  'Watchmode API': '/icons/api.webp',
  'OpenWeather API': '/icons/api.webp',
  'AWS': '/icons/aws.webp',
  'DynamoDB': '/icons/dynamodb.webp',
  'EC2': '/icons/ec2.webp',
  'S3': '/icons/s3.webp',
  'Python': '/icons/python.webp',
  'Flask': '/icons/flask.webp',
  'SQLAlchemy': '/icons/sqlalchemy.webp',
  'Jinja': '/icons/jinja.webp',
  'Gunicorn': '/icons/gunicorn.webp'
};

// ProjectDetailsModal Component
const projectExperienceData = [
  {
    title: 'AdminAccess',
    description: `AdminAccess is a comprehensive employee management solution designed for administrators, built with the MERN stack (MySQL, Express, React, Node). The application provides a secure and intuitive interface for managing organizational data. At its core, it offers robust authentication and real-time data management capabilities.
  
      Administrators can seamlessly handle employee information, department structures, and role assignments through an intuitive dashboard interface. The system features real-time updates, ensuring that all users see the most current information. To prevent accidental data loss, the application includes confirmation dialogs and comprehensive error handling.
      
      The responsive design ensures accessibility across all devices, while the modular architecture promotes code maintainability and scalability.`,
    highlights: [
      'Secure authentication system with session management',
      'Comprehensive CRUD operations for managing employees and departments with real-time updates',
      'Dynamic forms with client-side validation for adding and editing employee information',
      'Confirmation dialogs and error handling to prevent accidental data deletion',
      'Responsive dashboard interface optimized for all device sizes',
      'Efficient database queries and API endpoints for optimal performance',
      'Department organization with hierarchical structure management',
      'Real-time data synchronization across all users'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'RendezView',
    description: `RendezView is a sophisticated event planning platform that streamlines event organization for individuals, event planners, venue owners, and vendors. The application serves as a centralized hub where users can discover, create, and manage events through an intuitive interface.
  
      The platform particularly benefits newcomers to a city by providing an accessible way to explore local events and build social connections. For businesses, RendezView offers valuable opportunities to showcase their services and connect with potential clients, enhancing their visibility in the event planning market.
      
      With features like personalized dashboards, comprehensive RSVP management, and location-based services, RendezView transforms the event planning experience into an efficient and enjoyable process for all users.`,
    highlights: [
      'Secure user authentication system with session management for personalized experiences',
      'Comprehensive event management system with CRUD operations and real-time updates',
      'OpenStreetMap API integration for location services and venue mapping',
      'Dynamic RSVP system with real-time attendance tracking',
      'Personalized user dashboards for event management and tracking',
      'Flexible event creation system supporting various venue types',
      'Interactive venue mapping with location-based services',
      'Persistent data storage with efficient database management'
    ],
    technologies: [
      // Frontend
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Handlebars', icon: 'handlebars' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'Tech Blog',
    description: `Tech Blog is a full-featured content management system designed specifically for developers to share their technical insights and engage with the development community. Built using the MVC architectural pattern, this platform provides a robust environment for technical discourse and knowledge sharing.
  
      The application features comprehensive user authentication, allowing developers to maintain their own space within the community. Users can create, edit, and manage their blog posts while engaging with other developers through a commenting system. The platform supports markdown formatting for technical content, making it easy to share code snippets and technical explanations.
      
      With its focus on developer needs and clean interface design, Tech Blog serves as both a personal blog platform and a community hub for technical discussions.`,
    highlights: [
      'Full-stack CMS implementation following MVC architecture',
      'Secure user authentication system with session management',
      'Comprehensive CRUD operations for blog posts and comments',
      'Dynamic templating system using Handlebars.js',
      'RESTful API endpoints for content management',
      'Personalized dashboard for post tracking and management',
      'Interactive comment system for community engagement',
      'Efficient database queries and content organization'
    ],
    technologies: [
      // Frontend
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Handlebars', icon: 'handlebars' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'CloudShare',
    description: `CloudShare is a full-stack social platform that leverages AWS cloud services for robust content sharing and image management. Built with React and Node.js, the application demonstrates sophisticated cloud integration by utilizing AWS DynamoDB for data persistence, S3 for image storage, and EC2 for deployment.

      The platform enables users to share posts with image attachments, all seamlessly managed through AWS services. The application showcases modern cloud architecture practices with automatic image processing and storage in S3 buckets, while DynamoDB ensures efficient data management and retrieval.
      
      With its cloud-native approach and responsive design, CloudShare demonstrates the power of AWS services while maintaining an intuitive user experience.`,
    highlights: [
      'AWS cloud service integration (S3, DynamoDB, EC2)',
      'Secure image upload and storage implementation with S3',
      'NoSQL data management using DynamoDB',
      'Scalable cloud deployment via EC2',
      'Real-time content updates and image processing',
      'Efficient cloud resource management',
      'Responsive React frontend with state management',
      'RESTful API endpoints for content operations'
    ],
    technologies: [
      // Frontend
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Cloud
      { name: 'AWS', icon: 'aws' },
      { name: 'S3', icon: 's3' },
      { name: 'EC2', icon: 'ec2' },
      // Database
      { name: 'DynamoDB', icon: 'dynamodb' }
    ]
  },
  {
    title: 'ByteBoard',
    description: `ByteBoard is a robust full-stack web application built with Python and Flask, demonstrating modern web development practices in a Python environment. The application provides a platform for users to share and interact with news content through a responsive interface.

      The platform implements comprehensive user authentication and leverages SQLAlchemy for efficient database management. Using Jinja templating, it delivers dynamically rendered content while maintaining clean separation of concerns. The Gunicorn server ensures reliable production deployment.

      With its focus on Python-based web development, the application showcases the power and flexibility of Python in creating full-featured web applications.`,
    highlights: [
      'Python-based full-stack implementation using Flask',
      'Secure user authentication and session management',
      'Database integration using SQLAlchemy ORM',
      'Dynamic content rendering with Jinja templates',
      'Production deployment using Gunicorn server',
      'RESTful API endpoints for content management',
      'Interactive commenting and content voting system',
      'Efficient database queries and relationships'
    ],
    technologies: [
      // Frontend
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Jinja', icon: 'jinja' },
      // Backend
      { name: 'Python', icon: 'python' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Gunicorn', icon: 'gunicorn' },
      // Database
      { name: 'SQLAlchemy', icon: 'sqlalchemy' }
    ]
  },
  {
    title: 'FilmFinder',
    description: `FilmFinder is a sophisticated movie discovery platform that revolutionizes how users find and track their entertainment choices. The application seamlessly integrates with TMDb and Watchmode APIs to provide comprehensive movie information and streaming availability.
  
      The platform greets users with an engaging interface featuring dynamic movie carousels, simulating the experience of browsing a local movie theater. Users can explore films by genre, maintain personalized watchlists, and access detailed information about plot, ratings, and streaming options.
      
      With its focus on user experience and comprehensive movie data, FilmFinder helps users break free from their usual viewing patterns and discover new favorites across various genres and streaming platforms.`,
    highlights: [
      'Advanced search functionality with real-time results',
      'Integration with TMDb and Watchmode APIs for comprehensive movie data',
      'Persistent watchlist management using localStorage',
      'Detailed movie information pages with streaming platform availability',
      'Dynamic content loading with responsive design',
      'Dedicated genre-based browsing and filtering section',
      'Interactive movie carousels for enhanced browsing',
      'Streamlined user interface for efficient navigation'
    ],
    technologies: [
      // Frontend
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // APIs
      { name: 'TMDb API', icon: 'api' },
      { name: 'Watchmode API', icon: 'api' }
    ]
  },
];

const CategorizedTechStack = ({ technologies, projectTitle }) => {
  const categories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Bootstrap', 'Handlebars', 'Jinja'],
    'Backend': ['Node.js', 'Express', 'Python', 'Flask', 'Gunicorn'],
    'Database': ['MySQL', 'MongoDB', 'Sequelize', 'SQLAlchemy', 'DynamoDB'],
    'Cloud': ['AWS', 'S3', 'EC2'],
    'APIs': ['TMDb API', 'Watchmode API', 'OpenWeather API']
  };

  // Group technologies by category
  const groupedTech = technologies.reduce((acc, tech) => {
    for (const [category, techList] of Object.entries(categories)) {
      if (techList.includes(tech)) {
        acc[category] = acc[category] || [];
        acc[category].push(tech);
        break;
      }
    }
    return acc;
  }, {});

  return (
    <div className="tech-categories">
      {Object.entries(groupedTech).map(([category, techs]) => (
        techs.length > 0 && (
          <div key={category} className="tech-category">
            <div className="category-header">
              <div className="category-title fs-7 fw-medium border-start border-2 ps-3">
                {category}
              </div>
            </div>
            <section
              className="tech-stack"
              aria-label={`${category} technologies used in ${projectTitle}`}
            >
              <div className="visually-hidden">
                {category}: {techs.join(', ')}
              </div>
              {techs.map((tech, index) => (
                <figure
                  key={`${tech}-${index}`}
                  className="tech-badge m-0"
                  role="group"
                  aria-label={tech}
                >
                  {techIcons[tech] && (
                    <img
                      src={techIcons[tech]}
                      alt=""
                      className="tech-icon"
                      loading="eager"
                      aria-hidden="true"
                      onError={(e) => {
                        console.error('Image failed to load:', tech);
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <figcaption>{tech}</figcaption>
                </figure>
              ))}
            </section>
          </div>
        )
      ))}
    </div>
  );
};

const ProjectDetailsModal = ({ project, show, onHide }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const selectedProject = project
    ? projectExperienceData.find(p => p.title === project.title) || null
    : null;

  useEffect(() => {
    if (!show || !modalRef.current) return;

    if (project && selectedProject) {
      const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');

      bootstrap.then(({ Modal }) => {
        const modalElement = modalRef.current;
        const bsModal = new Modal(modalElement);

        if (show) {
          bsModal.show();
          // Focus the close button when modal opens
          setTimeout(() => {
            if (closeButtonRef.current) {
              closeButtonRef.current.focus();
            }
          }, 150); // Small delay to ensure modal is visible
        } else {
          bsModal.hide();
        }

        return () => {
          bsModal.dispose();
        };
      });
    }
  }, [show, project, selectedProject]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', onHide);
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', onHide);
      };
    }
  }, [onHide]);

  if (!project || !selectedProject) return null;

  // Convert technology objects to array of names for TechStack component
  const techNames = selectedProject.technologies.map(tech => tech.name);

  return (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex="-1"
      aria-labelledby="projectDetailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h3 className="gradient-text mb-0" id="projectDetailsModalLabel">
              {selectedProject.title}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close-button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <div className="modal-close-lines">
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={project.image || '/default-image.jpg'}
              alt={`Screenshot of ${selectedProject.title}`}
              className="img-fluid rounded mb-4"
            />

            {/* Detailed Description */}
            <div className="mb-med">
              <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                Project Description
                <hr className="flex-grow-1 my-0" />
              </h4>
              <p className="project-description">{selectedProject.description}</p>
            </div>

            {/* Development Highlights */}
            {selectedProject.highlights && (
              <div className="mb-med">
                <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                  Development Highlights
                  <hr className="flex-grow-1 my-0" />
                </h4>
                <ul className="project-experience-highlights">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div className="project-experience-tech mb-3">
              <h4 className="d-flex align-items-center gap-3 fs-7 fw-medium mb-3">
                Technologies Used
                <hr className="flex-grow-1 my-0" />
              </h4>
              <CategorizedTechStack
                technologies={techNames}
                projectTitle={selectedProject.title}
              />
            </div>
          </div>

          {/* <div className="modal-footer border-top-0 project-links">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
              aria-label={`Visit ${project.title} website (opens in new tab)`}
              title={`View ${project.title} live site`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              <span>View Site</span>
              <span className="visually-hidden">(opens in new tab)</span>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              title={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} aria-hidden="true" />
              <span>View Code</span>
              <span className="visually-hidden">(opens in new tab)</span>
            </a>
          </div> */}
                    <div className="modal-footer border-top-0 project-links">
            {!project.deployedLink ? (
              <span
                className="project-link demo-link project-link-disabled"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                aria-disabled="true"
              >
                <ExternalLink size={18} aria-hidden="true" />
                <span>View Site</span>
                <span className="visually-hidden">(Not currently deployed)</span>
                {showTooltip && (
                  <div className="tooltip-custom" style={{ left: '50%' }}>
                    Live deployment not available
                  </div>
                )}
              </span>
            ) : (
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo-link"
                aria-label={`Visit ${project.title} website (opens in new tab)`}
                title={`View ${project.title} live site`}
              >
                <ExternalLink size={18} aria-hidden="true" />
                <span>View Site</span>
                <span className="visually-hidden">(opens in new tab)</span>
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              title={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} aria-hidden="true" />
              <span>View Code</span>
              <span className="visually-hidden">(opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project data array remains the same
const projectsData = [
  {
    title: 'AdminAccess',
    image: '/images/adminaccess.webp',
    deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/AdminAccess',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MySQL'],
    description: 'A secure employee management system featuring real-time updates while streamlining staff, department, and role organization through an intuitive interface.'
  },
  {
    title: 'RendezView',
    image: '/images/rendezview.webp',
    deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/RendezView',
    technologies: ['JavaScript', 'Handlebars', 'Node.js', 'Express', 'MySQL'],
    description: 'A community-focused event platform that brings people together through local event discovery, personalized dashboards, and seamless RSVP management.'
  },
  {
    title: 'Tech Blog',
    image: '/images/tech-blog-cms.webp',
    deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/tech-blog',
    technologies: ['JavaScript', 'Handlebars', 'Node.js', 'Express', 'MySQL'],
    description: 'A full-stack CMS blog platform built with MVC architecture, featuring user authentication, commenting system, and post management capabilities.'
  },
  {
    title: 'CloudShare',
    image: '/images/cloudshare.webp',
    deployedLink: '',
    githubLink: 'https://github.com/kyoriku/aws-thought',
    technologies: ['JavaScript', 'React', 'Node.js', 'AWS', 'DynamoDB'],
    description: 'A full-stack application leveraging AWS cloud services for content sharing and image management, utilizing S3 for storage and DynamoDB for data persistence.'
  },
  {
    title: 'ByteBoard',
    image: '/images/byteboard.webp',
    deployedLink: 'https://byteboard-4e8a416dbfc1.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/python-newsfeed',
    technologies: ['JavaScript', 'Python', 'Flask', 'Jinja', 'SQLAlchemy'],
    description: 'A Python-based web application built with Flask and SQLAlchemy that enables users to create and interact with content through an authenticated platform.'
  },
  {
    title: 'FilmFinder',
    image: '/images/filmfinder.webp',
    deployedLink: 'https://kyoriku.github.io/FilmFinder/',
    githubLink: 'https://github.com/kyoriku/FilmFinder',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
    description: 'A movie discovery platform integrating TMDb and Watchmode APIs to help users find films, access streaming information, and maintain personal watchlists.'
  }
];

// Structured data for SEO purposes
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Collection",
  "name": "Austin Graham's Portfolio Projects",
  "description": "Collection of full-stack web development projects",
  "itemListElement": projectsData.map((project, index) => ({
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": project.description,
    "programmingLanguage": project.technologies,
    "codeRepository": project.githubLink,
    "url": project.deployedLink,
    "image": `https://austingraham.ca${project.image}`,
    "position": index + 1
  }))
};

// Animation configuration
const animationConfig = {
  heading: {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
};

// ProjectGrid Component
const ProjectGrid = ({ animations, onViewDetails }) => (
  <motion.div
    className="row g-4"
    variants={animations.container}
    role="list"
    aria-label="Portfolio projects"
  >
    {projectsData.map((project, index) => (
      <motion.div
        key={project.title}
        className="col-md-6 col-lg-4"
        variants={animations.item}
        role="listitem"
        aria-label={`${project.title} project card`}
      >
        <Project {...project} onViewDetails={onViewDetails} />
      </motion.div>
    ))}
  </motion.div>
);

// Main Portfolio Component
const Portfolio = () => {
  const animations = useReducedMotion() ? {} : animationConfig;
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [lastFocusedElement, setLastFocusedElement] = useState(null);

  const handleViewDetails = (project) => {
    setLastFocusedElement(document.activeElement);
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    if (lastFocusedElement) {
      setTimeout(() => {
        lastFocusedElement.focus();
      }, 0);
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Austin Graham - Full Stack Developer</title>
        <meta
          name="description"
          content="Browse full-stack web development projects showcasing expertise in React, Node.js, Express, MySQL, and MongoDB. Interactive demos and code available for each project."
        />
        <link rel="canonical" href="https://austingraham.ca/projects" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austingraham.ca/projects" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Austin Graham" />
        <meta property="og:title" content="Projects | Austin Graham - Full Stack Developer" />
        <meta
          property="og:description"
          content="Browse full-stack web development projects showcasing expertise in React, Node.js, Express, MySQL, and MongoDB. Interactive demos and code available for each project."
        />
        <meta property="og:image" content="https://austingraham.ca/screenshots/projects.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://austingraham.ca/projects" />
        <meta property="twitter:title" content="Projects | Austin Graham - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Browse full-stack web development projects showcasing expertise in React, Node.js, Express, MySQL, and MongoDB. Interactive demos and code available for each project."
        />
        <meta property="twitter:image" content="https://austingraham.ca/screenshots/projects.jpg" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <motion.section
        className="portfolio-section"
        initial="hidden"
        animate="visible"
        aria-labelledby="portfolio-heading"
        variants={animations}
      >
        <div className="container spacing pt-0">
          <header>
            <motion.h1
              className="text-start gradient-text my-0 mt-4"
              variants={animations?.heading || {}}
              id="portfolio-heading"
            >
              Projects
            </motion.h1>
            <hr className="skill-divider" aria-hidden="true" />
          </header>

          <ProjectGrid
            animations={animations}
            onViewDetails={handleViewDetails}
          />
        </div>

        <ProjectDetailsModal
          show={showModal}
          onHide={handleCloseModal}
          project={selectedProject}
        />

        <a
          href="#back-to-nav"
          className="back-to-top skip-link"
          aria-label="Back to top and return to navigation"
        >
          Back to top
          <span className="visually-hidden">(Press Enter to return to navigation)</span>
        </a>
      </motion.section>
    </>
  );
};

export default Portfolio;