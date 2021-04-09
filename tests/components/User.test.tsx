import { render } from '@testing-library/react';
import User from '../../components/User/User';

describe('User', () => {
  it('should render User', () => {
    const { asFragment } = render(<User imgUrl={'/'} mainContent={<div>content</div>} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
