import styled from 'styled-components';

import { device } from '../../styles/breakpoints'

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
      font-size: .8rem;

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

      & p {
         text-align: justify;
      }
   }

   a {
      display: inline-block;
      margin: 1rem 0;
      color: var(--color-primary);
      text-decoration: none;
   }
   @media ${device.tablet}{
      flex-direction: column;

      .details, .content {
         width: 100%;
      }

      .details {
         display: flex;
         justify-content: space-between;
         order: 2;
      }

      .content .title {
         font-size: 1.2rem;
      }
   }
`