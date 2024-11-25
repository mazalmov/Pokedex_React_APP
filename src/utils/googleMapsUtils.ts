
// export const getDirections = () => {

//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps SDK not loaded yet!");
//       return;
//     }

//     const directionsService = new google.maps.DirectionsService();
//     const directionsRenderer = new google.maps.DirectionsRenderer();
  
//     const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//       zoom: 14,
//       center: { lat: 32.0853, lng: 34.7818 }, //Tel aviv
//     });
  
//     directionsRenderer.setMap(map);
  
//     const request = {
//       origin: { lat: 32.0853, lng: 34.7818 },
//       destination: { lat: 32.0777, lng: 34.7919 },
//       travelMode: google.maps.TravelMode.DRIVING,
//     };
  
//     directionsService.route(request, (result, status) => {
//       if (status === google.maps.DirectionsStatus.OK) {
//         directionsRenderer.setDirections(result);
//       } else {
//         console.error('Error fetching directions:', status);
//       }
//     });
//   };


export const getDirections = (pokemonLocation: { lat: number; lng: number }, map: google.maps.Map) => {
  if (window.google) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); 

    const destination = { lat: 32.0600, lng: 34.7690 }; //Alenbi 61

    const request = {
      origin: pokemonLocation, 
      destination: destination, 
      travelMode: google.maps.TravelMode.DRIVING, 
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        console.error('Error fetching directions:', status);
      }
    });
  } else {
    console.error('Google Maps API is not loaded');
  }
};

