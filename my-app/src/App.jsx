import Hero from "./Assets/HeroGif.webp";
import './App.css';
import Nav from './componets/nav/nav';

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

            </div>
            <div className="App-track-in-two">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
