import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe("Test de 07-deses-arr",()=>{
    test("retornarArreglo() retorna ABC y 123",()=>{
        const [letter,number] = retornaArreglo();
        expect(letter).toBe ("ABC");
        expect(number).toBe (123);
        
        // expect(typeof letter ).toBe("string");
        // expect(typeof number ).toBe("number");
        
        expect( letter ).toEqual(expect.any(String));
        
    })
})