// import React, { useState } from "react";

// import { BarAndButtonsContainer, SearchText, SearchButton } from "./Bar"

// interface BarProps {
//     onSearch: (searchTerm: string) => void;
// }
// const Bar: React.FC<BarProps> = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState<string>("");
//     const [historyVisible, setHistoryVisible] = useState<boolean>(false);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleSearch = () => {
//         onSearch(searchTerm);
//     };

//     return (

//         <BarAndButtonsContainer>
//             <SearchText
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 placeholder="Search for a Pokémon..."
//             />

//             <SearchButton onClick={handleSearch}>Search</SearchButton>
//         </BarAndButtonsContainer>
//     )
// };
// export default Bar;
// --------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { BarAndButtonsContainer, SearchText, SearchButton } from "./styles"


// // טיפוס היסטוריית חיפוש
// interface SearchHistory {
//   searches: string[];
//   addSearch: (searchTerm: string) => void;
//   clearHistory: () => void;
// }

// const Bar: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');  // המונח שנכנס
//   const [historyVisible, setHistoryVisible] = useState<boolean>(false);  // האם להציג את היסטוריית החיפוש
//   const [searchHistory, setSearchHistory] = useState<string[]>([]);  // היסטוריית חיפושים
//   const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]);  // הפוקימונים המוצעים בהשלמת חיפוש
//   const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);  // האינדקס המודגש בתוצאות
//   const [selectedSearch, setSelectedSearch] = useState<string | null>(null);  // חיפוש שנבחר מההשלמה

//   // עדכון היסטוריית החיפוש
//   const addSearchToHistory = (term: string) => {
//     setSearchHistory(prevHistory => {
//       const newHistory = [term, ...prevHistory.filter(item => item !== term)].slice(0, 3);
//       return newHistory;
//     });
//   };

//   // ניקוי היסטוריית החיפושים
//   const clearHistory = () => {
//     setSearchHistory([]);
//   };

//   // הצגת הצעות אוטומטיות לחיפושים
//   const getFilteredPokemons = async (searchTerm: string) => {
//     if (searchTerm.trim() === '') {
//       setFilteredPokemons([]);  // לא מציג הצעות אם שדה החיפוש ריק
//       return;
//     }
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
//     const data = await response.json();
//     const filtered = data.results.filter((pokemon: any) =>
//       pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
//     );
//     setFilteredPokemons(filtered);
//   };

//   // שמירה על התוצאות המוצגות בזמן שהמשתמש מקליד
//   useEffect(() => {
//     getFilteredPokemons(searchTerm);
//   }, [searchTerm]);

//   // עדכון המונח לפי הקלדנות
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setHistoryVisible(value.trim() === '');  // אם יש חיפוש, הסתר את היסטוריית החיפושים
//   };

