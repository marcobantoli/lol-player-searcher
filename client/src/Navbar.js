import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ handleSearch }) {
  let navigate = useNavigate();

  return (
    <div className="nav-bar">
      <div>
        <Link to="/" className="site-title">Sylink.gg</Link>
      </div>
      <input className="right-search-bar" onKeyDown={(e) => handleSearch(e, navigate)} type="text" placeholder="Search..." />
    </div>
  )
}

export default Navbar
