import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";

function Carousel() {
  return (
    <div className="carousel">
      <ul>
        <li>
          <img src={elk} alt="elk"></img>
        </li>
        <li>
          <img src={frog} alt="frog"></img>
        </li>
        <li>
          <img src={owl} alt="owl"></img>
        </li>
        <li>
          <img src={rick} alt="rick"></img>
        </li>
        <li>
          <img src={bee} alt="bee"></img>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
