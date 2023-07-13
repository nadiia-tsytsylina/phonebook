import styled from '@emotion/styled';

export const ContactName = styled.p`
  flex-basis: 20%;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
`;
export const ContactNumber = styled.p`
  flex-basis: 20%;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
`;
export const DeleteButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding: 4px 8px;
  background: none;
  border: none;
  outline: none;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #753498;
  }
`;
