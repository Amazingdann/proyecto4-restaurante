import { useState, } from 'react';
import { db } from '../firebase';
import { addDoc, collection, } from "firebase/firestore";
import Swal from 'sweetalert2';


import { useParams, } from "react-router-dom";


function Reservaciones() {

  const { id } = useParams();
  const [formulario, setFormulario] = useState({
      nombre: '',
      numpersonas: '',
    fecha: '',
    hora: '',
    telefono: '',
  });

  const handleInputChange = (event) => {
    setFormulario({
        ...formulario,
        [event.target.name]: event.target.value
    });
}


async function guardarFormulario(event) {
  event.preventDefault();
  console.log(formulario);
  if(!id){
      await addDoc(collection(db, "reservaciones"), formulario);
  } 
  Swal.fire(
      'Mensaje',
      'Reservado, favor de llegar 15 minutos antes',
      'success'
  )
}



  return (
    <>
    
      <div className="w3-container" id="services" style={{ marginTop: 75 }}>
        <h1 className="w3-xxxlarge w3-text-red">
          <b>Reservaciones</b>
        </h1>
        <hr
          style={{ width: 50, border: "5px solid red" }}
          className="w3-round"
        />
        <p>
          Haz tu reservación con para visitarnos.
        </p>
        <p>
        Una gatita que le gusta el mambo
Una gatita que le gusta el mambo
Una gatita que le gusta el mambo
Con todos los malos sale a bellaquear
Una gatita que le gusta el mambo
Con todos los malos sale a vacilar
<code>{JSON.stringify(formulario)}</code>

        </p>
      </div>
      <div className="m-5">
      <form onSubmit={guardarFormulario}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Personas</label>
                    <input type="number" className="form-control" name="numpersonas" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Reserva</label>
                    <input type="date" className="form-control" name="fecha" onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Hora de Reserva</label>
                    <input type="hour" className="form-control" name="hora" onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono de Confirmación</label>
                    <input type="hour" className="form-control" name="telefono" onChange={handleInputChange} />
                </div>

                <button type="submit" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Reservar</button>
            </form>


      </div>
    </>
  );
}

export default Reservaciones;
