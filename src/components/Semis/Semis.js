import ItemSemis from "./ItemSemis";

import React, { useState } from 'react';


const Semis = () => {

    const dataequiposSemis = [
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

    const [equiposSemis, setequiposSemis] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setequiposSemis(equipoSelected);
    };

    const editarSemis = () => {
        setequiposSemis();

    }




    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipos en Semis <span className="resultadocampeon">{equiposSemis}</span>
                {equiposSemis && <span className="editar" onClick={editarSemis}>editar</span>}
            </div>

            {!equiposSemis &&
                <div>
                    <div id="reglascampeon" className="reglas">
                        elegí los 4 equipos que crees que llegan a las semi finales.
                        <br /> por cada uno que llegue a semis te suma 5 puntos.
                        seleccioná tus 4 equipos:
                    </div>
                    <div className="grid">

                        {dataequiposSemis.map((key) => (
                            <ItemSemis
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

export default Semis;