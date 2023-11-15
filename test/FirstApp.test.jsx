import { render } from "@testing-library/react"
import { FirstApp } from "../src/firstApp"

describe("Prueba en <FirstApp />",()=>{
    // test('debe de hacer match con el snapshot',()=>{
    //     const title = 'Hola soy Puchi';
    //     const {container} = render( <FirstApp title={title}/> );
        
    //     expect(container).toMatchSnapshot();
    // })
    test('debe mostrar el título en un h1',()=>{
        const title = 'Hola soy Puchi';
        const {container, getByText, getByTestId} = render( <FirstApp title={title}/> );

        // Si tiene el texto
        // expect(getByText(title)).toBeTruthy();
        // Si el h1 tiene el texto
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

        // Con Id
        expect(getByTestId('test-title').innerHTML).toContain(title);

    })
    test('debe mostrar el subtitulo enviado por props',()=>{
        const title = 'Hola soy Puchi';
        const subTitle = 'soy un subtitulo';
        const {getAllByText} = render( <FirstApp title={title} subTitle={subTitle}/> );
        expect(getAllByText(subTitle).length).toBe(2);

    })
})