import classes from "./Portada.module.css";

import copa from "../assets/copa.png";

import { Link } from "react-router-dom";

const Portada = () => {

  return (
    <div className={classes.portadaPage}>
      <h1 className={classes.tituloPortada}>PRODE MUNDIAL 2022</h1>
      <img className={classes.imgCopa1} src={copa} alt="copa" />

      <div className={classes.linksContainer}>
        <Link className={classes.link} to={"/form"}>
          COMPLETAR <br /> UN PRODE
        </Link>
        <img className={classes.imgCopa2} src={copa} alt="copa" />
        <Link className={classes.link} to={"/ligas"}>
          VER <br />
          LIGAS
        </Link>
      </div>
    </div>
  );
};

export default Portada;
