import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  &.active {
    color: #ff6c00;
  }
`;
