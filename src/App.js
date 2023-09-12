import './App.css';
import { useState } from 'react';
import Counter from './components/Counter.js';
import SearchComponent from './components/SearchComponent.js';
import Genres from './components/Genres.js';


function App() {
  const [currentGenre, setCurrentGenre] = useState("all");

  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  const handleGenreSelect = (genre) => {
    setCurrentGenre(genre);
    console.log('Selected Genre:', genre);
  };

  return (
    <div className="App">
      <Counter initialValue={10} />
      <SearchComponent initialQuery="Initial Query" onSearch={handleSearch} />
      <Genres 
        genres={['all', 'Documentary', 'Comedy', 'Horror', 'Crime']} 
        selectedGenre={currentGenre} 
        onSelect={handleGenreSelect} 
      />
    </div>
  );
}

export default App;
