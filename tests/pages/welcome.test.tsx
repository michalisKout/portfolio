import { render } from '@testing-library/react';
import Welcome from '../../pages/welcome';
import mockData from '__mocks__/userMock';

describe('Welcome page', () => {
  it('renders Welcome page', () => {
    const { asFragment } = render(<Welcome data={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
