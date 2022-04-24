import React from "react";
import  PropTypes  from "prop-types";

const CounterApp = ( { value  } ) => {


    if ( !value ) {
        throw new Error("No hay valor");
    }
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
     
        </>
    );
}


CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;