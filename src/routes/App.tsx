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

/* Styles */
import { GlobalState } from '../styles/GlobalState'

import {
   BrowserRouter as Router,
   Route,
   Switch,
} from "react-router-dom";

const App = () => {
   return (
      <Provider store={store}>
         <Router>
            <Layout>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Home" component={Home} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/Contact" component={Contact} />
                  <Route exact path="/Blog" component={Blog} />
                  <Route exact path="/Portfolio" component={Portfolio} />
               </Switch>
            </Layout>
            <GlobalState />
         </Router>
      </Provider>
   )
}

export default App;
