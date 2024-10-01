import React, { useEffect, useState } from "react";
import Hero from "./Assets/HeroGif.webp";
import './App.css';
import Nav from './componets/nav/nav';
import Navi from './componets/nav_in/navi'; 
import Tracking from './Assets/sports_tracking.jpg';
import EventManagement from './Assets/Event_managemet.jpg.avif';
import Stats from './Assets/stats.jpg.avif';

function App() {
  const [showNavi, setShowNavi] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.App-hero').offsetHeight;
      const triggerPoint = 100; 
      if (window.scrollY > triggerPoint) {
        setShowNavi(true);
      } else {
        setShowNavi(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const sections = document.querySelectorAll('.App-Sections-heading h1, .App-Sections-heading p, .App-track-in, .App-event-in, .App-stats-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className={`sticky-nav ${showNavi ? 'visible' : ''}`}>
        <Navi />
      </div>
      <div className="App-hero">
        <div className="App-hero-in">
          <div className="App-hero-in-one">
            <h1>Sports Management System</h1>
            <p>Stay in the Game: Real-Time Updates & Player Stats for Every Event!</p>
            <button className="cta-btn">Join Now!</button>
          </div>
          <div className="App-hero-in-two">
            <img className="HeroImage" src={Hero} alt="Sports Event" />
          </div>
        </div>
      </div>

      <div className="App-Sections">
        <div className="App-Sections-heading">
          <h1>Features!</h1>
          <p>Maximize Your Experience: Features Tailored for Sports Enthusiasts!</p>
        </div>
        <div className="App-track">
          <div className="App-track-in">
            <div className="App-track-in-one">
              <img src={Tracking} alt="Live sports tracking feature" />
            </div>
            <div className="App-track-in-two">
              <h1>Live <span>Sports</span> Tracking</h1>
              <p>Our platform provides live score updates and event status tracking in real time. Whether you're a fan or a coach, you'll never miss a moment with instant updates on game progress, player performance, and key events.</p>
            </div>
          </div>
        </div>
        <div className="App-event">
          <div className="App-event-in">
            <div className="App-event-in-one">
              <h1>Event <span>Management</span></h1>
              <p>Our platform simplifies the organization and management of sports events. Easily create event schedules, manage participants, and keep track of the event progress—all in one place.</p>
            </div>
            <div className="App-event-in-two">
              <img src={EventManagement} alt="Event management feature" />
            </div>
          </div>
        </div>
        <div className="App-stats">
          <div className="App-stats-in">
            <div className="App-stats-in-one">
              <h1>Player <span>Statistics</span></h1>
              <p>Track and analyze player performance with real-time data and comprehensive statistics. From goals to assists, our platform provides detailed insights that help teams and fans understand player contributions on the field.</p>
            </div>
            <div className="App-stats-in-two">
              <img src={Stats} alt="Player statistics feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
