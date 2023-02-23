
import perrito from './image/perrito.png'
import {RedesLinks} from './RedesLinks';

import { Link } from 'react-router-dom';




function Footer() {
    return (  
       <>
<footer className="footer row ">
    <div className="row justify-content-end">
        <div className="col m-3">
        <img className='mt-1' src={perrito} style={{width: '50px', height: '50px'}} alt="esto es un perrito bonito" />
        
        </div>

        <div className="col m-3">
            <h2>Social Media</h2>
            {RedesLinks.map((item, index)=>{
                return (             
                
                    <Link className='linksSM' to={item.url}><p>{item.name}{" "} {item.logo}</p></Link>
)
            })}

           
       </div>
    </div>
</footer>


       </> 
    );
}

export default Footer;