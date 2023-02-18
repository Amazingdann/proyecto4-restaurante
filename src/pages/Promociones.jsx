function Promociones() {
  return (
    <>
      <div className="w3-container" id="packages" style={{ marginTop: 75 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Promociones</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>
          Esta es una descripción de como aplican esas madres. Lorem ipsum consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
        </p>
      </div>
      <div className="w3-row-padding">
        <div className="w3-half w3-margin-bottom">
          <ul className="w3-ul w3-light-grey w3-center">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
            <li className="w3-padding-16">Floorplanning</li>
            <li className="w3-padding-16">10 hours support</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">20% furniture discount</li>
            <li className="w3-padding-16">Good deals</li>
            <li className="w3-padding-16">
              <h2>$ 199</h2>
              <span className="w3-opacity">per room</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-white w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="w3-half">
          <ul className="w3-ul w3-light-grey w3-center">
            <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
            <li className="w3-padding-16">Floorplanning</li>
            <li className="w3-padding-16">50 hours support</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">50% furniture discount</li>
            <li className="w3-padding-16">GREAT deals</li>
            <li className="w3-padding-16">
              <h2>$ 249</h2>
              <span className="w3-opacity">per room</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-red w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Promociones;
