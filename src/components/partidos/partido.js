import classes from './Partidos.module.css'

const Partido = (props) => {

    return (

        <div className={classes.divpartido}>
            <div className={classes.nombreequipo}>{props.equipo1}</div>
            <input
                name="isGoing"
                type="checkbox"
            /* onChange={this.handleInputChange} */
            //seria una funcion que cargue o borre este name al array /
            />

            <input
                name="isGoing"
                type="checkbox"
                        /* onChange={this.handleInputChange} */ />
            <input
                name="isGoing"
                type="checkbox"
                        /* onChange={this.handleInputChange} */ />
            <div className={classes.nombreequipo}>{props.equipo2}</div>
        </div>

    )
}

export default Partido