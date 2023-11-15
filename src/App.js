
import './App.css';
import Players from './components/Players';
import { useState } from 'react';



function App() {
  const [players, setPlayers] = useState([true,  false,  false, false]);
  const [currentPlayer, setCurrentPlayer] = useState(0);


  const updateNextPlayer = prevPlayers => {
    const next = (currentPlayer + 1) % players.length;
    const newPlayers = prevPlayers.map((_, index) => index === next);
    setCurrentPlayer(next);
    return newPlayers;
  }

  const deletePlayer = (prevPlayers) => {
          const newPlayers = prevPlayers.filter((_, index) => index !== currentPlayer);
          if (newPlayers.length === 0) {
            setCurrentPlayer(0);
          } else {    
            const nextPlayerIndex = currentPlayer % newPlayers.length;
            setCurrentPlayer(nextPlayerIndex);
        }
        return newPlayers;
    }
  
  const exitGame = () => {
      setPlayers(deletePlayer);
    };

  const OnGoToNextTurn = () => {
      setPlayers(updateNextPlayer);
  }


  return (
    <>
      <div className="gameScreen">
        {players.map((_, index) => (

          <Players key={index} currentPlayer={index===currentPlayer} goToNextTurn={OnGoToNextTurn} exit={exitGame} />
        ))}
      </div>
      <h1>current player: {currentPlayer + 1}</h1>
    </>
  );
}


export default App;