const generateRandomLocation = () => {
    const lat = 32.0853 + (Math.random() - 0.5) * 0.01;
    const lng = 34.7818 + (Math.random() - 0.5) * 0.01;
    return { lat, lng };
  };
  
  export default generateRandomLocation;