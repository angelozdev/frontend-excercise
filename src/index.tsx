import React from 'react';
import { render } from 'react-dom';

/* Routes */
import App from './routes/App';

const $root = document.querySelector('#root')

render(<App />, $root);


if('serviceWorker' in navigator){
   window.addEventListener('DOMContentLoaded', () => {
      navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('SX Registered'))
      .catch((err: Error) => console.error(err))
   })
}