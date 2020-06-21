import React, { Fragment } from 'react';
import { render } from 'react-dom';

/* Styles */
import { GlobalState } from './styles/GlobalState'

/* Routes */
import App from './routes/App';

const $root = document.querySelector('#root')

render(
   <Fragment>
      <GlobalState />
      <App />
   </Fragment>
, $root)