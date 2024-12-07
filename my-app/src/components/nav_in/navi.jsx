import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navi.css';

function Navi() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo" onClick={() => navigate('/')}>
        SportSync
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('tracking')}>Tracking</button>
        <button onClick={() => scrollToSection('events')}>Events</button>
        <button onClick={() => scrollToSection('stats')}>Statistics</button>
        <button onClick={() => scrollToSection('chatbot')}>AI Assistant</button>
      </div>
      <div className="nav-auth">
        <button className="nav-btn login" onClick={() => navigate('/login')}>Login</button>
        <button className="nav-btn register" onClick={() => navigate('/register')}>Register</button>
      </div>
    </nav>
  );
}

export default Navi;
