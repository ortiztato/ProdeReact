import React, { useEffect, useState } from 'react';


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

    return (
        <div className={itemClass} onClick={equipoClickHandler}
            style={{ display: props.full && itemClass === 'itemgoleador' && (props.PrecioTotal <= 100) ? 'none' : 'flex' }}>
            <div className={'goleador'}>{props.name}</div>
            <div className={'equipo'}>{props.pais}</div>
            <div className={'preciogoleador'}>$ {props.precio}</div>
        </div>
    );
};

export default ItemGoleadores;
