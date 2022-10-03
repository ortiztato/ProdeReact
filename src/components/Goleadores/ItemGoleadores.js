import React, { useEffect, useState } from 'react';

import { Transition } from "react-transition-group/";


const ItemGoleadores = (props) => {

    const [itemClass, setitemClass] = useState('itemgoleador');
    const [add, setAdd] = useState(true);

    useEffect(() => { setitemClass('itemgoleador'); setAdd(true) }, [props.edit])


    const equipoClickHandler = () => {

        let precioequipo = +props.precio;
        if (!props.full) {
            props.onEquipoClick(props.name, precioequipo, add);
            setAdd(!add);
            if (add) { setitemClass('selectedgoleador') } else { setitemClass('itemgoleador') }
        }
        if (props.full && !add) {
            props.onEquipoClick(props.name, precioequipo, add);
            setAdd(!add);
            if (add) { setitemClass('selectedgoleador') } else { setitemClass('itemgoleador') }
        }


    };

    /*  RENDER ANTERIOR AL TRANSITION (BORRAR SI QUEDA BIEN)
    return (
        <div className={itemClass} onClick={equipoClickHandler}
            style={{ display: props.full && itemClass === 'itemgoleador' && (props.PrecioTotal <= 100) ? 'none' : 'flex' }}>
            <div className={'goleador'}>{props.name}</div>
            <div className={'equipo'}>{props.pais}</div>
            <div className={'preciogoleador'}>$ {props.precio}</div>
        </div>
    ); */

    return (
        <Transition in={!(props.full && itemClass === 'itemgoleador' && (props.PrecioTotal <= 100))} timeout={200} mountOnEnter unmountOnExit>
            {state => (
                <div style={{
                    transition: 'opacity 0.6s',
                    opacity: state === 'entered' ? 1 : 0
                }}>
                    <div className={itemClass} onClick={equipoClickHandler}
                    >
                        <div className={'goleador'}>{props.name}</div>
                        <div className={'equipo'}>{props.pais}</div>
                        <div className={'preciogoleador'}>$ {props.precio}</div>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default ItemGoleadores;
