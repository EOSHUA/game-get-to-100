
 import './App.css';
 import Players from './components/Players';
import { useState } from 'react';



 function App() {
  const [players, setPlayers] = useState([true, false, false, false]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const nextPlayer = () => {
    setPlayers(prevPlayers => {
      const newPlayers = prevPlayers.map((player, index) => 
      index === currentPlayer ? false : index === (currentPlayer + 1) % 4);
      setCurrentPlayer((currentPlayer + 1) % 4);
      return newPlayers;
    });
  };
  
  return (
    <>
      <div className="gameScreen">
        {players.map((isCurrent, index) => (
          <Players key={index} currentPlayer={isCurrent} isMyTurn={nextPlayer} />
        ))}
      </div>
      <h1>current player: {currentPlayer + 1}</h1>
    </>
  );
}


export default App;