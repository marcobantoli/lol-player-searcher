import { useState } from 'react';
import PlayerProfile from './PlayerProfile';
import Search from './Search';

function App() {
  const [player, setPlayer] = useState(null);
  const [failedFetch, setFailedFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(playerName) {
    setIsLoading(true);
    const response = await fetch(`/api/${playerName}`);
    const playerData = await response.json();
    
    setIsLoading(false);
    if (!playerData) {
      setFailedFetch(true);
    } else {
      setFailedFetch(false);
    }
    setPlayer(playerData);
  }

  function handleSearch(e) {
    const playerName = e.target.value;
    if (e.keyCode === 13 && playerName !== '') {
      fetchData(playerName);
    }
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      {player ? <PlayerProfile player={player} /> : null}
      {failedFetch && !isLoading ? <div>Could not find the summoner</div> : null}
      {isLoading ? <div>Loading...</div> : null}
    </>
  );
}

export default App;
