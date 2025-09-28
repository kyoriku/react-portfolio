import { Terminal, Database, Layout, GitBranch, Cog } from 'lucide-react';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const techStack = [
  'JavaScript',
  'Python',
  'React',
  'Node.js',
  'MySQL',
  'MongoDB',
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
  // {
  //   href: "https://www.youtube.com/@arcaneviva",
  //   icon: faYoutube,
  //   label: "Subscribe to my YouTube channel"
  // },
  {
    href: "mailto:hello@austingraham.ca",
    icon: faEnvelope,
    label: "Send me an email"
  }
];

export const expertiseData = [
  {
    title: "Frontend Development",
    description: "React, JavaScript, Tailwind CSS, Responsive Design, Performance Optimization",
    icon: Layout,
  },
  {
    title: "Backend Development", 
    description: "Node.js, Express, RESTful APIs, Authentication, Caching Strategies",
    icon: Terminal,
  },
  {
    title: "Business Automation",
    description: "Python, API Integration, Email Processing, Workflow Automation, CLI Tools",
    icon: Cog,
  },
  {
    title: "Database & Systems",
    description: "MySQL, MongoDB, Redis, Embedded Systems, Shell Scripting",
    icon: Database,
  }
];