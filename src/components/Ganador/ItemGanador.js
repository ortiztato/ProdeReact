import React from 'react';


const ItemGanador = (props) => {

    const equipoClickHandler = () => {
        props.onEquipoClick(props.name);
    };

    return (
        <div className="item" onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemGanador;
