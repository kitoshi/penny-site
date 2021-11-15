import winterroad from "../images/winterroad.jpg";

function Welcome() {
  function shrinkImage() {
    const welcome = document.getElementById("welcome");
    const text = document.getElementById("introtext");

    welcome.style.height = "0vh";
    welcome.style.transition = "height 5s ease";
    text.style.visibility = "hidden";
    text.style.transition = "visibility 2s ease";
  }
  return (
    <div className="welcome" id="welcome">
      <h2 className="introtext" id="introtext">
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
