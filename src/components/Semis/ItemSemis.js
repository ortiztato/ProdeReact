import React, { useEffect, useState } from 'react';


const ItemSemis = (props) => {

    const [itemClass, setitemClass] = useState('item');
    const [add, setAdd] = useState(true);

    useEffect(() => { setitemClass('item'); setAdd(true) }, [props.edit])



    /* const equipoClickHandler = () => {
        setitemClass('item selected')
        if (!selected) { props.onEquipoClick(props.name); }
        setSelected(true)
    }; */

    const equipoClickHandler = () => {
        props.onEquipoClick(props.name, add);
        setAdd(!add);
        if (add) { setitemClass('selected') } else { setitemClass('item') }
    }

    return (
        <div className={itemClass} onClick={equipoClickHandler} style={{ display: props.full && itemClass === 'item' ? 'none' : 'flex' }}
        >
            {props.name}
        </div>
    );
};

export default ItemSemis;
