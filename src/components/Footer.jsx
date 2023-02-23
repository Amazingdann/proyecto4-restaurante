
import perrito from './image/perrito.png'





function Footer() {
    return (  
       <>
<footer className="footer row ">
    <div className="row justify-content-end">
        <div className="col m-3">
        <img className='mt-1' src={perrito} style={{width: '50px', height: '50px'}} alt="esto es un perrito bonito" />
        
        </div>
        
        <div className="col m-3">
       
        </div>
    </div>
</footer>


       </> 
    );
}

export default Footer;