import React, { useEffect, useState } from 'react';


const ItemGoleadores = (props) => {

    const [itemClass, setitemClass] = useState('itemgoleador');
    const [selected, setSelected] = useState(false);

    useEffect(() => { setitemClass('itemgoleador'); setSelected(false) }, [props.edit])



    const equipoClickHandler = () => {
        setitemClass('itemgoleador selectedgoleador')
        let precioequipo = +props.precio
        if (!selected) { props.onEquipoClick(props.name, precioequipo); }
        setSelected(true)
    };

    return (
        <div className={itemClass} onClick={equipoClickHandler}>
            <div className={'goleador'}>{props.name}</div>
            <div className={'equipo'}>{props.pais}</div>
            <div className={'preciogoleador'}>$ {props.precio}</div>
        </div>
    );
};

export default ItemGoleadores;
