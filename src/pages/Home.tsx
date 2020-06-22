import React, { Fragment } from 'react';

/* Components */
import FeaturedPage from '../react-components/FeaturedPage';
import ListOfArticles from '../react-components/ListOfArticles';

/* Redux */
import { useSelector } from 'react-redux';
import { IIntitialState } from "../redux/store";

interface IProps {
   location: {
      pathname: string
   }
}

const Home = ({}: IProps): JSX.Element => {
   const articles = useSelector(({ articles }: IIntitialState) => articles);
   return (
      <Fragment>
         <FeaturedPage
            title={articles[0].title}
            description={articles[0].description}
            img={articles[0].img}
         />
         <ListOfArticles />
      </Fragment>
   )
}

export default React.memo(Home, (prev, next) => {
   return prev.location.pathname === next.location.pathname
});
