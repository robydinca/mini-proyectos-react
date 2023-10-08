import './App.css';
import freecodeCampLogo from './imagenes/freecodecamplogo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodeCampLogo}
          alt="Logo de freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
