import styled from 'styled-components';

export const BarAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  width: 50%;
  max-width: 600px;
  margin: 5vh auto;
  position: relative;
  gap: 10px; 

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const SearchText = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SearchButton = styled.button`
  width: 20%;
  max-width: 100px; 
  height: 100%; 
  border-radius: 9px;
  background: #373299;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 50px;
  }
`;

export const SearchResultItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const NoResultsMessage = styled.div`
  padding: 10px;
  text-align: center;
  color: #777;
`;
