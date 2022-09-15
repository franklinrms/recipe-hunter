import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, Logo } from './style';
import logo from '../../assets/logo.png';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <h1>{pathname.split('/')[1].toLocaleUpperCase()}</h1>
      <div />
    </HeaderContainer>
  );
}
