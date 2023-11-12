import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones"

describe("Pruebas en 05 funciones",()=>{
    test("getUser debe retornar un objeto",()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(testUser);
    })
    test("GetUsuaerioActivo",()=>{
        const username = "Jose"
        const testUserActive = {
            uid: 'ABC567',
            username
            }
        const userActive = getUsuarioActivo(username);
        expect(userActive).toStrictEqual(testUserActive);
    })
})
