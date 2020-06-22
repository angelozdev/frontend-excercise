import React, { Fragment } from 'react';

/* Components */
import FeaturedPage from '../react-components/FeaturedPage';
import ListOfArticles from '../react-components/ListOfArticles';

/* Redux */
import { useSelector } from 'react-redux';
import { IIntitialState } from "../redux/store";

const Home = (): JSX.Element => {
   const articles = useSelector((state: IIntitialState) => state.articles);
   const randomNumber: number = Math.floor(Math.random() * articles.length);

   console.log(articles);
   return (
      <Fragment>
         <FeaturedPage
            title={articles[randomNumber].title}
            description={articles[randomNumber].description}
            img={articles[randomNumber].img}
         />
         <ListOfArticles />
      </Fragment>
   )
}

export default Home;
