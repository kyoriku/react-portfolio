import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <main className='app-container'>
      <Header />
      <About />
      <Footer />
    </main>
  );
}

export default App
