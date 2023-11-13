import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";
describe("09-promesas",()=>{
    test("Testear Funcion asincrona getHeroesByidAsync",()=>{
        const id = 1;
        
        console.log(getHeroeByIdAsync(id));
    })
})