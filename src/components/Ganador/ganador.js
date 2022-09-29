import ItemGanador from "./ItemGanador";

import React, { useState } from 'react';


const Ganador = () => {

    const equiposganadores = [
        {
            id: 'e1',
            name: 'Japon'
        },
        {
            id: 'e2',
            name: 'Brasil'
        },
        {
            id: 'e3',
            name: 'Francia'
        },
        {
            id: 'e4',
            name: 'Inglaterra'
        },

    ]

    const [equipoGanador, setEquipoGanador] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setEquipoGanador(equipoSelected);
    };

    const editarCampeon = () => {
        setEquipoGanador();

    }




    return (
        <section className="sectionequipos">

            <div className="subtituloequipos">Equipo Ganador <span className="resultadocampeon">{equipoGanador}</span>
                {equipoGanador && <span className="editar" onClick={editarCampeon}>editar</span>}
            </div>

            {!equipoGanador &&
                <div>
                    <div id="reglascampeon" className="reglas">
                        elegí el equipo campeón del mundial, según su resultado entrega los siguientes puntos: <div class="puntos">
                            <br /> 1ro: 25 <br /> 2do: 20 <br /> 3ro: 16 <br /> 4to: 13 <br /> 5tos:10 <br /> 9nos:
                            7 <br />17mos: 3 <br /> 25tos: 1
                        </div>
                        seleccioná tu equipo:
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
            }

        </section>
    );
};

export default Ganador;