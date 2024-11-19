// //src/pages/Pokemonage.tsx

import Header from "../components/Header/Header";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { Link } from 'react-router-dom'; // React Router Link

const PokemonDetails: React.FC = () => {

  return (
    <div>
      <Header />
      <nav className="nav">
        {/* link to home page*/}
        <Link to="/" className="home-link">Home Page &rarr;</Link>
      </nav>
      <PokemonCard />
    </div>
  );
};

export default PokemonDetails;


