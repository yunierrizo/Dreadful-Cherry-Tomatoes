import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("Home renders code section", () => {
    render(<Home title={""} />);
    const codeMessage = screen.getByText("src/App.tsx");
    expect(codeMessage).toBeInTheDocument();
});
