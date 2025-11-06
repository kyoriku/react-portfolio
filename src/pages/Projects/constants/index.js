export const projectsData = [
  {
    title: 'StackNova',
    image: '/images/stacknova.webp',
    deployedLink: 'https://stacknova.ca',
    githubLink: 'https://github.com/kyoriku/stack-nova',
    technologies: ['React', 'React Query', 'Node.js', 'MySQL', 'Redis'],
    description: 'A Q&A platform where developers can ask questions, share knowledge, and engage in discussions with support for Markdown and syntax highlighting.'
  },
  {
    title: 'AdminAccess',
    image: '/images/adminaccess.webp',
    deployedLink: 'https://adminaccess-f697b23e85fa.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/AdminAccess',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
    description: 'An employee management system for administrators to manage employee data, roles, and departments with secure authentication.'
  },
  {
    title: 'RendezView',
    image: '/images/rendezview.webp',
    deployedLink: 'https://rendezviews-6983bdd1f9ce.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/RendezView',
    technologies: [ 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    description: 'An event planning platform with event creation, RSVP functionality, and location mapping using OpenStreetMap API.'
  },
  {
    title: 'CloudShare',
    image: '/images/cloudshare.webp',
    deployedLink: '',
    githubLink: 'https://github.com/kyoriku/CloudShare',
    technologies: ['React', 'Node.js', 'EC2', 'S3', 'DynamoDB'],
    description: 'A content sharing platform using AWS services - S3 for image storage, DynamoDB for data persistence, and EC2 for deployment.'
  },
  {
    title: 'PythonPress',
    image: '/images/pythonpress.webp',
    deployedLink: 'https://pythonpress-64ffcf772c54.herokuapp.com/',
    githubLink: 'https://github.com/kyoriku/PythonPress',
    technologies: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'Jinja'],
    description: 'A news sharing platform built with Flask where users can create, share, and interact with content.'
  },
  {
    title: 'FilmFinder',
    image: '/images/filmfinder.webp',
    deployedLink: 'https://kyoriku.github.io/FilmFinder/',
    githubLink: 'https://github.com/kyoriku/FilmFinder',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TMDb API', 'Watchmode API'],
    description: 'A movie search platform using TMDb and Watchmode APIs to find films, check streaming availability, and manage watchlists.'
  }
];

export const projectExperienceData = [
  {
    title: 'StackNova',
    description: `A Q&A platform for developers built with React and Node.js. Users can ask questions, share knowledge, and engage in technical discussions with full Markdown support and syntax highlighting via prism-react-renderer.

    The platform includes secure authentication with HTTP-only cookies, protected routes, and input validation to prevent XSS attacks. Server-side caching with Redis reduces query times by 70%, while React Query handles client-side data fetching and updates.`,
    highlights: [
      'Secure authentication with HTTP-only cookies and protected routes',
      'Markdown support with syntax highlighting via prism-react-renderer',
      'Redis caching resulting in 70% faster query times',
      'React Query for client-side data fetching',
      'Responsive UI with dark/light mode using Tailwind CSS',
      'Input validation and XSS prevention',
      'RESTful API with optimized database queries',
      'User profiles with activity tracking'
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind css' },
      { name: 'React Query', icon: 'react-query' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' },
      { name: 'Redis', icon: 'redis' }
    ]
  },
  {
    title: 'AdminAccess',
    description: `An employee management system built with the MERN stack (MySQL, Express, React, Node). Administrators can manage employee information, departments, and role assignments through a dashboard interface.
  
      The system includes authentication, real-time data updates, and confirmation dialogs to prevent accidental deletions. Responsive design works across all device sizes.`,
    highlights: [
      'Authentication with session management',
      'CRUD operations for employees and departments',
      'Dynamic forms with client-side validation',
      'Confirmation dialogs for deletions',
      'Responsive dashboard interface',
      'RESTful API endpoints',
      'Department hierarchy management',
      'Real-time data synchronization'
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'RendezView',
    description: `An event planning platform where users can create, discover, and manage events. Built with MVC architecture using Node.js, Express, and MySQL.
  
      Features include OpenStreetMap integration for location services, RSVP tracking, and personalized dashboards for managing events and attendance.`,
    highlights: [
      'User authentication with session management',
      'Event CRUD operations with real-time updates',
      'OpenStreetMap API for location mapping',
      'RSVP system with attendance tracking',
      'Personalized user dashboards',
      'Location-based venue mapping',
      'Flexible event creation system',
      'MySQL database with Sequelize ORM'
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Handlebars', icon: 'handlebars' },
      { name: 'CSS', icon: 'css3' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize', icon: 'sequelize' }
    ]
  },
  {
    title: 'CloudShare',
    description: `A content sharing platform using AWS services. Built with React and Node.js, the application uses S3 for image storage, DynamoDB for data persistence, and EC2 for deployment.

      Users can share posts with image attachments. Images are automatically processed and stored in S3, while DynamoDB handles data management.`,
    highlights: [
      'AWS service integration (S3, DynamoDB, EC2)',
      'Image upload and storage with S3',
      'NoSQL data management using DynamoDB',
      'Cloud deployment via EC2',
      'Real-time content updates',
      'React frontend with state management',
      'RESTful API for content operations',
      'Automatic image processing'
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'AWS', icon: 'aws' },
      { name: 'EC2', icon: 'ec2' },
      { name: 'S3', icon: 's3' },
      { name: 'DynamoDB', icon: 'dynamodb' },
    ]
  },
  {
    title: 'PythonPress',
    description: `A news sharing platform built with Python and Flask. Users can create, share, and interact with content through authentication, posts, comments, and voting.

      Uses SQLAlchemy for database management, Jinja for templating, and Gunicorn for production deployment.`,
    highlights: [
      'Flask-based full-stack implementation',
      'User authentication and session management',
      'SQLAlchemy ORM for database operations',
      'Jinja templates for dynamic content',
      'Gunicorn server for production',
      'RESTful API endpoints',
      'Comment and voting system',
      'MySQL database integration'
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'CSS', icon: 'css3' },
      { name: 'Jinja', icon: 'jinja' },
      { name: 'Python', icon: 'python' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Gunicorn', icon: 'gunicorn' },
      { name: 'SQLAlchemy', icon: 'sqlalchemy' }
    ]
  },
  {
    title: 'FilmFinder',
    description: `A movie search platform using TMDb and Watchmode APIs to find films and check streaming availability. Users can browse movies by genre, view detailed information, and maintain watchlists.
  
      Features dynamic movie carousels, real-time search, and persistent watchlist storage using localStorage.`,
    highlights: [
      'Real-time search with TMDb API',
      'Streaming availability via Watchmode API',
      'Watchlist management with localStorage',
      'Detailed movie information pages',
      'Genre-based browsing and filtering',
      'Dynamic movie carousels',
      'Responsive design',
      'jQuery and Bootstrap interface'
    ],
    technologies: [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'TMDb API', icon: 'api' },
      { name: 'Watchmode API', icon: 'api' }
    ]
  },
];