import { Helmet } from 'react-helmet';

export const MetaTags = () => (
  <Helmet>
    <title>Experience | Austin Graham - Full Stack Developer</title>
    <meta
      name="description"
      content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
    />
    <link rel="canonical" href="https://austingraham.ca/experience" />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://austingraham.ca/experience" />
    <meta property="og:locale" content="en_CA" />
    <meta property="og:site_name" content="Austin Graham" />
    <meta property="og:title" content="Experience | Austin Graham - Full Stack Developer" />
    <meta
      property="og:description"
      content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
    />
    <meta property="og:image" content="https://austingraham.ca/screenshots/experience.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://austingraham.ca/experience" />
    <meta property="twitter:title" content="Experience | Austin Graham - Full Stack Developer" />
    <meta
      property="twitter:description"
      content="Browse my technical skillset in front-end and back-end development, featuring React, Node.js, and modern web technologies. View my complete resume showcasing full-stack development experience."
    />
    <meta property="twitter:image" content="https://austingraham.ca/screenshots/experience.jpg" />
  </Helmet>
);