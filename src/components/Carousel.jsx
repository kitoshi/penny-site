import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import Fullscreen from "./Fullscreen";

function Carousel() {
  const images = [elk, frog, owl, rick, bee];
  const imageItem = images.map((element) => (
    <img src={element} alt={toString(element)} />
  ));
  return (
    <div className="carousel">
      <ul>
        <li>{imageItem}</li>
      </ul>
    </div>
  );
}

export default Carousel;
