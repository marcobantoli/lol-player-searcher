import React from 'react';
import './PlayerInfo.css';

function PlayerInfo({ player }) {
  return (
    <div className="info-container">
      <div className="info-subcontainer">
        <div>
          {player.summonerName}
        </div>
        <div>
          {`Level: ${player.level}`}
        </div>
      </div>
      <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${player.iconId}.png`} alt="Profile icon" />
    </div>
  );
}

export default PlayerInfo
