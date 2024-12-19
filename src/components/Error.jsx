import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import '../styles/ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='app-container'>
      <Header />
      <section className="container py-5">
        <div className="error-content">
          <AlertCircle size={64} className="error-icon" />
          <h1 className="gradient-text">Oops!</h1>
          <p className="error-message">Sorry, an unexpected error has occurred.</p>
          <p className="error-details">
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to="/" className="home-button">
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}