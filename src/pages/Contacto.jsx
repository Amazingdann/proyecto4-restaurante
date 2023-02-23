import {BsLinkedin, BsInstagram, BsFacebook} from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';


function Contacto() {
  return (
    <>
      <div className="w3-container" id="contact" style={{ marginTop: 75 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Contacto</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>
        ¿En qué podemos mejora? 
        </p>
        <form action="/action_page.php" target="_blank">
          <div className="w3-section">
            <label>Nombre</label>
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
            <label>Mensaje</label>
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
            manda tu mensaje
          </button>
        </form>

        <div className="container">
            <h4 className=" w3-text-red">
          <b>Búscanos en nuestras redes sociales</b>
        </h4>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />


        <div className="container">
          <div className="col-2">
            <p> facebook <BsFacebook/></p> 
          </div>
          <div className="col-2">
            <p> instagram <BsInstagram/></p> 
          </div>
          <div className="col-2">
            <p> tik tok <SiTiktok/></p> 
          </div>
          <div className="col-2">
            <p> linkedin <BsLinkedin/> </p> 
          </div>
        </div>
            </div>


      </div>
    </>
  );
}

export default Contacto;
