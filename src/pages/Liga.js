import classes from './Ligas.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const Liga = () => {

    const params = useParams();


    let prodes = [];
    let UsuariosArr = [];
    const [Usuarios, setUsuarios] = useState([]);



    useEffect(() => {
        fetchUsuarios()
    }, [])

    async function fetchUsuarios() {

        console.log('buscando prodes');

        // const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
        const response = await fetch('https://prode-backend-ogd69.ondigitalocean.app/prode');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        // prodes = Object.entries(data)
        prodes = data.body
        console.log(prodes)
        console.log(params.liganame)

        prodes.map((key) => {
            if (key.Liga === params.liganame) {
                UsuariosArr.push(key.Nombre)
            }

        });

        setUsuarios(UsuariosArr)
        console.log(Usuarios)

    }

    const alertaFecha = () => { alert('El prode de cada jugador se va a poder ver cuando cierre la fecha limite') }

    return (
        <div className={classes.ligaPage}>
            <div className={classes.tituloLiga}>{params.liganame}</div>
            <div className={classes.ligasContainer}>
                <div className={classes.tituloContainer}>

                    <div className={classes.tituloJugador}> Jugador </div>
                    <div className={classes.tituloPuntaje}> Ptos </div>
                </div>
                {Usuarios.map((key) => (

                    <div className={classes.usuarioItem}>
                        {params.liganame === 'ligaprueba'
                            ? <Link className={classes.Ligaitem} to={`/ligas/${params.liganame}/${key}`}>{key} </Link>
                            : <div className={classes.Ligaitem} onClick={alertaFecha}>{key} </div>
                        }

                        <div className={classes.puntajeJugador}> 0 </div>
                    </div>

                ))}</div>
        </div>

    );
}

export default Liga