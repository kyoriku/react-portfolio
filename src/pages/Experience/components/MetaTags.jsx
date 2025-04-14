import { Helmet } from 'react-helmet';

export const MetaTags = () => (
  <Helmet>
    <title>Experience | Austin Graham - Software Engineer</title>
    <meta
      name="description"
      content="Browse my technical expertise in software engineering, featuring React, Node.js, and efficient database architecture. View my complete resume highlighting full stack development experience with a focus on building secure, scalable applications."
    />
    <link rel="canonical" href="https://austingraham.ca/experience" />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://austingraham.ca/experience" />
    <meta property="og:locale" content="en_CA" />
    <meta property="og:site_name" content="Austin Graham" />
    <meta property="og:title" content="Experience | Austin Graham - Software Engineer" />
    <meta
      property="og:description"
      content="Browse my technical expertise in software engineering, featuring React, Node.js, and efficient database architecture. View my complete resume highlighting full stack development experience with a focus on building secure, scalable applications."
    />
    <meta property="og:image" content="https://austingraham.ca/screenshots/experience.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://austingraham.ca/experience" />
    <meta property="twitter:title" content="Experience | Austin Graham - Software Engineer" />
    <meta
      property="twitter:description"
      content="Browse my technical expertise in software engineering, featuring React, Node.js, and efficient database architecture. View my complete resume highlighting full stack development experience with a focus on building secure, scalable applications."
    />
    <meta property="twitter:image" content="https://austingraham.ca/screenshots/experience.jpg" />
  </Helmet>
);