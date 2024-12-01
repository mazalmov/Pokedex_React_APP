const generateRandomLocation = () => {
  const telAvivBounds={
    latMin:32.0500,
    latMax:32.1200,
    lngMin:34.7500,
    lngMax:34.8300,
  }

    const lat = telAvivBounds.latMin + Math.random()*(telAvivBounds.latMax-telAvivBounds.latMin);
    const lng = telAvivBounds.lngMin + Math.random()*(telAvivBounds.lngMax-telAvivBounds.lngMin);


    return { lat , lng };
  };
  
  export default generateRandomLocation;

