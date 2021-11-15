import "./App.css";
import Carousel from "./components/Carousel.jsx";
import penny from "./images/penny.jpg";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  const handleChange = (e) => {
    setScroll(true);
  };
  return (
    <div
      className="App"
      onScrollCapture={handleChange}
      onMouseDownCapture={handleChange}
      onKeyDownCapture={handleChange}
      onWheelCapture={handleChange}
    >
      <Welcome scroll={scroll} />
      <header className="header">
        <div className="insta">@pennyliu07</div>
        <div className="nametag">
          <h1>Penny Liu</h1>
          <img src={penny} alt="Penny"></img>
        </div>
      </header>
      <About />
      <Fullscreen />
      <Carousel />
    </div>
  );
}

export default App;
