import React, { useState, useEffect } from "react";

import classes from "./Partidos.module.css";
import Partido from "./partido";
import Card from "../../UI/Card";

const Grupo = (props) => {
  const id1 = (+props.id - 1) * 18 + 1;
  const id2 = (+props.id - 1) * 18 + 4;
  const id3 = (+props.id - 1) * 18 + 7;
  const id4 = (+props.id - 1) * 18 + 10;
  const id5 = (+props.id - 1) * 18 + 13;
  const id6 = (+props.id - 1) * 18 + 16;

  const id11 = (+props.id - 1) * 6 + 1;
  const id22 = (+props.id - 1) * 6 + 2;
  const id33 = (+props.id - 1) * 6 + 3;
  const id44 = (+props.id - 1) * 6 + 4;
  const id55 = (+props.id - 1) * 6 + 5;
  const id66 = (+props.id - 1) * 6 + 6;

  const [partido1, setPartido1] = useState([]);
  const [partido2, setPartido2] = useState([]);
  const [partido3, setPartido3] = useState([]);
  const [partido4, setPartido4] = useState([]);
  const [partido5, setPartido5] = useState([]);
  const [partido6, setPartido6] = useState([]);
  const [partido1ok, setPartido1ok] = useState(false);
  const [partido2ok, setPartido2ok] = useState(false);
  const [partido3ok, setPartido3ok] = useState(false);
  const [partido4ok, setPartido4ok] = useState(false);
  const [partido5ok, setPartido5ok] = useState(false);
  const [partido6ok, setPartido6ok] = useState(false);
  const [grupoOk, setGrupoOk] = useState(false);
  const [seleccionGrupo, setSeleccionGrupo] = useState([]);
  const [grupoLength, setGrupoLength] = useState([]);

  const setPartidoHandler1 = (partido, partidoOk) => {
    setPartido1(partido);
    setPartido1ok(partidoOk);
  };
  const setPartidoHandler2 = (partido, partidoOk) => {
    setPartido2(partido);
    setPartido2ok(partidoOk);
  };
  const setPartidoHandler3 = (partido, partidoOk) => {
    setPartido3(partido);
    setPartido3ok(partidoOk);
  };
  const setPartidoHandler4 = (partido, partidoOk) => {
    setPartido4(partido);
    setPartido4ok(partidoOk);
  };
  const setPartidoHandler5 = (partido, partidoOk) => {
    setPartido5(partido);
    setPartido5ok(partidoOk);
  };
  const setPartidoHandler6 = (partido, partidoOk) => {
    setPartido6(partido);
    setPartido6ok(partidoOk);
  };

  // VERSION INPUT EN UN ARRAY CONTENIENDO ARRAYS
  const addPartidos = (
    partido1,
    partido2,
    partido3,
    partido4,
    partido5,
    partido6
  ) => {
    let arr = [];
    arr.push(partido1);
    arr.push(partido2);
    arr.push(partido3);
    arr.push(partido4);
    arr.push(partido5);
    arr.push(partido6);
    arr.filter((n) => n); //probar de comentarla que cambia
    setSeleccionGrupo(arr);
  };

  const countPartidos = (
    partido1,
    partido2,
    partido3,
    partido4,
    partido5,
    partido6
  ) => {
    let arr = [];
    partido1.map((item) => arr.push(item));
    partido2.map((item) => arr.push(item));
    partido3.map((item) => arr.push(item));
    partido4.map((item) => arr.push(item));
    partido5.map((item) => arr.push(item));
    partido6.map((item) => arr.push(item));
    arr.filter((n) => n);
    let arrlength = arr.length;
    setGrupoLength(arrlength);
  };

  useEffect(() => {
    addPartidos(partido1, partido2, partido3, partido4, partido5, partido6);
    countPartidos(partido1, partido2, partido3, partido4, partido5, partido6);
  }, [partido1, partido2, partido3, partido4, partido5, partido6]);

  useEffect(() => {
    if (
      partido1ok &&
      partido2ok &&
      partido3ok &&
      partido4ok &&
      partido5ok &&
      partido6ok &&
      grupoLength === 7
    ) {
      setGrupoOk(true);
    } else {
      setGrupoOk(false);
    }
  }, [
    partido1ok,
    partido2ok,
    partido3ok,
    partido4ok,
    partido5ok,
    partido6ok,
    seleccionGrupo,
  ]);

  useEffect(() => {
    props.setGrupoHandler(seleccionGrupo, grupoOk, +props.id);
  }, [grupoOk]);

  useEffect(() => {
    const prodes = props.prodes;
  }, [props]);

  return (
    <Card>
      <div className={classes.grupo}>
        <div className={classes.titulogrupo}>
          {props.name}
          <div className={classes.emojigrupoo}>
            {"   "}
            {grupoLength > 0 && grupoLength < 7 && "🟡"}
            {grupoLength === 6 && "está el doble?​"}
            {grupoLength === 7 && grupoOk && "🟢​"}
            {grupoLength === 7 &&
              !grupoOk &&
              "🔴​ algun partido esta mal amigo"}
            {grupoLength > 7 && "🔴​ excedido​"}
          </div>
        </div>
        <Partido
          equipo1={props.equipo1}
          equipo2={props.equipo2}
          id={id1}
          id2={id11}
          setPartidoHandler={setPartidoHandler1}
          prodes={props.prodes}
        />
        <Partido
          equipo1={props.equipo3}
          equipo2={props.equipo4}
          id={id2}
          id2={id22}
          setPartidoHandler={setPartidoHandler2}
          prodes={props.prodes}
        />
        <Partido
          equipo1={props.equipo1}
          equipo2={props.equipo3}
          id={id3}
          id2={id33}
          setPartidoHandler={setPartidoHandler3}
          prodes={props.prodes}
        />
        <Partido
          equipo1={props.equipo2}
          equipo2={props.equipo4}
          id={id4}
          id2={id44}
          setPartidoHandler={setPartidoHandler4}
          prodes={props.prodes}
        />
        <Partido
          equipo1={props.equipo1}
          equipo2={props.equipo4}
          id={id5}
          id2={id55}
          setPartidoHandler={setPartidoHandler5}
          prodes={props.prodes}
        />
        <Partido
          equipo1={props.equipo2}
          equipo2={props.equipo3}
          id={id6}
          id2={id66}
          setPartidoHandler={setPartidoHandler6}
          prodes={props.prodes}
        />
      </div>
    </Card>
  );
};

export default Grupo;
