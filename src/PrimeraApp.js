import React from "react";
import  PropTypes  from "prop-types";
// Existen 2 tipos en REACT { const , class }
// se puede utilizar div o Fragment o vacio
const PrimeraApp = ( { saludo, subtitulo  } ) => {
    // react no escribe ni booleanos ni objetos

    if ( !saludo ) {
        throw new Error("No hay saludo");
    }
    

    return (
        <>
            <h1> { saludo} </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) }</pre>*/ }
            <p> { subtitulo } </p>
        </>
    );
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}


PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"

}

export default PrimeraApp;