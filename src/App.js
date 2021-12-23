import "./App.css";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App light-theme">
      <Navbar />
      <Fullscreen />
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}

export default App;
