import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <NavLink to="Main">Главная</NavLink>
      <NavLink to="Shop">Меню</NavLink>
    </header>
  );
}

export default Navigation;
