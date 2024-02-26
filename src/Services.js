// Services.js

import React from 'react';
import App from './App';
import './App.css'; // Import the styles

const Services = () => (
  <div className="services-container">
    <div className="service-card">
      <div className="service-title">Web Development</div>
      <div className="service-description">Building modern and responsive websites.</div>
    </div>

    <div className="service-card">
      <div className="service-title">Backend Development</div>
      <div className="service-description">Creating robust and scalable server-side applications.</div>
    </div>

    <div className="service-card">
      <div className="service-title">Programming Languages</div>
      <div className="service-description">Expertise in Python, JavaScript, React, and Next.js.</div>
    </div>
  </div>
);

export default Services;
