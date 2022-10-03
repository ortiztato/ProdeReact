import ItemRevelacion from "./ItemRevelacion";

import React, { useState } from 'react';

import { Transition } from "react-transition-group/";


const Revelacion = () => {

    const equiposrevelacion = [

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

            <Transition in={!equipoRevelacion} timeout={200} mountOnEnter unmountOnExit>
                {state => (
                    <div style={{
                        transition: 'opacity 0.6s',
                        opacity: state === 'entered' ? 1 : 0
                    }}>
                        <div>
                            <div id="reglascampeon" className="reglas">
                                Elegí el equipo revelacion del mundial, según su resultado entrega los siguientes puntos: <div className="puntos">
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
                    </div>)}</Transition>

        </section>
    );
};

export default Revelacion;