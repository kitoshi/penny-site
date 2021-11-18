import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import fairy from "../images/fairy.jpeg";
import { useState } from "react";

function Carousel(props) {
  const [activePic, setPic] = useState("");
  const handlePic = (e) => {
    const active = e.target.alt;
    if (activePic === e.target.alt) {
      setPic(() => "");
    } else {
      setPic(() => active);
      showText();
    }
  };
  function showText() {
    //const item = document.querySelector(img[(alt = activePic)]);
    //item.style.height = "100vh";
    //item.style.transition = "height 5s ease";
  }
  const images = [elk, frog, owl, rick, bee, fairy];
  const altText = ["elk", "frog", "owl", "rick", "bee", "fairy"];
  const imageInfo = [
    "Description1",
    "Description2",
    "Description3",
    "Description4",
    "Description5",
    "Description6",
  ];
  const imageItem = images.map((element) => (
    <li key={element}>
      <img
        index={images.indexOf(element)}
        src={element}
        alt={altText[images.indexOf(element)]}
        onClick={handlePic}
        className="paint"
      />
      <p className="paintinfo">{imageInfo[images.indexOf(element)]}</p>
    </li>
  ));

  return (
    <div className="carousel">
      <ul>{imageItem}</ul>
    </div>
  );
}

export default Carousel;
