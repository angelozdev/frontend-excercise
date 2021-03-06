import React from 'react';

/* Styles */
import { NavItemStyled } from './style'
import { NavLink } from 'react-router-dom';

interface IProps {
   title: string
}

const NavItem = ({ title }: IProps) => {
   return (
      <NavItemStyled>
         <NavLink exact to={`/${title === 'Home' ? '' : title}`}>
            {title}
         </NavLink>
      </NavItemStyled>
   )
}

export default NavItem;
