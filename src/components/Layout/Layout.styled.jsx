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

export const Navigation = styled('nav')`
  display: flex;
  height: 60px;
  align-items: center;
  margin-bottom: 20px;
  background: rgba(25, 28, 38, 1);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Container = styled('div')`
  padding-left: 24px;
  padding-right: 24px;
`;
