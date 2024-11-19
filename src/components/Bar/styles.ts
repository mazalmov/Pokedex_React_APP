import styled from "styled-components";

// export const BarAndButtonsContainer = styled.div`
//   display: flex;
//   justify-content: center; 
//   align-items: center; 
//   width: 434px;
//   height: 37px;
//   margin-top: 56px;
//   gap: 6px;
//   border-radius: 9px 0 0 0;
//   border: 1px solid #000; 
//   opacity: 1; 

//   @media (max-width: 280px) {
//     width: 100%; 
//     height: auto;
//     gap: 0;
//     border-radius: 0; 
//     opacity: 1; 
//     justify-content: center; 
//     align-items: center; 
//   }
// `
export const BarAndButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; 
  max-width: 600px; 
  height: 10vh; 
  max-height: 60px; 
  margin: 5vh auto; 
  gap: 1%; 
  border-radius: 9px;
  border: 1px solid #000;
  opacity: 1;
  padding: 5px; 

  @media (max-width: 768px) {
    width: 80%; 
    height: auto; 
    gap: 1%; 
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    width: 90%; 
    height: auto; 
    padding: 10px; 
    gap: 5px; 
  }
`;

export const SearchText = styled.input`
  flex: 1; 
  height: 100%; 
  border-radius: 9px;
  border: 1px solid #02016680;
  background: #F7F7F9;
  padding: 0 10px; 
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`
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
`
// export const SearchButton = styled.button`
//     display: flex;
//     width: 87px;
//     height: 36px;
//     top: 123px;
//     left: 774px;
//     gap: 0px;
//     border-radius: 9px 0px 0px 0px;
//     background: #373299;
//     display: flex;
//     justify-content: center; 
//     align-items: center;
//     @media (max-width: 74px) {
//         display: flex;
//         height: 36px;
//         top: 1407px;
//         left: -6410px;
//         gap: 0px;
//         border-radius: 9px 0px 0px 0px;
//         opacity: 0px;

//     }

// `


