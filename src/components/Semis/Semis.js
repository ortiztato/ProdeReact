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

    const [equiposSemis, setEquiposSemis] = useState([]);
    const [edit, setedit] = useState(false);

    /* useEffect(()=>{},[]) */

    const equipoSelectHandler = (equipoSelected) => {
        console.log(equipoSelected);
        setEquiposSemis(prevArray => [...prevArray, equipoSelected])
        console.log(equiposSemis);

    };


    const editarSemis = () => {
        setEquiposSemis([]);
        setedit(!edit)


    }

    const equiposSemisDisplay = equiposSemis.map((equipo) => <span>{equipo}</span>);



    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Equipos en Semis
                <span className="resultadocampeon">
                    {equiposSemisDisplay}
                </span>
                {equiposSemis && <span className="editar" onClick={editarSemis}>editar</span>}

            </div>

            {equiposSemis.length < 4 && <div>
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
                            edit={edit}
                        />
                    ))}
                </div>
            </div>}





        </section>
    );
};

export default Semis;