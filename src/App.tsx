import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
import Favorites from "./pages/Favorites";
import MapPage from './pages/MapPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/map" element={<MapPage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;

