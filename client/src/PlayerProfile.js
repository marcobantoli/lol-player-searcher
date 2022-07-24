import React from 'react';
import PlayerInfo from './PlayerInfo';
import Navbar from './Navbar';
import './PlayerProfile.css'

function PlayerProfile({ player, handleSearch }) {
  return (
    <div className="player-profile-container">
      <Navbar handleSearch={handleSearch} />
      {player ? <PlayerInfo player={player} /> : <div className="failed-fetch">Could not find the summoner</div>}
    </div>
  );
}

export default PlayerProfile
