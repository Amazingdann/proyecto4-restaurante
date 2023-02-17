import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Contacto from '../pages/Contacto';
import Menu from '../pages/Menu';
import Promociones from '../pages/Promociones';
import Reservaciones from '../pages/Reservaciones';
import Ubicacion from '../pages/Ubicacion';


function AppRouter() {
    return ( 
        <>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='contacto' element={<Contacto/>}/>
                <Route path='menu' element={<Menu/>}/>
                <Route path='promociones' element={<Promociones/>}/>
                <Route path='reservaciones' element={<Reservaciones/>}/>
                <Route path='ubicacion' element={<Ubicacion/>}/>



                <Route path='*' element={<Navigate to="/404"/>}/> 
                <Route path='/' element={<Navigate to="/home"/>}/>
            </Routes>
        </>
     );
}

export default AppRouter;