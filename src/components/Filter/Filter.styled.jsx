import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  padding: 0 16px;
`;
export const Label = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  color: #191c26;
`;
export const Input = styled.input`
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 20px;
  line-height: 1.2;
  outline: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: 0px 4px 4px rgba(12, 4, 35, 0.1);
    border: 2px solid #ff6c00;
  }
`;
