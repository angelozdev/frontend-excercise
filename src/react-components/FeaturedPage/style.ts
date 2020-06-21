import styled from 'styled-components';

export const FeaturedPageStyled = styled.article`
   width: 100%;
   display: flex;
   flex-direction : row;
   align-items    : center;
   justify-content: space-between;
   padding: 1rem;
   border-radius: var(--border-radius);
   background-color: var(--bg-light);

   .content {
      width: 70%;
      padding-right: 1rem;

      & h3 {
         color: var(--color-secondary);
         font-size: .9rem;
         margin-bottom: .5rem;
      }

      & h2 {
         color: var(--color-primary);
      }
   }


   figure {
      width : 30%;
      height: 100%;
      margin: 0;

      & img {
         width : 100%;
         height: 100%;
         padding: .5rem;
         object-fit: cover;
         border: 1px solid var(--bg-dark);
      }
   }
`