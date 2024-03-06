import React from 'react'; // Importing React to use JSX

// Importing icons to display front end proficiencies
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import ReactJs from '../assets/icons/reactjs.jpg';
import Bootstrap from '../assets/icons/bootstrap.jpg';

// Importing icons to display back end proficiencies
import API from '../assets/icons/api.jpg';
import Node from '../assets/icons/nodejs.jpg';
import Express from '../assets/icons/expressjs.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import MongoDb from '../assets/icons/mongodb.jpg';
import GraphQL from '../assets/icons/graphql.jpg';

// Functional component to display front end and back end proficiencies
const Skills = () => {
  // Array of objects containing front end technologies
  const frontEndSkills = [
    {
      skill: 'HTML',
      image: HTML,
      alt: 'HTML'
    },
    {
      skill: 'CSS',
      image: CSS,
      alt: 'CSS'
    },
    {
      skill: 'JavaScript',
      image: JavaScript,
      alt: 'JavaScript'
    },
    {
      skill: 'jQuery',
      image: jQuery,
      alt: 'jQuery'
    },
    {
      skill: 'React',
      image: ReactJs,
      alt: 'React'
    },
    {
      skill: 'Bootstrap',
      image: Bootstrap,
      alt: 'Bootstrap'
    }
  ];

  // Array of objects containing back end technologies
  const backEndSkills = [
    {
      skill: 'APIs',
      image: API,
      alt: 'APIs'
    },
    {
      skill: 'Node.js',
      image: Node,
      alt: 'Node.js'
    },
    {
      skill: 'Express.js',
      image: Express,
      alt: 'Express.js'
    },
    {
      skill: 'MySQL',
      image: MySQL,
      alt: 'MySQL'
    },
    {
      skill: 'MongoDB',
      image: MongoDb,
      alt: 'MongoDB'
    },
    {
      skill: 'GraphQL',
      image: GraphQL,
      alt: 'GraphQL'
    }
  ];

  // Returning the lists of front end and back end proficiencies with icons and alt text
  return (
    <section>
      <h3>Front end Proficiencies</h3>
      <ul>
        {frontEndSkills.map(({ skill, image, alt }, index) => (
          <li key={index}>
            <p className='m-0'>{skill} <img src={image} alt={alt} height='25' width='25' /></p>
          </li>
        ))}
      </ul>
      <h3>Back end Proficiencies</h3>
      <ul>
        {backEndSkills.map(({ skill, image, alt }, index) => (
          <li key={index}>
            <p className='m-0'>{skill} <img src={image} alt={alt} height='25' width='25' /></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills; // Exporting the Skills component to be used in other components
