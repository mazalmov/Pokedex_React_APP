import React, { useState, useEffect } from 'react';
import {
  BarAndButtonsContainer,
  SearchText,
  SearchButton,
  SearchResultsContainer,
  SearchResultItem,
  NoResultsMessage,
} from './styles';

interface BarProps {
  onSearchClick: (searchTerm: string) => void;
  allPokemons: { id: number; name: string; image: string }[];
}

const Bar: React.FC<BarProps> = ({ onSearchClick, allPokemons }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // The search term entered by the user
  const [historyVisible, setHistoryVisible] = useState<boolean>(false); // Whether to display search history
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // The search history
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]); // The suggested Pokémon in search autocomplete

  // Update the search history
  const addSearchToHistory = (term: string) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [term, ...prevHistory.filter((item) => item !== term)].slice(0, 3); // Keep a maximum of 3 recent searches
      return newHistory;
    });
  };

  // Clear the search history
  const clearHistory = () => {
    setSearchHistory([]);
  };

  // Filter pokemons based on the search term
  const getFilteredPokemons = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setFilteredPokemons([]); // Do not show suggestions if search term is empty
      return;
    }
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()) // Filter Pokémon by name
    );
    setFilteredPokemons(filtered);
  };

  // Update the filtered pokemons when search term changes
  useEffect(() => {
    getFilteredPokemons(searchTerm);
  }, [searchTerm]);

  // Update the search term when the user types in the input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setHistoryVisible(value.trim() === ''); // Show history when input is focused and empty
  };

  // Handle the search button click to fetch Pokémon data
  const handleSearchClick = () => {
    if (searchTerm.trim() === '') return; // Do nothing if the search term is empty
    onSearchClick(searchTerm); // Trigger search
    addSearchToHistory(searchTerm); // Add to search history
    setHistoryVisible(false); // Hide history after search
  };

  // Handle selection of search term from history or autocomplete
  const handleSelectSearchTerm = (term: string) => {
    setSearchTerm(term); // Set the selected search term
    addSearchToHistory(term); // Add the selected term to the search history
    setHistoryVisible(false); // Hide history
    setFilteredPokemons([]); // Clear autocomplete suggestions
  };

  // Render the search history
  const renderSearchHistory = () => (
    <SearchResultsContainer>
      {searchHistory.length > 0 ? (
        <>
          <SearchResultItem onClick={clearHistory}>Clear Search History</SearchResultItem>
          {searchHistory.map((term, index) => (
            <SearchResultItem key={index} onClick={() => handleSelectSearchTerm(term)}>
              {term} {/* Display history items and set them as the search term when clicked */}
            </SearchResultItem>
          ))}
        </>
      ) : (
        <NoResultsMessage>No search history</NoResultsMessage>
      )}
    </SearchResultsContainer>
  );

  // Render the autocomplete suggestions
  const renderFilteredPokemons = () => (
    <SearchResultsContainer>
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon) => (
          <SearchResultItem
            key={pokemon.id}
            onClick={() => handleSelectSearchTerm(pokemon.name)} // Set the selected Pokémon's name as the search term
          >
            {pokemon.name}
          </SearchResultItem>
        ))
      ) : (
        <NoResultsMessage>No results</NoResultsMessage>
      )}
    </SearchResultsContainer>
  );

  return (
    <BarAndButtonsContainer>
      <SearchText
        type="text"
        value={searchTerm}
        onChange={handleInputChange} // Update search term when the input changes
        onFocus={() => setHistoryVisible(true)} // Show history when input is focused and empty
        placeholder="Search for a Pokémon..."
      />
      {historyVisible && searchTerm === '' && renderSearchHistory()} {/* Display search history only if input is empty and focused */}
      {searchTerm !== '' && renderFilteredPokemons()} {/* Display filtered suggestions when user types */}
      <SearchButton onClick={handleSearchClick}>Search</SearchButton> {/* Trigger search when button is clicked */}
    </BarAndButtonsContainer>
  );
};

export default Bar;

