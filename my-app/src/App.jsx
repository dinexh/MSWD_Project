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
      <div className="App-Explore">
          <div className="Explore-in">
            <button>Explore More</button>
          </div>
        </div>
    </div>
  );
}

export default App;
