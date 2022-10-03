import ItemSemis from "./ItemCuartos";

import React, { useEffect, useState } from 'react';


const Cuartos = () => {

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

    const [equiposSemis, setEquiposSemis] = useState([]);
    const [edit, setedit] = useState(false);
    const [full, setFull] = useState(false);



    const equipoSelectHandler = (equipoSelected, add) => {
        if (add) {
            setEquiposSemis(prevArray => [...prevArray, equipoSelected]);
        }
        else {
            function arrayRemove(arr, value) {

                return arr.filter(function (ele) {
                    return ele !== value;
                });
            }
            let remArray = arrayRemove(equiposSemis, equipoSelected)
            setEquiposSemis(remArray);
        }
    };


    const editarSemis = () => {
        setEquiposSemis([]);
        setedit(!edit)
    }

    useEffect(() => {
        if (equiposSemis.length === 8) {
            setFull(true)
        }
        else {
            setFull(false)
        };
    }, [equiposSemis, full])


    /* const equiposSemisDisplay = equiposSemis.map((equipo) => <span>{equipo}</span>); */
    const equiposSemisDisplay = <span>Incompleto</span>;

    let resultado
    if (equiposSemis.length < 8) {
        resultado = 'resultadoincompleto'
    } else { resultado = 'resultadocampeon' }



    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipos en Cuartos
                <span className={resultado} style={{ display: full || equiposSemis.length === 0 ? 'none' : '' }}>
                    {equiposSemisDisplay}
                </span>
                {equiposSemis.length > 0 && <span className="editar" onClick={editarSemis}>editar</span>}

            </div>

            {equiposSemis.length < 8 && <div>
                <div id="reglascampeon" className="reglas">
                    Elegí los 8 equipos que crees que llegan a los cuartos de final.
                    <br /> Por cada uno que llegue a semis te suma 5 puntos.

                </div>
            </div>}
            <div className="grid">

                {dataequiposSemis.map((key) => (
                    <ItemSemis
                        name={key.name}
                        key={key.id}
                        onEquipoClick={equipoSelectHandler}
                        edit={edit}
                        full={full}
                    />
                ))}
            </div>






        </section>
    );
};

export default Cuartos;