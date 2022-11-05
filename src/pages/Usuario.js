import classes from './Ligas.module.css'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Partidos from '../components/partidos/Partidos';

const Usuario = () => {

    const params = useParams();


    let prodes = [];
    const [inputGanador, setInputGanador] = useState();
    const [inputDesilusion, setInputDesilusion] = useState();
    const [inputRevelacion, setInputRevelacion] = useState();
    const [inputLamentable, setInputLamentable] = useState();
    const [inputGoleadores, setInputGoleadores] = useState([]);
    const [inputPartidos, setInputPartidos] = useState([]);
    const [inputOctavos, setInputOctavos] = useState([]);
    const [inputCuartos, setInputCuartos] = useState([]);
    const [inputSemis, setInputSemis] = useState([]);
    const [inputFinal, setInputFinal] = useState([]);



    useEffect(() => {
        fetchInputs()
    }, [])

    async function fetchInputs() {

        console.log('buscando prodes');

        const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        prodes = Object.entries(data)
        console.log(prodes)

        prodes.map((key) => {


            if (key[1].Nombre === params.usuario) {

                setInputGanador(key[1].Ganador)
                setInputDesilusion(key[1].Desilusion)
                setInputRevelacion(key[1].Revelacion)
                setInputLamentable(key[1].Lamentable)
                setInputGoleadores(key[1].Goleadores)
                setInputPartidos(key[1].Partidos)
                setInputOctavos(key[1].Octavos)
                setInputCuartos(key[1].Cuartos)
                setInputSemis(key[1].Semis)
                setInputFinal(key[1].Final)
            }

        });



    }

    return (
        <div className={classes.ligaPage}>
            <div className={classes.tituloLiga}>{params.usuario}</div>
            <div className={classes.inputsItem}>
                <div> Ganador: {inputGanador} </div>
                <div> Desilusion: {inputDesilusion} </div>
                <div> Revelacion: {inputRevelacion} </div>
                <div> Lamentable: {inputLamentable} </div>
                <div> Goleadores: {inputGoleadores.map((key) => <span>{key}, </span>)} </div>
                <Partidos />
                {/* <div> Partidos: {inputPartidos.map((key) => <span>{key} </span>)} </div> */}
                <div> Octavos: {inputOctavos.map((key) => <span>{key} </span>)} </div>
                <div> Cuartos: {inputCuartos.map((key) => <span>{key} </span>)} </div>
                <div> Semis: {inputSemis.map((key) => <span>{key} </span>)} </div>
                <div> Final: {inputFinal.map((key) => <span>{key} </span>)} </div>


            </div>

        </div>

    );
}

export default Usuario