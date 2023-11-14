import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";
describe("09-promesas",()=>{
    // test("Testear Funcion asincrona getHeroesByidAsync",()=>{
    //     const id = 1;        
    //     return getHeroeByIdAsync(id).then((hero)=>{
    //         expect(hero).toEqual({
    //             id: 1,
    //             name: "Batman",
    //             owner: "DC",
    //           })
            
    //     })
    // })

    test("Testear Funcion asincrona getHeroesByidAsync",(done)=>{
        const id = 1;        
        // getHeroeByIdAsync(1);
        getHeroeByIdAsync(id).then((hero)=>{
            expect(hero).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC",
              })
            done();
        })
    })

    test("Testear Funcion asincrona getHeroesByidAsync debe tener un herror si no existe heroe",(done)=>{
        const id = 100;        
        // getHeroeByIdAsync(1);
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toBeFalsy();
            done()
        })
        .catch(error =>{
            expect(error).toBe(`No se pudo encontrar el héroe con id ${id}`)
            done()
        })
    })

})