import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'

interface IProps {
   children: JSX.Element
}

const Layout = ({ children }: IProps): JSX.Element => {
   return (
      <Wrapper>
         <Header />
            {children}
         <Footer />
      </Wrapper>
   )
}

export default Layout;
