import styled from 'styled-components';

export const ArticleStyled = styled.article`
   display: flex;
   padding: 1rem;
   border-bottom: 1px solid lightgray;

   p {
      margin: 0;
   }

   .details {
      width: 20%;
      padding-right: 1rem;

      & .author {
         color: var(--color-primary);
         cursor: pointer;
      }
   }

   .content {
      width: 80%;

      & .title {
         color: var(--color-primary);
         margin-bottom: 1rem;
      }
   }

   a {
      display: inline-block;
      margin: 1rem 0;
      color: var(--color-primary);
      text-decoration: none;
   }
`