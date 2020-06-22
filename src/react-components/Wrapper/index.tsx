import React from 'react';

/* Styles */
import { WrapperStyled } from './style';

interface IProps {
   children: JSX.Element | JSX.Element[]
}

const Wrapper = ({ children }: IProps) => {
   return (
      <WrapperStyled className="wrapper">
         {children}
      </WrapperStyled>
   )
}

export default Wrapper
