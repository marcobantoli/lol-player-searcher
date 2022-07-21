import React from 'react';
import './Search.css';

function Search({ handleSearch }) {
  return (
    <div className="container">
      <h1 className="sylink-text">Sylink.gg</h1>
      <input onKeyDown={handleSearch} className="search-bar" type="text" placeholder="Search..." />
    </div>
  );
}

export default Search
