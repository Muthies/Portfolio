import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import profilePic from './pro2.jpg'; // Replace with your image path
import prof from './rose.jpg';
import githubIcon from './git.png';
import linkedinIcon from './lin.png';
import whatsappIcon from './what1.png';

function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <img src={prof} alt="Logo" className="logo-image" /> {/* Add your logo here */}
          Muthies()
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Education and Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact and Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <div className="left-section">
          <h1>Hello.</h1>
          <p>
            I'm <span className="highlight">Muthieswari Saravanan</span>. Passionate Developer
            Always learning.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/Muthies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/muthieswari-saravanan-4b6606290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://wa.me/9384184835"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>

          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="right-section">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
