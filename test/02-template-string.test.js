import { getSaludo } from "../src/base-pruebas/02-template-string";


describe("Prueba 02-template-string",()=>{
    test('adds 1 + 2 to equal 3', () => {
    let nombre = "Jose";
    expect(getSaludo(nombre)).toBe(`Hola ${nombre}`);
      });

})
