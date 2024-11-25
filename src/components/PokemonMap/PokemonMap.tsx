
"use client";

import React, { useEffect, useState } from "react";
import { MapContainer } from "./styles";
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
  console.log("VITE_MAP_ID", import.meta.env.VITE_MAP_ID)
  return (
    <MapContainer>
      <APIProvider apiKey={"AIzaSyB87HTtpKSA_ZEx6Tj7mCdlHlnnZ25zMTI"}>
        {/* <Map center={destination} zoom={14} fullscreenControl={false}> */}
        {/* <Map center={destination} zoom={14} mapId={import.meta.env.VITE_MAP_ID} fullscreenControl={false}> */}
        <Map center={destination} zoom={14} mapId={"4b242aacc9c9d46d"} fullscreenControl={false}>
          
          <AdvancedMarker position={destination} onClick={() => setOpenCenterPosition(true)}>
            <Pin background={"grey"} borderColor={"green"} glyphColor={"red"} />
          </AdvancedMarker>
          {openCenterPosition && (
            <InfoWindow position={destination} onCloseClick={() => setOpenCenterPosition(false)}>
              <p>I am in Allenby 61</p>
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
          {/* <Directions origin={origin} destination={destination} /> */}
        </Map>
      </APIProvider>
    </MapContainer>



  );
};
export default PokemonMap;

// function Directions({ origin, destination }: { origin: Location; destination: Location }) {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//   const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
//   const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
//   const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];

//   useEffect(() => {
//     if (!routesLibrary || !map) return;

//     setDirectionsService(new routesLibrary.DirectionsService());
//     const renderer = new routesLibrary.DirectionsRenderer();
//     renderer.setMap(map);
//     setDirectionsRenderer(renderer);
//   }, [routesLibrary, map]);

//   useEffect(() => {
//     if (!directionsService || !directionsRenderer || !origin || !destination) return;

//     directionsService
//       .route({
//         origin: origin,
//         destination: destination,
//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true,
//       })
//       .then((response) => {
//         directionsRenderer.setDirections(response);
//         setRoutes(response.routes);
//       })
//       .catch((error) => console.error("Directions API error:", error));
//   }, [directionsService, directionsRenderer, origin, destination]);


 
//   if (!leg) return null;
//   return (
//     <div className="directions">
//       <h2>{selected.summary}</h2>
//       <p>
//         {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
//       </p>
//       <p> Distance: {leg.distance?.text}</p>
//       <p> Duration:{leg.duration?.text}</p>
//       <h2>Other Routes</h2>
//       <ul>
//         {routes.map((route, index) => (
//           <li key={route.summary}>
//             <button onClick={() => setRouteIndex(index)}>
//               {route.summary}
//             </button>
//           </li>
//         ))}
//       </ul>


//     </div>
//   )
// };






// const PokemonMap: React.FC<PokemonMapProps> = ({ name, location }) => {
//   return Intro(name, location)
// };
// export default PokemonMap;

