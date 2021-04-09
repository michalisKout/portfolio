import { render } from '@testing-library/react';
import Index from '../../pages';
import mockData from '__mocks__/userMock';

describe('Index page', () => {
  it('renders Index page', () => {
    const { asFragment } = render(<Index data={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
