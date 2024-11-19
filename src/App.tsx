import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
import Favorites from "./pages/Favorites";

const App: React.FC = () => {
  return (
    <>

      {/* <FlexContainer> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      {/* </FlexContainer> */}
    </>
  );
};

export default App;

