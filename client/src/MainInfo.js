import React from 'react'
import './MainInfo.css'

function MainInfo({ player }) {
  return (
    <div className="main-info-container">
      <img width="130" height="130" src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${player.iconId}.png`} alt="Profile icon" />
      <div>
        <h2 className="summoner-name">{player.summonerName}</h2>
        <h3 className="player-level">{`Level: ${player.level}`}</h3>
      </div>
    </div>
  );
}

export default MainInfo