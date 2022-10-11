import React from 'react';

import Card from './Card';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.bidsubmitbutton} onClick={props.onConfirm}>OK</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
