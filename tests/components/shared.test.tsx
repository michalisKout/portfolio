import { render } from "@testing-library/react";
import NavItems from "../../components/Shared/NavItems";

describe("Shared Components", () => {
  it("should render all the nav items", () => {
    const { getAllByTestId } = render(<NavItems />);
    const navItems = getAllByTestId(/nav-item/);

    expect(navItems.length).toBe(4);
  });
});
