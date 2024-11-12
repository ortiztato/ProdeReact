import classes from "./Ligas.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Partidos from "../components/partidos/Partidos";

const Usuario = () => {
  const params = useParams();

  let prodes = [];
  const [inputGanador, setInputGanador] = useState();
  const [inputDesilusion, setInputDesilusion] = useState();
  const [inputRevelacion, setInputRevelacion] = useState();
  const [inputLamentable, setInputLamentable] = useState();
  const [inputGoleadores, setInputGoleadores] = useState([]);
  const [inputPartidos, setInputPartidos] = useState([]);
  const [inputOctavos, setInputOctavos] = useState([]);
  const [inputCuartos, setInputCuartos] = useState([]);
  const [inputSemis, setInputSemis] = useState([]);
  const [inputFinal, setInputFinal] = useState([]);
  const [GanadorPtos, setGanadorPtos] = useState();
  const [DesilusionPtos, setDesilusionPtos] = useState();
  const [LamentablePtos, setLamentablePtos] = useState();
  const [RevelacionPtos, setRevelacionPtos] = useState();
  const [OctavosPtos, setOctavosPtos] = useState();
  const [CuartosPtos, setCuartosPtos] = useState();
  const [SemisPtos, setSemisPtos] = useState();
  const [FinalPtos, setFinalPtos] = useState();
  const [GoleadoresPtos, setGoleadoresPtos] = useState();
  const [PartidosPtos, setPartidosPtos] = useState();
  const [TotalPtos, setTotalPtos] = useState();

  useEffect(() => {
    fetchInputs();
  }, []);

  async function fetchInputs() {
    console.log("buscando prodes");

    const response = await fetch(process.env.REACT_APP_BACKEND_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quotes.");
    }

    prodes = data.body;
    console.log(prodes);
    console.log(params.usuario);

    prodes.map((key) => {
      if (key.Nombre === params.usuario) {
        console.log("hay coincidencia");
        console.log(key.Partidos);

        setInputGanador(key.Ganador);
        setInputDesilusion(key.Desilusion);
        setInputRevelacion(key.Revelacion);
        setInputLamentable(key.Lamentable);
        setInputGoleadores(key.Goleadores);
        setInputPartidos(key.Partidos);
        setInputOctavos(key.Octavos);
        setInputCuartos(key.Cuartos);
        setInputSemis(key.Semis);
        setInputFinal(key.Final);
        setGanadorPtos(key.GanadorPtos);
        setDesilusionPtos(key.DesilusionPtos);
        setLamentablePtos(key.LamentablePtos);
        setRevelacionPtos(key.RevelacionPtos);
        setOctavosPtos(key.OctavosPtos);
        setCuartosPtos(key.CuartosPtos);
        setSemisPtos(key.SemisPtos);
        setFinalPtos(key.FinalPtos);
        setGoleadoresPtos(key.GoleadoresPtos);
        setPartidosPtos(key.PartidosPtos);
        setTotalPtos(key.TotalPtos);
      }
    });
  }

  return (
    <div className={classes.ligaPage}>
      <div className={classes.tituloLiga}>{params.usuario}</div>
      <div className={classes.inputsItem}>
        <div className={classes.tituloPuntosUsuario}>
          {" "}
          <strong>Total Puntos: {TotalPtos}</strong>{" "}
        </div>
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Ganador:</strong> {inputGanador}
          </div>
          <div className={classes.puntajeItemUsuario}>{GanadorPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Desilusion:</strong> {inputDesilusion}
          </div>
          <div className={classes.puntajeItemUsuario}>{DesilusionPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Revelacion:</strong> {inputRevelacion}
          </div>
          <div className={classes.puntajeItemUsuario}>{RevelacionPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Lamentable:</strong> {inputLamentable}
          </div>
          <div className={classes.puntajeItemUsuario}>{LamentablePtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Goleadores:</strong>{" "}
            {inputGoleadores.map((key) => (
              <span>{key}, </span>
            ))}{" "}
          </div>
          <div className={classes.puntajeItemUsuario}>{GoleadoresPtos}</div>
        </div>
        <br />
        <Partidos />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Puntos Partidos:</strong>
          </div>
          <div>{PartidosPtos}</div>
        </div>
        <hr />

        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Octavos:</strong>{" "}
            {inputOctavos.map((key) => (
              <span>{key} </span>
            ))}{" "}
          </div>
          <div className={classes.puntajeItemUsuario}>{OctavosPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Cuartos:</strong>{" "}
            {inputCuartos.map((key) => (
              <span>{key} </span>
            ))}{" "}
          </div>
          <div className={classes.puntajeItemUsuario}>{CuartosPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Semis:</strong>{" "}
            {inputSemis.map((key) => (
              <span>{key} </span>
            ))}{" "}
          </div>
          <div className={classes.puntajeItemUsuario}>{SemisPtos}</div>
        </div>
        <hr />
        <div className={classes.containerPuntaje}>
          <div>
            {" "}
            <strong>Final:</strong>{" "}
            {inputFinal.map((key) => (
              <span>{key} </span>
            ))}{" "}
          </div>
          <div className={classes.puntajeItemUsuario}>{FinalPtos}</div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
