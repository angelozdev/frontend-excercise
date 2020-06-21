import React, { Fragment } from 'react';

/* Components */
import Header from '../react-components/Header';
import FeaturedPage from '../react-components/FeaturedPage';
import ListOfArticles from '../react-components/ListOfArticles';
import Footer from '../react-components/Footer';

/* Redux */
import { useSelector } from 'react-redux';
import { IIntitialState } from "../redux/store";

const Home = (): JSX.Element => {
   const articles = useSelector((state: IIntitialState) => state.articles);
   const randomNumber: number = Math.floor(Math.random() * articles.length);

   console.log(articles);
   return (
      <Fragment>
         <Header />
         <FeaturedPage
            title={articles[randomNumber].title}
            description={articles[randomNumber].description}
            img={articles[randomNumber].img}
         />
         <ListOfArticles />
         <Footer />
      </Fragment>
   )
}

export default Home;
