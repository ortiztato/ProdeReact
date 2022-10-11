
import './App.css';

import undefinedInputsicon from "./assets/xcircle.svg";
import InputsOkicon from "./assets/check.svg"

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

import Modal from './UI/Modal';



import InputsContext from './store/inputs-context';
import React, { useContext, useState } from 'react';



function App() {

  const ctx = useContext(InputsContext);

  const [modal, setModal] = useState();

  const nombreHandler = (event) => {
    ctx.nombre(event.target.value);
  };

  const ligaHandler = (event) => {
    ctx.liga(event.target.value);
  };

  /* const submitForm = () => {
    if (ctx.undefinedInputs !== 10) {
      setModal({
        content: 'faltan campos por completar',
      });
    }
    else {
      setModal({
        content: 'el PRODE fue enviado correctamente',
      });
    }

  }; */

  const submitOK = () => {


    setModal({
      content: 'el PRODE fue enviado correctamente',
    });
    ctx.submitForm();

  };


  const submitError = () => {
    setModal({
      content: 'faltan campos por completar',
    });

  };

  const modalHandler = () => {
    setModal(null);
  };



  return (
    <div className="App">
      {modal && (
        <Modal
          content={modal.content}
          onConfirm={modalHandler}
        />
      )}

      <header className="App-header">
      </header>
      <div className="tituloprode">PRODE <br /> MUNDIAL <br /> 2022</div>
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
          onChange={nombreHandler} />
        <br />
        <label>Liga:</label><br />
        <input
          name="usuario"
          type="text"
          onChange={ligaHandler} />

        {ctx.undefinedInputs === 0 ? <button className='bidsubmitbutton' onClick={submitOK}> ENVIAR </button> : <button className='bidsubmitbuttonerror' onClick={submitError}> ENVIAR </button>}

      </div>
      <div className='undefinedInputsicon'>
        {ctx.undefinedInputs !== 0
          ? <div> <br /> <img src={undefinedInputsicon} alt="undefinedInputs" /> <br /> {ctx.undefinedInputs} <br /> </div>
          : <div> <br /> <img src={InputsOkicon} alt="InputsOK" /> </div>
        }

      </div>




    </div >

  );
}

export default App;
