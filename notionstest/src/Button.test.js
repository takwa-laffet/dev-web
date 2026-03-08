import Button from "./Button";
import { render,screen,fireEvent } from "@testing-library/react";
test("test component Button",()=>{
    render(<Button/>);
    const button=screen.getByText("count is 0");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const textdefault = screen.getByText("count is 4");
    expect(textdefault).toBeInTheDocument();
})