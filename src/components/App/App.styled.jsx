import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #ffffff;
`;
export const SubTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: #ffffff;
`;
export const HomeContainer = styled.div`
  padding: 24px 36px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  font-size: 20px;
  line-height: 1.2;
  color: #ffffff;
`;
export const HomeLink = styled(Link)`
  margin-left: 4px;
  margin-right: 4px;
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

export const Loader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: '100%';
`;
