import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: fit-content;
  padding: 60px;
  border: 2px solid;
  border-radius: 4px;
  background-color: white;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
`;

export const CheckboxLabel = styled.label`
  font-size: 20px;
`;
