import { useEffect, useState } from "react";

import classes from "./Ligas.module.css";

<<<<<<< HEAD
import { Route, Link } from "react-router-dom";
=======
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Liga from "./Liga";
>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d

const Ligas = () => {
  let prodes = [];
  let LigasArr = [];
  let LigasArrSinDuplicate = [];
  const [Ligas, setLigas] = useState([]);

  useEffect(() => {
    fetchProdes();
  }, []);

  async function fetchProdes() {
<<<<<<< HEAD
    const response = await fetch(process.env.REACT_APP_BACKEND_URL);
=======
    const response = await fetch(process.env.BACKEND_URL);
>>>>>>> 304d94f75c00404117ba9016aae7a8773bb0106d
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
