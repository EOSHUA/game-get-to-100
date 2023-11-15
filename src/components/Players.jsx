import React from 'react';
import './style.css';
import CalculatorButton from './CalculatorButtons';
import { useState } from 'react';


function Players({ currentPlayer, isMyTurn }) {

  const randNum = Math.floor(Math.random() * 100);
  const [currentNum, setCurrentNum] = useState(randNum);
  const [Score, setScore] = useState(0);
  const [GameOver, setGameOver] = useState(false);


  const win = (currentNum) => {

    if (!GameOver && currentNum === 100) {
      setGameOver(true);
      alert("You Won!");
      generateNewNumber();
      return true;
    }

    return false;
  };

  const generateNewNumber = () => {
    setCurrentNum(randNum);
    setGameOver(false);
  };


  return (


    <div className='players'>
      <div>
        <h3>your number:{currentNum}</h3>
      </div>
      <div className='ContainerButton' >
        <div className='Button' onClick={() => { if (currentPlayer && !GameOver) { setScore(Score + 1); isMyTurn(); } }}>

          <CalculatorButton calculation={"+1"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum + 1))) }} />
          <CalculatorButton calculation={"-1"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum - 1))) }} />
          <CalculatorButton calculation={"/2"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum / 2))) }} />
          <CalculatorButton calculation={"*2"} calculationFunc={() => { if (currentPlayer && !GameOver) (setCurrentNum(Math.floor(currentNum * 2))) }} />
        </div>
      </div>
      <p>the number of steps:{Score}</p>

      {win(currentNum)}
    </div>
  )
}
export default Players;