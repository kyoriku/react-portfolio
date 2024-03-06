import React from 'react';
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JavaScript from '../assets/icons/javascript.jpg';
import jQuery from '../assets/icons/jquery.jpg';
import ReactJs from '../assets/icons/reactjs.jpg';
import Bootstrap from '../assets/icons/bootstrap.jpg';
import Node from '../assets/icons/nodejs.jpg';
import Express from '../assets/icons/expressjs.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import MongoDb from '../assets/icons/mongodb.jpg';

const Skills = () => {
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

  const backEndSkills = [
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
    }
  ];

  return (
    <section>
      <h3>Front end Proficiencies</h3>
      <ul>
        {frontEndSkills.map(({ skill, image, alt }, index) => (
          <li key={index}>
            <p className='m-0'>{skill} <img src={image} alt={alt} height='25' width='25'/></p>
          </li>
        ))}
      </ul>
      <h3>Back end Proficiencies</h3>
      <ul>
        {backEndSkills.map(({ skill, image, alt }, index) => (
          <li key={index}>
            <p className='m-0'>{skill} <img src={image} alt={alt} height='25' width='25'/></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
