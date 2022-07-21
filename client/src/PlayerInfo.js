import React from 'react';
import './PlayerInfo.css';
import Gold from './gold.png'

function PlayerInfo({ player }) {
  return (
    <div className="info-container">
      <div>
        <img className="rank-image" width="100px" height="100px" src={Gold} alt="Gold rank" />
        <div>Gold I</div>
      </div>
      <div>{player}</div>
    </div>
  );
}

export default PlayerInfo
