import React from 'react';

/* Components */
import Home from '../pages/Home';

/* Redux */
import { Provider } from 'react-redux';
import { store } from '../redux/store'

const App = () => {
   return (
      <Provider store={store}>
         <Home />
      </Provider>
   )
}

export default App;
