import ItemDesilusion from "./ItemDesilusion";

import React, { useState } from 'react';


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
        },

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

            {!equipoDesilusion &&
                <div>
                    <div id="reglascampeon" className="reglas">
                        elegí el equipo desilusion del mundial (si le va bien, perdés) <br /> según su resultado te <strong>RESTA </strong>
                        los siguientes puntos: <div className="puntos">
                            <br /> 1ro: 25 <br /> 2do: 20 <br /> 3ro: 16 <br /> 4to: 13 <br /> 5tos:10 <br /> 9nos:
                            7 <br />17mos: 3 <br /> 25tos: 1
                        </div>
                        seleccioná tu equipo:
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
            }

        </section>
    );
};

export default Desilusion;