import ItemRevelacion from "./ItemRevelacion";

import React, { useState } from 'react';


const Revelacion = () => {

    const equiposrevelacion = [
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

    const [equipoRevelacion, setequipoRevelacion] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setequipoRevelacion(equipoSelected);
    };

    const editarRevelacion = () => {
        setequipoRevelacion();

    }




    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipo Revelación <span className="resultadocampeon">{equipoRevelacion}</span>
                {equipoRevelacion && <span className="editar" onClick={editarRevelacion}>editar</span>}
            </div>

            {!equipoRevelacion &&
                <div>
                    <div id="reglascampeon" className="reglas">
                        elegí el equipo revelacion del mundial, según su resultado entrega los siguientes puntos: <div className="puntos">
                            <br /> 1ro: 25 <br /> 2do: 20 <br /> 3ro: 16 <br /> 4to: 13 <br /> 5tos:10 <br /> 9nos:
                            7 <br />17mos: 3 <br /> 25tos: 1
                        </div>
                    </div>
                    <div className="grid">

                        {equiposrevelacion.map((key) => (
                            <ItemRevelacion
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

export default Revelacion;