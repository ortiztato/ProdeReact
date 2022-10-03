import classes from './Partidos.module.css'
import { useState, useEffect } from 'react';

const Partido = (props) => {

    const [seleccionPartido, setSeleccionPartido] = useState(['cajasa']);
    const [opcion1, setOpcion1] = useState(false);
    const [opcion2, setOpcion2] = useState(false);
    const [opcion3, setOpcion3] = useState(false);
    const [okpartido, setOkpartido] = useState(false);

    const handleInputChange1 = (event) => {
        setOpcion1(!opcion1)
    }
    const handleInputChange2 = (event) => {
        setOpcion2(!opcion2)
    }
    const handleInputChange3 = (event) => {
        setOpcion3(!opcion3)
    }

    const partido1 = +props.id
    const partido2 = +props.id + 1
    const partido3 = +props.id + 2

    const addOpcion = (opcion1, opcion2, opcion3, partido1, partido2, partido3) => {
        let seleccion = [];
        if (opcion1) { seleccion.push(partido1) };
        if (opcion2) { seleccion.push(partido2) };
        if (opcion3) { seleccion.push(partido3) };
        setSeleccionPartido(seleccion)

    }


    useEffect(() => {

        addOpcion(opcion1, opcion2, opcion3, partido1, partido2, partido3)


    }, [opcion1, opcion2, opcion3, partido1, partido2, partido3])



    useEffect(() => {


        if (seleccionPartido.length > 0 && seleccionPartido.length < 3) {
            setOkpartido(true)
        }
        else {
            setOkpartido(false)
        }

        props.setPartidoHandler(seleccionPartido)

    }, [seleccionPartido, props])



    return (

        <div className={classes.divpartido}>
            <div className={classes.nombreequipo}>{props.equipo1}</div>
            <input
                name="uno"
                type="checkbox"
                onChange={handleInputChange1}
            //seria una funcion que cargue o borre este name al array / //{full ? 'true' : 'false'} 
            // <div>{opcion1 ? 'true1' : 'false1'}{opcion2 ? 'true2' : 'false2'}{opcion3 ? 'true3' : 'false3'}</div>
            />

            <input
                name="dos"
                type="checkbox"
                onChange={handleInputChange2} />
            <input
                name="tres"
                type="checkbox"
                onChange={handleInputChange3} />
            <div className={classes.nombreequipo}>{props.equipo2}</div>
            <div>{okpartido ? '✔️​' : '❌'}</div>

        </div>

    )
}

export default Partido