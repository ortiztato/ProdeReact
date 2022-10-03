import React, { useEffect, useState } from 'react';

import { Transition } from "react-transition-group/";


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

        <Transition in={!(props.full && itemClass === 'item')} timeout={200} mountOnEnter unmountOnExit>
            {state => (<div className={itemClass} onClick={equipoClickHandler}
                style={{
                    transition: 'opacity 0.6s',
                    opacity: state === 'entered' ? 1 : 0
                }}

            >
                {props.name}
            </div>)}

        </Transition>
    );
};

export default ItemSemis;
