import { render } from '@testing-library/react';
import Welcome from '../../pages/welcome';
import userMock from '__mocks__/userMock';

describe('Welcome page', () => {
  it('renders Welcome page', () => {
    const { asFragment } = render(<Welcome userDetails={userMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
