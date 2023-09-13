import './App.css';
import { useState } from 'react';
import Counter from './components/counter/Counter.js';
import SearchComponent from './components/searchComponent/SearchComponent.js';
import GenresTabs from './components/genresTabs/GenresTabs.js';
import GenreSelect from './components/genreSelect/GenreSelect.js';


function App() {
  const [currentGenre, setCurrentGenre] = useState("all");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  const handleGenreSelectTab = (genre) => {
    setCurrentGenre(genre);
    console.log('Selected Genre:', genre);
  };

  const handleGenreSelect = (selectedGenres) => {
    if (selectedOptions.includes(selectedGenres)) {
      const newSelected = selectedOptions.filter((g) => g !== selectedGenres);
      setSelectedOptions(newSelected);
    } else {
      const newSelected = [...selectedOptions, selectedGenres];
      setSelectedOptions(newSelected);
    }
  };

  return (
    <div className="App">
      <Counter initialValue={10} />
      <SearchComponent initialQuery="Initial Query" onSearch={handleSearch} />
      <GenresTabs 
        genres={['all', 'Documentary', 'Comedy', 'Horror', 'Crime']} 
        selectedGenre={currentGenre} 
        onSelect={handleGenreSelectTab} 
      />
      <GenreSelect 
        genres={['Documentary', 'Comedy', 'Horror', 'Crime']} 
        selectedOptions={selectedOptions} 
        onSelect={handleGenreSelect} 
      />
    </div>
  );
}

export default App;
