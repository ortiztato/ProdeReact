import ItemLamentable from "./ItemLamentable";

import React, { useState } from 'react';


const Lamentable = () => {

    const equiposLamentable = [
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

    const [equipoLamentable, setequipoLamentable] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setequipoLamentable(equipoSelected);
    };

    const editarLamentable = () => {
        setequipoLamentable();

    }




    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipo Lamentable <span className="resultadocampeon">{equipoLamentable}</span>
                {equipoLamentable && <span className="editar" onClick={editarLamentable}>editar</span>}
            </div>

            {!equipoLamentable &&
                <div>
                    <div id="reglascampeon" className="reglas">
                        elegí el equipo lamentable del mundial (si le va bien, perdés) <br /> según su resultado <strong>RESTA</strong> los
                        siguientes
                        puntos: <div className="puntos">
                            <br /> 1ro: 25 <br /> 2do: 20 <br /> 3ro: 16 <br /> 4to: 13 <br /> 5tos:10 <br /> 9nos:
                            7 <br />17mos: 3 <br /> 25tos: 1
                        </div>
                        seleccioná tu equipo:
                    </div>
                    <div className="grid">

                        {equiposLamentable.map((key) => (
                            <ItemLamentable
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

export default Lamentable;