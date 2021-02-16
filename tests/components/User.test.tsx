import { render } from "@testing-library/react";
import User from "../../components/User/User";

it("should render User", () => {
  const { asFragment } = render(<User />);
  expect(asFragment()).toMatchSnapshot();
});
