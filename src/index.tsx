import React from 'react';
import { render } from 'react-dom';

/* Routes */
import App from './routes/App';

const $root = document.querySelector('#root')

render(<App />, $root)