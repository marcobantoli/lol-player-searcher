import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerProfile from './PlayerProfile';
import Home from './Home';
import Loading from './Loading'

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
        <Route path="/" element={!isLoading ? <Home handleSearch={handleSearch} /> : <Loading />} />
        <Route path="/:name" element={!isLoading ? <PlayerProfile player={player} handleSearch={handleSearch} /> : <Loading />}/>
      </Routes>
    </Router>
  );
}

export default App;
