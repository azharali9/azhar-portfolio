// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header/Hero Section */}
      <header className="hero">
        <h1>Azhar Ali</h1>
        <h2>Software Engineer | AI Enthusiast</h2>
        <div className="cta-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="section">
        <h3>About Me</h3>
        <p>
          I’m an Associate Software Engineer at Septem Systems, passionate about crafting scalable backend systems and dynamic web applications. Skilled in Python, Java, and DevOps.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Python (TensorFlow, Keras)</li>
          <li>Java (Spring Boot)</li>
          <li>React.js</li>
          <li>DevOps (Docker, Git)</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h3>Projects</h3>
        <div className="project-card">
          <h4>Delivery Monsters</h4>
          <p>A delivery suite built with Vue.js and Spring Boot.</p>
          <a href="https://github.com/azharali9" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more project cards similarly */}
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:azharalishedayi9@gmail.com">azharalishedayi9@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/azhar-ali-i190564/" target="_blank">Connect</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Azhar Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;