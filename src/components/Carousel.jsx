import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import fairy from "../images/fairy.jpeg";
import { useState, useEffect, useRef } from "react";

function Carousel(props) {
  const [activePic, setPic] = useState("");
  const imageRef = useRef([]);
  const listItem = document.querySelectorAll(".imagelistitem");
  const handlePic = (e) => {
    const active = e.target.alt;
    const modal = document.querySelector("div.modal");
    if (activePic === altText[altText.indexOf(activePic)]) {
      setPic(() => "");
      modal.style.display = "none";
    } else {
      setPic(() => active);
      modal.style.display = "flex";
    }
  };

  const imagesColors = [
    "#486c7b",
    "#352f33",
    "#595959",
    "#1c0702",
    "#9d6b0f",
    "#deae40",
  ];

  const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { rootMargin }
      );

      element && observer.observe(element);

      return () => observer.unobserve(element);
    }, []);

    return isVisible;
  };

  const images = [elk, frog, owl, rick, bee, fairy];
  const altText = ["elk", "frog", "owl", "rick", "bee", "fairy"];
  const imageInfo = [
    "Elk, November 10, 2021",
    "Frog, November 10, 2021",
    "Owl, November 10, 2021",
    "Rick , November 10, 2021",
    "Bee, November 10, 2021",
    "Fairy, November 10, 2021",
  ];
  const imageItem = images.map((element) => (
    <li key={element} className="imagelistitem">
      <img
        index={images.indexOf(element)}
        src={element}
        alt={altText[images.indexOf(element)]}
        style={{ display: 'none' }}
        onClick={handlePic}
        className={`paint`}
        ref={(el) => (imageRef.current[element] = el)}
      />
    </li>
  ));

  return (
    <div className="carousel">
      <ul>{imageItem}</ul>
      <div className="modal" onClick={handlePic}>
        <img
          src={images[altText.indexOf(activePic)]}
          className="modal-content"
          alt={altText[altText.indexOf(activePic)]}
        ></img>
        <p className="paintinfo modal-text">
          {imageInfo[altText.indexOf(activePic)]}
        </p>
      </div>
    </div>
  );
}

export default Carousel;
