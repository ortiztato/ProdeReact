/* import React, { useState } from 'react'; */
import Grupo from './Grupo';
import classes from './Partidos.module.css'

const Partidos = () => {

    const Grupos = [

        {
            id: '1',
            name: 'Grupo A',
            equipo1: 'Qatar',
            equipo2: 'Ecuador',
            equipo3: 'Senegal',
            equipo4: 'Holanda',
        },
        {
            id: '2',
            name: 'Grupo B',
            equipo1: 'Inglaterra',
            equipo2: 'Iran',
            equipo3: 'USA',
            equipo4: 'Gales',
        },
        {
            id: '3',
            name: 'Grupo C',
            equipo1: 'Argentina',
            equipo2: 'Arabia',
            equipo3: 'Mexico',
            equipo4: 'Polonia',
        },
        {
            id: '4',
            name: 'Grupo D',
            equipo1: 'Francia',
            equipo2: 'Australia',
            equipo3: 'Dinamarca',
            equipo4: 'Tunez',
        },
        {
            id: '5',
            name: 'Grupo E',
            equipo1: 'España',
            equipo2: 'Costa Rica',
            equipo3: 'Alemania',
            equipo4: 'Japon',
        },
        {
            id: '6',
            name: 'Grupo F',
            equipo1: 'Belgica',
            equipo2: 'Canada',
            equipo3: 'Marruecos',
            equipo4: 'Croacia',
        },
        {
            id: '7',
            name: 'Grupo G',
            equipo1: 'Brasil',
            equipo2: 'Serbia',
            equipo3: 'Suiza',
            equipo4: 'Camerun',
        },
        {
            id: '8',
            name: 'Grupo H',
            equipo1: 'Portugal',
            equipo2: 'Ghana',
            equipo3: 'Uruguay',
            equipo4: 'Corea',
        },

    ]


    return (
        <section className={classes.sectionequipos}>
            <div className={classes.subtituloequipos}>Partidos
            </div>

            <div>
                <div id="reglascampeon" className={classes.reglas}>
                    Seleccioná quien gana o si es empate.<br />Entrega <strong>2 puntos</strong> por cada acierto. <br /> Tenes 7 elecciones por grupo (una doble eleccion en algun partido del grupo)
                </div>

                <div className={classes.grid}>

                    {Grupos.map((key) => (
                        <Grupo
                            id={key.id}
                            name={key.name}
                            equipo1={key.equipo1}
                            equipo2={key.equipo2}
                            equipo3={key.equipo3}
                            equipo4={key.equipo4}


                        />

                    ))}

                </div>
            </div>




        </section>
    );
}

export default Partidos