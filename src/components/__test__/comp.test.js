import { render,screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";


test("should load the  About component page", () => {
    render(<About />);
    const heading =screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});