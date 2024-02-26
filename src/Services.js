// src/Services.js

import React from 'react';

const Services = () => {
  return (
    <div className="services">
      <h1>My Services</h1>

      <div className="service">
        <h2>Web Development</h2>
        <p>I offer professional web development services to create stunning and responsive websites.</p>
        <a href="https://your-web-development-service-link.com" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>

      <div className="service">
        <h2>Backend Development</h2>
        <p>Expertise in backend development to build robust server-side applications and APIs.</p>
        <a href="https://your-backend-development-service-link.com" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>

      <div className="service">
        <h2>Languages</h2>
        <p>I am proficient in the following programming languages:</p>
        <ul>
          <li>Python</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
        <a href="https://your-languages-service-link.com" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
  );
}

export default Services;
