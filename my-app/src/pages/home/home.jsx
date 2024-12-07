import React, { useEffect, useState } from "react";
import Hero from "../../Assets/HeroGif.webp";
import '../../App.css';
import Navi from '../../components/nav_in/navi'; 
import Footer from "../../components/footer/footer";
import Tracking from '../../Assets/sports_tracking.jpg';
import EventManagement from '../../Assets/Event_managemet.jpg.avif';
import Stats from '../../Assets/stats.jpg.avif';
import Chatbot from '../../Assets/chatbot.webp';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const [showNavi, setShowNavi] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 60; 
      if (window.scrollY > triggerPoint) {
        setShowNavi(true);
      } else {
        setShowNavi(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      {showNavi && <div className="sticky-nav"><Navi /></div>}
      <div className="App-hero">
        <div className="App-hero-in">
          <div className="App-hero-in-one">
            <h1>Transform Your Sports Experience</h1>
            <p>Elevate your game with real-time updates, comprehensive stats, and seamless event management. 
              Join the future of sports management today!</p>
            <div className="hero-buttons">
              <button className="cta-btn primary" onClick={() => navigate('/login')}>Get Started Now</button>
              <button className="cta-btn secondary" onClick={() => navigate('/register')}>Create Account</button>
            </div>
          </div>
          <div className="App-hero-in-two">
            <img className="HeroImage" src={Hero} alt="Sports Management Platform" />
          </div>
        </div>
      </div>

      <div className="App-Sections">
        <div className="App-Sections-heading">
          <h1>Powerful Features for Sports Excellence</h1>
          <p>Discover tools designed to enhance every aspect of sports management</p>
        </div>
        <div id="tracking" className="App-track">
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
        <div id="events" className="App-event">
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
        <div id="stats" className="App-stats">
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
        <div id="chatbot" className="App-chatbot">
          <div className="App-chatbot-in">
            <div className="App-chatbot-in-one">
              <img src={Chatbot} alt="AI Sports Assistant" />
            </div>
            <div className="App-chatbot-in-two">
              <h1>AI Sports <span>Assistant</span></h1>
              <p>Get instant answers to your sports-related queries with our intelligent chatbot. 
                Stay updated with live scores, navigate events effortlessly, and access important 
                information in real-time.</p>
              <button className="feature-btn" onClick={() => navigate('/dashboard')}>
                Try AI Assistant <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="App-roles">
          <div className="roles-container">
            <h2>Built for Everyone in Sports</h2>
            <p className="roles-subtitle">Tailored features for every sports stakeholder</p>
            <div className="roles-grid">
              <div className="role-card">
                <div className="role-icon admin-icon">⚙️</div>
                <h3>Administrators</h3>
                <p>Manage events, users, and platform settings with comprehensive admin controls</p>
              </div>
              <div className="role-card">
                <div className="role-icon coach-icon">📋</div>
                <h3>Coaches</h3>
                <p>Track team performance, manage player statistics, and organize training schedules</p>
              </div>
              <div className="role-card">
                <div className="role-icon player-icon">🏃</div>
                <h3>Players</h3>
                <p>View personal statistics, game schedules, and team updates in real-time</p>
              </div>
              <div className="role-card">
                <div className="role-icon viewer-icon">📱</div>
                <h3>Viewers</h3>
                <p>Follow live matches, access comprehensive statistics, and stay connected with favorite teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
