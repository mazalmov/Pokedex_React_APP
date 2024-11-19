import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const navigate = useNavigate();

  // Update search results while typing
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query) {
      const possibleMatches = ["pikachu", "charizard", "bulbasaur", "squirtle", "mewtwo"]
        .filter(pokemon => pokemon.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      setSuggestions(possibleMatches);
    } else {
      setSuggestions([]);
    }
  };

  // Save search term to history
  const addToHistory = (searchTerm: string) => {
    if (!searchHistory.includes(searchTerm)) {
      setSearchHistory(prev => [searchTerm, ...prev]);
    }
  };

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  // Handle search submission and navigation
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/pokemon/${searchTerm.toLowerCase()}`);
      addToHistory(searchTerm);
    }
  };

  // Handle arrow key navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === 'Enter') {
      const selectedPokemon = suggestions[selectedIndex];
      if (selectedPokemon) {
        navigate(`/pokemon/${selectedPokemon.toLowerCase()}`);
        addToHistory(selectedPokemon);
      }
    }
  };

  // Render search history
  const renderSearchHistory = () => {
    if (searchTerm === '') { // Only show search history when search input is empty
      return (
        <div className="recent-searches">
          <div
            className="clear-history"
            onClick={clearSearchHistory}
          >
            Clear search history
          </div>
          {searchHistory.length > 0 ? (
            searchHistory.map((item, index) => (
              <div
                key={index}
                className="recent-search-item"
                onClick={() => handleHistoryClick(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="no-history">No search history</div>
          )}
        </div>
      );
    }
  };

  // Update search field when clicking on an item from history
  const handleHistoryClick = (historyItem: string) => {
    setSearchTerm(historyItem);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>

      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion-item ${selectedIndex === index ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                setSearchTerm(suggestion);
                setSuggestions([]);
                addToHistory(suggestion);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {renderSearchHistory()}
    </form>
  );
};

export default SearchBar;
