import React from 'react';
import Skills from './Skills';
import ResumeDownload from '../assets/documents/Austin Graham Resume 2024.docx.pdf';

const Resume = () => {
  return (
    <section className='container mb-4 py-4 col-md-6 contact'>
      <h1 className='text-center'>Resume</h1>
      <div className='card p-3 mt-3'>
        <a href={ResumeDownload} download className=' d-flex justify-content-center text-decoration-none mb-2'>
          <button className='btn btn-dark mb-2'>Download Resume</button>
        </a>
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
