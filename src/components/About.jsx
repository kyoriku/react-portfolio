import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Terminal, Database, Layout, GitBranch } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const animationConfig = {
  // Stack icons animation
  stackIcon: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  },

  // Container for staggered items
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut"
      }
    }
  },

  // Profile image animation
  profileImage: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    }
  },

  // Biography animation
  biography: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.215, 0.610, 0.355, 1.000],
        staggerChildren: 0.05
      }
    }
  },

  // Biography text animation
  biographyText: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  },

  // Expertise cards animation
  expertiseCard: {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    }),
    whileHover: {
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  },

  // Section variants
  section: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
        duration: 0.2
      }
    }
  }
};

const StackIcons = ({ animations }) => (
  <motion.ul
    className="stack-icons-gap d-flex align-items-center ms-auto list-unstyled mb-0"
    aria-label="Technical Stack"
    role="list"
    initial="hidden"
    animate="visible"
    variants={animations?.staggerContainer}
  >
    {['React', 'Node.js', 'Express', 'MySQL', 'MongoDB'].map((tech) => (
      <motion.li
        key={tech}
        variants={animations?.stackIcon}
        className="d-flex align-items-center"
      >
        <span className="visually-hidden">{tech}</span>
        <img
          src={`/icons/${tech.toLowerCase().replace('.', '')}.webp`}
          alt=""
          className="stack-icon"
          width="32"
          height="32"
          aria-hidden="true"
        />
      </motion.li>
    ))}
  </motion.ul>
);

