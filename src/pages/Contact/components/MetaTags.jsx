import { Helmet } from 'react-helmet';

export const MetaTags = () => (
  <Helmet>
    <title>Contact | Austin Graham - Full Stack Developer</title>
    <meta
      name="description"
      content="Get in touch with Austin Graham, a Toronto-based Full Stack Developer. Available for web development projects, collaborations, and opportunities."
    />
    <link rel="canonical" href="https://austingraham.ca/contact" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://austingraham.ca/contact" />
    <meta property="og:locale" content="en_CA" />
    <meta property="og:site_name" content="Austin Graham" />
    <meta property="og:title" content="Contact | Austin Graham - Full Stack Developer" />
    <meta
      property="og:description"
      content="Get in touch with Austin Graham, a Toronto-based Full Stack Developer. Available for web development projects, collaborations, and opportunities."
    />
    <meta property="og:image" content="https://austingraham.ca/screenshots/contact.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://austingraham.ca/contact" />
    <meta property="twitter:title" content="Contact | Austin Graham - Full Stack Developer" />
    <meta
      property="twitter:description"
      content="Get in touch with Austin Graham, a Toronto-based Full Stack Developer. Available for web development projects, collaborations, and opportunities."
    />
    <meta property="twitter:image" content="https://austingraham.ca/screenshots/contact.jpg" />
  </Helmet>
);