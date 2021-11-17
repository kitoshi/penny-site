import winterroad from "../images/winterroad.jpg";
import { useEffect } from "react";

function Welcome(props) {
  useEffect(() => {
    if (props.scroll === true) {
      shrinkImage();
    }
  }, [props.scroll]);

  function shrinkImage() {
    const welcome = document.getElementById("welcome");
    const text = document.getElementById("introtext");
    const scroll = document.querySelectorAll("*");
    //timer for scroll bar to pop up
    setTimeout(() => {
      scroll[0].style.overflow = "scroll";
    }, 5000);

    welcome.style.height = "0vh";
    welcome.style.transition = "height 5s ease";
    text.style.visibility = "hidden";
    text.style.transition = "visibility 2s ease";
  }

  
  return (
    <div className="welcome" id="welcome">
      <h2 className="introtext" id="introtext" onClick={shrinkImage}>
        Hello.<br></br> Walk with me.
      </h2>
      <img
        src={winterroad}
        alt="winter road landscape"
        className="intro"
        onClick={shrinkImage}
      />
    </div>
  );
}
export default Welcome;
