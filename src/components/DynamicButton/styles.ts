import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: #ffffff;
  background: #020166;
  border: none;
  border-radius: 5px;
  padding: 10px 15px; 
  cursor: pointer;
  font-size: 14px;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ddd;
  }
`;