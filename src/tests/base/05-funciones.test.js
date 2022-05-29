import { getUser,getUsuarioActivo } from "../../base/05-funciones";

describe('Testing 05-funciones', () => {

    test('probar funcion getUser', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);   
        
    })

    // getUsuarioActivo debe de retornar un objeto con uid, username
    test('probar funcion getUsuarioActivo', () => { 

        const nombre = 'Harry';    
        const usuarioActivo = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        });
        
    })
});