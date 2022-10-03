import React, { useState, useEffect } from 'react';

import classes from './Partidos.module.css'
import Partido from './partido'

const Grupo = (props) => {

    const id1 = (+props.id - 1) * 18 + 1
    const id2 = (+props.id - 1) * 18 + 4
    const id3 = (+props.id - 1) * 18 + 7
    const id4 = (+props.id - 1) * 18 + 10
    const id5 = (+props.id - 1) * 18 + 13
    const id6 = (+props.id - 1) * 18 + 16

    /* const [okGrupo, setOkgrupo] = useState(false); */
    const [partido1, setPartido1] = useState([]);
    const [partido2, setPartido2] = useState([]);
    const [partido3, setPartido3] = useState([]);
    const [partido4, setPartido4] = useState([]);
    const [partido5, setPartido5] = useState([]);
    const [partido6, setPartido6] = useState([]);
    const [seleccionGrupo, setSeleccionGrupo] = useState([]);

    const setPartidoHandler1 = (partido) => {
        setPartido1(partido)
    }
    const setPartidoHandler2 = (partido) => {
        setPartido2(partido)
    }
    const setPartidoHandler3 = (partido) => {
        setPartido3(partido)
    }
    const setPartidoHandler4 = (partido) => {
        setPartido4(partido)
    }
    const setPartidoHandler5 = (partido) => {
        setPartido5(partido)
    }
    const setPartidoHandler6 = (partido) => {
        setPartido6(partido)
    }


    /* const addPartidos = (partido1, partido2, partido3, partido4, partido5, partido6) => {
        let arr = [];
        arr.push(partido1);
        arr.push(partido2);
        arr.push(partido3);
        arr.push(partido4);
        arr.push(partido5);
        arr.push(partido6);
        arr.filter(n => n)
        setSeleccionGrupo(arr)
    } */

    const addPartidos = (partido1, partido2, partido3, partido4, partido5, partido6) => {
        let arr = [];
        partido1.map((item) => arr.push(item))
        partido2.map((item) => arr.push(item))
        partido3.map((item) => arr.push(item))
        partido4.map((item) => arr.push(item))
        partido5.map((item) => arr.push(item))
        partido6.map((item) => arr.push(item))
        arr.filter(n => n)
        setSeleccionGrupo(arr)
    }

    useEffect(() => {
        addPartidos(partido1, partido2, partido3, partido4, partido5, partido6)
    }, [partido1, partido2, partido3, partido4, partido5, partido6])



    return (

        <div className={classes.grupo}>
            <div className={classes.titulogrupo}>{props.name}
                <div className={classes.emojigrupoo}>{'   '}
                    {seleccionGrupo.length > 0 && seleccionGrupo.length < 7 && '🟡'}
                    {seleccionGrupo.length === 6 && 'está el doble?​'}
                    {seleccionGrupo.length === 7 && '🟢​'}
                    {seleccionGrupo.length > 7 && '🔴​ excedido​'}</div></div>
            <Partido equipo1={props.equipo1} equipo2={props.equipo2} id={id1} setPartidoHandler={setPartidoHandler1} />
            <Partido equipo1={props.equipo3} equipo2={props.equipo4} id={id2} setPartidoHandler={setPartidoHandler2} />
            <Partido equipo1={props.equipo1} equipo2={props.equipo3} id={id3} setPartidoHandler={setPartidoHandler3} />
            <Partido equipo1={props.equipo2} equipo2={props.equipo4} id={id4} setPartidoHandler={setPartidoHandler4} />
            <Partido equipo1={props.equipo1} equipo2={props.equipo4} id={id5} setPartidoHandler={setPartidoHandler5} />
            <Partido equipo1={props.equipo2} equipo2={props.equipo3} id={id6} setPartidoHandler={setPartidoHandler6} />
        </div>

    )



}

export default Grupo

