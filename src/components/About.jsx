function About() {
  function goFooter() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView();
  }
  return (
    <div className="aboutcontainer">
      <h2>Vancouver, BC</h2>
      <p className="about">
        Proud dog mama. Welder. City girl with a heart out in the country.
      </p>
      <p className="about">Each piece is an expression of my life.</p>
      <p className="about">
        <strong>
          <u onClick={goFooter}>Let me express your life.</u>
        </strong>
      </p>
    </div>
  );
}
export default About;
