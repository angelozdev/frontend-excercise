import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

interface IProps {
   children: JSX.Element | JSX.Element[]
}

const Layout = ({children}: IProps): JSX.Element => {
   return (
      <Fragment>
         <Header />
            {children}
         <Footer />
      </Fragment>
   )
}

export default Layout
