import React from 'react';

/* Components */
import Layout from "../react-components/Layout";

/* Pages */
import Home from '../pages/Home';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

/* Redux */
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";

const App = () => {
   return (
      <Provider store={store}>
         <Router>
            <Layout>
               <Switch>
                  <Route extact path="/Home" component={Home} />
                  <Route extact path="/About" component={About} />
                  <Route extact path="/Contact" component={Contact} />
                  <Route extact path="/Blog" component={Blog} />
                  <Route extact path="/Portfolio" component={Portfolio} />
                  <Redirect exact from="/" to="/Home" />
               </Switch>
            </Layout>
         </Router>
      </Provider>
   )
}

export default App;
