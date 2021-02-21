import { render } from "@testing-library/react";
import InfoSection from "../../components/InfoSection/InfoSection";

it("should render InfoSection", () => {
  const { asFragment } = render(<InfoSection />);
  expect(asFragment()).toMatchSnapshot();
});
