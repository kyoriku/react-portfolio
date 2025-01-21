import { techIcons } from '../../config/techIcons';

export const CategorizedTechStack = ({ technologies, projectTitle }) => {
  const categories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Bootstrap', 'Handlebars', 'Jinja'],
    'Backend': ['Node.js', 'Express', 'Python', 'Flask', 'Gunicorn'],
    'Database': ['MySQL', 'MongoDB', 'Sequelize', 'SQLAlchemy', 'DynamoDB'],
    'Cloud': ['AWS', 'S3', 'EC2'],
    'APIs': ['TMDb API', 'Watchmode API', 'OpenWeather API']
  };

  const groupedTech = technologies.reduce((acc, tech) => {
    for (const [category, techList] of Object.entries(categories)) {
      if (techList.includes(tech)) {
        acc[category] = acc[category] || [];
        acc[category].push(tech);
        break;
      }
    }
    return acc;
  }, {});

  return (
    <div className="tech-categories">
      {Object.entries(groupedTech).map(([category, techs]) => (
        techs.length > 0 && (
          <div key={category} className="tech-category">
            <div className="category-header">
              <div className="category-title fs-7 fw-medium border-start border-2 ps-3">
                {category}
              </div>
            </div>
            <section
              className="tech-stack"
              aria-label={`${category} technologies used in ${projectTitle}`}
            >
              <div className="visually-hidden">
                {category}: {techs.join(', ')}
              </div>
              {techs.map((tech, index) => (
                <figure
                  key={`${tech}-${index}`}
                  className="tech-badge m-0"
                  role="group"
                  aria-label={tech}
                >
                  {techIcons[tech] && (
                    <img
                      src={techIcons[tech]}
                      alt=""
                      className="tech-icon"
                      loading="eager"
                      aria-hidden="true"
                      onError={(e) => {
                        console.error('Image failed to load:', tech);
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <figcaption>{tech}</figcaption>
                </figure>
              ))}
            </section>
          </div>
        )
      ))}
    </div>
  );
};