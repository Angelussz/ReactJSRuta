import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/firstApp"

describe("Prueba en <FirstApp />",()=>{
    const title = "Hola, soy Angelo"
    const subTitle = "Hola soy Puchi"
    test("Debe hacer match con el snapshot", ()=>{
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    })
    test("Debe mostrar el mensaje de title", ()=>{
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
    test("Debe mostrar el titulo en un h1", ()=>{
        render(<FirstApp title={title} />);
        expect(screen.getByRole("heading",{level:1}).innerHTML).toContain(title);
    })
    test("Debe mostrar el subtitulo enviado por las props", ()=>{
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
    
})