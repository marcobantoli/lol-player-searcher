import React from 'react';
import Match from  './Match';
import './MatchList.css';

function MatchList({ player }) {
  return (
    <div className="match-history">
      <h2 className="match-history-subheading">Match History</h2>
      <div className="matches-container">
        <Match stats={player.matchHistory[0]} />
        <Match stats={player.matchHistory[1]} />
        <Match stats={player.matchHistory[2]} />
        <Match stats={player.matchHistory[3]} />
        <Match stats={player.matchHistory[4]} />
      </div>
    </div>
  );
}

export default MatchList