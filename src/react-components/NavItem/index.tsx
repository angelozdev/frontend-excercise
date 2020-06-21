import React from 'react';

import { NavItemStyled } from './style'

interface IProps {
   title: string
}

const NavItem = ({ title }: IProps) => {
   return (
      <NavItemStyled>
         {title}
      </NavItemStyled>
   )
}

export default NavItem;
