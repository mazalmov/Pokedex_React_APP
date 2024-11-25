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
    display: flex;
    position: absolute;
    width: 90%;
    height: 80%; 
    border-radius: 15px;
    overflow: hidden; 
    border: 2px solid #ccc;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
`;

export const DirectionsContainer = styled.div`

    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const DirectionsHeading = styled.h2`
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 10px;
`;

export const DirectionsParagraph = styled.p`
    font-size: 1rem;
    color: #555;
`;

export const RouteButton = styled.button`
    /* background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    } */
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 15px;
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
`;
export const DirectionsWrapper = styled.div`
    position: fixed;
    top: 10px;
    left: 100%;
    transform: translateX(-50%);
    z-index: 10; 
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 70%;
`;

