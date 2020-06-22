import styled from 'styled-components';

export const HeaderStyled = styled.header`
   width: 100%;

   h3 {
      font-weight: 300;
   }

   nav {
      width: 100%;
      overflow: scroll;

      &::-webkit-scrollbar{
         display: none;
      }

      & ul {
         min-width: 400px;
         display: flex;
         justify-content: space-around;
         background-color: var(--bg-dark);
         border-radius: var(--border-radius);
         overflow: hidden;
      }
   }
`