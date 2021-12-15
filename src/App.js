import "./App.css";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

useEffect(() => {
  return () => {
  document.querySelector('.aboutcontainer').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  document.querySelector("*").style.overflow = "scroll"
  }
}, [scroll])

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
      <About />
      <Fullscreen />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
