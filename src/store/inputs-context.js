import React, { useState } from 'react';

const InputsContext = React.createContext({
  /* inputsLeft: 0, */
  ganador: (inputGanador) => { },
  desilusion: (inputDesilusion) => { },
  revelacion: (inputRevelacion) => { },
  lamentable: (inputLamentable) => { },
  goleadores: (inputGoleadores) => { },
  partidos: (inputPartidos) => { },
  octavos: (inputOctavos) => { },
  cuartos: (inputCuartos) => { },
  semis: (inputSemis) => { },
  final: (inputFinal) => { },
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
  const [inputOctavos, setInputOctavos] = useState('octavos');
  const [inputCuartos, setInputCuartos] = useState('cuartos');
  const [inputSemis, setInputSemis] = useState('semis');
  const [inputFinal, setInputFinal] = useState('final');


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

  const octavosHandler = (inputOctavos) => {
    setInputOctavos(inputOctavos);
  };

  const cuartosHandler = (inputCuartos) => {
    setInputCuartos(inputCuartos);
  };

  const semisHandler = (inputSemis) => {
    setInputSemis(inputSemis);
  };

  const finalHandler = (inputFinal) => {
    setInputFinal(inputFinal);
  };


  // esta funcion que concatene todos los objetos y la postee

  const submitFormHandler = () => {
    console.log(inputGanador)
    console.log(inputDesilusion)
    console.log(inputRevelacion)
    console.log(inputLamentable)
    console.log(inputGoleadores)
    console.log(inputPartidos)
    console.log(inputOctavos)
    console.log(inputCuartos)
    console.log(inputSemis)
    console.log(inputFinal)
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
        octavos: octavosHandler,
        cuartos: cuartosHandler,
        semis: semisHandler,
        final: finalHandler,
        submitForm: submitFormHandler,

      }}
    >
      {props.children}
    </InputsContext.Provider>
  );
};

export default InputsContext;
