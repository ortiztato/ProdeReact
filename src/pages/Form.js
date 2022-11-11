
import '../App.css';

import undefinedInputsicon from "../assets/xcircle.svg";
import InputsOkicon from "../assets/check.svg"

import Desilusion from '../components/Desilusion/Desilusion';
import Ganador from '../components/Ganador/ganador';
import Goleadores from '../components/Goleadores/Goleadores';
import Lamentable from '../components/Lamentable/Lamentable';
import Partidos from '../components/partidos/Partidos';
import Revelacion from '../components/Revelacion/Revelacion';
import Octavos from '../components/Octavos/Octavos';
import Semis from '../components/Semis/Semis';
import Cuartos from '../components/Cuartos/Cuartos';
import Final from '../components/Final/Final';

import Modal from '../UI/Modal';



import InputsContext from '../store/inputs-context';
import React, { useContext, useState } from 'react';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
/* import { useRouter } from 'next/router' */



function Form() {

    const ctx = useContext(InputsContext);

    const [modal, setModal] = useState();
    const [liga, setLiga] = useState();

    const nombreHandler = (event) => {
        ctx.nombre(event.target.value);
    };

    const ligaHandler = (event) => {
        const ligaTrim = event.target.value.trim().toLowerCase()
        setLiga(ligaTrim)
        ctx.liga(ligaTrim);
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

    /* const router = useRouter() */

    const history = useHistory();



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
        /*  router.push('/home') */


    };

    const modalHandler = () => {
        /* history.push("/home"); */
        setModal(null);
        if (ctx.undefinedInputs === 0) {
            history.push(`/ligas/${liga}`);
        }
        /* history.push("/home"); */
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
                {/* <input
                    name="usuario"
                    type="text"
                    onChange={ligaHandler} /> */}
                <select className='select' onChange={ligaHandler}>
                    <option></option>
                    <option>LigaPrueba</option>
                    <option>Superleague</option>
                    <option>Halcon</option>
                </select>

                {ctx.undefinedInputs === 0 /* cambiar esto despues */ ? <button className='bidsubmitbutton' onClick={submitOK}> ENVIAR </button> : <button className='bidsubmitbuttonerror' onClick={submitError}> ENVIAR </button>}

            </div>
            <div className='undefinedInputsicon'>
                {ctx.undefinedInputs !== 0
                    ? <div> <br /> <img src={undefinedInputsicon} alt="undefinedInputs" /> <br /> {ctx.undefinedInputs} <br /> </div>
                    : <div> <br /> <img src={InputsOkicon} alt="InputsOK" /> </div>
                }

            </div>
            {/* <div className='iraligas' >
                ir a  <Link to={`/ligas/`}>LIGAS</Link>
            </div> */}

        </div >

    );
}

export default Form;