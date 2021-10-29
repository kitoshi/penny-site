import "./App.css";
import Carousel from "./components/Carousel.jsx";
import penny from "./images/penny.jpg";
import About from "./components/About";
import useElementonScreen from "./hooks/useElementonScreen";

function App() {
  const [containerRef, isVisible] = useElementonScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });
  return (
    <div className="App">
      <header className="header">
        <div>
          <div className="insta">@pennyliu07</div>
          <h1>Penny Liu</h1>
          <img src={penny} alt="Penny"></img>
        </div>
      </header>
      <About />
      <Carousel isVisible={isVisible} containerRef={containerRef} />
    </div>
  );
}

export default App;
