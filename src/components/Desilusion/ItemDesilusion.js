import React from 'react';


const ItemDesilusion = (props) => {

    const equipoClickHandler = () => {
        props.onEquipoClick(props.name);
    };

    return (
        <div className="item" onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemDesilusion;
