import React, { useState } from 'react';
import '../style/SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button><i className="bi bi-search"></i></button>
    </div>
  );
};

export default SearchBar;