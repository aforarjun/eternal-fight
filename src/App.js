import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import AboutPage from './pages/about-page/AboutPage';
import ContactPage from './pages/contact-page/ContactPage';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        
      </div>
  );
}

export default App;
