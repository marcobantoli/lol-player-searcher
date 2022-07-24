import { useState } from 'react';
import PlayerProfile from './PlayerProfile';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(e, navigate) {
    const playerName = e.target.value;

    if (e.keyCode === 13 && playerName !== '') {
      (async () => {
        setIsLoading(true);
        const response = await fetch(`/api/${playerName}`);
        const playerData = await response.json();
        setIsLoading(false);
        
        setPlayer(playerData);
        navigate(`/${playerName}`);
      })();
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoading ? <Home handleSearch={handleSearch} /> : <div>Loading...</div>} />
        <Route path="/:name" element={<PlayerProfile player={player} handleSearch={handleSearch} />}/>
      </Routes>
    </Router>
  );
}

export default App;
