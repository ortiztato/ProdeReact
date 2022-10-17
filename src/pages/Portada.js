

import classes from './Portada.module.css'

import { Route, Link, Switch, Redirect } from 'react-router-dom';


const Portada = () => {


    return (
        <div className={classes.portadaPage}>
            <h1 className={classes.tituloPortada}>
                PRODE MUNDIAL 2022
            </h1>

            <div className={classes.linksContainer}>
                <Link className={classes.link} to={'/form'}>COMPLETAR <br /> UN PRODE</Link>
                <Link className={classes.link} to={'/ligas'}>VER <br />LIGAS</Link>

            </div>




        </div>
    );
};

export default Portada;