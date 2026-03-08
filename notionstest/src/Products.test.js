import Products from "./Products";  
import { render, screen,waitFor } from "@testing-library/react";
test("gets products",async()=>{
    //Mock 
    global.fetch=jest.fn(()=>Promise.resolve({
        json:()=>Promise.resolve([{"id":1,
            "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}])
    }));
    render(<Products/>);
    await waitFor(()=>{
 const  title =screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
expect(title).toBeInTheDocument();
    })
});