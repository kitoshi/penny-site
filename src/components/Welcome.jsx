import winterroad from "../images/winterroad.jpg";

function Welcome(props) {

  return (
    <div className="welcome" id="welcome">
      <h2 className="introtext" id="introtext">
        Hello.<br></br> Walk with me.
      </h2>
      <img
        src={winterroad}
        alt="winter road landscape"
        className="intro"
      />
    </div>
  );
}
export default Welcome;
