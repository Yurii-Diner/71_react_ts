import styled from "@emotion/styled";

interface ResultWrapperProps {
  isShow: boolean;
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 2;
  padding: 50px;
  background: rgba(198, 197, 196, 1);
  font-size: 36px;
  width: 100vw; // полная ширина экрана
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 500px;
  padding: 20px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ResultWrapper = styled.div<ResultWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  min-width: 500px;
  min-height: 100px;
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
`;

export const Result = styled.div`
  min-width: 50px;
  color: black; /* Добавляем черный цвет текста */
  font-size: 24px; /* Можно добавить размер шрифта для лучшей читаемости */
  text-align: center; /* Выравнивание по центру */
`;