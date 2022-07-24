import React from 'react'
import './Match.css';

function Match({ stats }) {
  return (
    <div className="match-container">
      <div>
        <img src="" alt="Champion image" />
        <div>{stats.champion}</div>
      </div>
      <div>
        {`${stats.kills}/${stats.deaths}/${stats.assists}`}
      </div>
      <div>
        {stats.win ? <div>WIN</div> : <div>LOSS</div>}
      </div>
    </div>
  );
}

export default Match