import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  color: #ffffff;
`;

export const LogOutButton = styled.button`
display:flex;
align-items: center;
gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  background: none;
  border: none;
  outline: none;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #ff6c00;
`;
