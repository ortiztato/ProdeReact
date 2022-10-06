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
  const [inputNombre, setInputNombre] = useState('nombre');
  const [inputLiga, setInputLiga] = useState('liga');


  const globalInput = {
    Nombre: inputNombre,
    Liga: inputLiga,
    Ganador: inputGanador,
    Desilusion: inputDesilusion,
    Revelacion: inputRevelacion,
    Lamentable: inputLamentable,
    Goleadores: inputGoleadores,
    Partidos: inputPartidos,
    Octavos: inputOctavos,
    Cuartos: inputCuartos,
    Semis: inputSemis,
    Final: inputFinal,
  }


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

  const nombreHandler = (inputNombre) => {
    setInputNombre(inputNombre);
  };

  const ligaHandler = (inputLiga) => {
    setInputLiga(inputLiga);
  };


  // esta funcion que concatene todos los objetos y la postee

  const submitFormHandler = () => {
    console.log(globalInput)
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
        nombre: nombreHandler,
        liga: ligaHandler,
        submitForm: submitFormHandler,

      }}
    >
      {props.children}
    </InputsContext.Provider>
  );
};

export default InputsContext;
