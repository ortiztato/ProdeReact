import ItemGanador from "./ItemGanador";
import { Transition } from "react-transition-group/";

import InputsContext from "../../store/inputs-context";
import React, { useState, useContext } from 'react';


const Ganador = () => {

    const equiposganadores = [
        {
            id: 'e1',
            name: 'Brasil'
        },
        {
            id: 'e2',
            name: 'Francia'
        },
        {
            id: 'e3',
            name: 'Inglaterra'
        },
        {
            id: 'e4',
            name: 'España'
        },
        {
            id: 'e5',
            name: 'Argentina'
        },
        {
            id: 'e6',
            name: 'Alemania'
        },
        {
            id: 'e7',
            name: 'Holanda'
        },
        {
            id: 'e8',
            name: 'Belgica'
        },
        {
            id: 'e9',
            name: 'Portugal'
        },
        {
            id: 'e10',
            name: 'Dinamarca'
        }, {
            id: 'e11',
            name: 'Senegal'
        }, {
            id: 'e12',
            name: 'Croacia'
        }, {
            id: 'e13',
            name: 'Uruguay'
        }, {
            id: 'e14',
            name: 'Suiza'
        }, {
            id: 'e15',
            name: 'USA'
        }, {
            id: 'e16',
            name: 'Serbia'
        }, {
            id: 'e17',
            name: 'Mexico'
        }, {
            id: 'e18',
            name: 'Polonia'
        }, {
            id: 'e19',
            name: 'Qatar'
        }, {
            id: 'e20',
            name: 'Gales'
        }, {
            id: 'e21',
            name: 'Ghana'
        }, {
            id: 'e22',
            name: 'Camerun'
        }, {
            id: 'e23',
            name: 'Ecuador'
        }, {
            id: 'e24',
            name: 'Canada'
        }, {
            id: 'e25',
            name: 'Japon'
        }, {
            id: 'e26',
            name: 'Corea'
        }, {
            id: 'e27',
            name: 'Australia'
        }, {
            id: 'e28',
            name: 'Iran'
        }, {
            id: 'e29',
            name: 'Marruecos'
        }, {
            id: 'e30',
            name: 'Arabia'
        }, {
            id: 'e31',
            name: 'Tunez'
        }, {
            id: 'e32',
            name: 'Costa Rica'
        },

    ]
    const ctx = useContext(InputsContext);

    const [equipoGanador, setEquipoGanador] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setEquipoGanador(equipoSelected);
        ctx.ganador(equipoSelected);
    };

    const editarCampeon = () => {
        setEquipoGanador();
        ctx.ganador();

    }




    return (
        <section className="sectionequipos">

            <div className="subtituloequipos">Equipo Ganador <span className="resultadocampeon">{equipoGanador}</span>
                {equipoGanador && <span className="editar" onClick={editarCampeon}>editar</span>}
            </div>

            <Transition in={!equipoGanador} timeout={200} mountOnEnter unmountOnExit>
                {state => (
                    <div style={{
                        transition: 'opacity 0.6s',
                        opacity: state === 'entered' ? 1 : 0
                    }}>
                        <div id="reglascampeon" className="reglas">
                            Elegí el equipo campeón del mundial, según su resultado entrega los siguientes puntos: <div className="puntos">
                                <br /> 1ro: 13 <br /> 2do: 10 <br /> 3ro: 8 <br /> 4to: 6 <br /> 5tos: 4 <br /> 9nos:
                                2 <br />17mos: 0 <br /> 25tos: 0
                            </div>
                            Seleccioná tu equipo:
                        </div>
                        <div className="grid">

                            {equiposganadores.map((key) => (
                                <ItemGanador
                                    name={key.name}
                                    key={key.id}
                                    onEquipoClick={equipoSelectHandler}
                                />
                            ))}
                        </div>
                    </div>
                )}</Transition>

        </section >
    );
};

export default Ganador;