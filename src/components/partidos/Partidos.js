/* import React, { useState } from 'react'; */
import Grupo from "./Grupo";
import classes from "./Partidos.module.css";

import { useContext, useEffect, useState } from "react";
import InputsContext from "../../store/inputs-context";
import { useParams } from "react-router-dom";

const Partidos = () => {
  const Grupos = [
    {
      id: "1",
      name: "Grupo A",
      equipo1: "Qatar",
      equipo2: "Ecuador",
      equipo3: "Senegal",
      equipo4: "Holanda",
    },
    {
      id: "2",
      name: "Grupo B",
      equipo1: "Inglaterra",
      equipo2: "Iran",
      equipo3: "USA",
      equipo4: "Gales",
    },
    {
      id: "3",
      name: "Grupo C",
      equipo1: "Argentina",
      equipo2: "Arabia",
      equipo3: "Mexico",
      equipo4: "Polonia",
    },
    {
      id: "4",
      name: "Grupo D",
      equipo1: "Francia",
      equipo2: "Australia",
      equipo3: "Dinamarca",
      equipo4: "Tunez",
    },
    {
      id: "5",
      name: "Grupo E",
      equipo1: "España",
      equipo2: "Costa Rica",
      equipo3: "Alemania",
      equipo4: "Japon",
    },
    {
      id: "6",
      name: "Grupo F",
      equipo1: "Belgica",
      equipo2: "Canada",
      equipo3: "Marruecos",
      equipo4: "Croacia",
    },
    {
      id: "7",
      name: "Grupo G",
      equipo1: "Brasil",
      equipo2: "Serbia",
      equipo3: "Suiza",
      equipo4: "Camerun",
    },
    {
      id: "8",
      name: "Grupo H",
      equipo1: "Portugal",
      equipo2: "Ghana",
      equipo3: "Uruguay",
      equipo4: "Corea",
    },
  ];

  const ctx = useContext(InputsContext);
  const params = useParams();

  const [prodes, setProdes] = useState([]);

  const [grupo1, setGrupo1] = useState([]);
  const [grupo2, setGrupo2] = useState([]);
  const [grupo3, setGrupo3] = useState([]);
  const [grupo4, setGrupo4] = useState([]);
  const [grupo5, setGrupo5] = useState([]);
  const [grupo6, setGrupo6] = useState([]);
  const [grupo7, setGrupo7] = useState([]);
  const [grupo8, setGrupo8] = useState([]);
  const [grupo1ok, setGrupo1OK] = useState(false);
  const [grupo2ok, setGrupo2OK] = useState(false);
  const [grupo3ok, setGrupo3OK] = useState(false);
  const [grupo4ok, setGrupo4OK] = useState(false);
  const [grupo5ok, setGrupo5OK] = useState(false);
  const [grupo6ok, setGrupo6OK] = useState(false);
  const [grupo7ok, setGrupo7OK] = useState(false);
  const [grupo8ok, setGrupo8OK] = useState(false);
  const [seleccionGrupo, setSeleccionGrupo] = useState([]);
  const [partidosOK, setPartidosOk] = useState(false);
  const [modoUser, setModoUser] = useState(false);

  const setGrupoHandler1 = (inputGrupo, grupoOK, id) => {
    if (id === 1) {
      setGrupo1(inputGrupo);
      setGrupo1OK(grupoOK);
    }
    if (id === 2) {
      setGrupo2(inputGrupo);
      setGrupo2OK(grupoOK);
    }
    if (id === 3) {
      setGrupo3(inputGrupo);
      setGrupo3OK(grupoOK);
    }
    if (id === 4) {
      setGrupo4(inputGrupo);
      setGrupo4OK(grupoOK);
    }
    if (id === 5) {
      setGrupo5(inputGrupo);
      setGrupo5OK(grupoOK);
    }
    if (id === 6) {
      setGrupo6(inputGrupo);
      setGrupo6OK(grupoOK);
    }
    if (id === 7) {
      setGrupo7(inputGrupo);
      setGrupo7OK(grupoOK);
    }
    if (id === 8) {
      setGrupo8(inputGrupo);
      setGrupo8OK(grupoOK);
    }
  };

  const addGrupos = (
    grupo1,
    grupo2,
    grupo3,
    grupo4,
    grupo5,
    grupo6,
    grupo7,
    grupo8
  ) => {
    let arr = [];
    grupo1.map((item) => arr.push(item));
    grupo2.map((item) => arr.push(item));
    grupo3.map((item) => arr.push(item));
    grupo4.map((item) => arr.push(item));
    grupo5.map((item) => arr.push(item));
    grupo6.map((item) => arr.push(item));
    grupo7.map((item) => arr.push(item));
    grupo8.map((item) => arr.push(item));
    arr.filter((n) => n);
    setSeleccionGrupo(arr);
  };

  useEffect(() => {
    addGrupos(grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8);
    if (params.usuario) {
      setModoUser(true);
    }
  }, [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8]);

  useEffect(() => {
    if (
      grupo1ok &&
      grupo2ok &&
      grupo3ok &&
      grupo4ok &&
      grupo5ok &&
      grupo6ok &&
      grupo7ok &&
      grupo8ok
    ) {
      setPartidosOk(true);
    } else {
      setPartidosOk(false);
    }
  }, [
    grupo1ok,
    grupo2ok,
    grupo3ok,
    grupo4ok,
    grupo5ok,
    grupo6ok,
    grupo7ok,
    grupo8ok,
  ]);

  useEffect(() => {
    if (partidosOK) {
      ctx.partidos(seleccionGrupo);
    } else {
      ctx.partidos();
    }
  }, [partidosOK]);

  async function fetchProdes() {
    if (params.usuario) {
      console.log("buscando prodes");

      // const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
      const response = await fetch(process.env.REACT_APP_BACKEND_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch quotes.");
      }
      let prodes1 = [];

      // prodes1 = Object.entries(data)
      prodes1 = data.body;
      setProdes(prodes1);

      console.log(prodes);
    }
  }

  useEffect(() => {
    fetchProdes();
  }, []);

  /* validacion original del total
     useEffect(() => {
        if (seleccionGrupo.length === 56) {
            ctx.partidos(seleccionGrupo)
        }
        else { ctx.partidos() }
    }, [seleccionGrupo]) */

  return (
    <section className={classes.sectionequipos}>
      <div className={classes.subtituloequipos}>Partidos</div>

      <div>
        {modoUser ? (
          <div></div>
        ) : (
          <div id="reglascampeon" className={classes.reglas}>
            Seleccioná quien gana o si es empate.
            <br />
            Entrega <strong>2 puntos</strong> por cada acierto. <br /> Tenes 7
            elecciones por grupo (una doble eleccion en algun partido del grupo)
          </div>
        )}

        <div className={classes.grid}>
          {Grupos.map((key) => (
            <Grupo
              id={key.id}
              name={key.name}
              equipo1={key.equipo1}
              equipo2={key.equipo2}
              equipo3={key.equipo3}
              equipo4={key.equipo4}
              setGrupoHandler={setGrupoHandler1}
              prodes={prodes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partidos;