//   // ניווט בתוצאות עם מקשי חיצים
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'ArrowDown' && filteredPokemons.length > 0) {
//       setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredPokemons.length);  // עבור למעלה/למטה
//     } else if (e.key === 'ArrowUp' && filteredPokemons.length > 0) {
//       setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredPokemons.length) % filteredPokemons.length);  // עבור אחורה
//     } else if (e.key === 'Enter') {
//       if (highlightedIndex >= 0 && highlightedIndex < filteredPokemons.length) {
//         const selectedPokemon = filteredPokemons[highlightedIndex];
//         setSearchTerm(selectedPokemon.name);
//         addSearchToHistory(selectedPokemon.name);
//         setFilteredPokemons([]);  // טוען את התוצאות כרגיל
//       }
//     }
//   };

//   // הצגת היסטוריית חיפוש אם אין הקלדה
//   const renderSearchHistory = () => (
//     <ul>
//       <li onClick={clearHistory}>Clear Search History</li>
//       {searchHistory.map((term, index) => (
//         <li key={index} onClick={() => setSearchTerm(term)}>
//           {term}
//         </li>
//       ))}
//       {searchHistory.length === 0 && <li>No search history</li>}
//     </ul>
//   );

//   // הצגת הצעות אוטומטיות אם יש חיפוש חלקי
//   const renderFilteredPokemons = () => (
//     <ul>
//       {filteredPokemons.map((pokemon, index) => (
//         <li
//           key={pokemon.name}
//           style={{
//             backgroundColor: index === highlightedIndex ? 'lightgray' : 'white',
//           }}
//           onClick={() => {
//             setSearchTerm(pokemon.name);
//             addSearchToHistory(pokemon.name);
//             setFilteredPokemons([]);  // טוען את התוצאות כרגיל
//           }}
//         >
//           {pokemon.name}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     // <div>
//     //   <input
//     //     type="text"
//     //     value={searchTerm}
//     //     onChange={handleInputChange}
//     //     onKeyDown={handleKeyDown}
//     //     placeholder="Search for a Pokémon..."
//     //   />
//     //   {historyVisible && renderSearchHistory()}  {/* הצגת היסטוריית חיפוש אם יש */}
//     //   {filteredPokemons.length > 0 && !historyVisible && renderFilteredPokemons()}  {/* הצגת הצעות חיפוש */}
//     // </div>



//         <BarAndButtonsContainer> 
//             <SearchText
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 placeholder="Search for a Pokémon..."
//             />      
//                 {historyVisible && renderSearchHistory()}  {/* הצגת היסטוריית חיפוש אם יש */}
//                 {filteredPokemons.length > 0 && !historyVisible && renderFilteredPokemons()}  {/* הצגת הצעות חיפוש */}
// //             <SearchButton onClick={handleSearch}>Search</SearchButton>
// //         </BarAndButtonsContainer>

//   );
// };

// export default Bar;


// Bar.tsx
// import React, { useState } from 'react';
// import { BarAndButtonsContainer, SearchText, SearchButton } from "./styles";

// // טיפוס ל-props של הקומפוננטה
// interface BarProps {
//   onSearch: (searchTerm: string) => void; // פונקציה שמקבלת מונח חיפוש
// }

// const Bar: React.FC<BarProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState<string>(''); // המונח שנכנס
//   const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]); // תוצאות החיפוש
//   const [showResults, setShowResults] = useState<boolean>(false); // האם להציג תוצאות

//   // ביצוע בקשת חיפוש
//   const fetchPokemonResults = async () => {
//     if (searchTerm.trim() === '') {
//       setFilteredPokemons([]); // ריק אם אין ערך
//       setShowResults(true); // מציג הודעת "אין תוצאות"
//       return;
//     }
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
//     const data = await response.json();
//     const filtered = data.results.filter((pokemon: any) =>
//       pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredPokemons(filtered);
//     setShowResults(true); // מציג את התוצאות
//     onSearch(searchTerm); // קריאה לפונקציה שהועברה כ-prop
//   };

//   // עדכון המונח לפי הקלדת המשתמש
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setShowResults(false); // מסתיר תוצאות בזמן כתיבה
//   };

//   // תוצאות החיפוש
//   const renderResults = () => (
//     <ul>
//       {filteredPokemons.map((pokemon, index) => (
//         <li key={index}>{pokemon.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <BarAndButtonsContainer>
//       <div>
//         <SearchText
//           type="text"
//           value={searchTerm}
//           onChange={handleInputChange}
//           placeholder="Search for a Pokémon..."
//         />
//         {showResults && filteredPokemons.length > 0 && renderResults()} {/* תוצאות */}
//         {showResults && filteredPokemons.length === 0 && <div>No results found</div>} {/* תוצאות ריקות */}
//       </div>
//       <div>
{/* <SearchButton onClick={fetchPokemonResults}>Search</SearchButton> */ }
//       </div>
//     </BarAndButtonsContainer>
//   );
// };

// export default Bar;
// -------------------------
import React, { useState, useEffect } from 'react';
import { BarAndButtonsContainer, SearchText, SearchButton } from './styles';

interface BarProps {
  onSearchClick: (searchTerm: string) => void; // The new prop
  allPokemons: { id: number; name: string; image: string }[]; // Receive all pokemons as prop
}

const Bar: React.FC<BarProps> = ({ onSearchClick, allPokemons }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // The search term entered by the user
  const [historyVisible, setHistoryVisible] = useState<boolean>(false); // Whether to display search history
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // The search history
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]); // The suggested Pokémon in search autocomplete
  const highlightedIndex = (-1); // The index of the highlighted suggestion

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
    onSearchClick(searchTerm); // Trigger search
    addSearchToHistory(searchTerm); // Add to search history
  };

  // Handle selection of search term from history or autocomplete
  const handleSelectSearchTerm = (term: string) => {
    setSearchTerm(term); // Set the selected search term
    addSearchToHistory(term); // Add the selected term to the search history
    setFilteredPokemons([]); // Clear autocomplete suggestions
  };

  // Render the search history if there is no input typed
  const renderSearchHistory = () => (
    <ul>
      <li onClick={clearHistory}>Clear Search History</li>
      {searchHistory.map((term, index) => (
        <li key={index} onClick={() => handleSelectSearchTerm(term)}>
          {term} {/* Display history items and set them as the search term when clicked */}
        </li>
      ))}
      {searchHistory.length === 0 && <li>No search history</li>} {/* Show message if no history is available */}
    </ul>
  );

  // Render the autocomplete suggestions if there are any
  const renderFilteredPokemons = () => (
    <ul>
      {filteredPokemons.map((pokemon, index) => (
        <li
          key={pokemon.name}
          style={{
            backgroundColor: index === highlightedIndex ? 'lightgray' : 'white', // Highlight the selected suggestion
          }}
          onClick={() => handleSelectSearchTerm(pokemon.name)} // Set the selected Pokémon's name as the search term
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  );

  return (
    <BarAndButtonsContainer>
      <SearchText
        type="text"
        value={searchTerm}
        onChange={handleInputChange} // Update search term when the input changes
        onFocus={() => setHistoryVisible(true)} // Show history when input is focused
        placeholder="Search for a Pokémon..."
      />
      {historyVisible && renderSearchHistory()} {/* Display search history if input is focused and empty */}
      {filteredPokemons.length > 0 && !historyVisible && renderFilteredPokemons()} {/* Display filtered suggestions */}
      <SearchButton onClick={handleSearchClick}>Search</SearchButton> {/* Trigger search when button is clicked */}
    </BarAndButtonsContainer>
  );
};

export default Bar;
