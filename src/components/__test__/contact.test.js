import { render } from "@testing-library/react";
import Contact from "../Contact";
import {screen } from "@testing-library/react";
import "@testing-library/jest-dom";



describe("contact us page test cases", ()=>{


    test("Should load contact us component", ()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    })
    test("Should load button inside contact us component", ()=>{
    
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
        
        expect(button).toBeInTheDocument();
    })
    test("Should load two input boxes inside contact us component", ()=>{
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
        
        expect(inputName).toBeInTheDocument();
    })
    test("Should load input name inside contact us component", ()=>{
    
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        
        expect(inputBoxes.length).toBe(2);
    
    
    })

    
})
