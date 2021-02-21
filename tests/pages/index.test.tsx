import { render } from "@testing-library/react";
import Home from "../../pages";
import userMock from "__mocks__/userMock";
describe("Home page", () => {
  it("renders Home page", () => {
    const { asFragment } = render(<Home userDetails={userMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
