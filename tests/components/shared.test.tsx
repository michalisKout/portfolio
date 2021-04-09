import { render } from '@testing-library/react';
import NavItems from '../../components/Navigation/components/NavItems';
import Switch from 'components/Shared/Switch';

describe('Shared Components', () => {
  it('should render all the nav items', () => {
    const { getAllByTestId } = render(<NavItems />);
    const navItems = getAllByTestId(/nav-item/);

    expect(navItems.length).toBe(3);
  });

  it('should render Switch component', () => {
    const { asFragment } = render(<Switch />);

    expect(asFragment()).toMatchSnapshot();
  });
});
