import styled from "styled-components";

export const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh; 
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    border: 2px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: 90vh; 
    }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%; 
  height: 100%; 
  border-radius: 15px;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
`;


export const DirectionsContainer = styled.div`
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 500px; 
  max-height: 400px; 
  overflow: auto; 
  width: 100%; 
  height: 100%; 
  box-sizing: border-box; 

  resize: both;
  overflow: auto; 
`;


export const DirectionsHeading = styled.h2`
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 10px;
`;

export const DirectionsParagraph = styled.div`
    font-size: 1rem;
    color: #555;
`;


export const RouteButton = styled.button`

    background-color: #28a745;
    color: white;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 15px;
    margin: 0px 0;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }
`;

export const RoutesList = styled.ul`
    padding-left: 20px;
    list-style-type: none;
    margin: 0;
    margin: 20px 0 0 0;
    
`;

export const DirectionsWrapper = styled.div`
  position: absolute; 
  top: 50%; 
  transform: translateY(-50%); 
  z-index: 10; 
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  padding: 15px; 
  max-width: 800px; 
  max-height: 600px; 
  overflow-y: auto; 
  box-sizing: border-box; 
`;