const SocialLink = ({ animations }) => {
  const socialLinks = [
    { href: "https://github.com/kyoriku", icon: faGithub, label: "Visit my GitHub profile" },
    { href: "https://linkedin.com/in/austingraham1", icon: faLinkedin, label: "Connect with me on LinkedIn" },
    { href: "mailto:contact@austingraham.ca", icon: faEnvelope, label: "Send me an email" }
  ];

  return (
    <motion.nav
      className="social-links-about"
      aria-label="Social media links"
      initial="hidden"
      animate="visible"
      variants={animations?.staggerContainer}
    >
      <motion.ul
        className="list-unstyled d-flex align-items-center gap-3 mb-0"
        variants={animations?.staggerContainer}
      >
        {socialLinks.map((link) => (
          <motion.li
            key={link.href}
            variants={animations?.stackIcon}
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
      </motion.ul>
    </motion.nav>
  );
};

const ProfileImage = ({ animations }) => (
  <aside className="col-lg-4 px-0" role="complementary" aria-labelledby="profile-heading">
    <h2 id="profile-heading" className="visually-hidden">Profile Information</h2>
    <div className="profile-wrapper">
      <motion.figure
        initial="hidden"
        animate="visible"
        variants={animations?.profileImage}
        className="profile-image-container mb-4"
      >
        <img
          src="/images/armoredcore.webp"
          alt="Austin Graham"
          className="about-image"
          width="280"
          height="280"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <figcaption className="visually-hidden">
          Profile photo of Austin Graham, Full Stack Developer
        </figcaption>
      </motion.figure>

      <div className="text-center">
        <div className="profile-social mb-3">
          <h3 className="h5 text-start">Contact & Connect</h3>
          <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
          <SocialLink animations={animations} />
        </div>

        <div className="technical-stack-section mt-3 d-none d-lg-block">
          <h3 className="h5 text-start">Technical Stack</h3>
          <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
          <StackIcons animations={animations} />
        </div>
      </div>
    </div>
  </aside>
);

const BiographyText = ({ children, animations, className = "mb-4" }) => (
  <motion.p
    variants={animations?.biographyText}
    className={className}
  >
    {children}
  </motion.p>
);

const Biography = ({ animations }) => (
  <div className="col-lg-8 px-0">
    <motion.article
      initial="hidden"
      animate="visible"
      variants={animations?.biography}
      className="content-card h-100"
    >
      <header>
        <motion.h1 variants={animations?.biographyText} id="about-heading" className="mt-0 mb-0">
          Austin Graham
        </motion.h1>
        <motion.p variants={animations?.biographyText} className="card-subtitle h2 mb-3">
          Full Stack Developer
        </motion.p>

        <motion.div variants={animations?.biographyText}>
          <address className="location d-inline-flex align-items-center">
            <MapPin size={20} className="location-icon" aria-hidden="true" />
            <span>Toronto, Canada</span>
          </address>
        </motion.div>
      </header>
      <div className="bio">
        <div className="card-text">
          <BiographyText animations={animations}>
            With expertise in the MERN stack, I transform complex challenges into elegant web solutions. My experience collaborating in development teams has strengthened my ability to build secure, scalable applications. I combine technical excellence with a drive to create applications that deliver measurable business impact.
          </BiographyText>
          <BiographyText animations={animations}>
            I specialize in implementing robust authentication systems, optimizing database performance, and creating intuitive user experiences. Through employee management systems and event planning platforms, I've demonstrated the ability to develop comprehensive solutions that improve efficiency and user satisfaction.
          </BiographyText>
          <BiographyText animations={animations} className="mb-0">
            My background in high-pressure hospitality environments has developed my customer-first mindset and ability to thrive in fast-paced settings. This unique perspective helps me bridge the gap between technical capabilities and practical business needs, creating solutions that enhance productivity and streamline processes.
          </BiographyText>
        </div>
      </div>
    </motion.article>
    <div className="d-lg-none bio-mobile-sections">
      <h2 className="visually-hidden">Additional Information</h2>
      <div className="technical-stack-section mt-3">
        <h3 className="h5 text-start">Technical Stack</h3>
        <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
        <StackIcons animations={animations} />
      </div>
    </div>
  </div>
);

const ExpertiseCard = ({ title, description, icon: Icon, index, animations }) => (
  <motion.div
    className="col-md-6 col-lg-3 mb-3"
    initial="hidden"
    whileInView="visible"
    custom={index}
    variants={animations?.expertiseCard}
  >
    <article className="content-card h-100">
      <header className="d-flex flex-column align-items-center text-center">
        <div className="expertise-icon mb-4" aria-hidden="true">
          <Icon size={28} className="text-accent" />
        </div>
        <h3 className="card-subtitle h5 mb-3">{title}</h3>
      </header>
      <div className="card-content text-center">
        <p className="card-text mb-0">{description}</p>
      </div>
    </article>
  </motion.div>
);

const About = () => {
  const animations = useReducedMotion() ? {} : animationConfig;

  return (
    <>
      <Helmet>
        <title>Austin Graham - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Web Developer, Software Engineer, JavaScript, React, Node.js, Express, MySQL, MongoDB, Python, SQL, Toronto Developer, Web Application Development, Responsive Design, Accessible Web Design, Front-end Development, Back-end Development, API Development, Database Design, HTML5, CSS3, Agile Development, MERN Stack, REST APIs, AWS, Sequelize, Mongoose, Bootstrap, Tailwind CSS, Scrum, Secure Web Applications, Scalable Applications, User-Centered Design, Git, Vite, DevOps"
        />
        <link rel="canonical" href="https://austingraham.ca" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austingraham.ca" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Austin Graham" />
        <meta property="og:title" content="Austin Graham - Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta property="og:image" content="https://austingraham.ca/screenshots/about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://austingraham.ca" />
        <meta property="twitter:title" content="Austin Graham - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Full Stack Developer based in Toronto, creating secure, scalable web applications with React, Node.js, Express, MySQL, and MongoDB. Delivering accessible, responsive solutions through clean, user-centred design. View my projects and get in touch."
        />
        <meta property="twitter:image" content="https://austingraham.ca/screenshots/about.jpg" />
      </Helmet>

      <section
        className="container"
        aria-labelledby="about-heading"
      >
        <motion.div
          className="about-section container py-5"
          initial="hidden"
          animate="visible"
          variants={animations?.section}
        >
          <motion.div
            className="row align-items-start"
            variants={animations?.section}
          >
            <ProfileImage animations={animations} />
            <Biography animations={animations} />
          </motion.div>
        </motion.div>
      </section>

      <section
        className="expertise-section mb-5"
        aria-labelledby="expertise-heading"
      >
        <div className="container">
          <header className="">
            <h2 id="expertise-heading" className="gradient-text expertise-heading my-0">Technical Specializations</h2>
            <hr className="skill-divider" aria-hidden="true" />
            <p className="mx-auto">
              Building scalable, secure, and user-centric web solutions using modern technologies and industry-standard development practices.
            </p>
          </header>

          <motion.div
            className="row"
            initial="hidden"
            animate="visible"
            variants={animations?.section}
          >
            <ExpertiseCard
              title="Frontend Development"
              description="React, JavaScript (ES6+), Responsive Design, UI/UX Best Practices"
              icon={Layout}
              index={0}
              animations={animations}
            />
            <ExpertiseCard
              title="Backend Development"
              description="Node.js, Express, RESTful APIs, Database Design"
              icon={Terminal}
              index={1}
              animations={animations}
            />
            <ExpertiseCard
              title="Database Management"
              description="MongoDB, MySQL, Sequelize ORM, Data Modeling"
              icon={Database}
              index={2}
              animations={animations}
            />
            <ExpertiseCard
              title="Development Practices"
              description="Agile Methodologies, Version Control, CI/CD, Code Review"
              icon={GitBranch}
              index={3}
              animations={animations}
            />
          </motion.div>
        </div>

        {/* Back to top navigation link */}
        <a
          href="#back-to-nav"
          className="back-to-top skip-link"
          aria-label="Back to top and return to navigation"
        >
          Back to top
          <span className="visually-hidden"> (Press Enter to return to navigation)</span>
        </a>
      </section>
    </>
  );
};

export default About;