import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import { useState } from "react";

function Carousel(props) {
  const [activePic, setPic] = useState("");
  const handlePic = (e) => {
    const active = e.target.alt;
    if (activePic === e.target.alt) {
      setPic(() => "");
    } else {
      setPic(() => active);
    }
  };
  const images = [elk, frog, owl, rick, bee];
  const alt = ["elk", "frog", "owl", "rick", "bee"];
  const imageItem = images.map((element) => (
    <li key={element}>
      <img
        index={images.indexOf(element)}
        src={element}
        alt={alt[images.indexOf(element)]}
        onClick={handlePic}
        className="paint"
      />
    </li>
  ));

  return (
    <div className="carousel">
      <ul>{imageItem}</ul>
    </div>
  );
}

export default Carousel;
