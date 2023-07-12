import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogOutButton = styled.button`
display:flex;
align-items: center;
gap: 8px;
  font-size: 16px;
  line-height: 1.2;
  background: #ff6c00;
  border: none;
  border-radius: 12px;
  outline: none;
  padding: 4px 12px;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #111111;
`;
