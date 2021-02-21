import { render } from "@testing-library/react";
import Footer from "../../components/Footer/Footer";

it("should render Footer", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
