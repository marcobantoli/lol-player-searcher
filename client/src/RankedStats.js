import React from 'react'
import './RankedStats.css'

function RankedStats({ player }) {
  return (
    <div className="ranked-stats-container">
      <img height="150" width="150" src={`/${player.tier}.png`} alt="Tier emblem" />
      <div>
        <div className="upper-text">{`${player.tier} ${player.rank}`}</div>
        <div className="lower-text">{`${player.lp} LP / ${player.wins}W ${player.losses}L`}</div>
      </div>
    </div>
  );
}

export default RankedStats
