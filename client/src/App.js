import { useState } from 'react';
import PlayerProfile from './PlayerProfile';
import Search from './Search';

function App() {
  const [player, setPlayer] = useState(null);

  function handleSearch(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      setPlayer(e.target.value);
    }
  }

  return (
    <>  
      { player ? <PlayerProfile player={player} /> : <Search handleSearch={handleSearch} />}
    </>
  );
}

export default App;
