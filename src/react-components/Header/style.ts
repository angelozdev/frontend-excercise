import styled from 'styled-components';

export const HeaderStyled = styled.header`
   width: 100%;

   h3 {
      font-weight: 300;
   }

   nav {
      width: 100%;

      & ul {
         display: flex;
         justify-content: space-around;
         background-color: var(--background-dark);
         border-radius: .5rem;
         overflow: hidden;
      }
   }
`