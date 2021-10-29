import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import useElementonScreen from "../hooks/useElementonScreen";

function Carousel() {
  const [containerRef, isVisible] = useElementonScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });
  const images = [elk, frog, owl, rick, bee];
  const imageItem = images.map((element) => (
    <li>
      {isVisible ? "view" : "hidden"}
      <img src={element} alt={toString(element)} ref={containerRef} />
    </li>
  ));
  return (
    <div className="carousel">
      <ul>{imageItem}</ul>
    </div>
  );
}

export default Carousel;
