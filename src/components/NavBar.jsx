import {Link, NavLink} from 'react-router-dom';

function NavBar() {
    return ( 
        <>
 {/* Sidebar/menu */}
 <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style={{zIndex: 3, width: 300, fontWeight: 'bold'}} id="mySidebar"><br />
    <a href="javascript:void(0)" onclick="w3_close()" className="w3-button w3-hide-large w3-display-topleft" style={{width: '100%', fontSize: 22}}>Close Menu</a>
    <div className="w3-container">
      <h3 className="w3-padding-64"><b>La Chuleta<br />Vegana</b></h3> <br/>
    
    </div>
    <div className="w3-bar-block">
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/home'>Home</NavLink>
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/menu'>Menu</NavLink>
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/promociones'>Promociones</NavLink>
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/reservaciones'>Reservaciones</NavLink>
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/ubicacion'>Ubicación</NavLink>
    <NavLink onclick="w3_close()" className="w3-bar-item w3-button w3-hover-white" to='/contacto'>Contacto</NavLink>

    </div>
  </nav>
  {/* Top menu on small screens */}
  <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
    <a href="javascript:void(0)" className="w3-button w3-red w3-margin-right" onclick="w3_open()">☰</a>
    <span>La Chuleta Vegana</span> 
  </header>
  {/* Overlay effect when opening sidebar on small screens */}
  <div className="w3-overlay w3-hide-large" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
  {/* !PAGE CONTENT! */}
        </>
     );
}

export default NavBar;