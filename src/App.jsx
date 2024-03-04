import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <main className='app-container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App
