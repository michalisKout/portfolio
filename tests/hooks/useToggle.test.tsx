import { render } from "@testing-library/react";
import Switch from "components/Shared/Switch";

describe("Hooks", () => {
  it("should toggle the switch component", () => {
    const { container, getByTestId } = render(<Switch />);

    const input = container.querySelector('input[type="checkbox"]');

    expect(input?.nodeValue).toBeFalsy();
  });
});
