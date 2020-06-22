import styled from 'styled-components';
import { device } from '../../styles/breakpoints'

export const FooterStyled = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;

   .copyright {
      color: var(--color-secondary);
   }

   svg {
      margin-right: 1rem;
   }

   @media ${device.mobileL}{
      flex-direction: column;
   }
`