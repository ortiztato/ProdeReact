import { useEffect, useState } from "react";

import classes from "./Ligas.module.css";

import { Route, Link } from "react-router-dom";

const Ligas = () => {
  let prodes = [];
  let LigasArr = [];
  let LigasArrSinDuplicate = [];
  const [Ligas, setLigas] = useState([]);

  useEffect(() => {
    fetchProdes();
  }, []);

  async function fetchProdes() {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quotes.");
    }

    prodes = data.body;

    prodes.map((key) => LigasArr.push(key.Liga.trim().toLowerCase()));

    LigasArrSinDuplicate = [...new Set(LigasArr)];
    setLigas(LigasArrSinDuplicate);
  }

  return (
    <div className={classes.ligaPage}>
      <div className={classes.tituloLigas}>Ligas</div>

      <Route path="/ligas/" exact>
        <div className={classes.ligasContainer}>
          {Ligas.map((key) => (
            <div className={classes.usuarioItem}>
              <Link className={classes.Ligaitem} to={`/ligas/${key}`}>
                {key}
              </Link>
            </div>
          ))}
          <div className={classes.usuarioItem}>
            <Link className={classes.Ligaitem} to={`/ligas/GENERAL`}>
              GENERAL
            </Link>
          </div>
        </div>
      </Route>
    </div>
  );
};

export default Ligas;
