import React from 'react';
import RankedStats from './RankedStats'
import MatchList from './MatchList';
import MainInfo from './MainInfo'
import './PlayerInfo.css';

function PlayerInfo({ player }) {
  return (
    <div>
      <MainInfo player={player} />
      <RankedStats />
      <MatchList />
    </div>
  );
}

export default PlayerInfo
