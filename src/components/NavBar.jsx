import {Link, NavLink} from 'react-router-dom';
import perrito from './image/perrito.png';
import {useState} from 'react';

function NavBar() {
  const [sidebar, setSidebar] = useState(false);


  function openSidebar () {
      setSidebar(true);
    }
  function closeSidebar () {
      setSidebar(false)
    }



    return ( 
        <>
 {/* Sidebar/menu */}
 <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style={{zIndex: 3, width: 300, fontWeight: 'bold'}} id="mySidebar"><br />
    
    <div className="w3-container">

      <h3 className="w3-padding-64"><b>La Chuleta<br />Vegana</b></h3> <br/>
      <img className='mr-3' src={perrito} style={{width: '100px', height: '100px'}} alt="esto es un perrito bonito" />
    
    </div>
    <div className="w3-bar-block">
    <NavLink  className="w3-bar-item w3-button w3-hover-white" to='/home'>Home</NavLink>
    <NavLink  className="w3-bar-item w3-button w3-hover-white" to='/menu'>Menu</NavLink>
    <NavLink className="w3-bar-item w3-button w3-hover-white" to='/promociones'>Promociones</NavLink>
    <NavLink  className="w3-bar-item w3-button w3-hover-white" to='/reservaciones'>Reservaciones</NavLink>
    <NavLink  className="w3-bar-item w3-button w3-hover-white" to='/ubicacion'>Ubicación</NavLink>
    <NavLink  className="w3-bar-item w3-button w3-hover-white" to='/contacto'>Contacto</NavLink>

    </div>
  </nav>
  {/* Top menu on small screens */}
  <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
    <Link to="#"className="w3-button w3-red w3-margin-right" onClick={openSidebar}>☰</Link>
   
    <span>La Chuleta Vegana</span>  
    <img className='mr-3' src={perrito} style={{width: '40px', height: '40px'}} alt="esto es un perrito bonito" />
  </header>
  {/* Overlay effect when opening sidebar on small screens */}
  <div className="w3-overlay w3-hide-large" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />

  {sidebar &&<div>
<nav className="w3-red w3-collapse w3-top w3-large w3-padding" style={{zIndex: 3, width: 300, fontWeight: 'bold'}} id="mySidebar"><br />
    <Link to="#" onClick={closeSidebar} className="w3-button w3-hide-large w3-display-topleft" style={{width: '100%', fontSize: 22}}>Close Menu</Link>
    <div className="w3-container">

      <h3 className="w3-padding-64"><b>La Chuleta<br />Vegana</b></h3> <br/>
      <img className='mr-3' src={perrito} style={{width: '100px', height: '100px'}} alt="esto es un perrito bonito" />
    
    </div>
    <div className="w3-bar-block">
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/home'>Home</NavLink>
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/menu'>Menu</NavLink>
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/promociones'>Promociones</NavLink>
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/reservaciones'>Reservaciones</NavLink>
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/ubicacion'>Ubicación</NavLink>
    <NavLink onClick={closeSidebar} className="w3-bar-item w3-button w3-hover-white" to='/contacto'>Contacto</NavLink>

    </div>
  </nav>
</div>}
        {!sidebar && <></>}




  {/* !PAGE CONTENT! */}
        </>
     );
}

export default NavBar;