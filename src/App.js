import './App.css';
import Players from './components/Players';
import { useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [numPlayers, setNumPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState('');

  const updateNextPlayer = (prevPlayers) => {
    const next = (currentPlayer + 1) % prevPlayers.length;
    setCurrentPlayer(next);
    const newPlayers = prevPlayers.map((_, index) => index === next);
    return newPlayers;
  };

  const deletePlayer = (prevPlayers) => {
    const newPlayers = prevPlayers.filter((_, index) => index !== currentPlayer);
    if (newPlayers.length === 0) {
      setCurrentPlayer(0);
    } else {
      const nextPlayerIndex = currentPlayer % newPlayers.length;
      setCurrentPlayer(nextPlayerIndex);
    }
    return newPlayers;
  };

  const exitGame = () => {
    setPlayers(deletePlayer);
  };

  const OnGoToNextTurn = () => {
    setPlayers(updateNextPlayer);
  };

  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value);
  };

  const handlePlayerNamesChange = (event) => {
    setPlayerNames(event.target.value);
  };

  const handleRegistration = () => {
    const newPlayerNames = playerNames.split(',').map(name => name.trim());
    if (newPlayerNames.length === Number(numPlayers)) {
      setPlayers(newPlayerNames);
      setIsRegistrationOpen(false);
    } else {
      alert('Number of entered names does not match the selected number of players.');
    }
  };

  return (
    <>
    <h1 className='mainTitle'>Welcome to the go-to-100 game</h1>
      {isRegistrationOpen ? (
        <div className="registrationForm">
          
          <h2>Register Players</h2>
          <br></br>
          <p>Enter the number of players and then enter their names</p>
          <input className='inputRegister' type="number"  value={numPlayers} onChange={handleNumPlayersChange} />
          <input className='inputRegister' type="text" placeholder="Enter the names with a comma (,) between them" value={playerNames} onChange={handlePlayerNamesChange} />
          <button className='buttonRegister' onClick={handleRegistration}>Register</button>
        </div>
      ) : (
        <div className="gameScreen">
          {players.map((playerName, index) => (
            <Players
              key={index}
              currentPlayer={index === currentPlayer}
              goToNextTurn={OnGoToNextTurn}
              exit={exitGame}
              playerName={playerName}
            />
          ))}
        </div>
      )}
      <h1>Current Player: {currentPlayer + 1}</h1>
    </>
  );
}

export default App;
