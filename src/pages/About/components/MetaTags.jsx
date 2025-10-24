import { Helmet } from 'react-helmet';
import { projectsData } from '../../projects/constants/index.js';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Collection",
  "name": "Austin Graham's Software Engineering Portfolio",
  "description": "Collection of full stack web applications showcasing software engineering expertise",
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
    <title>Austin Graham - Software Engineer</title>
    <meta
      name="description"
      content="Software Engineer based in Toronto, specializing in full stack web development. Building secure, scalable applications with React, Node.js, and efficient database architecture. Delivering solutions that transform ideas into impactful digital experiences."
    />
    <meta
      name="keywords"
      content="Software Engineer, Full Stack Engineer, Web Developer, JavaScript, React, Node.js, Express, MySQL, MongoDB, Python, SQL, Toronto Developer, Web Application Development, Responsive Design, Accessible Web Design, Front-end Development, Back-end Development, API Development, Database Design, HTML5, CSS3, Agile Development, REST APIs, AWS, Sequelize, Git, DevOps, Tailwind CSS, Bootstrap, Cloud Computing, Authentication Systems, UX/UI, Performance Optimization"
    />
    <link rel="canonical" href="https://austingraham.ca" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://austingraham.ca" />
    <meta property="og:locale" content="en_CA" />
    <meta property="og:site_name" content="Austin Graham" />
    <meta property="og:title" content="Austin Graham - Software Engineer" />
    <meta
      property="og:description"
      content="Software Engineer based in Toronto, specializing in full stack web development. Building secure, scalable applications with React, Node.js, and efficient database architecture. Delivering solutions that transform ideas into impactful digital experiences."
    />
    <meta property="og:image" content="https://austingraham.ca/screenshots/about.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://austingraham.ca" />
    <meta property="twitter:title" content="Austin Graham - Software Engineer" />
    <meta
      property="twitter:description"
      content="Software Engineer based in Toronto, specializing in full stack web development. Building secure, scalable applications with React, Node.js, and efficient database architecture. Delivering solutions that transform ideas into impactful digital experiences."
    />
    <meta property="twitter:image" content="https://austingraham.ca/screenshots/about.jpg" />
        <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  </Helmet>
);