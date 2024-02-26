// src/App.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Services from './Services';
import './App.css';

const Home = () => (
  <div className="content">
    <h1>Welcome to Our Website!</h1>
    <div className="social-media-links">
      <a href="https://www.facebook.com/profile.php?id=100021501503018" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com/MonteCa99608914" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/david-monte-a2a513197/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>

    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
    </nav>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </Router>
);

export default App;
