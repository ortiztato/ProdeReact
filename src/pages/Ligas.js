import { useEffect, useState } from "react";

import classes from './Ligas.module.css'

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Liga from "./Liga";

const Ligas = () => {

  let prodes = [];
  let LigasArr = [];
  let LigasArrSinDuplicate = [];
  const [Ligas, setLigas] = useState([]);



  useEffect(() => {
    fetchProdes()
  }, [])

  async function fetchProdes() {

    console.log('buscando prodes');

    const response = await fetch('https://prueba-food-order-app-default-rtdb.firebaseio.com/prodes.json');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }

    prodes = Object.entries(data)

    prodes.map((key) => (
      LigasArr.push(key[1].Liga)
    ));

    LigasArrSinDuplicate = [...new Set(LigasArr)];
    setLigas(LigasArrSinDuplicate)

  }


  return (
    <div className={classes.ligaPage}>
      <div className={classes.tituloLigas}>
        Ligas
      </div>

      <Route path='/ligas/' exact>
        <div>
          {Ligas.map((key) => (

            <Link className={classes.Ligaitem} to={`/ligas/${key}`}>{key}</Link>

          ))}
        </div>
      </Route>



    </div>
  );
};

export default Ligas;