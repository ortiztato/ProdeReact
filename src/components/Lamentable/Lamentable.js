import ItemLamentable from "./ItemLamentable";

import React, { useState, useContext } from 'react';
import InputsContext from "../../store/inputs-context";

import { Transition } from "react-transition-group/";


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

    const ctx = useContext(InputsContext);

    const [equipoLamentable, setequipoLamentable] = useState();

    const equipoSelectHandler = (equipoSelected) => {
        setequipoLamentable(equipoSelected);
        ctx.lamentable(equipoSelected);
    };

    const editarLamentable = () => {
        setequipoLamentable();
        ctx.lamentable();

    }




    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipo Lamentable <span className="resultadocampeon">{equipoLamentable}</span>
                {equipoLamentable && <span className="editar" onClick={editarLamentable}>editar</span>}
            </div>

            <Transition in={!equipoLamentable} timeout={200} mountOnEnter unmountOnExit>
                {state => (
                    <div style={{
                        transition: 'opacity 0.6s',
                        opacity: state === 'entered' ? 1 : 0
                    }}>
                        <div id="reglascampeon" className="reglas">
                            Elegí el peor equipo del mundial (si le va bien, perdés) <br /><strong>RESTA</strong> 2 puntos por cada punto que consiga el equipo en la fase de grupos
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
                )}</Transition>

        </section>
    );
};

export default Lamentable;