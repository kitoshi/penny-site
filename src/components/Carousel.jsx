import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";

function Carousel(props) {
  const images = [elk, frog, owl, rick, bee];
  const imageItem = images.map((element) => (
    <li>
      {props.isVisible ? "view" : "hidden"}
      <img src={element} alt={toString(element)} ref={props.containerRef} />
    </li>
  ));
  return (
    <div className="carousel">
      <ul>{imageItem}</ul>
    </div>
  );
}

export default Carousel;
