import React from 'react';
import Match from  './Match';
import './MatchList.css';

function MatchList() {
  return (
    <div className="match-history">
      <h2 className="match-history-subheading">Match History</h2>
      <div className="matches-container">
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
    </div>
  );
}

export default MatchList