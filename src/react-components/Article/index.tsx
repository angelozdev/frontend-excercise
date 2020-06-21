import React from 'react';

/* Utils */
import { format } from 'date-fns'

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
            <p>{format(date, 'PPPP')}</p>
            <p>By <span className="author">{author}</span></p>
            <p>{comments.length} <span>comments</span></p>
         </div>

         <div className="content">
            <h2 className="title">{title}</h2>
            <p>{content}</p>
            <a href="/">Read more</a>
         </div>
      </ArticleStyled>
   )
}

export default Article
