import React, { useEffect, useState } from 'react';


const ItemSemis = (props) => {

    const [itemClass, setitemClass] = useState('item');
    const [selected, setSelected] = useState(false);

    useEffect(() => { setitemClass('item'); setSelected(false) }, [props.edit])



    const equipoClickHandler = () => {
        setitemClass('item selected')
        if (!selected) { props.onEquipoClick(props.name); }
        setSelected(true)
    };

    return (
        <div className={itemClass} onClick={equipoClickHandler}>
            {props.name}
        </div>
    );
};

export default ItemSemis;
