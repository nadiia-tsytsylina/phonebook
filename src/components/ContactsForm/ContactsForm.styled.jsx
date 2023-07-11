import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 24px;
  border-radius: 12px;
  background: rgba(25, 28, 38, 0.7);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Label = styled.label`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
`;
export const Input = styled.input`
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 20px;
  line-height: 1.2;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:focus {
    border: 2px solid #ff6c00;
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 12px;
  background-color: transparent;
  color: #ffffff;
  font-weight: 600;
  border: 2px solid #ff6c00;
  border-radius: 24px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #ff6c00;
    color: #111111;
  }
`;
