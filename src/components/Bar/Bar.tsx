import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

  const addSearchToHistory = (term: string) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [term, ...prevHistory.filter((item) => item !== term)].slice(0, 3);
      return newHistory;
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  const getFilteredPokemons = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setFilteredPokemons([]);
      return;
    }
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);


    if (value.trim() === '') {
      setHistoryVisible(true);
    } else {
      setHistoryVisible(false);
    }

    if (debounceTimeout) window.clearTimeout(debounceTimeout);
    const timeout = window.setTimeout(() => {
      getFilteredPokemons(value);
    }, 2000);
    setDebounceTimeout(timeout);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') return;
    onSearchClick(searchTerm);
    addSearchToHistory(searchTerm);

    setHistoryVisible(true);
    setFilteredPokemons([]);
  };

  const handleSelectSearchTerm = (term: string) => {
    setSearchTerm(term);
    addSearchToHistory(term);
    setHistoryVisible(false);
    setFilteredPokemons([]);
  };

  const renderSearchHistory = () => (
    <SearchResultsContainer>
      {searchHistory.length > 0 ? (
        <>
          <SearchResultItem onClick={clearHistory}>Clear Search History</SearchResultItem>
          {searchHistory.map((term, index) => (
            <SearchResultItem key={index} onClick={() => handleSelectSearchTerm(term)}>
              {term}
            </SearchResultItem>
          ))}
        </>
      ) : (
        <NoResultsMessage>No search history</NoResultsMessage>
      )}
    </SearchResultsContainer>
  );

  const renderFilteredPokemons = () => (
    <SearchResultsContainer>
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon) => (
          <SearchResultItem
            key={pokemon.id}
            onClick={() => handleSelectSearchTerm(pokemon.name)}
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
        onChange={handleInputChange}
        onFocus={() => setHistoryVisible(true)}
        placeholder="Search for a Pokémon..."
      />
      {historyVisible && renderSearchHistory()}
      {searchTerm !== '' && !historyVisible && renderFilteredPokemons()}
      <SearchButton onClick={handleSearchClick}>Search</SearchButton>
    </BarAndButtonsContainer>
  );
};

export default Bar;
