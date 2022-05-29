import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe   ('Testing 02-template', () => {

    test('probar funcion saludo', () => { 
        const nombre = 'Harry';
        
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${ nombre }`);
        
    })


    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre

    test('probar funcion saludo 2', () => {         
        
        const saludo = getSaludo('carlos');

        expect(saludo).toBe(`Hola ${ 'carlos' }`);
        
    })

});