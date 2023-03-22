import './App.css';
import WhatsappButton from './components/WhatsAppButton';
import Logo from './assets/logo.png'
import Seccion from './components/Seccion';
import { products } from './helpers/products.js';

function App() {

  return (
    <>
      <header>
        <div className="header">
          <div className="fondo-logo">
            <img className="logo" src={Logo} alt="logo-header" />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
            {products.map((seccion) => (
              <>
                <Seccion key={seccion.id} name={seccion.name} img={seccion.img} platillos={seccion.platillos}/>
              </>
            ))}
          <div>
            <WhatsappButton url={window.location.href} />
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023, ToMenu, Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
