import { useState, useEffect } from 'react';
import PlayerProfile from './PlayerProfile';
import Search from './Search';

function App() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    (async () => {
      if (player) {
        const response = await fetch("/api");
        const data = await response.json();
        setPlayer(data);
      }
    })();
  }, [player]);

  function handleSearch(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      setPlayer(e.target.value);
    }
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      { player ? <PlayerProfile player={player} /> : null}
    </>
  );
}

export default App;
