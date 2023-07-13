import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px 0;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ef0060;
  }

  :hover {
    transform: scale(1.1);
  }
`;
