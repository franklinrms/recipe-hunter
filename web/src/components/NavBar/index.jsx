import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemMenu, Menu } from './style';

export default function NavBar() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    setSelected(pathname.split('/')[1]);
  }, [pathname]);

  const handleClick = (path) => {
    setSelected(path);
    navigate(`/${path}`);
  };

  return (
    <Menu>
      <ItemMenu
        type="button"
        onClick={() => handleClick('explore')}
        isSelected={selected === 'explore'}
        disabled
      >
        <i className="bx bx-compass bx-tada-hover" />
        Explore
      </ItemMenu>

      <ItemMenu
        type="button"
        onClick={() => handleClick('foods')}
        isSelected={selected === 'foods'}
      >
        <i className="bx bxs-dish bx-tada-hover" />
        Foods
      </ItemMenu>

      <ItemMenu
        type="button"
        onClick={() => handleClick('drinks')}
        isSelected={selected === 'drinks'}
      >
        <i className="bx bxs-wine bx-tada-hover" />
        Drinks
      </ItemMenu>

      <ItemMenu
        type="button"
        onClick={() => handleClick('profile')}
        isSelected={selected === 'profile'}
        disabled
      >
        <i className="bx bxs-user bx-tada-hover" />
        Profile
      </ItemMenu>
    </Menu>
  );
}
