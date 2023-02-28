import "../App.css";

import undefinedInputsicon from "../assets/xcircle.svg";
import InputsOkicon from "../assets/check.svg";

import Desilusion from "../components/Desilusion/Desilusion";
import Ganador from "../components/Ganador/ganador";
import Goleadores from "../components/Goleadores/Goleadores";
import Lamentable from "../components/Lamentable/Lamentable";
import Partidos from "../components/partidos/Partidos";
import Revelacion from "../components/Revelacion/Revelacion";
import Octavos from "../components/Octavos/Octavos";
import Semis from "../components/Semis/Semis";
import Cuartos from "../components/Cuartos/Cuartos";
import Final from "../components/Final/Final";
<<<<<<< HEAD

import Modal from "../UI/Modal";

import InputsContext from "../store/inputs-context";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

=======

import Modal from "../UI/Modal";

import InputsContext from "../store/inputs-context";
import React, { useContext, useState } from "react";
import { Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
/* import { useRouter } from 'next/router' */

>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
function Form() {
  const ctx = useContext(InputsContext);

  const [modal, setModal] = useState();
  const [liga, setLiga] = useState();
  const [userExists, setUserExists] = useState();

  const nombreHandler = async (event) => {
    console.log("buscando prodes");

<<<<<<< HEAD
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/names`);
=======
    const response = await fetch(process.env.BACKEND_URL + "/names");
>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quotes.");
    }

    let prodes = [];
    prodes = data.body;

    let arr = [];

    prodes.map((key) => arr.push(key.Nombre));
    const User = event.target.value;
    let Exists = arr.includes(User);
    console.log("User is included? " + Exists);

    if (Exists) {
      setUserExists(true);
      ctx.nombre();
    } else {
      setUserExists(false);
      ctx.nombre(event.target.value);
    }
<<<<<<< HEAD
  };

  const ligaHandler = (event) => {
    const ligaTrim = event.target.value.trim().toLowerCase();
    setLiga(ligaTrim);
    ctx.liga(ligaTrim);
  };

  const history = useHistory();

  const submitOK = () => {
    setModal({
      content: "el PRODE fue enviado correctamente",
    });
    ctx.submitForm();
  };

  const submitError = () => {
    setModal({
      content: "faltan campos por completar",
    });
  };

  const modalHandler = () => {
    setModal(null);
    if (ctx.undefinedInputs === 0) {
      history.push(`/ligas/${liga}`);
    }
  };

  const alertaVencido = () => {
    alert("Fecha limite de presentacion expirada");
  };

  return (
    <div className="App">
      {modal && <Modal content={modal.content} onConfirm={modalHandler} />}

=======

    // ctx.nombre(event.target.value);
  };

  const ligaHandler = (event) => {
    const ligaTrim = event.target.value.trim().toLowerCase();
    setLiga(ligaTrim);
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
      content: "el PRODE fue enviado correctamente",
    });
    ctx.submitForm();
  };

  const submitError = () => {
    setModal({
      content: "faltan campos por completar",
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

  const alertaVencido = () => {
    alert("Fecha limite de presentacion expirada");
  };

  return (
    <div className="App">
      {modal && <Modal content={modal.content} onConfirm={modalHandler} />}

>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
      <header className="App-header"></header>
      <div className="tituloprode">
        PRODE <br /> MUNDIAL <br /> 2022
      </div>
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
      <div className="divsubmit">
        <label>
          Nombre:{" "}
          <span className="errorNombre">
            {userExists ? "Nombre ya utilizado!" : ""}
          </span>
        </label>
        <br />
        <input
          name="usuario"
          type="text"
          onChange={nombreHandler}
          autoComplete="off"
        />
        <br />
        <label>Liga:</label>
        <br />
        {/* <input
                    name="usuario"
                    type="text"
                    onChange={ligaHandler} /> */}
        <select className="select" onChange={ligaHandler}>
          <option></option>
          <option>LigaPrueba</option>
          {/* <option>Paloma Grosor</option>
                    <option>Halcon</option>
                    <option>Dotras</option>
                    <option>Balanz</option>
                    <option>Calis Bitches</option>
                    <option>Chaja</option>
                    <option>LFG</option> */}
          {/* <option>Romero Campeon</option> */}
        </select>

        {ctx.undefinedInputs === 0 /* cambiar esto despues */ ? (
          <button className="bidsubmitbutton" onClick={submitOK}>
            {" "}
            ENVIAR{" "}
          </button>
        ) : (
          <button className="bidsubmitbuttonerror" onClick={submitError}>
            {" "}
            ENVIAR{" "}
          </button>
        )}
      </div>
      <div className="undefinedInputsicon">
        {ctx.undefinedInputs !== 0 ? (
          <div>
            {" "}
            <br /> <img src={undefinedInputsicon} alt="undefinedInputs" />{" "}
            <br />
            faltan {ctx.undefinedInputs} <br />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <br /> <img src={InputsOkicon} alt="InputsOK" />{" "}
          </div>
        )}
      </div>
<<<<<<< HEAD
=======

      {/* <div className='iraligas' >
                ir a  <Link to={`/ligas/`}>LIGAS</Link>
            </div> */}
>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
    </div>
  );
}

export default Form;
<<<<<<< HEAD
=======

// funcion original
// {ctx.undefinedInputs === 0 /* cambiar esto despues */ ? <button className='bidsubmitbutton' onClick={submitOK}> ENVIAR </button> : <button className='bidsubmitbuttonerror' onClick={submitError}> ENVIAR </button>}
>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
