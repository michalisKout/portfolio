import { render } from "@testing-library/react";
import App from "../../pages";

describe("Home page", () => {
  it("renders Home page", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
