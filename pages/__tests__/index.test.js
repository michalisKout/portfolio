import { render, screen } from "@testing-library/react";
import App from "../../pages/index";

describe("Home page", () => {
    it("renders Home page", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", { name: "Welcome to Next.js!" })
        ).toBeInTheDocument();
    });
});