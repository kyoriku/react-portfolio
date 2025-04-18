import { Terminal, Database, Layout, GitBranch } from 'lucide-react';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const techStack = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB'
];

export const socialLinks = [
  {
    href: "https://github.com/kyoriku",
    icon: faGithub,
    label: "Visit my GitHub profile"
  },
  {
    href: "https://linkedin.com/in/austingraham1",
    icon: faLinkedin,
    label: "Connect with me on LinkedIn"
  },
  {
    href: "https://www.youtube.com/@arcaneviva",
    icon: faYoutube,
    label: "Subscribe to my YouTube channel"
  },
  {
    href: "mailto:hello@austingraham.ca",
    icon: faEnvelope,
    label: "Send me an email"
  }
];

export const expertiseData = [
  {
    title: "Frontend Development",
    description: "React, JavaScript, Responsive Design, UI/UX Best Practices",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, RESTful APIs, Authentication Systems",
    icon: Terminal,
  },
  {
    title: "Database Management",
    description: "MySQL, MongoDB, Redis, Efficient Data Modeling",
    icon: Database,
  },
  {
    title: "Development Practices",
    description: "Agile Methodologies, Version Control, CI/CD, Code Review",
    icon: GitBranch,
  }
];