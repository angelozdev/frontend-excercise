import React from 'react';

/* Styles */
import { FeaturedPageStyled } from './style';

interface IProps {
   title: string,
   description: string,
   img: string
}

const FeaturedPage = ({ title, description, img }: IProps) => {
   return (
      <FeaturedPageStyled>
         <div className="content">
            <h3>Featured Page</h3>
            <h2>{title}</h2>
            <p>{description}</p>
         </div>
         <figure>
            <img src={img} alt="Featured image"/>
         </figure>
      </FeaturedPageStyled>
   )
}

export default FeaturedPage
