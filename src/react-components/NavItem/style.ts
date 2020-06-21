import styled from 'styled-components';

export const NavItemStyled = styled.li`
   width: 100%;
   a {
      display: inline-block;
      padding: .7rem;
      width: 100%;
      color: brown;
      cursor: pointer;
      font-weight: 700;
      text-align: center;
      user-select: none;
      text-decoration: none;

      &.active {
         color: var(--bg);
         background: var(--color-primary);
      }
   }

`