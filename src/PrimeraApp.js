import React from "react";
// Existen 2 tipos en REACT { const , class }
// se puede utilizar div o Fragment o vacio
const PrimeraApp = () => {
    // react no escribe ni booleanos ni objetos


    const saludo = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: '23',
    }

    return (
        <>
            <pre> { JSON.stringify(saludo, null, 3) }</pre>
            <p>Hola Mundo</p>
        </>
    );
}



export default PrimeraApp;