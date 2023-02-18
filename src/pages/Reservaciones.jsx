function Reservaciones() {
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
        </p>
      </div>
      <div className="m-5">
      <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Personas</label>
                    <input type="number" className="form-control" name="puesto" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fecha de Reserva</label>
                    <input type="date" className="form-control" name="fecha_contratacion"  />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">hora de Reserva</label>
                    <input type="hour" className="form-control" name="fecha_contratacion"  />
                </div>

                <button type="submit" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Reservar</button>
            </form>


      </div>
    </>
  );
}

export default Reservaciones;
