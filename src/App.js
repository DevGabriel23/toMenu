import './App.css';
import WhatsappButton from './components/WhatsAppButton';
import Logo from './assets/logo.png'
import Platillo1 from './assets/Platillo.jpg';
import Platillo2 from './assets/Platillo2.jpg';
import Platillo3 from './assets/Platillo3.jpg';
import Platillo4 from './assets/Platillo4.jpg';

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
          <div className='nombre-seccion'>
            <p>seccion 1</p>
          </div>
          <div className="seccion">
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo1} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo2} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo3} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo4} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
          </div>
          <div className='nombre-seccion'>
            <p>seccion 2</p>
          </div>
          <div className="seccion">
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo1} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo2} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo3} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo4} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
          </div>
          <div className='nombre-seccion'>
            <p>seccion 3</p>
          </div>
          <div className="seccion">
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo1} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo2} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo3} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo4} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
          </div>
          <div className='nombre-seccion'>
            <p>seccion 4</p>
          </div>
          <div className="seccion">
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo1} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo2} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo3} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
            <div className="platillo">
              <div>
                <p className="nombre-platillo">Nombre</p>
                <p className="descripcion-platillo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="img-platillo">
                <img src={Platillo4} alt="" />
                <div className="precio-platillo">$250</div>
              </div>
            </div>
          </div>
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
