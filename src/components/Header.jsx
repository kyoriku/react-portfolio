import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <section className='container-fluid'>
          <a className='navbar-brand' href='/'>Austin</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>About Me</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/portfolio'>Portfolio</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/contact'>Contact</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/resume'>Resume</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
