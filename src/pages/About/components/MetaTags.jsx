import { Helmet } from 'react-helmet';

export const MetaTags = () => (
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
);

