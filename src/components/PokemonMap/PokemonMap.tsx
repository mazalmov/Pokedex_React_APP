
"use client";

import React, { useEffect, useState } from "react";
import {
    MapContainer,
    MapWrapper,
    DirectionsContainer,
    DirectionsHeading,
    DirectionsParagraph,
    RouteButton,
    RoutesList,
    DirectionsWrapper,
} from "./styles";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
    useMapsLibrary,
    useMap,
} from "@vis.gl/react-google-maps";


interface Location {
    lat: number;
    lng: number;
}

interface PokemonMapProps {
    name: string;
    location: Location;

};

const PokemonMap: React.FC<PokemonMapProps> = ({ name, location }) => {


    const destination = { lat: 32.0600, lng: 34.7690 }; // Allenby 61
    const origin = location;

    const [openCenterPosition, setOpenCenterPosition] = useState(false);
    const [openOriginPosition, setOpenOriginPosition] = useState(false);
    return (
        <MapContainer>
            <MapWrapper>
                <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
                    <Map center={destination} zoom={13} mapId={import.meta.env.VITE_MAP_ID} fullscreenControl={false}>
                        <AdvancedMarker position={destination} onClick={() => setOpenCenterPosition(true)}>
                            <Pin background={"grey"} borderColor={"green"} glyphColor={"red"} />
                        </AdvancedMarker>
                        {openCenterPosition && (
                            <InfoWindow position={destination} onCloseClick={() => setOpenCenterPosition(false)}>
                                <p>Office - Allenby 61</p>
                            </InfoWindow>
                        )}

                        <AdvancedMarker position={origin} onClick={() => setOpenOriginPosition(true)}>
                            <Pin background={"black"} borderColor={"blue"} glyphColor={"green"} />
                        </AdvancedMarker>
                        {openOriginPosition && (
                            <InfoWindow position={origin} onCloseClick={() => setOpenOriginPosition(false)}>
                                <p>I am {name}, help me find the way to the office</p>
                            </InfoWindow>
                        )}
                        <DirectionsWrapper>
                            <Directions origin={origin} destination={destination} />
                        </DirectionsWrapper>

                    </Map>
                </APIProvider>
            </MapWrapper>
        </MapContainer>

    );
};
export default PokemonMap;


function Directions({ origin, destination }: { origin: Location; destination: Location }) {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
        if (!routesLibrary || !map) return;

        setDirectionsService(new routesLibrary.DirectionsService());
        const renderer = new routesLibrary.DirectionsRenderer();
        renderer.setMap(map);
        setDirectionsRenderer(renderer);
    }, [routesLibrary, map]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer || !origin || !destination) return;

        directionsService
            .route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true,
            })
            .then((response) => {
                directionsRenderer.setDirections(response);
                setRoutes(response.routes);
            })
            .catch((error) => console.error("Directions API error:", error));
    }, [directionsService, directionsRenderer, origin, destination]);


    useEffect(() => {
        if (routeIndex === null || !directionsRenderer) return;
        directionsRenderer.setRouteIndex(routeIndex)

    }, [routeIndex, directionsRenderer]);


    if (!leg) return null;
    return (

        <DirectionsContainer>
            <DirectionsHeading>{selected.summary}</DirectionsHeading>
            <DirectionsParagraph>
                <p>{leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}</p>

            </DirectionsParagraph>
            <DirectionsParagraph>Distance: {leg.distance?.text}</DirectionsParagraph>
            <DirectionsParagraph>Duration: {leg.duration?.text}</DirectionsParagraph>
            <DirectionsHeading>Other Routes</DirectionsHeading>
            <RoutesList>
                {routes.map((route, index) => (
                    <li key={route.summary} style={{ marginBottom: "10px" }}>
                        <RouteButton onClick={() => setRouteIndex(index)}>
                            {route.summary}
                        </RouteButton>
                    </li>
                ))}
            </RoutesList>
        </DirectionsContainer>
    )
};



