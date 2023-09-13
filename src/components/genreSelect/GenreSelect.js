import React, { useState } from 'react';
import './genreSelect.css';

function GenreSelect({ genres, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (genre) => {
    if (selectedOptions.includes(genre)) {
      setSelectedOptions((prevSelected) => {
        const newSelected = prevSelected.filter((g) => g !== genre);
        onSelect(newSelected);
        return newSelected;
      });
    } else {
      setSelectedOptions((prevSelected) => {
        const newSelected = [...prevSelected, genre];
        onSelect(newSelected);
        return newSelected;
      });
    }
  };
  

  return (
    <div className="genre-select" >
      <input className="genre-select-input" type="text" readOnly onClick={toggleDropdown} placeholder="Select Genre" />
      <span className={`genre-select-arrow ${isOpen ? 'arrow-top' : 'arrow-bottom'}`}></span>
      {isOpen && (
        <div className="genre-selects-container">
          {genres.map((genre) => (
            <div className="genre-select-container" key={genre}  >
                <input 
                    id={genre}
                    className="genre-select-selects" 
                    type="checkbox" 
                    checked={selectedOptions.includes(genre)} 
                    onChange={() =>  {}}
                />
                <label onClick={()=> handleOptionClick(genre)} htmlFor={genre} className="genre-select-selects-label">
                    {genre}
                </label> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenreSelect;