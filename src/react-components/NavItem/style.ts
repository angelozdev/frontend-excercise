import styled from 'styled-components';

export const NavItemStyled = styled.li`
   padding: .7rem;
   width: 100%;
   color: brown;
   cursor: pointer;
   font-weight: 700;
   text-align: center;
   user-select: none;

   &.active {
      color: var(--bg);
      background: var(--color-primary);
   }
`