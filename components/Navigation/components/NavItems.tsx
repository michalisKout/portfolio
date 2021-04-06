import { FC } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';

interface Props {
  wrapperClassName?: string;
  itemClassName?: string;
}

const menuConfig = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/michalis-koutridis-340774124/',
  },
  {
    title: 'Github',
    url: 'https://github.com/michalisKout',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/Michael_Kout',
  },
];

const NavItems: FC<Props> = ({
  wrapperClassName = 'nav-items--wrapper',
  itemClassName = 'nav-item',
}) => (
  <div className={`${wrapperClassName}`}>
    {menuConfig.map(({ url, title, index }) => (
      <NavItem key={`${title}_${index}`} url={url} title={title} itemClassName={itemClassName} />
    ))}
  </div>
);

export default NavItems;
