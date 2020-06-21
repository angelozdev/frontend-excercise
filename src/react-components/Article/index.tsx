import React from 'react';

/* Styles */
import { ArticleStyled } from './style'

interface IProps {
   date: Date,
   author: string,
   comments: Array<string>,
   title: string,
   content: string
}

const Article = ({ date, author, comments, title, content }: IProps): JSX.Element => {
   return (
      <ArticleStyled>

         <div className="details">
            <p>{date.toString()}</p>
            <p>By: <span>{author}</span></p>
            <p>{comments.length} <span>comments</span></p>
         </div>

         <div className="content">
            <h2>{title}</h2>
            <p>{content}</p>
         </div>

      </ArticleStyled>
   )
}

export default Article
