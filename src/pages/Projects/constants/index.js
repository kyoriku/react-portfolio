export const projectsData = [
  {
    title: 'StackNova',
    image: '/images/stacknova.webp',
    deployedLink: 'https://stacknova.ca',
    githubLink: 'https://github.com/kyoriku/stacknova',
    technologies: ['React', 'React Query', 'Node.js', 'MySQL', 'Redis'],
    description: 'A full-stack Q&A platform where developers can ask questions, share knowledge, and engage in technical discussions with support for code formatting and syntax highlighting.'
  },
  {
    title: 'AdminAccess',
    image: '/images/adminaccess.webp',
    deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/AdminAccess',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
    description: 'A full-stack MERN application that provides administrators with a secure and intuitive platform for managing employee data, roles, and departments.'
  },
  {
    title: 'RendezView',
    image: '/images/rendezview.webp',
    deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/RendezView',
    technologies: [ 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'A full-stack event planning platform built with MVC architecture, featuring event creation, RSVP functionality, and personalized dashboards.'
  },
  // {
  //   title: 'Tech Blog',
  //   image: '/images/mvc-tech-blog.webp',
  //   deployedLink: 'https://techblogcms-1e5c1470e624.herokuapp.com/',
  //   githubLink: 'https://github.com/kyoriku/mvc-tech-blog',
  //   technologies: ['JavaScript', 'Handlebars', 'Node.js', 'Express', 'MySQL'],
  //   description: 'A full-stack blog application built with MVC architecture, featuring user authentication, commenting system, and post management capabilities.'
  // },
  // {
  //   title: 'CloudShare',
  //   image: '/images/cloudshare.webp',
  //   deployedLink: '',
  //   githubLink: 'https://github.com/kyoriku/CloudShare',
  //   technologies: ['React', 'Node.js', 'EC2', 'S3', 'DynamoDB'],
  //   description: 'A full-stack application leveraging AWS cloud services for content sharing and image management, utilizing S3 for storage and DynamoDB for data persistence.'
  // },
  // {
  //   title: 'PythonPress',
  //   image: '/images/pythonpress.webp',
  //   deployedLink: 'https://pythonpress-64ffcf772c54.herokuapp.com/',
  //   githubLink: 'https://github.com/kyoriku/PythonPress',
  //   technologies: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'Jinja'],
  //   description: 'A full-stack web application built with Python and Flask that enables users to create, share, and interact with news content in a social platform format.'
  // },
  // {
  //   title: 'FilmFinder',
  //   image: '/images/filmfinder.webp',
  //   deployedLink: 'https://kyoriku.github.io/FilmFinder/',
  //   githubLink: 'https://github.com/kyoriku/FilmFinder',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
  //   description: 'A movie discovery platform integrating TMDb and Watchmode APIs to help users find films, access streaming information, and maintain personal watchlists.'
  // }
];

export const projectExperienceData = [
  {
    title: 'StackNova',
    description: `StackNova is a software engineer Q&A platform where developers can ask questions, share knowledge, and engage in technical discussions. Built with React and Node.js, the application features a clean, responsive interface with comprehensive Markdown support for code formatting and syntax highlighting.

    The platform implements secure user authentication with HTTP-only cookies and protected routes, ensuring that user data and content remain secure. With advanced search capabilities and real-time updates, users can easily find relevant technical information and participate in ongoing discussions.
    
    StackNova's intuitive dashboard interface allows users to track their questions, manage their content, and view their activity history through a comprehensive profile system. The application demonstrates best practices in modern web development with its focus on performance, security, and user experience.`,
    highlights: [
      'Secure authentication system with HTTP-only cookies and protected routes',
      'Full Markdown support with code syntax highlighting via prism-react-renderer',
      'Server-side caching with Redis resulting in 74% faster query times',
      'Client-side optimizations with React Query for efficient data fetching',
      'Responsive UI with light/dark mode powered by Tailwind CSS',
      'Input validation and sanitization to prevent XSS attacks',
      'RESTful API architecture with efficient indexing and query optimization',
      'Comprehensive user profiles with activity tracking and statistics'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind css' },
      { name: 'React Query', icon: 'react-query' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' },
      { name: 'Redis', icon: 'redis' }
    ]
  },
  {
    title: 'AdminAccess',
    description: `AdminAccess is a comprehensive employee management solution designed for administrators, built with the MERN stack (MySQL, Express, React, Node). The application provides a secure and intuitive interface for managing organizational data. At its core, it offers robust authentication and real-time data management capabilities.
  
      Administrators can seamlessly handle employee information, department structures, and role assignments through an intuitive dashboard interface. The system features real-time updates, ensuring that all users see the most current information. To prevent accidental data loss, the application includes confirmation dialogs and comprehensive error handling.
      
      The responsive design ensures accessibility across all devices, while the modular architecture promotes code maintainability and scalability.`,
    highlights: [
      'Secure authentication system with session management',
      'Comprehensive CRUD operations for managing employees and departments with real-time updates',
      'Dynamic forms with client-side validation for adding and editing employee information',
      'Confirmation dialogs and error handling to prevent accidental data deletion',
      'Responsive dashboard interface optimized for all device sizes',
      'Efficient database queries and API endpoints for optimal performance',
      'Department organization with hierarchical structure management',
      'Real-time data synchronization across all users'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'RendezView',
    description: `RendezView is a sophisticated event planning platform that streamlines event organization for individuals, event planners, venue owners, and vendors. The application serves as a centralized hub where users can discover, create, and manage events through an intuitive interface.
  
      The platform particularly benefits newcomers to a city by providing an accessible way to explore local events and build social connections. For businesses, RendezView offers valuable opportunities to showcase their services and connect with potential clients, enhancing their visibility in the event planning market.
      
      With features like personalized dashboards, comprehensive RSVP management, and location-based services, RendezView transforms the event planning experience into an efficient and enjoyable process for all users.`,
    highlights: [
      'Secure user authentication system with session management for personalized experiences',
      'Comprehensive event management system with CRUD operations and real-time updates',
      'OpenStreetMap API integration for location services and venue mapping',
      'Dynamic RSVP system with real-time attendance tracking',
      'Personalized user dashboards for event management and tracking',
      'Flexible event creation system supporting various venue types',
      'Interactive venue mapping with location-based services',
      'Persistent data storage with efficient database management'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Handlebars', icon: 'handlebars' },
      { name: 'CSS', icon: 'css3' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Database
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  // {
  //   title: 'Tech Blog',
  //   description: `Tech Blog is a full-featured content management system designed specifically for developers to share their technical insights and engage with the development community. Built using the MVC architectural pattern, this platform provides a robust environment for technical discourse and knowledge sharing.

  //     The application features comprehensive user authentication, allowing developers to maintain their own space within the community. Users can create, edit, and manage their blog posts while engaging with other developers through a commenting system. The platform supports markdown formatting for technical content, making it easy to share code snippets and technical explanations.

  //     With its focus on developer needs and clean interface design, Tech Blog serves as both a personal blog platform and a community hub for technical discussions.`,
  //   highlights: [
  //     'Full-stack CMS implementation following MVC architecture',
  //     'Secure user authentication system with session management',
  //     'Comprehensive CRUD operations for blog posts and comments',
  //     'Dynamic templating system using Handlebars.js',
  //     'RESTful API endpoints for content management',
  //     'Personalized dashboard for post tracking and management',
  //     'Interactive comment system for community engagement',
  //     'Efficient database queries and content organization'
  //   ],
  //   technologies: [
  //     // Frontend
  //     { name: 'JavaScript', icon: 'javascript' },
  //     { name: 'Handlebars', icon: 'handlebars' },
  //     { name: 'CSS', icon: 'css3' },
  //     { name: 'Bootstrap', icon: 'bootstrap' },
  //     // Backend
  //     { name: 'Node.js', icon: 'nodejs' },
  //     { name: 'Express', icon: 'express' },
  //     // Database
  //     { name: 'MySQL', icon: 'mysql' },
  //     { name: 'Sequelize', icon: 'sequelize' }
  //   ]
  // },
  {
    title: 'CloudShare',
    description: `CloudShare is a full-stack social platform that leverages AWS cloud services for robust content sharing and image management. Built with React and Node.js, the application demonstrates sophisticated cloud integration by utilizing AWS DynamoDB for data persistence, S3 for image storage, and EC2 for deployment.

      The platform enables users to share posts with image attachments, all seamlessly managed through AWS services. The application showcases modern cloud architecture practices with automatic image processing and storage in S3 buckets, while DynamoDB ensures efficient data management and retrieval.
      
      With its cloud-native approach and responsive design, CloudShare demonstrates the power of AWS services while maintaining an intuitive user experience.`,
    highlights: [
      'AWS cloud service integration (S3, DynamoDB, EC2)',
      'Secure image upload and storage implementation with S3',
      'NoSQL data management using DynamoDB',
      'Scalable cloud deployment via EC2',
      'Real-time content updates and image processing',
      'Efficient cloud resource management',
      'Responsive React frontend with state management',
      'RESTful API endpoints for content operations'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // Backend
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      // Cloud
      { name: 'AWS', icon: 'aws' },
      { name: 'EC2', icon: 'ec2' },
      { name: 'S3', icon: 's3' },
      { name: 'DynamoDB', icon: 'dynamodb' },
    ]
  },
  {
    title: 'PythonPress',
    description: `PythonPress is a robust full-stack web application built with Python and Flask, demonstrating modern web development practices in a Python environment. The application provides a platform for users to share and interact with news content through a responsive interface.

      The platform implements comprehensive user authentication and leverages SQLAlchemy for efficient database management. Using Jinja templating, it delivers dynamically rendered content while maintaining clean separation of concerns. The Gunicorn server ensures reliable production deployment.

      With its focus on Python-based web development, the application showcases the power and flexibility of Python in creating full-featured web applications.`,
    highlights: [
      'Python-based full-stack implementation using Flask',
      'Secure user authentication and session management',
      'Database integration using SQLAlchemy ORM',
      'Dynamic content rendering with Jinja templates',
      'Production deployment using Gunicorn server',
      'RESTful API endpoints for content management',
      'Interactive commenting and content voting system',
      'Efficient database queries and relationships'
    ],
    technologies: [
      // Frontend
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'CSS', icon: 'css3' },
      { name: 'Jinja', icon: 'jinja' },
      // Backend
      { name: 'Python', icon: 'python' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Gunicorn', icon: 'gunicorn' },
      // Database
      { name: 'SQLAlchemy', icon: 'sqlalchemy' }
    ]
  },
  {
    title: 'FilmFinder',
    description: `FilmFinder is a sophisticated movie discovery platform that revolutionizes how users find and track their entertainment choices. The application seamlessly integrates with TMDb and Watchmode APIs to provide comprehensive movie information and streaming availability.
  
      The platform greets users with an engaging interface featuring dynamic movie carousels, simulating the experience of browsing a local movie theater. Users can explore films by genre, maintain personalized watchlists, and access detailed information about plot, ratings, and streaming options.
      
      With its focus on user experience and comprehensive movie data, FilmFinder helps users break free from their usual viewing patterns and discover new favorites across various genres and streaming platforms.`,
    highlights: [
      'Advanced search functionality with real-time results',
      'Integration with TMDb and Watchmode APIs for comprehensive movie data',
      'Persistent watchlist management using localStorage',
      'Detailed movie information pages with streaming platform availability',
      'Dynamic content loading with responsive design',
      'Dedicated genre-based browsing and filtering section',
      'Interactive movie carousels for enhanced browsing',
      'Streamlined user interface for efficient navigation'
    ],
    technologies: [
      // Frontend
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      // APIs
      { name: 'TMDb API', icon: 'api' },
      { name: 'Watchmode API', icon: 'api' }
    ]
  },
];