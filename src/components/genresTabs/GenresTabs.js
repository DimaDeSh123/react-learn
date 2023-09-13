import React from 'react';
import './genresTabs.css';

function GenresTabs({ genres, selectedGenre, onSelect }) {
  return (
    <div className='ganres'>
      {genres.map((genre) => (
        <button 
          key={genre}
          className={`ganre ${selectedGenre === genre ? 'selected-genre': ''}`}
          onClick={() => onSelect(genre)}
        >
          {genre.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default GenresTabs;
