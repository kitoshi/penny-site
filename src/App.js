import "./App.css";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Spacer from "./components/Spacer";
import Navbar from "./components/Navbar";

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
