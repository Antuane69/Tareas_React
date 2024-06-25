import './App.css';
import logo from './img/PixelPerfectWeb.png'
import Tarea from './components/Tarea.js'
import { Formulario } from './components/Formulario.jsx'; 

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='fcc-logo-contenedor'>
        <img 
            src={logo}
            className='fcc-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* <Tarea texto='Aprender React'/> */}
        <Formulario></Formulario>
      </div>
    </div>
  );
}

export default App;
