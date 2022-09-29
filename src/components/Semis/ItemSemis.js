import React, { useEffect, useState } from 'react';


const ItemSemis = (props) => {

    const [itemClass, setitemClass] = useState('item');

    useEffect(() => { setitemClass('item') }, [props.edit])



    const equipoClickHandler = () => {
        setitemClass('item selected')
        props.onEquipoClick(props.name); //aca deberia pasar el name para agregarlo a un array que cuando tiene una cantidad de 4 te cierra el selector
    };

    return (
        <div className={itemClass} onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemSemis;
