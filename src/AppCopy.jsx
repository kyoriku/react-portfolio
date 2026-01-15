import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/About/index.jsx';
import Projects from './pages/Projects/index.jsx';
import Experience from './pages/Experience/index.jsx';
import Contact from './pages/Contact/index.jsx';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        {/* <Outlet /> */}
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
