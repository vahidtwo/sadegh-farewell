import "./App.css";
import AghaSadegh from "./assets/main.jpg";
import Image1 from "./assets/image-1.svg";
import CountDown from "./components/CountDown";

function App() {
  return (
    <div className="app">
      <div className="left-side">
        <img src={AghaSadegh} alt="Sadegh's photo goes Here :)" />
        <div className="left-side-overlay"></div>
      </div>

      <div className="right-side">
        <h3>Goodbye Dear</h3>
        <h1>Sadegh</h1>
        <p className="description">
          Hopefully in your professional journey, you can be more enthusiastic
          and can be even more successful.
        </p>
        <div className="divider"></div>
        <CountDown />
        <span className="bottom-text">We'll miss you ❤️</span>
      </div>

      <div className="image-1">
        <img src={Image1} alt="" />
      </div>
      <div className="image-2">
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}

export default App;
