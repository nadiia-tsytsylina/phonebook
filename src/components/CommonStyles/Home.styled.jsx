import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  line-height: 1.2;
  color: #ffffff;
`;

export const HomeText = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 1.2;
  color: #ffffff;
`;
export const HomeLink = styled(Link)`
  margin-left: 8px;
  margin-right: 8px;
  color: #ffffff;
  padding-bottom: 4px;
  border-bottom: 2px solid #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #753498;
    border-bottom: 2px solid #753498;
  }
`;
