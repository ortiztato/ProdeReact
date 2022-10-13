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

        const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        prodes = Object.entries(data)
        /* console.log(prodes) */

        prodes.map((key) => {
            if (key[1].Liga === params.liganame) {
                UsuariosArr.push(key[1].Nombre)
            }

        });

        setUsuarios(UsuariosArr)
        console.log(Usuarios)

    }

    return (
        <div className={classes.ligaPage}>
            <div className={classes.tituloLiga}>{params.liganame}</div>
            <div> {Usuarios.map((key) => (

                <div className={classes.usuarioItem}>
                    <Link className={classes.Ligaitem} to={`/ligas/${params.liganame}/${key}`}>{key} </Link>
                    <div> 0 </div>
                </div>

            ))}</div>
        </div>

    );
}

export default Liga