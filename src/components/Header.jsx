import React from 'react'; // Importing React to use JSX
import Navigation from './Navigation'; // Importing Navigation component to display navigation bar

// Functional component to display header
const Header = () => {
  // Returning the header with navigation bar
  return (
    <header className='bg-dark sticky-top'>
      <Navigation />
    </header>
  );
};

export default Header; // Exporting the Header component to be used in other parts of the application
