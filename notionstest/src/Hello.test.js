import Hello from './Hello';
import { render ,screen} from '@testing-library/react';
test("test component Hello",()=>{
    render(<Hello/>);
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
})