import comida1 from './img/1.jpg'
import comida2 from './img/2.jpg'
import comida3 from './img/3.jpg'
import comida4 from './img/4.jpg'
import comida5 from './img/5.jpg'
import comida6 from './img/6.jpg'


function Home() {
    return ( 
      <>
        <div className="w3-container" style={{marginTop: 40}} id="showcase">
        <h1 className="w3-jumbo"><b>La Chuleta Vegana</b></h1>
        <h6 className="w3-xxxlarge w3-text-red"><b>“Todo lo bueno es libre y salvaje”</b></h6>
        <hr style={{width: 50, border: '5px solid red'}} className="w3-round" />
      </div>
      {/* Photo grid (modal) */}
      <div className='m-3'>
      <p>
        En el umbral de la Emergencia Climática, es prácticamente un consenso científico que debemos reducir drásticamente la producción y el consumo de alimentos de origen animal, ya que acusan impresionantes cifras de emisiones directas de Gases de Efecto Invernadero, así como sustanciales contribuciones indirectas a través de desechos contaminantes, fertilizantes y aditivos requeridos, y deforestación asociada, entre otros factores. 
        </p>

        </div>
      
      <div className="row m-5 text-center">
        <div className="w3-half ">
          <img src={comida1} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="Concrete meets bricks" className="col-md-3 m-4" />
          <img src={comida2} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="Light, white and tight scandinavian design" className="col-md-3 m-4"/>
          <img src={comida3} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="White walls with designer chairs" className="col-md-3 m-4" />
          <img src={comida4} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="Windows for the atrium"  className="col-md-3 m-4"  />
          <img src={comida5} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="Bedroom and office in one space" className="col-md-3 m-4" />
          <img src={comida6} style={{width: '200px', height: '200px'}} onclick="onClick(this)" alt="Scandinavian design" className="col-md-3 m-4" />
        </div>
        <div className="w3-half rounded">

        </div>
      </div>

      </>
     );
}

export default Home;