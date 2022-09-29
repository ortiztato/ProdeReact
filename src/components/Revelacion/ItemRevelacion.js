import React from 'react';


const ItemRevelacion = (props) => {

    const equipoClickHandler = () => {
        props.onEquipoClick(props.name);
    };

    return (
        <div className="item" onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemRevelacion;
