
import './App.css';
import Desilusion from './components/Desilusion/Desilusion';
import Ganador from './components/Ganador/ganador';
import Goleadores from './components/Goleadores/Goleadores';
import Lamentable from './components/Lamentable/Lamentable';
import Partidos from './components/partidos/Partidos';
import Revelacion from './components/Revelacion/Revelacion';
import Octavos from './components/Octavos/Octavos';
import Semis from './components/Semis/Semis';
import Cuartos from './components/Cuartos/Cuartos';
import Final from './components/Final/Final';

import InputsContext from './store/inputs-context';
import React, { useContext } from 'react';



function App() {

  const ctx = useContext(InputsContext);

  return (
    <div className="App">

      <header className="App-header">
      </header>
      <div className="tituloequipos">PRODE MUNDIAL 2022</div>
      <Ganador />
      <Desilusion />
      <Revelacion />
      <Lamentable />
      <Goleadores />
      <Partidos />
      <Octavos />
      <Cuartos />
      <Semis />
      <Final />
      <div className='divsubmit'>
        <label>Nombre:</label><br />
        <input
          name="usuario"
          type="text"
        /* onChange={this.handleInputChange} */ />
        <br />
        <label>Liga:</label><br />
        <input
          name="usuario"
          type="text"
        /* onChange={this.handleInputChange} */ />

        <button className='bidsubmitbutton' onClick={ctx.submitForm}> ENVIAR </button>
      </div>



    </div >

  );
}

export default App;
