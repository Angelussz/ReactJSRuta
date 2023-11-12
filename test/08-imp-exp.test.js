import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";
describe("Pruebas 08-imp-exp.test",()=>{
    test("getHeroes debe dar batman",()=>{
        
        const idTest = 1;

        expect(getHeroeById(idTest)).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test("getHeroes no debe encontrar nada y botar undefined",()=>{
        
        const idTest = 100;

        expect(getHeroeById(idTest)).toBeFalsy();
    })

    test("Retornar Heroes de marvel",()=>{
        
        const ownerTest = "Marvel";
        // expect(getHeroesByOwner(ownerTest)).toEqual([
        //     { id: 2, name: 'Spiderman', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
        //   ]);
        // console.log(heroes.filter(heroe => heroe.owner === ownerTest))
        expect(getHeroesByOwner(ownerTest)).toEqual(heroes.filter(heroe => heroe.owner === ownerTest))
          expect(getHeroesByOwner(ownerTest).length).toBe(2);
    })
    test("Retornar Heroes de DC",()=>{
        
        const ownerTest = "DC";
        expect(getHeroesByOwner(ownerTest)).toEqual(heroes.filter(heroe => heroe.owner === ownerTest));
          expect(getHeroesByOwner(ownerTest).length).toBe(3);
    }
    )
})