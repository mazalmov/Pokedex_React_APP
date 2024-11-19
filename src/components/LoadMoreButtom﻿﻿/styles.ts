
import styled from "styled-components";

export const LoadButtons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    width: 210px;
    height: 36px;
    border-radius: 9px;
    border: 1px solid #373299;
    background: #373299;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 36px;
    }
    @media (max-width: 480px) {
        width: 150px;
        height: 36px;
    }
`


export const LoadButtonsContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
  `