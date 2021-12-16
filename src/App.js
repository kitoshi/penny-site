import "./App.css";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About";
import Fullscreen from "./components/Fullscreen";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Spacer from "./components/Spacer";

function App() {
  return (
    <div className="App dark-theme">
      <Welcome />
      <Spacer />
      <About />
      <Spacer />
      <Fullscreen />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
