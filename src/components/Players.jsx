import React from 'react';
import './style.css';
import CalculatorButton from './CalculatorButtons';
import { useState , useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../components/LocalStorage';


function Players({ currentPlayer,  goToNextTurn , exit, playerName }) {

  const randNum = Math.floor(Math.random() * 100);
  const [currentNum, setCurrentNum] = useState(randNum);
  const [Score, setScore] = useState(0);
  const [GameOver, setGameOver] = useState(false);
  const [showsPlayerName , setShowsPlayerName] = useState(playerName);
  const [victories, setVictories] = useState(0);


 
  const win = (currentNum) => {
    if (!GameOver && currentNum === 100) {
      setVictories((prevVictories) => prevVictories + 1);
      setGameOver(true);
      localStorage.setItem(showsPlayerName, victories+1);
      alert("You Won!  You reached 100!!! ");
      generateNewNumber();
      setScore(0);
      return true;
    }
    return false;
  };
 
  
  const generateNewNumber = () => {
    setCurrentNum(randNum);
    setGameOver(false);
  };

  useEffect(() => {
    saveToLocalStorage('victories', victories);
  }, [victories]);

  useEffect(() => {
    const storedVictories = loadFromLocalStorage('victories');
    if (storedVictories !== null) {
      setVictories(storedVictories);
    }
  }, []);


return (
  <div className='players'>
    <div>
      <h3>{showsPlayerName} your number: {currentNum}</h3>
    </div>
  

    
      <div className='ContainerButton' >
        <div className='Button' onClick={() => { if (currentPlayer && !GameOver)
           { setScore(Score + 1); goToNextTurn(); } }}>

          <CalculatorButton calculation={"+1"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum + 1))) }} />
          <CalculatorButton calculation={"-1"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum - 1))) }} />
          <CalculatorButton calculation={"*2"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum * 2))) }} />
          <CalculatorButton calculation={"/2"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum / 2))) }} />
        
        
          {currentPlayer && <CalculatorButton calculation={"Exit"} myOnclick={exit} />}
      </div></div>
      <p>the number of steps:{Score}</p>

      {win(currentNum)}
     
      <p>{showsPlayerName} Your victories are: {victories}</p>

      
    </div>
  )
}
export default Players;