import { useEffect } from "react";
import { useState } from "react";

const Usuario = () => {

    const dataToPost = {


        "Cuartos": [
            "Belgica",
            "Holanda",
            "Suiza",
            "USA",
            "Polonia",
            "Qatar",
            "Camerun",
            "Senegal"
        ],
        "Desilusion": "Holanda",
        "Final": [
            "Mexico",
            "Polonia"
        ],
        "Ganador": "Ecuador",
        "Goleadores": [
            "Morata",
            "Bruyne",
            "Suarez",
            "Nuñez",
            "Havertz"
        ],
        "Lamentable": "Camerun",
        "Liga": "ligaprueba",
        "Nombre": "Natalia",
        "Octavos": [
            "USA",
            "Serbia",
            "Holanda",
            "Belgica",
            "Senegal",
            "Portugal",
            "Argentina",
            "Inglaterra",
            "Brasil",
            "Francia",
            "España",
            "Alemania",
            "Croacia",
            "Polonia",
            "Canada",
            "Iran"
        ],
        "Partidos": [
            [
                2
            ],
            [
                5
            ],
            [
                8
            ],
            [
                11
            ],
            [
                14
            ],
            [
                16,
                17
            ],
            [
                20
            ],
            [
                23
            ],
            [
                26
            ],
            [
                29
            ],
            [
                32
            ],
            [
                34,
                35
            ],
            [
                38
            ],
            [
                41
            ],
            [
                44
            ],
            [
                47
            ],
            [
                50
            ],
            [
                52,
                53
            ],
            [
                56
            ],
            [
                59
            ],
            [
                62
            ],
            [
                65
            ],
            [
                68
            ],
            [
                70,
                71
            ],
            [
                74
            ],
            [
                77
            ],
            [
                80
            ],
            [
                83
            ],
            [
                86
            ],
            [
                88,
                89
            ],
            [
                92
            ],
            [
                95
            ],
            [
                98
            ],
            [
                101
            ],
            [
                104
            ],
            [
                106,
                107
            ],
            [
                110
            ],
            [
                113
            ],
            [
                116
            ],
            [
                119
            ],
            [
                122
            ],
            [
                124,
                125
            ],
            [
                128
            ],
            [
                131
            ],
            [
                134
            ],
            [
                137
            ],
            [
                140
            ],
            [
                142,
                143
            ]
        ],
        "Revelacion": "Mexico",
        "Semis": [
            "Mexico",
            "Serbia",
            "Holanda",
            "Alemania"
        ]
    }


    const [prodes, setProdes] = useState([]);

    async function fetchProdes() {

        console.log('buscando prodes');

        const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch quotes.');
        }

        /* let prodesDataEntries = Object.entries(data)

        console.log(prodesDataEntries) */

        let prodesDataValues = Object.values(data)

        let arr = []

        prodesDataValues.map((key) => arr.push(key.Nombre))
        console.log(arr)

        setProdes(arr)

    }

    const postData = async () => {
        const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json', {
            method: 'POST',
            body: JSON.stringify(dataToPost),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        fetchProdes()
    }, [])



    return (
        <div>
            <div> Prodes: {prodes.map((item) => item)} </div>
            {prodes.length}
            Hola
            <button onClick={postData}>POST</button>


        </div>

    );
}

export default Usuario