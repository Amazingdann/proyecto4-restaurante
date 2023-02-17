function Menu() {
  return (
    <>
      <div className="w3-container" id="designers" style={{ marginTop: 75 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Designers.</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>The best team in the world.</p>
        <p>
          We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <b>Our designers are thoughtfully chosen</b>:
        </p>
      </div>
      {/* The Team */}
      <div className="w3-row-padding w3-grayscale">
        <div className="w3-col m4 w3-margin-bottom">
          <div className="w3-light-grey">
            <img
              src="/w3images/team2.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>John Doe</h3>
              <p className="w3-opacity">CEO &amp; Founder</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
            </div>
          </div>
        </div>
        <div className="w3-col m4 w3-margin-bottom">
          <div className="w3-light-grey">
            <img
              src="/w3images/team1.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>Jane Doe</h3>
              <p className="w3-opacity">Designer</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
            </div>
          </div>
        </div>
        <div className="w3-col m4 w3-margin-bottom">
          <div className="w3-light-grey">
            <img
              src="/w3images/team3.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>Mike Ross</h3>
              <p className="w3-opacity">Architect</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
