import React, { FC } from 'react';

interface Props {
  itemClassName?: string;
  url: string;
  title: string;
}

const NavItem: FC<Props> = ({ itemClassName, title, url }) => {
  return (
    <span data-testid={'nav-item'} className={`${itemClassName}`}>
      <a target="_blank" href={url}>
        {title}
      </a>
    </span>
  );
};

export default NavItem;
