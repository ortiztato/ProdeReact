import ItemGoleadores from "./ItemGoleadores";

import React, { useEffect, useState, useContext } from 'react';

import InputsContext from "../../store/inputs-context";


const Goleadores = () => {

    const dataGoleadores = [
        {
            id: 'e1',
            name: 'Kane',
            pais: 'Inglaterra',
            precio: '47',
        },
        {
            id: 'e2',
            name: 'Mbappe',
            pais: 'Francia',
            precio: '44',
        },
        {
            id: 'e3',
            name: 'Benzema',
            pais: 'Francia',
            precio: '42',
        },
        {
            id: 'e5',
            name: 'Messi',
            pais: 'Argentina',
            precio: '40',
        },
        {
            id: 'e7',
            name: 'Neymar',
            pais: 'Brasil',
            precio: '40',
        },
        {
            id: 'e4',
            name: 'Ronaldo',
            pais: 'Portugal',
            precio: '38',
        },

        {
            id: 'e6',
            name: 'Lukaku',
            pais: 'Belgica',
            precio: '34',
        },
        {
            id: 'e11',
            name: 'Depay',
            pais: 'Holanda',
            precio: '34',
        },
        {
            id: 'e10',
            name: 'Vinicius',
            pais: 'Brasil',
            precio: '31',
        },
        {
            id: 'e12',
            name: 'Lautaro M',
            pais: 'Argentina',
            precio: '31',
        },
        {
            id: 'e14',
            name: 'Jesus',
            pais: 'Brasil',
            precio: '31',
        },

        {
            id: 'e8',
            name: 'Sterling',
            pais: 'Inglaterra',
            precio: '29',
        },
        {
            id: 'e13',
            name: 'Griezmann',
            pais: 'Francia',
            precio: '29',
        }, {
            id: 'e15',
            name: 'Havertz',
            pais: 'Alemania',
            precio: '29',
        },
        {
            id: 'e19',
            name: 'Morata',
            pais: 'España',
            precio: '28',
        },
        {
            id: 'e24',
            name: 'Lewandowski',
            pais: 'Polonia',
            precio: '28',
        },
        {
            id: 'e21',
            name: 'Ferran T',
            pais: 'España',
            precio: '27',
        },
        {
            id: 'e23',
            name: 'Suarez',
            pais: 'Uruguay',
            precio: '27',
        },
        {
            id: 'e26',
            name: 'Nuñez',
            pais: 'Uruguay',
            precio: '27',
        },
        {
            id: 'e17',
            name: 'Muller',
            pais: 'Alemania',
            precio: '26',
        },

        {
            id: 'e22',
            name: 'Bruyne',
            pais: 'Belgica',
            precio: '25',
        }, {
            id: 'e25',
            name: 'Mitrovic',
            pais: 'Serbia',
            precio: '25',
        },
        {
            id: 'e28',
            name: 'Embolo',
            pais: 'Suiza',
            precio: '22',
        },
        {
            id: 'e30',
            name: 'Jimenez',
            pais: 'Mexico',
            precio: '22',
        }, {
            id: 'e31',
            name: 'En-Nesyri',
            pais: 'Marruecos',
            precio: '22',
        }, {
            id: 'e32',
            name: 'Cornelius',
            pais: 'Dinamarca',
            precio: '22',
        },
        {
            id: 'e33',
            name: 'Kramaric',
            pais: 'Croacia',
            precio: '22',
        },
        {
            id: 'e34',
            name: 'Pulisic',
            pais: 'USA',
            precio: '22',
        },

    ]

    const ctx = useContext(InputsContext);

    const [Goleadores, setGoleadores] = useState([]);
    const [edit, setedit] = useState(false);
    const [PrecioTotal, setPrecioTotal] = useState(0);
    const [full, setFull] = useState(false);


    /* const equipoSelectHandler = (equipoSelected, precioEquipo,) => {
        setGoleadores(prevArray => [...prevArray, equipoSelected]);
        setPrecioTotal(PrecioTotal + Number(precioEquipo));

    }; */



    const equipoSelectHandler = (equipoSelected, precioEquipo, add) => {
        if (add && Goleadores.length < 3) {
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
        if (Goleadores.length === 3) {
            setFull(true);
            if (PrecioTotal <= 100) {
                ctx.goleadores(Goleadores)
            }

        }
        else {
            setFull(false);
            ctx.goleadores()
            //aca darle display devuelta
        };
    }, [Goleadores, full, PrecioTotal, ctx])

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

    /* const GoleadoresDisplay = Goleadores.map((equipo) => <span>{equipo}</span>); */

    let titulogoleadores
    if (Goleadores.length < 3) {
        titulogoleadores = 'resultadoincompletogol'
    } else if (PrecioTotal <= 100) { titulogoleadores = 'resultadocampeongol' } else { titulogoleadores = 'resultadoerrorgol' }


    let presupuesto
    if (PrecioTotal > 100) {
        presupuesto = 'presupuestoerror'
    } else { presupuesto = 'presupuestook' }



    return (
        <section className="sectiongoleadores">
            <div className="subtituloequipos">Goleadores
                <span className={titulogoleadores} style={{ display: (full && (PrecioTotal <= 100)) || Goleadores.length === 0 ? 'none' : '' }}>
                    Incompleto
                </span>
                {Goleadores.length > 0 && <span className="editar" onClick={editarSemis}>limpiar</span>}

            </div>

            <div>
                <div id="reglascampeon" className="reglas">
                    Tenes <strong>$ 100 </strong> para elegir <strong>3 goleadores</strong> <br />
                    Los goleadores entregan <strong>1 punto</strong> por cada gol que meten
                    <br />
                    Seleccioná tus goleadores:
                </div>
                <div className="gridgoleadores">

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