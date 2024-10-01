import Hero from "./Assets/HeroGif.webp";
import './App.css';
import Nav from './componets/nav/nav';
import Tracking from './Assets/sports_tracking.jpg'
import EventManagement from './Assets/Event_managemet.jpg.avif'
function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <Nav />
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
      </div>
    </div>
  );
}

export default App;
