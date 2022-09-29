import ItemGoleadores from "./ItemGoleadores";

import React, { useState } from 'react';


const Goleadores = () => {

    const dataGoleadores = [
        {
            id: 'e1',
            name: 'Kane',
            pais: 'Inglaterra',
            precio: '29',
        },
        {
            id: 'e2',
            name: 'Mbappe',
            pais: 'Francia',
            precio: '28',
        },
        {
            id: 'e3',
            name: 'Benzema',
            pais: 'Francia',
            precio: '25',
        },
        {
            id: 'e4',
            name: 'Ronaldo',
            pais: 'Portugal',
            precio: '25',
        },
        {
            id: 'e5',
            name: 'Messi',
            pais: 'Argentina',
            precio: '24',
        },
        {
            id: 'e6',
            name: 'Lukaku',
            pais: 'Belgica',
            precio: '24',
        },
        {
            id: 'e7',
            name: 'Neymar',
            pais: 'Brasil',
            precio: '24',
        },
        {
            id: 'e8',
            name: 'Sterling',
            pais: 'Inglaterra',
            precio: '21',
        },
        {
            id: 'e9',
            name: 'Jota',
            pais: 'Portugal',
            precio: '21',
        },
        {
            id: 'e10',
            name: 'Vinicius',
            pais: 'Brasil',
            precio: '21',
        }, {
            id: 'e11',
            name: 'Depay',
            pais: 'Holanda',
            precio: '21',
        }, {
            id: 'e12',
            name: 'Lautaro M',
            pais: 'Argentina',
            precio: '21',
        }, {
            id: 'e13',
            name: 'Griezmann',
            pais: 'Francia',
            precio: '19',
        }, {
            id: 'e14',
            name: 'Jesus',
            pais: 'Brasil',
            precio: '19',
        }, {
            id: 'e15',
            name: 'Havertz',
            pais: 'Alemania',
            precio: '19',
        }, {
            id: 'e16',
            name: 'Bergwijn',
            pais: 'Holanda',
            precio: '19',
        }, {
            id: 'e17',
            name: 'Muller',
            pais: 'Alemania',
            precio: '18',
        }, {
            id: 'e18',
            name: 'Werner',
            pais: 'Alemania',
            precio: '18',
        }, {
            id: 'e19',
            name: 'Morata',
            pais: 'España',
            precio: '18',
        }, {
            id: 'e20',
            name: 'Vlahovic',
            pais: 'Serbia',
            precio: '18',
        }, {
            id: 'e21',
            name: 'Ferran T',
            pais: 'España',
            precio: '18',
        }, {
            id: 'e22',
            name: 'Bruyne',
            pais: 'Belgica',
            precio: '18',
        }, {
            id: 'e23',
            name: 'Suarez',
            pais: 'Uruguay',
            precio: '18',
        }, {
            id: 'e24',
            name: 'Lewandowski',
            pais: 'Polonia',
            precio: '18',
        }, {
            id: 'e25',
            name: 'Mitrovic',
            pais: 'Serbia',
            precio: '17',
        }, {
            id: 'e26',
            name: 'Nuñez',
            pais: 'Uruguay',
            precio: '17',
        }, {
            id: 'e27',
            name: 'Cavani',
            pais: 'Uruguay',
            precio: '17',
        }, {
            id: 'e28',
            name: 'Embolo',
            pais: 'Suiza',
            precio: '16',
        }, {
            id: 'e29',
            name: 'Mane',
            pais: 'Senegal',
            precio: '16',
        }, {
            id: 'e30',
            name: 'Jimenez',
            pais: 'Mexico',
            precio: '15',
        }, {
            id: 'e31',
            name: 'En-Nesyri',
            pais: 'Marruecos',
            precio: '15',
        }, {
            id: 'e32',
            name: 'Cornelius',
            pais: 'Dinamarca',
            precio: '14',
        },
        {
            id: 'e33',
            name: 'Kramaric',
            pais: 'Croacia',
            precio: '14',
        },
        {
            id: 'e34',
            name: 'Pulisic',
            pais: 'USA',
            precio: '14',
        },

    ]

    const [Goleadores, setGoleadores] = useState([]);
    const [edit, setedit] = useState(false);
    const [PrecioTotal, setPrecioTotal] = useState(0);



    const equipoSelectHandler = (equipoSelected, precioEquipo) => {
        setGoleadores(prevArray => [...prevArray, equipoSelected]);
        setPrecioTotal(PrecioTotal + Number(precioEquipo));

    };


    const editarSemis = () => {
        setGoleadores([]);
        setPrecioTotal(0)
        setedit(!edit)


    }

    const GoleadoresDisplay = Goleadores.map((equipo) => <span>{equipo}</span>);



    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Goleadores
                <span className="resultadocampeon">
                    {GoleadoresDisplay}
                </span>
                {Goleadores.length > 0 && <span className="editar" onClick={editarSemis}>editar</span>}

            </div>

            {Goleadores.length < 5 && <div>
                <div id="reglascampeon" className="reglas">
                    tenes <strong>$ 100 </strong> para elegir <strong>5 goleadores</strong> <br />
                    los goleadores entregan <strong>2 puntos</strong> por cada gol que meten

                    seleccioná tus goleadores:
                </div>
                <div className="grid">

                    {dataGoleadores.map((key) => (
                        <ItemGoleadores
                            name={key.name}
                            key={key.id}
                            pais={key.pais}
                            precio={key.precio}
                            onEquipoClick={equipoSelectHandler}
                            edit={edit}
                        />
                    ))}
                </div>
            </div>}
            <div >
                <div>Presupuesto Utilizado: {PrecioTotal}</div>
                <div>Presupuesto Restante: {100 - PrecioTotal}</div>
            </div>



        </section>
    );
};

export default Goleadores;