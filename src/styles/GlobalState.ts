import { createGlobalStyle } from 'styled-components';

export const GlobalState = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');

   :root {
      --background: #eee;
      --background-dark: #ddd;
      --color-primary: brown;
   }

   *, *::after, *::before {
      box-sizing: border-box;
   }

   body {
      margin : 0;
      padding: 0;
      font-family: 'Raleway', sans-serif;
      background-color: var(--background);
   }

   #root {
      padding: 1rem;
   }

   h1, h2, h3, h4, h5, h6 {
      margin : 0;
      padding: 0;
   }

   ul {
      list-style: none;
      padding: 0;
   }
`