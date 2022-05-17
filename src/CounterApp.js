import React, { useState } from "react";
import  PropTypes  from "prop-types";

const CounterApp = ( { value  } ) => {


    if ( !value ) {
        throw new Error("No hay valor");
    }

    const [ counter, setCounter ] = useState(0);


    
    // handleAdd
    const handleAdd = () => {
        //setCounter( counter + 1);
        setCounter( (c)=> c + 1);
    }

    // handleReset
    const handleReset = () => {
        setCounter( (c)=> 0);
    }

    // handleSubstract
    const handleSubstract = () => {
        setCounter( (c)=> c - 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick= {  handleAdd } >+1</button>
            <button onClick= {  handleReset } >Reset</button>
            <button onClick= {  handleSubstract } >-1</button>
            
     
        </>
    );
}


CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;