import React from 'react';
import PlayerInfo from './PlayerInfo';
import './PlayerProfile.css';

function PlayerProfile({ player }) {
  return (
    <div className="profile-container">
      <PlayerInfo player={player} />
    </div>
  );
}

export default PlayerProfile
