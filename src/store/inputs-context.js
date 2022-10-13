import React, { useState, useEffect } from 'react';

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
  const [inputGanador, setInputGanador] = useState();
  const [inputDesilusion, setInputDesilusion] = useState();
  const [inputRevelacion, setInputRevelacion] = useState();
  const [inputLamentable, setInputLamentable] = useState();
  const [inputGoleadores, setInputGoleadores] = useState();
  const [inputPartidos, setInputPartidos] = useState();
  const [inputOctavos, setInputOctavos] = useState();
  const [inputCuartos, setInputCuartos] = useState();
  const [inputSemis, setInputSemis] = useState();
  const [inputFinal, setInputFinal] = useState();
  const [inputNombre, setInputNombre] = useState();
  const [inputLiga, setInputLiga] = useState();
  const [undefinedInputs, setUndefinedInputs] = useState();


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



  useEffect(() => {

    let objArr = Object.entries(globalInput);

    const filteredUser = objArr.filter(function ([key, value]) {
      return !value; // the condition for filter. Change this as you need.
    });

    console.log(undefinedInputs);

    setUndefinedInputs(+filteredUser.length)


  }, [globalInput])


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




  async function submitFormHandler() {
    const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json', {
      method: 'POST',
      body: JSON.stringify(globalInput),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
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
        undefinedInputs: undefinedInputs,

      }}
    >
      {props.children}
    </InputsContext.Provider>
  );
};

export default InputsContext;
