import classes from './Partidos.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Partido = (props) => {

    const params = useParams();


    const [seleccionPartido, setSeleccionPartido] = useState(['cajasa']);
    const [opcion1, setOpcion1] = useState(false);
    const [opcion2, setOpcion2] = useState(false);
    const [opcion3, setOpcion3] = useState(false);
    const [okpartido, setOkpartido] = useState(false);
    const [modoUser, setModoUser] = useState(false);

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

        console.log(params.usuario)
        if (params.usuario) {
            setModoUser(true)
        }
        console.log(modoUser)

        if (seleccionPartido.length > 0 && seleccionPartido.length < 3) {
            setOkpartido(true)
        }
        else {
            setOkpartido(false)
        }

        props.setPartidoHandler(seleccionPartido, okpartido)

    }, [seleccionPartido, okpartido, props])



    return (

        <div className={classes.divpartido}>
            <div className={classes.nombreequipo}>{props.equipo1}</div>
            <input
                name="uno"
                type="checkbox"
                /*  disabled="disabled" */
                disabled={modoUser ? "disabled" : ""}
                /* checked={modoUser ? "checked" : ""} */
                /* disabled="disabled"  no te deja cambiar
                checked="checked"  te lo selecciona     */
                onChange={handleInputChange1}
            />
            <label for='unocheck'></label>
            <input
                name="dos"
                type="checkbox"
                disabled={modoUser ? "disabled" : ""}
                checked={modoUser ? "checked" : ""}
                onChange={handleInputChange2} />
            <input
                name="tres"
                type="checkbox"
                disabled={modoUser ? "disabled" : ""}
                onChange={handleInputChange3} />
            <div className={classes.nombreequipo}>{props.equipo2}</div>
            <div>{okpartido ? '✔️​' : '❌'}</div>

        </div>

    )
}

export default Partido