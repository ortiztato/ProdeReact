import React, { useState } from 'react';

const InputsContext = React.createContext({
  /* inputsLeft: 0, */
  ganador: (inputGanador) => { },
  desilusion: (inputDesilusion) => { },
  revelacion: (inputRevelacion) => { },
  lamentable: (inputLamentable) => { },
  goleadores: (inputGoleadores) => { },
  partidos: (inputPartidos) => { },
  submitForm: () => { },

});

export const InputsContextProvider = (props) => {
  /* const [inputsLeft, setInputsLeft] = useState(0); */
  const [inputGanador, setInputGanador] = useState('ganador');
  const [inputDesilusion, setInputDesilusion] = useState('desilusion');
  const [inputRevelacion, setInputRevelacion] = useState('revelacion');
  const [inputLamentable, setInputLamentable] = useState('lamentable');
  const [inputGoleadores, setInputGoleadores] = useState('goleadores');
  const [inputPartidos, setInputPartidos] = useState('partidos');


  const ganadorHandler = (inputGanador) => {
    setInputGanador(inputGanador);
  };

  const desilusionHandler = (inputDesilusion) => {
    setInputDesilusion(inputDesilusion);
  };

  const revelacionHandler = (inputRevelacion) => {
    setInputRevelacion(inputRevelacion);
  };

  const lamentableHandler = (inputLamentable) => {
    setInputLamentable(inputLamentable);
  };

  const goleadoresHandler = (inputGoleadores) => {
    setInputGoleadores(inputGoleadores);
  };

  const partidosHandler = (inputPartidos) => {
    setInputPartidos(inputPartidos);
  };


  // esta funcion que concatene todos los objetos y la postee

  const submitFormHandler = () => {
    console.log(inputGanador)
    console.log(inputDesilusion)
    console.log(inputRevelacion)
    console.log(inputLamentable)
    console.log(inputGoleadores)
    console.log(inputPartidos)
  }




  return (
    <InputsContext.Provider
      value={{
        /*  inputsLeft: inputsLeft, */
        ganador: ganadorHandler,
        desilusion: desilusionHandler,
        revelacion: revelacionHandler,
        lamentable: lamentableHandler,
        goleadores: goleadoresHandler,
        partidos: partidosHandler,
        submitForm: submitFormHandler,

      }}
    >
      {props.children}
    </InputsContext.Provider>
  );
};

export default InputsContext;
