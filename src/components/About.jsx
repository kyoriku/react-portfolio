import React from 'react'; // Importing React to use JSX
import ArmoredCore from '../assets/images/armoredcore.jpg'; // Importing image to display profile picture
import '../styles/About.css'; // Importing CSS file to style component

// Functional component to display about me section
const About = () => {
  // Returning the about me section with profile picture and information
  return (
    <section className='container py-4 mb-4'>
      <div className='row m-auto'>
        <h1 className='mb-4 text-center'>About me</h1>
        <div className='col-md-4 d-flex justify-content-center'>
          <img src={ArmoredCore} alt='Profile picture' className='about-image' width='375' height='375' />
        </div>
        <div className='col-md-8 d-flex align-items-center about-mobile'>
          <p className='card p-3'>Hello! I'm Austin, an aspiring full-stack web developer excited to embark
            on a journey to transform my passion for coding into impactful digital solutions. I specialize in
            front-end technologies, showcasing proficiency in HTML, CSS, and JavaScript. Lately, I've been
            exploring back-end technology, honing my skills in Node.js, Express.js, as well as databases such
            as MySQL and MongoDB. Currently, I'm dedicated to expanding my skill set by learning React. My
            approach to web development combines a creative mindset with a problem-solving attitude. I enjoy
            the process of turning ideas into functional, user-friendly applications. Though I'm new to the
            professional scene, I'm committed to staying on top of the latest web development trends.</p>
        </div>
      </div>
    </section>
  );
}

export default About; // Exporting the About component to be used in other parts of the application
