import "./App.css";
import Carousel from "./components/Carousel.jsx";
import penny from "./images/penny.jpg";
import About from "./components/About";

function App() {
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
      <Carousel />
    </div>
  );
}

export default App;
