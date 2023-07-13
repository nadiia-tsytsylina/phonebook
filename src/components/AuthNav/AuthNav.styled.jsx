import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #753498;
  }

  :hover,
  :focus {
    color: #753498;
  }
`;
