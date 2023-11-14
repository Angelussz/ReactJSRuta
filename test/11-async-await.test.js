import { getImagen } from "../src/base-pruebas/11-async-await"

describe("Test 11-async-await con jest",()=>{
    test("Test de la funcion getImage",async()=>{
        const url = await getImagen();
        
        // expect(typeof url).toBe("string");
        // TESTING con api invalida
        // expect(url).toBe("No se encontro la imagen");

    })
})