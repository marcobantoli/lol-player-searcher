import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ handleSearch }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="sylink-text">Sylink.gg</h1>
      <input className="search-bar" onKeyDown={(e) => handleSearch(e, navigate)} type="text" placeholder="Search..." />
    </div>
  );
}

export default Home
