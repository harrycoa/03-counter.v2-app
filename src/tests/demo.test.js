
describe('Demo.test', function() {

    test('deben de ser iguales los strings', () => { 
        // 1.- inicializacion
        const mensaje = 'Hola mundo';

        // 2.- estimulo
        const mensaje2 = `Hola mundo`;

        // 3.- resultado
        expect(mensaje).toBe(mensaje2);
    })
});