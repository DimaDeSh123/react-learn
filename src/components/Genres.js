import React from 'react';
import '../css/genre.css';

function Genres({ genres, selectedGenre, onSelect }) {
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

export default Genres;
