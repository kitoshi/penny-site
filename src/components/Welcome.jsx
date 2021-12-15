import winterroad from "../images/winterroad.jpg";

function Welcome(props) {
  function goAbout() {
    const about = document.querySelector(".header");
    document.querySelector("*").style.overflow = "scroll";
    about.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <div className="welcome" id="welcome" onClick={goAbout}>
      <h2 className="introtext" id="introtext">
        Hello.<br></br> Walk with me.
      </h2>
      <img src={winterroad} alt="winter road landscape" className="intro" />
    </div>
  );
}
export default Welcome;
