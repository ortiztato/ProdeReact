import { useEffect } from "react";
import { useState } from "react";

const Resultados = () => {

    const Ganador = {
        Brasil: 10,
        Argentina: 5
    }

    const Eleccion = 'Argentina'


    const [prodes, setProdes] = useState([]);

    async function postPuntajeGanador() {

        console.log('buscando prodes');

        const response = await fetch('https://prode-backend-ogd69.ondigitalocean.app/prode/names');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        let prodes = []
        prodes = data.body


        prodes.map(async (key) => {
            let id = key.id
            let puntajeGanador = Ganador[key.Ganador]
            let dataPuntaje = {
                id: id,
                puntajeGanador: puntajeGanador
            }
            const response = await fetch('https://prode-backend-ogd69.ondigitalocean.app/prode/CAMBIARBIENLARUTA', {
                method: 'POST',
                body: JSON.stringify(dataPuntaje),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        })

    }




    useEffect(() => {
        // fetchProdesNames()
        postPuntajeGanador()

    }, [])



    return (
        <div>
            {/* <div> Prodes: {prodes.map((item) => item)} </div> */}
            {prodes ? 'True' : 'False'}
            Hola
            {/*  <button onClick={postData}>POST</button> */}


        </div>

    );
}

export default Resultados