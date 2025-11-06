import { Terminal, Database, Layout, GitBranch, Cog } from 'lucide-react';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const techStack = [
  'React',
  'JavaScript',
  'Node.js',
  'MySQL',
  'Python'
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
    href: "mailto:hello@austingraham.ca",
    icon: faEnvelope,
    label: "Send me an email"
  }
];

export const expertiseData = [
  {
    title: "Frontend",
    description: "React, JavaScript, Tailwind CSS, Responsive Design",
    icon: Layout,
  },
  {
    title: "Backend",
    description: "Node.js, Express, RESTful APIs, Authentication, Redis Caching",
    icon: Terminal,
  },
    {
    title: "Database",
    description: "MySQL, MongoDB, Redis",
    icon: Database,
  },
  {
    title: "Automation",
    description: "Python, API Integration, Email Processing, CLI Tools",
    icon: Cog,
  }
];