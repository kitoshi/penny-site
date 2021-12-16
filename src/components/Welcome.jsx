import winterroad from "../images/winterroad.jpg";

function Welcome(props) {
  function goAbout() {
    const about = document.querySelector(".header");
    about.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <div className="welcome" onClick={goAbout}>
      <h2 className="introtext shimmer">Hello.</h2>
      <h3 className="introtext">Walk with me.</h3>
      <img src={winterroad} alt="winter road landscape" className="intro" />
    </div>
  );
}
export default Welcome;
