import React from 'react'; // Importing React to use JSX
import Skills from './Skills'; // Importing Skills component to display front end and back end proficiencies
import ResumeDownload from '../assets/documents/Austin Graham Resume 2024.docx.pdf'; // Importing resume file to download

// Functional component to display resume
const Resume = () => {
  // Returning the resume section with download button and skills
  return (
    <section className='container mb-4 py-4 col-md-6 contact'>
      <h1 className='text-center'>Resume</h1>
      <div className='card p-3 mt-3'>
        <Skills />
        <a href={ResumeDownload} download className='d-flex justify-content-center text-decoration-none'>
          <button className='btn btn-primary'>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Resume; // Exporting Resume component to be used in other parts of the application
