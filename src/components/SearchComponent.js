import React, { useState } from 'react';
import '../css/search.css';

function SearchComponent({ initialQuery, onSearch }) {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(query);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ margin: '10px'}}>
      <input
        type="text"
        className='search-input'
        value={query}
        placeholder='What do you want to watch?'
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;