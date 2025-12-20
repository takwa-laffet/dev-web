import Home from "./Home";
import { weatherApi } from "./api/weatherapi";
import { render, screen } from "@testing-library/react";

test("test home component", async () => {
    expect(weatherApi("Paris")).toBeDefined();
    render(<Home />);
    const inputElement = screen.getByPlaceholderText(/entrer une ville/i);
    expect(inputElement).toBeInTheDocument();
});
