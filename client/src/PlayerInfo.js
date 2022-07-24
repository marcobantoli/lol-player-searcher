import React from 'react';
import RankedStats from './RankedStats'
import MatchList from './MatchList';
import MainInfo from './MainInfo'
import './PlayerInfo.css';

function PlayerInfo({ player }) {
  return (
    <div className="player-info-container">
      <MainInfo player={player} />
      <div className="subcontainer">
        <RankedStats player={player} />
        <MatchList player={player} />
      </div>
    </div>
  );
}

export default PlayerInfo
