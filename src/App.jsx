import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <main className='app-container'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App
