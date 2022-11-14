import { useEffect } from "react";
import { useState } from "react";

const Resultados = () => {


    const [prodes, setProdes] = useState([]);

    async function fetchProdesNames() {

        console.log('buscando prodes');

        const response = await fetch('https://prode-backend-ogd69.ondigitalocean.app/prode/names');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        let prodes = []
        prodes = data.body

        let arr = []

        prodes.map((key) => arr.push(key.Nombre))
        const User = 'Gochi'
        let Exists = arr.includes(User)
        console.log('Gochi is included? ' + Exists)

        setProdes(Exists)

    }


    useEffect(() => {
        fetchProdesNames()
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