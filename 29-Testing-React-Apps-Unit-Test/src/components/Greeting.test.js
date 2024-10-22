import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders Hellow World as a text', () => {
        //Arrange
        render(<Greeting />) //render the component
    
        //Act
        //.. nothing
    
        //Asset
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });
})

