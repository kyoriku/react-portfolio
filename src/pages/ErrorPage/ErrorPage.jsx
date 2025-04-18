import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useRouteError, Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './styles/ErrorPage.css';

/**
 * ErrorPage component serves as the 404 error page when routes are not found
 * Handles displaying error information and providing navigation back to home
 * Includes accessibility features for screen readers and keyboard navigation
 */
const ErrorPage = () => {
  // Get error details from React Router
  const error = useRouteError();
  console.error(error);

  return (
    <div className='app-container'>
      <Helmet>
        <title>404 - Page Not Found | Austin Graham - Software Engineer</title>
        <meta name="description" content="The requested page could not be found. Return to Austin Graham's software engineering portfolio to explore projects and professional experience." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      {/* Main content area */}
      <main>
        {/* Error message section with accessibility attributes */}
        <section
          className="container py-5"
          aria-labelledby="error-heading"
          role="alert"
        >
          {/* Error content container with live region for screen readers */}
          <div
            className="error-content"
            aria-live="polite"
          >
            {/* Decorative error icon */}
            <AlertCircle
              size={64}
              className="error-icon"
              role="img"
              aria-hidden="true"
            />
            {/* Main error heading */}
            <h1
              id="error-heading"
              className="w-100 gradient-text"
            >
              Page Not Found
            </h1>
            <p className="error-message">
              Sorry, an unexpected error has occurred.
            </p>
            {/* Error details with screen reader enhancement */}
            <p
              className="error-details"
              aria-live="polite"
            >
              <span className="visually-hidden">Error details: </span>
              {error.statusText || error.message}
            </p>
            {/* Navigation link back to homepage */}
            <Link
              to="/"
              className="home-button"
              aria-label="Return to homepage"
            >
              <Home
                size={20}
                aria-hidden="true"
              />
              <span>Return Home</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;