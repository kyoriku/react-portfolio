import { useRouteError } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className='app-container'>
      <Header />
      <div className="m-5 p-5 text-center" id="error-page">
        <h1 >Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </section>
  );
}
