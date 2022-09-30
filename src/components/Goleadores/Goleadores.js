import ItemGoleadores from "./ItemGoleadores";

import React, { useEffect, useState } from 'react';


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
    const [full, setFull] = useState(false);


    /* const equipoSelectHandler = (equipoSelected, precioEquipo,) => {
        setGoleadores(prevArray => [...prevArray, equipoSelected]);
        setPrecioTotal(PrecioTotal + Number(precioEquipo));

    }; */



    const equipoSelectHandler = (equipoSelected, precioEquipo, add) => {
        if (add && Goleadores.length < 5) {
            setGoleadores(prevArray => [...prevArray, equipoSelected]);
            setPrecioTotal(PrecioTotal + Number(precioEquipo));
        }
        else if (!add) {
            function arrayRemove(arr, value) {

                return arr.filter(function (ele) {
                    return ele !== value;
                });
            }
            let remArray = arrayRemove(Goleadores, equipoSelected)
            setGoleadores(remArray);
            setPrecioTotal(PrecioTotal - Number(precioEquipo));

        }
    }

    useEffect(() => {
        if (Goleadores.length === 5) {
            setFull(true)
            /* document.getElementsByClassName('itemgoleador').style.cssText = "display: none";
            document.querySelector(".itemgoleador").style.cssText = "display: none"; */
            /* let goleadoresout = document.getElementsByClassName('itemgoleador');
            console.log(goleadoresout);
            goleadoresout.style.cssText = "margin: 10px"; */
        }
        else {
            setFull(false)
            //aca darle display devuelta
        };
    }, [Goleadores, full])

    /* if (Goleadores.length === 5) {
        let goleadoresout = document.getElementsByClassName('itemgoleador');
        goleadoresout.style.color = "red";
    } */
    /* if (Goleadores.length === 5) {
        setFull(true)
    }
    else { setFull(false) }; */





    const editarSemis = () => {
        setGoleadores([]);
        setPrecioTotal(0)
        setedit(!edit)
    }

    // estas variables eran para poner los equipos al costado del titulo

    const GoleadoresDisplay = Goleadores.map((equipo) => <span>{equipo}</span>);

    let titulogoleadores
    if (Goleadores.length < 5) {
        titulogoleadores = 'resultadoincompleto'
    } else if (PrecioTotal <= 100) { titulogoleadores = 'resultadocampeon' } else { titulogoleadores = 'resultadoerror' }


    let presupuesto
    if (PrecioTotal > 100) {
        presupuesto = 'presupuestoerror'
    } else { presupuesto = 'presupuestook' }



    return (
        <section className="sectionequipos">
            <div className="subtituloequipos">Goleadores
                <span className={titulogoleadores} style={{ display: full && (PrecioTotal <= 100) ? 'none' : '' }}>
                    {GoleadoresDisplay}
                </span>
                {Goleadores.length > 0 && <span className="editar" onClick={editarSemis}>limpiar</span>}

            </div>

            <div>
                <div id="reglascampeon" className="reglas">
                    Tenes <strong>$ 100 </strong> para elegir <strong>5 goleadores</strong> <br />
                    Los goleadores entregan <strong>2 puntos</strong> por cada gol que meten

                    Seleccioná tus goleadores:
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
                            full={full}
                            PrecioTotal={PrecioTotal}
                        />
                    ))}
                </div>
            </div>
            <div >
                <div>Presupuesto Utilizado: ${PrecioTotal}</div>
                <div className={presupuesto}>Presupuesto Restante: ${100 - PrecioTotal}</div>
            </div>



        </section>
    );
};

export default Goleadores;