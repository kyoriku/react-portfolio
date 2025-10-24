import React from 'react';
import Navigation from './Navigation';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="site-header" role="banner" aria-label="Site header">
      <Navigation />
    </header>
  );
};

export default Header;