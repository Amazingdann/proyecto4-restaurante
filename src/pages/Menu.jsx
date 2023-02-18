import comida1 from "./img/1.jpg";
import comida2 from "./img/2.jpg";
import comida3 from "./img/3.jpg";
import comida4 from "./img/4.jpg";
import comida5 from "./img/5.jpg";
import comida6 from "./img/6.jpg";

function Menu() {
  return (
    <>
      <div className="w3-container" id="designers" style={{ marginTop: 40 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Desayunos</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>Empieza tu día</p>
        <p>
          Todos nuestros desayunos están elaborados con productos plantbased e
          incluyen jugo o fruta y café o té.
        </p>
        <p>
          <b>Tofu al gusto </b>:
        </p>
      </div>

      <div class="container overflow-hidden text-center">
        <div class="row m-4 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida3}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Hot Cakes</h3>
                <p>no es tofu pero sí desayuno</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo
                </p>
          </div>
          </div>



          <div class="row m-4 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida2}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Combo Hot Cakes</h3>
                <p>no es tofu pero sí desayuno</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo 
                </p>
          </div>
          </div>



          <div class="row m-4 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida4}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Chile en Nogada</h3>
                <p>no es tofu tampoco desayuno pero es lo que hay</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo
                </p>
          </div>
          </div>



          <div class="row m-4 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida1}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Enfrijoquiles</h3>
                <p>chilaquiles con salsa de frijol</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo
                </p>
          </div>
          </div>



          <div class="row m-4 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida6}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Alitas de Coliflor</h3>
                <p>no es tofu pero sí desayuno</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo
                </p>
          </div>
          </div>


          <div class="row m-3 productoMenu">
          <div class="col-4">
            <div class="m-3 productoMenu">
              <img
                src={comida5}
                alt="comida con tofu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6 m-3 text-start">
                <h3>Pastor de Setas</h3>
                <p>no es tofu pero sí desayuno</p>
                <p>
                 esta es una descripción de comida, puede traer todos los ingredientes usados, una descripcioón mamalona o algo
                </p>
          </div>
          </div>

        </div>

    </>
  );
}

export default Menu;
