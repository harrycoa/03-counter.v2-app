import { retornaArreglo } from '../../base/07-deses-arr.js';

describe    ('Test 07 Desestructuracion:', () => {
    it('Desestructuración de arrays', () => {
        

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras ).toBe('string');


        expect(numeros).toBe(123);
        expect(typeof numeros ).toBe('number');

    });
});