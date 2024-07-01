import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleSearchChange} 
        placeholder="Search by Roll Number..." 
      />
    </div>
  );
};

export default SearchBar;
