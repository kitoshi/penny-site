import "./App.css";
import Carousel from "./components/Carousel.jsx";
import Instagram from "./components/Instagram.jsx";
import penny from "./images/pliu2.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Penny Liu</h1>
        <img
          src={penny}
          alt="Penny"
        ></img>
      </header>
      <Instagram />
      <Carousel />
    </div>
  );
}

export default App;
