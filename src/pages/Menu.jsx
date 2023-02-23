
import {db} from '../firebase';
import {collection, onSnapshot} from "firebase/firestore";
import {useState, useEffect} from "react";





function Menu() {
  const [menu, setMenu]= useState([]);
  const getData = async () => {
    onSnapshot(collection(db,"menu"), (querySnapshot)=>{
      setMenu(querySnapshot.docs.map(doc=>{
          return{
              ...doc.data()
          }
      }))
  })
}

useEffect(()=>{
getData();
},[])







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

      {menu.map((producto,index)=>{
    return(

      <div className="container overflow-hidden text-center">
      <div class="row m-4 productoMenu d-flex">
          <div class="col-4">
            <div class="m-3 productoMenu text-center rounded mx-auto d-block">
              <img
              className='img-thumbnail'
                src={producto.foto}
                alt="comida con tofu"
                style={{width: '200px', height: '200px' }}
              />
            </div>
          </div>
          <div className="col-6 container m-3 text-start">
                <h3>{producto.platillo}</h3>
                <p>{producto.costo}</p>
                <p>
              {producto.descripcion}
                </p>
          </div>
          </div>
      </div>



      







    )
})}



    </>
  );
}

export default Menu;
