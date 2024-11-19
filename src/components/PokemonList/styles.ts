import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 16px; 
  padding: 16px;
  margin-top: 14px;
  width: 100%; 
  max-width: 1200px; 
  margin: 0 auto; 
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr; 
  }
`;
