import React from 'react';
import PlayerInfo from './PlayerInfo';
import Navbar from './Navbar';

function PlayerProfile({ player, handleSearch }) {
  return (
    <>
      <Navbar handleSearch={handleSearch} />
      {player ? <PlayerInfo player={player} /> : <div>Could not find the summoner</div>}
    </>
  );
}

export default PlayerProfile
