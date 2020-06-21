import React from 'react';

/* Styles */
import { FeaturedPageStyled } from './style'

interface IProps {
   title: string,
   content: string,
   img: string
}

const FeaturedPage = ({ title, content, img }: IProps) => {
   return (
      <FeaturedPageStyled>
         <div className="content">
            <h3>Featured Page</h3>
            <h2>{title}</h2>
            <p>{content}</p>
         </div>
         <figure>
            <img src={img} alt="Featured image"/>
         </figure>
      </FeaturedPageStyled>
   )
}

export default FeaturedPage
