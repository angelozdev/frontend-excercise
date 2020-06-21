import React, { Fragment } from 'react';

/* Components */
import Header from '../react-components/Header';
import FeaturedPage from '../react-components/FeaturedPage';
import Article from '../react-components/Article'

const Home = (): JSX.Element => {
   return (
      <Fragment>
         <Header />
         <FeaturedPage
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam culpa eius accusamus beatae assumenda. Libero explicabo accusamus in, iste soluta nihil odit dolore alias repudiandae numquam, dolores provident deleniti? Dolore modi voluptates commodi vel molestiae libero aut iure corporis obcaecati."
            img="https://images.unsplash.com/photo-1590949527573-7ca0301ab7ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80"
         />
         <Article 
            date={new Date}
            author="Logean"
            title="Las bondades de HTML5"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam"
            comments={['hola', 'mundo']}
         />
      </Fragment>
   )
}

export default Home;
