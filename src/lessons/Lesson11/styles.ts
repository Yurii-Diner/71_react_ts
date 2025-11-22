import styled from "@emotion/styled";

import { css } from "@emotion/react";
const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 50px;
  background: rgba(177, 209, 163, 1);
  font-size: 36px;
  
`;

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ImagesContainer = styled.div<{ $hasImages: boolean }>`
  width: 100%;
  max-width: 600px;
  height: 700px; /* Фиксированная высота */
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  overflow-y: auto; /* Вертикальный скролл при превышении высоты */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: ${props => props.$hasImages ? '#f9f9f9' : 'transparent'};
`;

export const ImageItem = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;