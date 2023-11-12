import { usContext } from "../src/base-pruebas/06-deses-obj"

describe("Archivo 06 deses-obj",()=>{
    test("Retorno funcion usContext",()=>{
        const testUser = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman',
            rango:"subalterno"
        };
        const { edad, clave, nombre, rango = "Capitán"} = testUser;
        const testUsContext = {
            nombreClave: clave,
            nombre,
            rango,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        expect(usContext(testUser)).toStrictEqual(testUsContext)
    })
})