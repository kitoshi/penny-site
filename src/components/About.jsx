import penny from "../images/penny.jpg";
//import downarrow from "../images/expand_more_white_48dp.svg";
function About(props) {
  function goFooter() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  /* function goCarousel() {
    const carousel = document.querySelector("div.carousel");
    carousel.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }      <img
        alt="downarrow"
        src={downarrow}
        style={{
          width: "35%",
          height: "25vh",
          marginLeft: "30%",
          marginRight: "30%",
        }}
        onClick={goCarousel}
      ></img>*/
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
      <p className="about">Take a look at my pieces.</p>
    </div>
  );
}
export default About;
