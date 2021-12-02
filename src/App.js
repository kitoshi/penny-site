import "./App.css";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
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
      <About scroll={scroll} />
      <Fullscreen />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
