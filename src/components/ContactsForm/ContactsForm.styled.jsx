import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Label = styled.label`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
`;
export const Input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: none;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 20px;
  color: #753498;
  line-height: 1.2;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:focus {
    border: 1px solid #753498;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 4px rgba(12, 4, 35, 0.1);
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
  background-color: rgba(117, 52, 152, 0.5);
  color: #ffffff;
  font-weight: 600;
  border: 1px solid rgba(117, 52, 152, 0.3);
  border-radius: 24px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #753498;
    border: 1px solid #753498;
  }
`;
