function Contacto() {
  return (
    <>
      <div className="w3-container" id="contact" style={{ marginTop: 75 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Contact.</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>
          Do you want us to style your home? Fill out the form and fill me in
          with the details :) We love meeting new people!
        </p>
        <form action="/action_page.php" target="_blank">
          <div className="w3-section">
            <label>Name</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Name"
              required
            />
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Email"
              required
            />
          </div>
          <div className="w3-section">
            <label>Message</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contacto;
