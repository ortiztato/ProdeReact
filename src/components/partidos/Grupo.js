/* import React, { useState } from 'react'; */

import classes from './Partidos.module.css'
import Partido from './partido'

const Grupo = (props) => {

    return (

        <div className={classes.grupo}>
            <div className={classes.titulogrupo}>{props.name}</div>
            <Partido equipo1={props.equipo1} equipo2={props.equipo2} />
            <Partido equipo1={props.equipo3} equipo2={props.equipo4} />
            <Partido equipo1={props.equipo1} equipo2={props.equipo3} />
            <Partido equipo1={props.equipo2} equipo2={props.equipo4} />
            <Partido equipo1={props.equipo1} equipo2={props.equipo4} />
            <Partido equipo1={props.equipo2} equipo2={props.equipo3} />
        </div>

    )



}

export default Grupo

