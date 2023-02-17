function Home() {
    return ( 
      <>
        <div className="w3-container" style={{marginTop: 80}} id="showcase">
        <h1 className="w3-jumbo"><b>La Chuleta Vegana</b></h1>
        <h6 className="w3-xxxlarge w3-text-red"><b>“Todo lo bueno es libre y salvaje”</b></h6>
        <hr style={{width: 50, border: '5px solid red'}} className="w3-round" />
      </div>
      {/* Photo grid (modal) */}
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src="/w3images/kitchenconcrete.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Concrete meets bricks" />
          <img src="/w3images/livingroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Light, white and tight scandinavian design" />
          <img src="/w3images/diningroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="White walls with designer chairs" />
        </div>
        <div className="w3-half">
          <img src="/w3images/atrium.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Windows for the atrium" />
          <img src="/w3images/bedroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Bedroom and office in one space" />
          <img src="/w3images/livingroom2.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Scandinavian design" />
        </div>
      </div>
      {/* Modal for full size images on click*/}
      <div id="modal01" className="w3-modal w3-black" style={{paddingTop: 0}} onclick="this.style.display='none'">
        <span className="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className="w3-image" />
          <p id="caption" />
        </div>
      </div>
      </>
     );
}

export default Home;