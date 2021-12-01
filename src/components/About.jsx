import penny from "../images/penny.jpg";
function About(props) {
  function goFooter() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView();
  }
  return (
    <div className="aboutcontainer">
      <div className="headerbackground">
        <header className="header">
          <div className="insta">@pennyliu07</div>
          <div className="nametag">
            <h1>Penny Liu</h1>
            <img src={penny} alt="Penny"></img>
          </div>
        </header>
      </div>
      <h2>Vancouver, BC</h2>
      <p className="about">
        Proud dog mama. Welder. City girl with a heart out in the country.
      </p>
      <p className="about">Each piece is an expression of my life.</p>
      <p className="about">
        <strong>
          <u onClick={goFooter}>Let me express your life through my art.</u>
        </strong>
      </p>
    </div>
  );
}
export default About;
