import ItemDesilusion from "./ItemDesilusion";

import React, { useState } from 'react';

import { Transition } from "react-transition-group/";


const Desilusion = () => {

    const equiposdesilusion = [
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
        }

    ]

    const [equipoDesilusion, setequipoDesilusion] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setequipoDesilusion(equipoSelected);
    };

    const editarDesilusion = () => {
        setequipoDesilusion();

    }




    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipo Desilusión <span className="resultadocampeon">{equipoDesilusion}</span>
                {equipoDesilusion && <span className="editar" onClick={editarDesilusion}>editar</span>}
            </div>

            <Transition in={!equipoDesilusion} timeout={200} mountOnEnter unmountOnExit>
                {state => (
                    <div style={{
                        transition: 'opacity 0.6s',
                        opacity: state === 'entered' ? 1 : 0
                    }}>
                        <div id="reglascampeon" className="reglas">
                            Elegí el equipo desilusion del mundial (si le va bien, perdés) <br /> según su resultado te <strong>RESTA </strong>
                            los siguientes puntos: <div className="puntos">
                                <br /> 1ro: -13 <br /> 2do: -10 <br /> 3ro: -8 <br /> 4to: -6 <br /> 5tos: -4 <br /> 9nos:
                                -2 <br />17mos: 0 <br /> 25tos: 0
                            </div>
                            Seleccioná tu equipo:
                        </div>
                        <div className="grid">

                            {equiposdesilusion.map((key) => (
                                <ItemDesilusion
                                    name={key.name}
                                    key={key.id}
                                    onEquipoClick={equipoSelectHandler}
                                />
                            ))}
                        </div>
                    </div>
                )}</Transition>

        </section>
    );
};

export default Desilusion;