import { render } from "@testing-library/react";
import Navigation from "../../components/Navigation/Navigation";

describe("Navigation Component", () => {
  it("should render Navigation", () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
