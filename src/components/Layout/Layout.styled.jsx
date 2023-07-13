import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled('nav')`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0 24px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const MainNav = styled('div')`
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
    color: #753498;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  max-width: 1024px;
`;
