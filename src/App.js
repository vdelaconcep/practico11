import { useState } from 'react';
import './estilos.css'
import Mensaje from './components/mensaje'

const App = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    edad: ""
  });

  const [mensaje, setMensaje] = useState(false);

  const gestionEnvio = (event) => {
    event.preventDefault();
    setMensaje(true);
  }

  return (
    <>
      <div className='formulario-div bg-info text-white'>
        <h2 className='cursiva formulario-titulo fw-bold text-center p-2'>Práctico n°11 - Nombre y edad</h2>
        <form onSubmit={gestionEnvio}>
          <input className='montserrat formulario-input form-control text-center mt-3'
            type='text'
            value={persona.nombre}
            onChange={(event) => setPersona((anterior) => ({...anterior, nombre: event.target.value}))}
            maxLength={20}
            placeholder='Ingresá tu nombre'
            required
          />
          
          <input className='montserrat formulario-input form-control text-center mt-4'
            type='number'
            value={persona.edad}
            onChange={(event) => setPersona((anterior) => ({ ...anterior, edad: event.target.value }))}
            min={1}
            max={100}
            placeholder='Ingresá tu edad'
            required
          />
          <div className='text-center p-5'>
            <button type="submit" className='formulario-btn cursiva btn btn-light'>Enviar</button>
          </div>
        </form>
      </div>
      <div className='overlay'>
        {mensaje && <Mensaje persona={persona} />}
      </div>
    </>);
};

export default App;
