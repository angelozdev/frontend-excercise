import React from 'react';

/* Styles */
import { HeaderStyled } from './style';

/* Components */
import NavItem from '../NavItem';
import Wrapper from '../Wrapper'

const items = ['Home', 'Portfolio', 'About', 'Blog', 'Contact']

const Header = (): JSX.Element => {
   return (
      <Wrapper>
         <HeaderStyled>
            <h1>Web Exercise</h1>
            <h3>Page was made with ReactJS</h3>
            <nav>
               <ul>{
                  items.map(item => (
                     <NavItem key={item} title={item} />
                  ))
               }</ul>
            </nav>
         </HeaderStyled>
      </Wrapper>
   )
}

export default Header;
