import React from 'react';


const ItemSemis = (props) => {

    const equipoClickHandler = () => {
        props.onEquipoClick(props.name); //aca deberia pasar el name para agregarlo a un array que cuando tiene una cantidad de 4 te cierra el selector
    };

    return (
        <div className="item" onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemSemis;
