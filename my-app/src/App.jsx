import Hero from "./Assets/HeroGif.webp";
import './App.css';
import Nav from './componets/nav/nav';
import Tracking from './Assets/sports_tracking.jpg'
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
              {/* <h2>Key Points</h2>
              <ul>
                <li>Real-time score updates for all sports events.</li>
                <li>Event status (live, paused, completed).</li>
                <li>Push notifications for critical moments (goals, substitutions, etc.).</li>
              </ul> */}
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
