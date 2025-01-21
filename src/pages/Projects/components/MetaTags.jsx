import { Helmet } from 'react-helmet';
import { projectsData } from '../constants';

// Structured data for SEO
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

export const MetaTags = () => (
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
);