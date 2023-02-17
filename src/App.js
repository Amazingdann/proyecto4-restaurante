import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes/AppRouter';


function App() {
  return (
<>
<BrowserRouter>
<NavBar/>

<div className="w3-main card mb-5" style={{marginLeft: 340, marginRight: 40}}>
  {/* Header */}
  
  {/* Services */}
  <AppRouter>

  </AppRouter>
  {/* Designers */}

  {/* Packages / Pricing Tables */}

  {/* Contact */}
</div>
{/* W3.CSS Container */}
<footer>
<Footer/>
</footer>

</BrowserRouter>
</>

  );
}

export default App;
