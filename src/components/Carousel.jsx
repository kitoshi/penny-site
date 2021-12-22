import bee from "../images/bee.jpg";
import elk from "../images/elk.jpg";
import frog from "../images/frog.jpeg";
import owl from "../images/owl.jpeg";
import rick from "../images/rick.jpeg";
import fairy from "../images/fairy.jpeg";
import rightarrow from "../images/chevron_right_black.svg";
import leftarrow from "../images/chevron_left_black.svg";
import { useState, useEffect } from "react";

function Carousel(props) {
  const [activePic, setPic] = useState("");
  const [carouselFocus, setFocus] = useState(0);
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
  const handleFocusRight = (e) => {
    if (carouselFocus === 5) {
      setFocus((carouselFocus) => carouselFocus - 5);
    } else {
      setFocus((carouselFocus) => carouselFocus + 1);
    }
  };
  const handleFocusLeft = (e) => {
    if (carouselFocus === 0) {
      setFocus((carouselFocus) => carouselFocus + 5);
    } else {
      setFocus((carouselFocus) => carouselFocus - 1);
    }
  };

  /*const imagesColors = [
    "#486c7b",
    "#352f33",
    "#595959",
    "#1c0702",
    "#9d6b0f",
    "#deae40",
  ];*/

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
  useEffect(() => {
    if (listItem[carouselFocus] === undefined) {
    } else {
      listItem[carouselFocus].style.display = "flex";
    }
  }, [listItem, carouselFocus]);

  const imageItem = images.map((element) => (
    <li key={element} className="imagelistitem">
      <img
        index={images.indexOf(element)}
        src={element}
        alt={altText[images.indexOf(element)]}
        onClick={handlePic}
        className={`paint`}
        style={{ display: "none" }}
      />
    </li>
  ));
  return (
    <div className="carousel">
      <ul style={{ display: "flex", flexDirection: "row" }}>
        <img src={leftarrow} alt="left arrow" onClick={handleFocusLeft}></img>
        {imageItem}
        <img
          src={rightarrow}
          alt="right arrow"
          onClick={handleFocusRight}
        ></img>
      </ul>
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
