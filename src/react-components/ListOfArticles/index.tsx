import React from 'react';
import Article from '../Article';

/* Styles */
import { ListOfArticlesStyled } from './style'

const ListOfArticles = () => {
   return (
      <ListOfArticlesStyled>
         <Article
            date={new Date}
            author="Logean Sama"
            title="Las bondades de HTML5"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam culpa eius accusamus beatae assumenda. Libero explicabo accusamus in, iste soluta nihil odit dolore alias repudiandae numquam, dolores provident deleniti? Dolore modi voluptates commodi vel molestiae libero aut iure corporis obcaecati."
            comments={['hola', 'mundo']}
         />
         <Article
            date={new Date}
            author="Logean Sama"
            title="Las bondades de HTML5"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam culpa eius accusamus beatae assumenda. Libero explicabo accusamus in, iste soluta nihil odit dolore alias repudiandae numquam, dolores provident deleniti? Dolore modi voluptates commodi vel molestiae libero aut iure corporis obcaecati."
            comments={['hola', 'mundo']}
         />
         <Article
            date={new Date}
            author="Logean Sama"
            title="Las bondades de HTML5"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam culpa eius accusamus beatae assumenda. Libero explicabo accusamus in, iste soluta nihil odit dolore alias repudiandae numquam, dolores provident deleniti? Dolore modi voluptates commodi vel molestiae libero aut iure corporis obcaecati."
            comments={['hola', 'mundo']}
         />
         <Article
            date={new Date}
            author="Logean Sama"
            title="Las bondades de HTML5"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus unde dolorum eaque at dolores, facere tempora, nemo explicabo numquam culpa eius accusamus beatae assumenda. Libero explicabo accusamus in, iste soluta nihil odit dolore alias repudiandae numquam, dolores provident deleniti? Dolore modi voluptates commodi vel molestiae libero aut iure corporis obcaecati."
            comments={['hola', 'mundo']}
         />
      </ListOfArticlesStyled>
   )
}

export default ListOfArticles;
