import React from 'react'
import './Match.css';

function Match({ stats }) {
  console.log(stats.win);
  return (
    <div className={`match-container ${stats.wonGame ? "blue" : "red"}`}>
      <div>
        <img width="80" height="80" src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${stats.champion}.png`} alt="Champion" />
        <div className="champion-text">{stats.champion}</div>
      </div>
      <div className="kda-text">
        {`KDA: ${stats.kills} / ${stats.deaths} / ${stats.assists}`}
      </div>
      <div className="game-result-text">
        {stats.wonGame ? <div>WIN</div> : <div>LOSS</div>}
      </div>
    </div>
  );
}

export default Match