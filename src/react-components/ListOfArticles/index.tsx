import React from 'react';
import Article from '../Article';

/* Styles */
import { ListOfArticlesStyled } from './style';

/* Redux */
import { useSelector } from 'react-redux';
import { IIntitialState } from "../../redux/store";

const ListOfArticles = () => {
   const articles = useSelector((state: IIntitialState) => state.articles);
   return (
      <ListOfArticlesStyled>{
         articles.map(({ date, author, title, description, comments, id }) => (
            <Article
               key={id}
               date={date}
               author={author}
               title={title}
               description={description}
               comments={comments}
            />
         ))
      }</ListOfArticlesStyled>
   )
}

export default React.memo(ListOfArticles);
